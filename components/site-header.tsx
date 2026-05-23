import Link from "next/link";
import Image from "next/image";

import { retreat } from "@/lib/content";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/agenda", label: "Agenda" },
  { href: "/speakers", label: "Speakers" },
  { href: "/logistics", label: "Logistics" },
  { href: "/sse-youth", label: "SSE / Youth" },
  { href: "/faq", label: "FAQ" },
  { href: "/registration", label: "Register" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/60 bg-sand/90 backdrop-blur-xl">
      <div className="page-shell flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between">
        <Link href="/" className="inline-flex items-center" aria-label="Region 7 Sai Retreat — Home">
          <Image
            src="/ssio-logo.png"
            alt="Sathya Sai International Organization"
            width={300}
            height={302}
            priority
            className="h-16 w-auto sm:h-20"
          />
        </Link>
        <nav className="flex flex-wrap gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full border border-rose/60 bg-rose/70 px-7 py-3.5 text-xl font-bold text-navy hover:border-saffron/50 hover:bg-rose hover:text-saffron"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <Link
        href={retreat.mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block border-t border-navy/10 bg-rose/40 hover:bg-rose/60"
        aria-label={`Open map for ${retreat.venue}, ${retreat.address}`}
      >
        <div className="page-shell flex flex-wrap items-center justify-center gap-x-3 gap-y-1 py-2.5 text-base font-bold text-navy sm:text-lg">
          <span aria-hidden="true">📍</span>
          <span>{retreat.venue}</span>
          <span className="text-navy/40" aria-hidden="true">·</span>
          <span className="font-semibold">{retreat.address}</span>
        </div>
      </Link>
    </header>
  );
}
