"use client";

import Atmosphere from "./Atmosphere";
import Fog from "./Fog";
import Lighting from "./Lighting";
import GridOverlay from "./GridOverlay";
import Particles from "./Particles";

export default function World() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">

      <Atmosphere />

      <Lighting />

      <Fog />

      <Particles />

      <GridOverlay />

    </div>
  );
}