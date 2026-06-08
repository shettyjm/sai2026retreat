import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { HeroBackdrop, HeroHeadline } from "@/components/motion/hero-headline";
import {
  agenda,
  retreat,
} from "@/lib/content";

export default function HomePage() {
  return (
    <main className="pb-10">
      <section className="page-shell pb-4 pt-6 lg:pb-6 lg:pt-10">
        <div className="relative grid items-stretch gap-6 lg:grid-cols-[0.8fr,1.5fr,0.8fr] lg:gap-0">
          <Reveal className="card overflow-hidden lg:h-[560px] lg:rounded-r-none" delay={0.05}>
            <div className="relative h-full w-full aspect-[4/5] lg:aspect-auto">
              <Image
                src="/swamihometab.jpg"
                alt="Sathya Sai Baba"
                fill
                priority
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover"
                style={{ objectPosition: "center 5%" }}
              />
            </div>
          </Reveal>

          <div className="card relative overflow-hidden bg-gradient-to-br from-[#e4f8db] via-[#d5edca] to-[#c0e2b0] p-7 text-navy sm:p-9 lg:z-10 lg:-mx-9 lg:h-[560px] lg:rounded-[2.25rem] lg:p-10 lg:shadow-2xl lg:ring-1 lg:ring-navy/10">
            <div className="absolute inset-0 bg-gradient-to-br from-saffron/15 via-transparent to-transparent" />
            <HeroBackdrop />
            <HeroHeadline />
          </div>

          <Reveal className="card overflow-hidden lg:h-[560px] lg:rounded-l-none" delay={0.05}>
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
          </Reveal>
        </div>
      </section>

      <Reveal as="section" className="page-shell py-4">
        <div className="card relative overflow-hidden p-8 sm:p-10 lg:p-12">
          <div className="absolute inset-0 bg-halo opacity-80" />
          <div className="relative">
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Retreat Details
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.5rem] border border-leaf/25 bg-gradient-to-br from-sand via-[#ddf6d2] to-leaf/15 p-5 shadow-glow ring-1 ring-leaf/15">
                <p className="text-[0.96rem] uppercase tracking-[0.2em] text-saffron">Date:</p>
                <p className="mt-3 text-[1.375rem] font-semibold leading-8">{retreat.dates}</p>
              </div>
              <div className="rounded-[1.5rem] border border-leaf/25 bg-gradient-to-br from-sand via-[#ddf6d2] to-leaf/15 p-5 shadow-glow ring-1 ring-leaf/15">
                <p className="text-[0.96rem] uppercase tracking-[0.2em] text-saffron">Time:</p>
                <p className="mt-3 text-[1.375rem] font-semibold leading-8">{retreat.timeWindow}</p>
              </div>
              <div className="rounded-[1.5rem] border border-leaf/25 bg-gradient-to-br from-sand via-[#ddf6d2] to-leaf/15 p-5 shadow-glow ring-1 ring-leaf/15">
                <p className="text-[0.96rem] uppercase tracking-[0.2em] text-saffron">Venue:</p>
                <p className="mt-3 text-[1.375rem] font-semibold leading-8">{retreat.venue}</p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="page-shell py-4">
        <section className="card p-8 sm:p-10">
          <p className="pill">Theme</p>
          <h2 className="section-title mt-5">
            Be The <span className="text-[#F97316]">S</span>piritual{" "}
            <span className="text-[#F97316]">A</span>thlete{" "}
            <span className="text-[#F97316]">I</span>nside
          </h2>
          <div className="mt-5 space-y-5 text-lg leading-relaxed text-navy/85 sm:text-[1.15rem] sm:leading-[1.85]">
            <p>
              A <span className="font-semibold text-navy">Spiritual Athlete Inside</span>{" "}
              is someone who uses every role, every action, and every moment of life as a
              disciplined practice to realize their inner divinity and live in a state of
              peace and bliss.
            </p>
            <p>
              A spiritual athlete uses every moment of life to act with excellence, live
              with values, and realize their inner divinity.
            </p>
            <p>
              To be a spiritual athlete is to turn life into a sacred training ground.
            </p>
          </div>
        </section>
      </Reveal>

      <Reveal as="section" className="page-shell py-4">
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
            {agenda.map((day, idx) => (
              <Reveal
                key={day.id}
                as="article"
                className="rounded-[2rem] border border-navy/10 bg-white p-6"
                delay={idx * 0.12}
              >
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
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="page-shell py-4">
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
      </Reveal>

    </main>
  );
}
