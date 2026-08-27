"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Fixed full-screen WebGL layer: slow flowing aurora ribbons behind the whole
 * page. Reacts to pointer and scroll, pauses when the tab is hidden, and is
 * skipped entirely when the user prefers reduced motion.
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

  uniform float uTime;
  uniform vec2  uResolution;
  uniform vec2  uMouse;
  uniform float uScroll;
  uniform float uFade;

  varying vec2 vUv;

  vec2 hash2(vec2 p) {
    p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
    return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
  }

  // 2D simplex-style gradient noise
  float noise(vec2 p) {
    const float K1 = 0.366025404;
    const float K2 = 0.211324865;

    vec2 i = floor(p + (p.x + p.y) * K1);
    vec2 a = p - i + (i.x + i.y) * K2;
    float m = step(a.y, a.x);
    vec2 o = vec2(m, 1.0 - m);
    vec2 b = a - o + K2;
    vec2 c = a - 1.0 + 2.0 * K2;

    vec3 h = max(0.5 - vec3(dot(a, a), dot(b, b), dot(c, c)), 0.0);
    vec3 n = h * h * h * h * vec3(
      dot(a, hash2(i)),
      dot(b, hash2(i + o)),
      dot(c, hash2(i + 1.0))
    );
    return dot(n, vec3(70.0));
  }

  float fbm(vec2 p) {
    float value = 0.0;
    float amp = 0.5;
    mat2 rot = mat2(0.80, 0.60, -0.60, 0.80);
    for (int i = 0; i < 4; i++) {
      value += amp * noise(p);
      p = rot * p * 2.02;
      amp *= 0.5;
    }
    return value;
  }

  void main() {
    // Aspect-correct centred coordinates
    vec2 p = (gl_FragCoord.xy * 2.0 - uResolution) / min(uResolution.x, uResolution.y);

    float t = uTime * 0.028;
    vec2 q = p * 0.52
           + vec2(uMouse.x * 0.10, -uMouse.y * 0.10)
           + vec2(0.0, uScroll * 0.30);

    float f1 = fbm(q + vec2(t, t * 0.42));
    float f2 = fbm(q * 1.35 + f1 * 0.65 + vec2(-t * 0.5, t * 0.22));
    float bands = f1 * 0.6 + f2 * 0.4;

    // A wide smoothstep keeps the ribbons soft instead of marbled
    float aurora = smoothstep(-0.28, 0.52, bands);
    float glow = pow(aurora, 1.9);

    vec3 deep   = vec3(0.031, 0.180, 0.078);
    vec3 mid    = vec3(0.075, 0.400, 0.180);
    vec3 bright = vec3(0.000, 0.720, 0.220);

    vec3 col = mix(deep, mid, smoothstep(-0.4, 0.6, f2));
    col = mix(col, bright, smoothstep(0.55, 1.0, aurora) * 0.6);

    // Push the light towards the edges so headlines sit on quiet ground
    float vignette = smoothstep(2.05, 0.30, length(p * vec2(0.72, 1.0)));
    float calm = 0.45 + 0.55 * smoothstep(0.10, 1.0, abs(p.x));

    float alpha = glow * 0.26 * vignette * calm * uFade;

    gl_FragColor = vec4(col * glow * 1.2, alpha);
  }
`;

export default function AuroraBackground() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: false,
        powerPreference: "low-power",
      });
    } catch {
      return; // No WebGL — the CSS gradient fallback stays visible.
    }

    renderer.setClearAlpha(0);
    host.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.Camera();

    const uniforms = {
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(1, 1) },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uScroll: { value: 0 },
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

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      renderer.setPixelRatio(dpr);
      renderer.setSize(w, h, false);
      uniforms.uResolution.value.set(w * dpr, h * dpr);
    };
    resize();

    // Pointer parallax, eased towards the target each frame.
    const target = { x: 0, y: 0 };
    const onPointer = (e: PointerEvent) => {
      target.x = (e.clientX / window.innerWidth) * 2 - 1;
      target.y = (e.clientY / window.innerHeight) * 2 - 1;
    };

    let scrollNorm = 0;
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      scrollNorm = max > 0 ? window.scrollY / max : 0;
    };
    onScroll();

    let raf = 0;
    let running = true;
    const clock = new THREE.Clock();

    const tick = () => {
      raf = requestAnimationFrame(tick);
      if (!running) return;
      if (document.documentElement.classList.contains("no-webgl")) return;

      uniforms.uTime.value += clock.getDelta();
      uniforms.uMouse.value.x += (target.x - uniforms.uMouse.value.x) * 0.04;
      uniforms.uMouse.value.y += (target.y - uniforms.uMouse.value.y) * 0.04;
      uniforms.uScroll.value += (scrollNorm - uniforms.uScroll.value) * 0.06;
      uniforms.uFade.value = Math.min(uniforms.uFade.value + 0.012, 1);

      renderer.render(scene, camera);
    };
    tick();

    const onVisibility = () => {
      running = !document.hidden;
      if (running) clock.getDelta(); // drop the elapsed background time
    };

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointer, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onVisibility);
      mesh.geometry.dispose();
      (mesh.material as THREE.ShaderMaterial).dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div
      ref={hostRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 [&>canvas]:h-full [&>canvas]:w-full"
    />
  );
}
