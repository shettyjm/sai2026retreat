import Link from "next/link";

import { agenda } from "@/lib/content";

export function AgendaNav() {
  return (
    <div className="card sticky top-24 p-5">
      <p className="pill mb-4">Program Access</p>
      <h2 className="text-2xl font-semibold">A day at a glance</h2>
      <p className="mt-2 text-base leading-7 text-navy/75">
        Keep the program easy to reach from every stage of the retreat.
      </p>
      <div className="mt-5 grid gap-3">
        {agenda.map((day) => (
          <Link
            key={day.id}
            href={`/agenda#${day.id}`}
            className="rounded-3xl border border-navy/10 bg-sky/55 px-4 py-4 text-left hover:border-saffron/35 hover:bg-white"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-saffron">
              {day.label}
            </p>
            <p className="mt-1 text-xl font-semibold text-navy">{day.date}</p>
            <p className="mt-2 text-sm leading-6 text-navy/70">{day.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
