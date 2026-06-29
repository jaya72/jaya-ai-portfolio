"use client";

export default function Atmosphere() {
  return (
    <>
      {/* Main Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#05070d] via-[#0b1220] to-black" />

      {/* Cyan Energy */}
      <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

      {/* Warm Light */}
      <div className="absolute bottom-0 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-amber-400/5 blur-[160px]" />
    </>
  );
}