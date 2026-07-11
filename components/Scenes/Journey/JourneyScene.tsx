"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Explorer from "./Explorer";
import OriginDialogue from "./OriginDialogue";

export default function JourneyScene() {
  return (
    <section
      id="journey"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background */}
      <Image
        src="/world/journey/scene2-cinematic-background.png"
        alt="Journey"
        fill
        priority
        className="object-cover object-[center_42%] scale-[1.03]"
      />

{/* Transition Gate → Journey Blend */}
<div
  className="
    absolute
    top-0
    left-0
    w-full
    h-[260px]
    bg-gradient-to-b
    from-[#173C32]
    via-[#245548]/60
    to-transparent
    z-10
    pointer-events-none
  "
/>

      {/* Explorer */}
      <Explorer />

      {/* ================= SIGNPOST ================= */}
      <div className="absolute right-[30%] top-[56%] z-30">
        {/* Chapter Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0,
          }}
         className="absolute -top-6 left-[85%] -translate-x-1/2 text-center whitespace-nowrap"
        >
              <p
            className="mt-10 text-2xl font-semibold leading-tight text-[#F4E8C1] drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)]"
            style={{
              textShadow: "2px 2px 10px rgba(0,0,0,.8)",
            }}
          >
            The First Footsteps
          </p>
        </motion.div>

        {/* Signpost */}
        <Image
          src="/world/journey/signpost.png"
          alt="Signpost"
          width={180}
          height={180}
          priority
        />
      </div>

      {/* Story Card */}
      <OriginDialogue />
    </section>
  );
}