"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type RegisterCtaProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function RegisterCta({ href, children, className }: RegisterCtaProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="relative inline-flex"
      whileHover={reduce ? undefined : { scale: 1.04 }}
      whileTap={reduce ? undefined : { scale: 0.97 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
    >
      {!reduce && (
        <motion.span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-sunset/70 blur-md"
          animate={{ opacity: [0.35, 0.85, 0.35], scale: [1, 1.08, 1] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={
          className ??
          "relative rounded-full bg-sunset px-8 py-4 text-lg font-semibold text-navy shadow-lg hover:bg-white"
        }
      >
        {children}
      </Link>
    </motion.div>
  );
}
