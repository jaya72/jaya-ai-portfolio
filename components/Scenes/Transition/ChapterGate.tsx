"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ChapterGate() {
  return (
<section className="relative h-[50vh] min-h-[440px] overflow-hidden bg-[#25452F]">

{/* Transition Background */}
<Image
  src="/world/transition/transition-background.png"
  alt="Forest gateway leading into the journey"
  fill
  priority
  className="object-cover object-center"
  sizes="100vw"
/>

{/* Subtle Forest Mist */}
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 0.22 }}
  viewport={{ once: true }}
  transition={{
    duration: 1.2,
  }}
  className="
    absolute
    inset-0
    bg-gradient-to-t
    from-white/10
    via-white/5
    to-transparent
    blur-[120px]
    z-0
  "
/>

      {/* Chapter Text */}
      {/* Gate Message */}
<motion.div
  initial={{
    opacity: 0,
    scale: 0.95,
    y: 25,
  }}
  whileInView={{
    opacity: 1,
    scale: 1,
    y: 0,
  }}
  viewport={{ once: true }}
  transition={{
    delay: 0.8,
    duration: 0.5,
  }}
  className="
    absolute
    inset-0
    z-10
    flex
    flex-col
    items-center
    justify-center
    text-center
  "
>
<p className="text-sm font-semibold uppercase tracking-[0.6em] text-[#F4E8C1] drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)]">
  Step Into My Story
</p>

<h1 className="mt-6 text-6xl font-bold text-[#F4E8C1] drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)]">
  The Journey Begins
</h1>

<p className="mt-8 text-xl font-semibold italic text-[#E8D7A7] drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)]">
  Step through to discover the path that shaped me.
</p>
</motion.div>



{/* Blend Into Journey Scene */}
<div
  className="
    absolute
    bottom-0
    left-0
    h-40
    w-full
    bg-gradient-to-b
    from-transparent
    via-[#173C32]/30
    to-[#173C32]
    pointer-events-none
    z-10
  "
/>

    </section>
  );
}