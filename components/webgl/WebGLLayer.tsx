"use client";

import dynamic from "next/dynamic";

/** Loads the aurora canvas on the client only, after hydration. */
const AuroraBackground = dynamic(() => import("./AuroraBackground"), {
  ssr: false,
});

export default function WebGLLayer() {
  return <AuroraBackground />;
}
