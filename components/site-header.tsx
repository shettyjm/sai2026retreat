"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

import { retreat } from "@/lib/content";

const orgFlyIn = {
  hidden: { opacity: 0, x: -180, rotate: -8, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    scale: 1,
    transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1] as const },
  },
};

type NavItem = {
  href: string;
  label: string;
  disabled?: boolean;
};

const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/agenda", label: "Program" },
  { href: "/speakers", label: "Speakers" },
  { href: "/logistics", label: "Communication", disabled: true },
  { href: "/sse-youth", label: "SSE" },
  { href: "/faq", label: "Contacts" },
  { href: "/registration", label: "Registration" },
];

const pillClasses =
  "rounded-full border border-saffron/30 bg-gradient-to-r from-rose to-sky font-bold text-[#F97316] shadow-sm transition hover:border-[#F97316] hover:from-saffron hover:to-sunset hover:text-[#F97316] hover:shadow-md";

const disabledPillClasses =
  "rounded-full border border-navy/15 bg-navy/5 font-bold text-navy/40 cursor-not-allowed";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  return (
    <header className="sticky top-0 z-40 border-b border-white/60 bg-sand/90 backdrop-blur-xl">
      <div className="page-shell py-3 lg:py-4">
        <div className="flex items-center justify-between gap-3">
          <Link
            href="/"
            className="inline-flex shrink-0 items-center"
            aria-label="Region 7 Sai Retreat — Home"
          >
            <Image
              src="/ssio-logo.png"
              alt="Sathya Sai International Organization"
              width={300}
              height={302}
              priority
              className="h-12 w-auto sm:h-16 lg:h-20"
            />
          </Link>

          <motion.div
            variants={orgFlyIn}
            initial={reduce ? "visible" : "hidden"}
            animate="visible"
            className="mx-auto hidden shrink text-center text-[#F97316] lg:block"
          >
            <span className="block whitespace-nowrap text-[0.5rem] font-black uppercase leading-[1.2] tracking-[0.04em] xl:text-[0.62rem]">
              Sri Sathya Sai International Organization,
            </span>
            <span className="block whitespace-nowrap text-[0.5rem] font-black uppercase leading-[1.2] tracking-[0.04em] xl:text-[0.62rem]">
              USA, Region 7
            </span>
          </motion.div>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-[#F97316]/40 bg-gradient-to-br from-rose to-sky text-2xl font-bold text-[#F97316] shadow-sm transition hover:from-saffron hover:to-sunset active:scale-95 lg:hidden"
          >
            {open ? "✕" : "☰"}
          </button>

          <nav className="hidden flex-nowrap gap-1.5 lg:flex">
            {navItems.map((item) =>
              item.disabled ? (
                <span
                  key={item.href}
                  aria-disabled="true"
                  title="Coming soon — program is being finalized"
                  className={`${disabledPillClasses} whitespace-nowrap px-4 py-2.5 text-[1.24rem]`}
                >
                  {item.label}
                  <span aria-hidden="true" className="ml-1.5 text-sm">🔒</span>
                </span>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${pillClasses} whitespace-nowrap px-4 py-2.5 text-[1.24rem]`}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>
        </div>

        {open && (
          <nav className="mt-3 flex flex-col gap-2 lg:hidden">
            {navItems.map((item) =>
              item.disabled ? (
                <span
                  key={item.href}
                  aria-disabled="true"
                  className={`${disabledPillClasses} block px-5 py-3 text-center text-[1.24rem]`}
                >
                  {item.label}
                  <span aria-hidden="true" className="ml-2 text-base">🔒</span>
                </span>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`${pillClasses} block px-5 py-3 text-center text-[1.24rem]`}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>
        )}
      </div>

      <Link
        href={retreat.mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block border-t border-navy/10 bg-rose/40 hover:bg-rose/60"
        aria-label={`Open map for ${retreat.venue}, ${retreat.address}`}
      >
        <div className="page-shell flex flex-wrap items-center justify-center gap-x-3 gap-y-1 py-2 text-sm font-bold text-navy sm:text-base lg:py-2.5 lg:text-lg">
          <span aria-hidden="true">📍</span>
          <span>{retreat.venue}</span>
          <span className="text-navy/40" aria-hidden="true">·</span>
          <span className="font-semibold">{retreat.address}</span>
        </div>
      </Link>
    </header>
  );
}
