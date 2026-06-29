"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ExperienceIntro() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="relative flex flex-col items-center"
    >
      {/* Wooden Sign */}
      <Image
        src="/world/forest/wood-sign.png"
        alt="Wood Sign"
        width={420}
        height={220}
      />

      {/* Text on Sign */}
      <div className="absolute top-10 text-center"> 
        <br></br>
        <p className="text-sm tracking-[0.3em] uppercase text-yellow-200">
          CHAPTER I
        </p>
<br></br>
        <h2 className="mt-3 text-4xl font-bold text-white">
        Forest of <br></br>
          Experience
        </h2>
      </div>

      <p className="mt-10 max-w-xl text-center text-xl text-gray-300">
        Every journey begins with a single step.
      </p>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="mt-12 text-4xl"
      >
        ↓
      </motion.div>
    </motion.div>
  );
}