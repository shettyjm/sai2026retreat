"use client";

import { motion, useReducedMotion } from "motion/react";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const flyIn = {
  hidden: { opacity: 0, x: -260, rotate: -10, scale: 0.85 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    scale: 1,
    transition: { duration: 1.0, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const letterContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.4 },
  },
};

const letter = {
  hidden: { opacity: 0, y: 18, scale: 0.85 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function HeroHeadline() {
  const reduce = useReducedMotion();
  const initial = reduce ? "visible" : "hidden";

  return (
    <motion.div
      className="relative flex h-full flex-col items-center justify-center text-center"
      variants={container}
      initial={initial}
      animate="visible"
    >
      <motion.p
        variants={flyIn}
        className="mb-2 text-base font-black uppercase tracking-[0.32em] text-[#F97316] sm:text-lg"
      >
        Region 7
      </motion.p>

      <motion.h1
        variants={item}
        className="text-balance text-[2.25rem] font-black leading-tight tracking-tight sm:text-[2.7rem] lg:text-[2.88rem] xl:text-[3.3rem]"
      >
        43rd Annual Regional Retreat
      </motion.h1>

      <motion.div variants={item} className="mt-8 space-y-4">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-bark sm:text-base">
          Theme:
        </p>
        <div className="space-y-2">
          <div className="text-[1.2rem] font-semibold tracking-tight text-navy sm:text-[1.4rem] lg:text-[1.9rem]">
            Be The
          </div>
          <motion.div
            variants={letterContainer}
            initial={initial}
            animate="visible"
            className="text-[1.4rem] font-semibold tracking-tight sm:text-[1.9rem] lg:whitespace-nowrap lg:text-[2.2rem] xl:text-[2.5rem]"
          >
            <motion.span variants={letter} className="inline-block text-[#F97316]">
              S
            </motion.span>
            <motion.span variants={letter} className="inline-block text-navy">
              piritual&nbsp;
            </motion.span>
            <motion.span variants={letter} className="inline-block text-[#F97316]">
              A
            </motion.span>
            <motion.span variants={letter} className="inline-block text-navy">
              thlete&nbsp;
            </motion.span>
            <motion.span variants={letter} className="inline-block text-[#F97316]">
              I
            </motion.span>
            <motion.span variants={letter} className="inline-block text-navy">
              nside
            </motion.span>
          </motion.div>
        </div>
        <p className="pt-3 text-sm font-semibold tracking-wide text-navy/75 sm:text-base">
          August 21 to 23, 2026
        </p>
      </motion.div>
    </motion.div>
  );
}

export function HeroBackdrop() {
  const reduce = useReducedMotion();
  if (reduce) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-saffron/25 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 30, 0], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-sunset/20 blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, -40, 0], opacity: [0.4, 0.75, 0.4] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />
    </>
  );
}
