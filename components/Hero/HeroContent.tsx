"use client";

import { motion } from "framer-motion";
import BeginJourneyButton from "./BeginJourneyButton";

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-center"
    >
        <br></br>
      <p className="tracking-[0.6em] uppercase text-amber-400">
                AI JOURNEY
      </p>
<br></br>
      <h1 className="mt-6 text-5xl font-bold md:text-7xl">
        The Journey Begins
      </h1>
<br></br>
      <h2 className="mt-10 text-4xl font-semibold">
        Jaya Mishra
      </h2>
<br></br>
<br></br>
      <p className="mt-5 text-2xl text-cyan-400">
        Software Engineer → AI Engineer
      </p>

      <p className="mx-auto mt-6 max-w-xl text-lg text-gray-400">
        Building intelligent software with Artificial Intelligence,
        Machine Learning and Generative AI.
      </p>
<br>
</br>
      <div className="mt-12">
        <BeginJourneyButton />
      </div>
<br>
</br>
    </motion.div>
  );
}