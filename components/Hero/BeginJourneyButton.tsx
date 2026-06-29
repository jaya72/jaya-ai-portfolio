"use client";

import { motion } from "framer-motion";

export default function BeginJourneyButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-4 font-semibold text-black shadow-lg"
    >
      Begin Journey →
    </motion.button>
  );
}