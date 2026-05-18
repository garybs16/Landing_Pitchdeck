"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import LazyVideo from "@/components/LazyVideo";

export default function PhilosophySection() {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="vision" className="deck-section deck-divider bg-black px-6 py-24 md:py-28" ref={ref}>
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="mb-10 grid gap-4 md:mb-12 md:grid-cols-[1fr_0.32fr] md:items-end"
        >
          <div className="max-w-5xl text-3xl leading-tight tracking-tight text-white md:text-5xl">
            <span className="deck-kicker mb-5 block text-xs">
              03 / VISION
            </span>
            The missing layer between AI video and real production.
          </div>

          <p className="max-w-sm text-sm leading-relaxed text-white/58 md:justify-self-end md:text-right">
            AI video is the future, but today it often feels like “slop” because creators are stuck directing with prompts instead of scenes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="deck-frame deck-media relative w-full self-start overflow-hidden rounded-[1.9rem]"
          >
            <img
              src="/editor.png"
              alt="Editor showing dragon and castle"
              className="h-auto w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.8, delay: 0.28 }}
            className="grid gap-4"
          >
            <div className="deck-panel-matte deck-frame deck-tint-warm rounded-[1.75rem] p-6">
              <p className="mb-3 text-xs uppercase tracking-widest text-white/52">
                THE GAP
              </p>
              <p className="text-sm leading-relaxed text-white/70">
                This is not just a model problem. It is a modality problem. Prompts cannot capture the full creative intent behind motion, camera, lighting, timing, characters, and continuity.
              </p>
            </div>

            <div className="deck-panel-matte deck-frame deck-tint-cool rounded-[1.75rem] p-6">
              <p className="mb-3 text-xs uppercase tracking-widest text-white/52">
                OUR ROLE
              </p>
              <p className="text-sm leading-relaxed text-white/70">
                We create a controllable 3D scene that becomes the source of truth for the video. The creator directs the world, the agent helps build and animate it, and diffusion models turn it into polished output.
              </p>
            </div>

            <div className="deck-panel-soft deck-frame rounded-[1.75rem] p-6">
              <p className="mb-3 text-xs uppercase tracking-widest text-white/52">
                BOTTOM LINE
              </p>
              <p className="text-sm font-medium leading-relaxed text-white/94">
                Not replacing video production.<br />
                Giving diffusion models the structure they need to produce better video.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
