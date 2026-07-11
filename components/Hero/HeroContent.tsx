"use client";

import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="max-w-2xl"
    >
      {/* Name */}
      <h1 className="text-6xl font-bold leading-tight text-white">
        Jaya
        <br />
        Mishra
      </h1>

      {/* Role */}
      <p className="mt-4 text-xl uppercase tracking-[0.45em] text-cyan-300">
        AI Engineer
      </p>

      {/* Divider */}
      <div className="mt-8 h-[2px] w-28 rounded-full bg-cyan-400" />

      {/* Intro */}
      <p className="mt-8 text-xl leading-10 text-gray-300">
        Building intelligent systems that transform
        data into meaningful insights.
      </p>

      <p className="mt-6 text-lg leading-9 text-gray-400">
        Software Engineer with 5 years of experience,
        now crafting AI-powered solutions through
        Machine Learning, Data Analytics and Generative AI.<br></br>
      </p>
      

      {/* Buttons */}
      <div className="mt-12 flex gap-6">

        <a
          href="/resume.pdf"
          className="
            rounded-full
            bg-cyan-400
            px-8
            py-4
            font-semibold
            text-black
            transition
            hover:scale-105
          "
        >
          Download Resume
        </a>


      </div>

    </motion.div>
  );
}