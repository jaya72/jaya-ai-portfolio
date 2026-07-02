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
        src="/world/journey/scene3-background.png"
        alt="Journey"
        fill
        priority
        className="object-cover"
      />

      {/* Explorer */}
      <Explorer />

      {/* ================= SIGNPOST ================= */}
      <div className="absolute right-[12%] top-[30%] z-30">
        {/* Chapter Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0,
          }}
          className="absolute -top-16 left-1/2 -translate-x-1/2 text-center whitespace-nowrap"
        >
              <h3
            className="mt-10 text-2xl font-medium leading-tight text-white drop-shadow-lg"
            style={{
              textShadow: "2px 2px 10px rgba(0,0,0,.8)",
            }}
          >
            The First
            <br />
            Footsteps
          </h3>
        </motion.div>

        {/* Signpost */}
        <Image
          src="/world/journey/signpost.png"
          alt="Signpost"
          width={180}
          height={280}
          priority
        />
      </div>

      {/* Story Card */}
      <OriginDialogue />
    </section>
  );
}