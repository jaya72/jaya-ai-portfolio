"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ExperienceBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      {/* Main Forest Background */}
      <Image
        src="/world/forest/forest-background.png"
        alt="Forest"
        fill
        priority
        className="object-cover"
      />

      {/* Moving Fog */}
      <motion.div
        animate={{ x: [-60, 60, -60] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-0 left-0 w-[120%] z-20"
      >
        <Image
          src="/world/forest/fog.png"
          alt="Fog"
          width={2200}
          height={500}
          className="w-full opacity-55"
        />
      </motion.div>

      {/* Floating Fireflies */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 z-30"
      >
        <Image
          src="/world/forest/fireflies.png"
          alt="Fireflies"
          fill
          className="object-cover opacity-90"
        />
      </motion.div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-40 bg-black/20" />

    </div>
  );
}