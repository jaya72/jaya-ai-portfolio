"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import CharacterCard from "./CharacterCard";
import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-10 overflow-hidden">

      {/* Forest Silhouette */}
      <Image
        src="/world/transition/forest-silhouette.png"
        alt="Forest"
        fill
        priority
        className="
          absolute
          object-cover
          object-bottom
          opacity-35
          pointer-events-none
          z-0
        "
      />

      {/* Forest Atmosphere */}
      <div
        className="
          absolute
          bottom-0
          left-0
          h-[300px]
          w-full
          bg-gradient-to-b
          from-transparent
          via-[#10271F]/60
          to-[#071C18]
          pointer-events-none
          z-10
        "
      />

      {/* Firefly 1 */}
      <motion.div
        animate={{
          opacity: [0.3, 1, 0.3],
          y: [0, -18, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="absolute bottom-40 left-[18%] z-20"
      >
        <div className="h-2 w-2 rounded-full bg-yellow-300 blur-[2px]" />
      </motion.div>

      {/* Firefly 2 */}
      <motion.div
        animate={{
          opacity: [0.2, 1, 0.2],
          y: [0, -15, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
        className="absolute bottom-52 right-[22%] z-20"
      >
        <div className="h-2 w-2 rounded-full bg-yellow-300 blur-[2px]" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-30 flex flex-col items-center">

        {/* Title */}
        <h1 className="mb-16 text-center text-xl tracking-[0.6em] uppercase text-yellow-400">
          Welcome To My Portfolio
        </h1>

        {/* Photo + Info */}
        <div className="mx-auto flex w-full max-w-7xl items-center justify-center gap-24">
          <CharacterCard />
          <HeroContent />
        </div>

        {/* Scroll */}
        <div className="mt-16 flex flex-col items-center">
          <p className="mt-6 text-sm tracking-[0.4em] uppercase text-white/60">
            Scroll to Continue
          </p>

          <div className="mt-2 animate-bounce text-4xl text-white/60">
            ↓
          </div>
        </div>

      </div>

    </section>
  );
}