"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { retreat } from "@/lib/content";

type NavItem = {
  href: string;
  label: string;
  disabled?: boolean;
};

const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/agenda", label: "Program", disabled: true },
  { href: "/speakers", label: "Speakers" },
  { href: "/logistics", label: "Communication" },
  { href: "/sse-youth", label: "SSE" },
  { href: "/faq", label: "Contacts" },
  { href: "/registration", label: "Register" },
];

const pillClasses =
  "rounded-full border border-rose/60 bg-rose/70 font-bold text-navy hover:border-saffron/50 hover:bg-rose hover:text-saffron";

const disabledPillClasses =
  "rounded-full border border-navy/15 bg-navy/5 font-bold text-navy/40 cursor-not-allowed";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/60 bg-sand/90 backdrop-blur-xl">
      <div className="page-shell py-3 lg:py-4">
        <div className="flex items-center justify-between gap-3">
          <Link
            href="/"
            className="inline-flex items-center"
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

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-rose/60 bg-rose/70 text-2xl font-bold text-navy active:scale-95 lg:hidden"
          >
            {open ? "✕" : "☰"}
          </button>

          <nav className="hidden flex-wrap gap-2 lg:flex">
            {navItems.map((item) =>
              item.disabled ? (
                <span
                  key={item.href}
                  aria-disabled="true"
                  title="Coming soon — program is being finalized"
                  className={`${disabledPillClasses} px-7 py-3.5 text-xl`}
                >
                  {item.label}
                  <span aria-hidden="true" className="ml-2 text-base">🔒</span>
                </span>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${pillClasses} px-7 py-3.5 text-xl`}
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
                  className={`${disabledPillClasses} block px-5 py-3 text-center text-lg`}
                >
                  {item.label}
                  <span aria-hidden="true" className="ml-2 text-base">🔒</span>
                </span>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`${pillClasses} block px-5 py-3 text-center text-lg`}
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
