"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Explorer() {
  return (
    <motion.div
      className="absolute z-40"

      initial={{
        left: "47%",
        top: "92%",
      }}

      animate={{
        left: [
          "47%",
          "49%",
          "52%",
          "56%",
          "60%",
          "64%"
        ],

        top: [
          "92%",
          "84%",
          "75%",
          "66%",
          "58%",
          "50%"
        ]
      }}

      transition={{
        duration: 7,
        ease: "easeInOut",
      }}
    >
      {/* Shadow */}
      <motion.div
        animate={{
          scale: [1, 0.9, 1],
          opacity: [0.45, 0.3, 0.45],
        }}
        transition={{
          repeat: Infinity,
          duration: 0.35,
        }}
        className="absolute left-1/2 top-[44px] -translate-x-1/2"
      >
        <Image
          src="/world/journey/shadow.png"
          alt=""
          width={40}
          height={14}
        />
      </motion.div>

      {/* Walking */}
      <motion.div
        animate={{
          y: [0, -2, 0],
          rotate: [-2, 2, -2],
        }}
        transition={{
          repeat: Infinity,
          duration: 0.35,
        }}
      >
        <Image
          src="/world/journey/avatar-back.png"
          alt="Explorer"
          width={94}
          height={94}
          priority
          draggable={false}
        />
      </motion.div>
    </motion.div>
  );
}