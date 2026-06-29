"use client";

import { motion } from "framer-motion";

export default function Lighting() {
  return (
    <motion.div
      animate={{
        opacity: [0.3, 0.45, 0.3],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
      }}
      className="absolute inset-0"
    >
      <div className="absolute left-1/2 top-40 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[150px]" />
    </motion.div>
  );
}