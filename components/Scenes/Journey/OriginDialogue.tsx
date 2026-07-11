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
      className="absolute left-[26%] top-[18%] z-40"
    >
      <div className="w-[430px] rounded-3xl bg-transparent p-8">

        {/* Divider */}
        <div className="my-5 h-px bg-[#F4E8C1]/30" />

        {/* Content */}
        <div className="px-8 py-2">
          <div className="space-y-4 text-[17px] leading-8 font-semibold text-[#F4E8C1] drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)]">

            <p>📍 Born & Brought Up in India</p>

            <p>
              📚 Completed my schooling in <strong>2013</strong>
            </p>

            <p>
              🎓 Graduated from Mumbai University in{" "}
              <strong>2018</strong>
            </p>

            <p className="font-semibold text-[#E8D7A7]">
              Those early experiences sparked my curiosity
              for technology, Database and Machine Learning Concepts
            </p>

          </div>
        </div>

      </div>
    </motion.div>
  );
}