"use client";

import ExperienceBackground from "./ExperienceBackground";
import ExperienceIntro from "./ExperienceIntro";

export default function ExperienceScene() {
  return (
    <section
      id="experience"
      className="relative h-screen overflow-hidden"
    >
      <ExperienceBackground />

      {/* Sign */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <ExperienceIntro />
      </div>

    </section>
  );
}