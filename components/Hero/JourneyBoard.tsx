"use client";

import { motion } from "framer-motion";
import BeginJourneyButton from "./BeginJourneyButton";

export default function JourneyBoard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="max-w-xl justify-self-start"
    >
      {/* Title */}

      <div>
        <p className="text-sm uppercase tracking-[0.5em] text-amber-400">
          AI JOURNEY
        </p>

        <h1 className="mt-4 text-5xl font-bold leading-tight lg:text-7xl">
          The Journey from
          <span className="block text-cyan-400">
            Software Engineer
          </span>
          to
          <span className="block text-white">
            AI Engineer
          </span>
        </h1>
      </div>

      {/* Journey Card */}

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

        <p className="text-xs uppercase tracking-[0.35em] text-amber-400">
          CURRENT STAGE
        </p>

        <h2 className="mt-3 text-3xl font-semibold">
          AI Explorer
        </h2>

        <p className="mt-6 max-w-xl text-xl text-gray-300">
  Software Engineer • Business Analytics • Future AI Engineer
</p>

      </div>

      <BeginJourneyButton />
    </motion.div>
  );
}