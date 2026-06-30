"use client";

import CharacterCard from "./CharacterCard";
import HeroContent from "./HeroContent";
import BeginJourneyButton from "./BeginJourneyButton";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-10">

      {/* Title */}
      <h1 className="mb-16 text-center text-xl tracking-[0.6em] uppercase text-yellow-400">
        THE JOURNEY BEGINS
      </h1>

      {/* Photo + Info */}
      <div className="mx-auto flex w-full max-w-7xl items-center justify-center gap-24">

        <CharacterCard />

        <HeroContent />

      </div>

      {/* Begin Journey */}
      <div className="mt-16 flex flex-col items-center">

        

        <p className="mt-6 text-sm tracking-[0.4em] text-gray-400 uppercase">
          Scroll to Continue
        </p>

        <div className="mt-2 animate-bounce text-4xl text-cyan-300">
          ↓
        </div>

      </div>

    </section>
  );
}