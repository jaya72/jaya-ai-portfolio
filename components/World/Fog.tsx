"use client";

import { motion } from "framer-motion";

export default function Fog() {
  return (
    <motion.div
      animate={{
        x: [-40, 40, -40],
      }}
      transition={{
        duration: 18,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="fixed inset-0 -z-40 pointer-events-none"
    >
      <div className="absolute top-40 left-0 h-72 w-full bg-white/5 blur-[120px]" />

      <div className="absolute bottom-20 right-0 h-72 w-full bg-white/5 blur-[150px]" />
    </motion.div>
  );
}