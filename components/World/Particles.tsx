"use client";

export default function Particles() {
  return (
    <div className="fixed inset-0 -z-30 pointer-events-none">

      <div className="absolute left-1/4 top-1/3 h-2 w-2 rounded-full bg-cyan-300 opacity-70" />

      <div className="absolute right-1/3 top-2/3 h-2 w-2 rounded-full bg-yellow-300 opacity-60" />

      <div className="absolute left-2/3 top-1/2 h-1 w-1 rounded-full bg-white opacity-70" />

    </div>
  );
}