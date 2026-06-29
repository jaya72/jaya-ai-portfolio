"use client";

import { motion } from "framer-motion";

const relics = [
  { name: "Python", top: "8%", left: "42%" },
  { name: "React", top: "35%", left: "0%" },
  { name: "SQL", top: "35%", right: "0%" },
  { name: "Azure", bottom: "20%", left: "10%" },
  { name: "OpenAI", bottom: "15%", right: "8%" },
  { name: "TensorFlow", bottom: "0%", left: "38%" },
];

export default function FloatingRelics() {
  return (
    <>
      {relics.map((relic, index) => (
        <motion.div
          key={relic.name}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3 + index,
            repeat: Infinity,
          }}
          className="absolute rounded-full border border-cyan-400/30 bg-black/50 px-4 py-2 text-sm backdrop-blur-md"
          style={relic}
        >
          💎 {relic.name}
        </motion.div>
      ))}
    </>
  );
}