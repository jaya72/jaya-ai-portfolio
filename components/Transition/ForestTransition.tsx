"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ForestTransition() {
  return (
    <section className="relative h-[45vh] overflow-hidden">

      {/* Dark sky blending from Hero */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050B13] via-[#0B1815] to-[#25452F]" />

      {/* Mist */}
      <motion.div
        animate={{
          x: [0, 40, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 14,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 h-44 w-full bg-white/10 blur-3xl"
      />

      {/* Forest */}
      <div className="absolute bottom-0 w-full h-52">
        <Image
          src="/world/transition/forest-silhouette.png"
          alt="Forest"
          fill
          className="object-cover object-bottom"
          priority
        />
      </div>

      {/* Journey text */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <p className="text-sm uppercase tracking-[0.55em] text-cyan-200">
          MY PROFESSIONAL GROWTH
        </p>
      </motion.div>

    </section>
  );
}