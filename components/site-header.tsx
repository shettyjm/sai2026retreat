import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/agenda", label: "Agenda" },
  { href: "/speakers", label: "Speakers" },
  { href: "/logistics", label: "Logistics" },
  { href: "/sse-youth", label: "SSE / Youth" },
  { href: "/faq", label: "FAQ" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/60 bg-sand/90 backdrop-blur-xl">
      <div className="page-shell flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <Link href="/" className="text-lg font-semibold tracking-tight text-navy sm:text-xl">
            Region 7 Sai Retreat
          </Link>
          <p className="text-sm text-navy/65">First draft website concept</p>
        </div>
        <nav className="flex flex-wrap gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full border border-navy/10 bg-white/75 px-4 py-2 text-sm font-medium text-navy hover:border-saffron/40 hover:text-saffron"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
