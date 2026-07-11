"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Explorer() {
  return (
    <motion.div
      className="absolute z-40"

      initial={{
        left: "66%",
        top: "22%",
      }}

      animate={{
        left: [
          "66%",
          "63%",
          "60%",
          "57%",
          "55%",
          "54%",
          "53%",
          "52%"
        ],
      
        top: [
          "22%",
          "30%",
          "38%",
          "46%",
          "53%",
          "58%",
          "61%",
          "64%"
        ]
      }}
      transition={{
        duration: 8.5,
        ease: "easeInOut",
      }}
    >
      {/* Shadow */}
      <motion.div
        animate={{
          scale: [1, 0.82, 1],
          opacity: [0.45, 0.22, 0.45],
        }}
        transition={{
          repeat: Infinity,
          duration: 0.4,
        }}
        className="absolute left-1/2 top-[44px] -translate-x-1/2"
      >
        <Image
          src="/world/journey/shadow.png"
          alt=""
          width={42}
          height={14}
        />
      </motion.div>

      {/* Walking Animation */}
      <motion.div
  animate={{
    y: [0, -5, 0, -5, 0],
    x: [0, 2, 0, -2, 0],
    rotate: [-2, 2, -2, 2, -2],
    scale: [1, 0.985, 1, 0.985, 1],
  }}
  transition={{
    repeat: Infinity,
    duration: 0.45,
    ease: "easeInOut",
  }}
>
        <Image
          src="/world/journey/avatar.png"
          alt="Explorer"
          width={125}
          height={125}
          priority
          draggable={false}
        />
      </motion.div>
    </motion.div>
  );
}