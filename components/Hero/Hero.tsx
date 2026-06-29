"use client";

import HeroContent from "./HeroContent";
import CharacterCard from "./CharacterCard";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6">

      {/* Hero */}
      <div className="relative z-10 flex flex-col items-center">

        <HeroContent />

        <div className="mt-14">
          <CharacterCard />
        </div>

      </div>

      <ScrollIndicator />

    </section>
  );
}