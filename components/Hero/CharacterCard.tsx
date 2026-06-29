"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CharacterCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="relative"
    >
      <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-[80px]" />

      <Image
        src="/images/jaya.jpeg"
        alt="Jaya Mishra"
        width={300}
        height={300}
        priority
        className="relative rounded-full border-4 border-cyan-400/20 object-cover shadow-2xl"
      />
    </motion.div>
  );
}