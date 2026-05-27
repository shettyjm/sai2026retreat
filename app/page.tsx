import Image from "next/image";
import Link from "next/link";

import {
  agenda,
  retreat,
} from "@/lib/content";

function ThemeWordmark() {
  return (
    <div className="mt-8 space-y-4">
      <p className="text-sm font-bold uppercase tracking-[0.24em] text-sunset sm:text-base">
        Theme:
      </p>
      <div className="space-y-2">
        <div className="text-[1.2rem] font-semibold tracking-tight text-white sm:text-[1.4rem] lg:text-[1.9rem]">
          Be The
        </div>
        <div className="text-[1.4rem] font-semibold tracking-tight sm:text-[1.9rem] lg:whitespace-nowrap lg:text-[2.2rem] xl:text-[2.5rem]">
          <span className="text-saffron">S</span>
          <span className="text-white">piritual </span>
          <span className="text-saffron">A</span>
          <span className="text-white">thlete </span>
          <span className="text-saffron">I</span>
          <span className="text-white">nside</span>
        </div>
      </div>
      <p className="pt-3 text-sm font-semibold tracking-wide text-white/85 sm:text-base">
        August 21 to 23, 2026
      </p>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="pb-10">
      <section className="page-shell pb-4 pt-6 lg:pb-6 lg:pt-10">
        <div className="relative grid items-stretch gap-6 lg:grid-cols-[0.8fr,1.5fr,0.8fr] lg:gap-0">
          <div className="card overflow-hidden lg:h-[560px] lg:rounded-r-none">
            <div className="relative h-full w-full aspect-[4/5] lg:aspect-auto">
              <Image
                src="/swamihome.jpeg"
                alt="Sathya Sai Baba"
                fill
                priority
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover"
                style={{ objectPosition: "center 5%" }}
              />
            </div>
          </div>

          <div className="card relative overflow-hidden bg-gradient-to-br from-navy via-[#1f3a5f] to-[#274a72] p-7 text-white sm:p-9 lg:z-10 lg:-mx-9 lg:h-[560px] lg:rounded-[2.25rem] lg:p-10 lg:shadow-2xl lg:ring-1 lg:ring-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-saffron/10 via-transparent to-transparent" />
            <div className="relative flex h-full flex-col items-center justify-center text-center">
              <h1 className="text-balance text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-[2.4rem] xl:text-[2.75rem]">
                43rd Annual Regional Retreat
              </h1>
              <ThemeWordmark />
            </div>
          </div>

          <div className="card overflow-hidden lg:h-[560px] lg:rounded-l-none">
            <div className="relative h-full w-full aspect-[4/5] lg:aspect-auto">
              <Image
                src="/sitepic.jpeg"
                alt="Monte Toyon Camp & Conference Center"
                fill
                priority
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell py-4">
        <div className="card relative overflow-hidden p-8 sm:p-10 lg:p-12">
          <div className="absolute inset-0 bg-halo opacity-80" />
          <div className="relative">
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Retreat Details
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.5rem] border border-leaf/25 bg-gradient-to-br from-sand via-[#f3ead0] to-leaf/15 p-5 shadow-glow ring-1 ring-leaf/15">
                <p className="text-[0.96rem] uppercase tracking-[0.2em] text-saffron">Date:</p>
                <p className="mt-3 text-[1.375rem] font-semibold leading-8">{retreat.dates}</p>
              </div>
              <div className="rounded-[1.5rem] border border-leaf/25 bg-gradient-to-br from-sand via-[#f3ead0] to-leaf/15 p-5 shadow-glow ring-1 ring-leaf/15">
                <p className="text-[0.96rem] uppercase tracking-[0.2em] text-saffron">Time:</p>
                <p className="mt-3 text-[1.375rem] font-semibold leading-8">{retreat.timeWindow}</p>
              </div>
              <div className="rounded-[1.5rem] border border-leaf/25 bg-gradient-to-br from-sand via-[#f3ead0] to-leaf/15 p-5 shadow-glow ring-1 ring-leaf/15">
                <p className="text-[0.96rem] uppercase tracking-[0.2em] text-saffron">Venue:</p>
                <p className="mt-3 text-[1.375rem] font-semibold leading-8">{retreat.venue}</p>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section className="page-shell py-4">
        <section className="card p-8 sm:p-10">
          <p className="pill">Theme</p>
          <h2 className="section-title mt-5">{retreat.theme}</h2>
          <div className="mt-5 max-w-3xl space-y-5 text-lg leading-relaxed text-navy/85 sm:text-[1.15rem] sm:leading-[1.85]">
            <p>
              <span className="font-semibold text-navy">Spiritual Athlete Inside (SAI)</span>{" "}
              is someone who uses every role, every action, and every moment of life as a
              disciplined practice to realize their inner divinity and live in a state of
              peace and bliss.
            </p>
            <p>
              A spiritual athlete uses every moment of life to act with excellence, live
              with values, and realize their inner divinity.
            </p>
            <p>
              To be a spiritual athlete is to turn life into a sacred training ground—where
              every action refines you, every challenge strengthens you, and every moment
              brings you closer to your true self.
            </p>
          </div>
        </section>
      </section>

      <section className="page-shell py-4">
        <div className="card p-8 sm:p-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="pill">Weekend Walkthrough</p>
              <h2 className="section-title mt-5">A day-by-day timeline at a glance</h2>
            </div>
            <Link href="/agenda" className="text-lg font-semibold text-saffron hover:text-navy">
              Open the full program
            </Link>
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {agenda.map((day) => (
              <article key={day.id} className="rounded-[2rem] border border-navy/10 bg-white p-6">
                <p className="text-sm uppercase tracking-[0.22em] text-saffron">{day.label}</p>
                <h3 className="mt-3 text-3xl font-semibold">{day.date}</h3>
                <div className="mt-5 space-y-3">
                  {(day.highlights ?? day.items.slice(0, 4)).map((item) => (
                    <div key={`${day.id}-${item.title}`} className="flex items-center gap-3 rounded-2xl bg-sand p-4">
                      <span aria-hidden="true" className="text-3xl shrink-0">
                        {item.icon}
                      </span>
                      <p className="min-w-0 text-xl font-semibold leading-7">{item.title}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell py-4">
        <section className="card p-8 sm:p-10">
          <p className="pill">Location</p>
          <h2 className="section-title mt-5">{retreat.venue}</h2>
          <p className="mt-5 text-xl leading-8 text-navy/80">{retreat.address}</p>
          <p className="mt-5 text-lg leading-8 text-navy/75">
            A redwood retreat setting in Aptos, offering a peaceful atmosphere for prayer,
            reflection, and shared fellowship across the weekend.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={retreat.venueUrl}
              className="rounded-full bg-navy px-6 py-3 text-base font-semibold text-white hover:bg-saffron"
            >
              View venue
            </Link>
            <Link
              href={retreat.mapUrl}
              className="rounded-full border border-navy/15 bg-white px-6 py-3 text-base font-semibold text-navy hover:border-saffron/40 hover:text-saffron"
            >
              Open map
            </Link>
          </div>
        </section>
      </section>

    </main>
  );
}
