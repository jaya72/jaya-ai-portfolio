"use client";

import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{
        repeat: Infinity,
        duration: 2,
      }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2"
    >
      <p className="text-xs tracking-[0.4em] text-gray-400">
        SCROLL
      </p>

      <div className="mt-2 text-center text-3xl">
        ↓
      </div>
    </motion.div>
  );
}