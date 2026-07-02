"use client";

import { motion } from "framer-motion";

export default function OriginDialogue() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -80,
        scale: 0.95,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        scale: 1,
      }}
      viewport={{ once: true }}
      transition={{
        delay: 2.8,
        duration: 0.8,
      }}
      className="absolute left-[30%] top-[28%] z-40"
    >
      <div
        className="
          w-[430px]
          rounded-3xl
          border
          border-cyan-400/20
          bg-black/35
          backdrop-blur-xl
          shadow-2xl
          p-8
        "
      >

        {/* Divider */}
        <div className="my-5 h-px bg-cyan-400/20" />

        {/* Content */}
        {/* Content */}
<div className="px-8 py-2">

<div className="space-y-4 text-[16px] leading-7 text-white-300">

  <p>
    📍 Born & Brought Up in India
  </p>

  <p>
    📚 Completed my schooling in <strong>2013</strong>.
  </p>

  <p>
    🎓 Graduated from Mumbai University in <strong>2018</strong>.
  </p>

  <p className="italic text-white-200">
    Those early experiences sparked my curiosity
    for technology and eventually led me toward
    Artificial Intelligence.
  </p>

</div>

</div>
      </div>
    </motion.div>
  );
}