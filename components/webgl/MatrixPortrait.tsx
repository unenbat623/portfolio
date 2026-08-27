"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

/**
 * Dot-matrix "green rain" treatment of a portrait. The image is sampled on a
 * cell grid, each cell drawn as a dot whose size follows luminance, with
 * falling highlights and occasional horizontal glitch slices on top.
 *
 * Swap `src` for your own photo (public/portrait.jpg). Bright areas of the
 * image become bright green, so a well-lit subject on a dark background works
 * best. If the image fails to load the effect still runs on pure rain.
 */

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  precision highp float;

  uniform sampler2D uTex;
  uniform float uHasTex;
  uniform float uTime;
  uniform vec2  uResolution;
  uniform vec2  uImageAspect; // contain-fit correction
  uniform vec2  uCenter;      // where in the image the subject sits (0..1)
  uniform float uZoom;        // >1 crops in towards uCenter
  uniform float uFade;

  varying vec2 vUv;

  float hash11(float p) {
    p = fract(p * 0.1031);
    p *= p + 33.33;
    return fract((p + p) * p);
  }

  float lumAt(vec2 uv) {
    vec3 c = texture2D(uTex, clamp(uv, 0.001, 0.999)).rgb;
    return dot(c, vec3(0.299, 0.587, 0.114));
  }

  float hash21(vec2 p) {
    vec3 p3 = fract(vec3(p.xyx) * 0.1031);
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.x + p3.y) * p3.z);
  }

  void main() {
    float cell = 7.0;
    vec2 grid = floor(gl_FragCoord.xy / cell);
    vec2 local = fract(gl_FragCoord.xy / cell);
    vec2 cellUv = (grid + 0.5) * cell / uResolution;

    // Horizontal glitch: a few bands slide sideways for a moment
    float bandId = floor(cellUv.y * 42.0);
    float bandNoise = hash11(bandId + floor(uTime * 1.6) * 13.0);
    float glitch = step(0.94, bandNoise) * (bandNoise - 0.94) * 4.0;
    vec2 sampleUv = cellUv + vec2(glitch * 0.16, 0.0);

    // Cover-fit the texture inside the element
    vec2 texUv = (sampleUv - 0.5) * uImageAspect / uZoom + uCenter;

    float subject = 0.0;
    if (uHasTex > 0.5 && texUv.x > 0.0 && texUv.x < 1.0 && texUv.y > 0.0 && texUv.y < 1.0) {
      // Sobel at cell scale: a flat bright background contributes nothing,
      // so the subject reads even when it is lit against a white wall.
      float e = cell / min(uResolution.x, uResolution.y) * 1.6;

      float l00 = lumAt(texUv + vec2(-e, -e));
      float l10 = lumAt(texUv + vec2(0.0, -e));
      float l20 = lumAt(texUv + vec2( e, -e));
      float l01 = lumAt(texUv + vec2(-e, 0.0));
      float l11 = lumAt(texUv);
      float l21 = lumAt(texUv + vec2( e, 0.0));
      float l02 = lumAt(texUv + vec2(-e,  e));
      float l12 = lumAt(texUv + vec2(0.0,  e));
      float l22 = lumAt(texUv + vec2( e,  e));

      float gx = (l20 + 2.0 * l21 + l22) - (l00 + 2.0 * l01 + l02);
      float gy = (l02 + 2.0 * l12 + l22) - (l00 + 2.0 * l10 + l20);
      float edge = clamp(length(vec2(gx, gy)) * 1.35, 0.0, 1.0);

      // Fill the darker mass of the subject; a blown-out background stays off.
      float mass = smoothstep(0.62, 0.12, l11);

      // Fade away from the subject so ceiling lines and wall edges drop out
      float focus = smoothstep(0.46, 0.10, length((texUv - uCenter) * vec2(1.2, 1.0)));
      subject = clamp(edge * 1.05 + mass * 0.55, 0.0, 1.0) * focus;
    }
    float lum = subject;

    // Falling highlight per column
    float col = grid.x;
    float speed = 0.35 + hash11(col) * 0.9;
    float offset = hash11(col + 7.7) * 20.0;
    float head = fract((uTime * speed + offset) * 0.12);
    float dist = fract(cellUv.y + head);
    float rain = pow(1.0 - dist, 22.0);

    // Cell flicker so the matrix keeps churning
    float flick = hash21(grid + floor(uTime * 7.0));

    float value = lum * (0.78 + 0.22 * flick) + rain * 0.34;
    value = clamp(value, 0.0, 1.4);

    // Dot per cell, radius driven by value
    float radius = clamp(value * 0.62, 0.0, 0.48);
    float dot = smoothstep(radius, radius - 0.14, length(local - 0.5));

    // Scanlines
    float scan = 0.82 + 0.18 * sin(gl_FragCoord.y * 1.6);

    vec3 deep   = vec3(0.024, 0.180, 0.075);
    vec3 mid    = vec3(0.086, 0.706, 0.302);
    vec3 bright = vec3(0.000, 1.000, 0.255);

    vec3 col3 = mix(deep, mid, smoothstep(0.05, 0.65, value));
    col3 = mix(col3, bright, smoothstep(0.62, 1.15, value));

    // Fade into the page: soft on the left, top and bottom
    float edgeL = smoothstep(0.02, 0.52, vUv.x);
    float edgeT = smoothstep(0.0, 0.14, vUv.y);
    float edgeB = smoothstep(0.0, 0.10, 1.0 - vUv.y);
    float mask = edgeL * edgeT * edgeB;

    float alpha = dot * scan * mask * uFade * clamp(value * 1.25, 0.0, 1.0);

    gl_FragColor = vec4(col3, alpha);
  }
`;

export default function MatrixPortrait({
  src = "/portrait.jpg",
  /** Where the subject sits in the image, 0..1 from bottom-left. */
  center = [0.47, 0.4] as [number, number],
  /** >1 crops in towards `center`. */
  zoom = 1.05,
}: {
  src?: string;
  center?: [number, number];
  zoom?: number;
}) {
  const hostRef = useRef<HTMLDivElement>(null);
  // The element is hidden below lg — don't spend a WebGL context on it there.
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setEnabled(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const host = hostRef.current;
    if (!host) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
    } catch {
      return;
    }

    renderer.setClearAlpha(0);
    host.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.Camera();

    const uniforms = {
      uTex: { value: null as THREE.Texture | null },
      uHasTex: { value: 0 },
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(1, 1) },
      uImageAspect: { value: new THREE.Vector2(1, 1) },
      // Framing controls — nudge these if you swap the photo.
      uCenter: { value: new THREE.Vector2(center[0], center[1]) },
      uZoom: { value: zoom },
      uFade: { value: 0 },
    };

    const mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(2, 2),
      new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms,
        transparent: true,
        depthTest: false,
        depthWrite: false,
      }),
    );
    scene.add(mesh);

    let imageAspect = 1;

    const fitTexture = () => {
      const { width, height } = host.getBoundingClientRect();
      if (!width || !height || !imageAspect) return;
      const boxAspect = width / height;
      // "contain" — the whole figure stays visible; the empty sides fade out
      if (boxAspect > imageAspect) {
        uniforms.uImageAspect.value.set(boxAspect / imageAspect, 1);
      } else {
        uniforms.uImageAspect.value.set(1, imageAspect / boxAspect);
      }
    };

    new THREE.TextureLoader().load(
      src,
      (texture) => {
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.wrapS = THREE.ClampToEdgeWrapping;
        texture.wrapT = THREE.ClampToEdgeWrapping;
        imageAspect = texture.image.width / texture.image.height;
        uniforms.uTex.value = texture;
        uniforms.uHasTex.value = 1;
        fitTexture();
      },
      undefined,
      () => {
        // No image — the rain alone still reads as a matrix panel.
      },
    );

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const { width, height } = host.getBoundingClientRect();
      if (!width || !height) return;
      renderer.setPixelRatio(dpr);
      renderer.setSize(width, height, false);
      uniforms.uResolution.value.set(width * dpr, height * dpr);
      fitTexture();
    };
    resize();

    let visible = true;
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting), {
      rootMargin: "120px",
    });
    io.observe(host);

    let raf = 0;
    const clock = new THREE.Clock();

    const tick = () => {
      raf = requestAnimationFrame(tick);
      const dt = clock.getDelta();
      if (!visible || document.hidden) return;
      if (document.documentElement.classList.contains("no-webgl")) return;

      uniforms.uTime.value += dt;
      uniforms.uFade.value = Math.min(uniforms.uFade.value + dt * 0.8, 1);
      renderer.render(scene, camera);
    };
    tick();

    const ro = new ResizeObserver(resize);
    ro.observe(host);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      uniforms.uTex.value?.dispose();
      mesh.geometry.dispose();
      (mesh.material as THREE.ShaderMaterial).dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [enabled, src, center, zoom]);

  return (
    <div
      ref={hostRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 [&>canvas]:h-full [&>canvas]:w-full"
    />
  );
}
