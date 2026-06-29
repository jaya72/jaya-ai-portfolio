"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
<div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-black to-slate-900" />

<div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/15 blur-[140px]" />

<div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-violet-500/15 blur-[140px]" />
<div className="relative z-10 max-w-7xl mx-auto px-8 w-full">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-blue-500 mb-4">
              Software Engineer • Data Analyst • AI-Powered Software Developer
            </p>

            <h1 className="text-6xl md:text-7xl font-bold leading-tight">
              Hi, I'm
              <span className="block bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 bg-clip-text text-transparent">
    Jaya Mishra
</span>
            </h1>

            <p className="mt-6 text-xl text-gray-400 max-w-xl">
            Software Engineer with 5+ years of industry experience, transitioning into AI Engineering to build intelligent applications powered by Machine Learning, Generative AI, and modern cloud technologies.
            </p>
            <br/>

           {/* <div className="flex flex-wrap gap-3 mt-8">
  {["Next.js", "React", "SQL", "AWS", "Power BI", "AI"].map((skill) => (
    <span
      key={skill}
      className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm"
    >
      {skill}
    </span>
  ))}
</div>*/}

            <div className="mt-10 flex gap-4">
            <div className="mt-10 flex flex-wrap gap-4">

<a
  href="#projects"
  className="rounded-xl bg-cyan-500 px-7 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-cyan-400"
>
  View Projects
</a>

<a
  href="/resume.pdf"
  target="_blank"
  className="rounded-xl border border-white/20 bg-white/5 px-7 py-3 font-semibold backdrop-blur-md transition-all duration-300 hover:border-cyan-400 hover:bg-white/10"
>
  Download Resume
</a>

</div>

              <button className="border border-gray-600 px-6 py-3 rounded-lg">
                Resume
              </button>
            </div>
          </motion.div>

          <div className="flex justify-center">
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="relative"
            >
              <div className="w-80 h-80 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 blur-3xl opacity-30 absolute" />

              <div className="relative h-80 w-80">
              <Image
  src="/images/jaya.jpeg"
  alt="Jaya Mishra"
  fill
  sizes="(max-width: 768px) 280px, 320px"
  className="rounded-full object-cover"
  priority
/>
</div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}