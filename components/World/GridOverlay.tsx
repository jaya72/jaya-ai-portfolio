"use client";

export default function GridOverlay() {
  return (
    <div
      className="
      absolute
      inset-0
      opacity-[0.04]
      bg-[linear-gradient(rgba(255,255,255,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.15)_1px,transparent_1px)]
      bg-[size:80px_80px]
      "
    />
  );
}