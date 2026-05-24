import Image from "next/image";
import Link from "next/link";

import { AgendaNav } from "@/components/agenda-nav";
import heroBanner from "@/assets/herobanner.png";
import {
  agenda,
  contacts,
  faqs,
  retreat,
} from "@/lib/content";

function ThemeWordmark() {
  return (
    <div className="mt-5 space-y-3">
      <p className="text-sm font-bold uppercase tracking-[0.24em] text-sunset sm:text-base">
        Theme:
      </p>
      <div className="space-y-1">
        <div className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Be The
        </div>
        <div className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
          <span className="text-saffron">S</span>
          <span className="text-white">piritual </span>
          <span className="text-saffron">A</span>
          <span className="text-white">thlete </span>
          <span className="text-saffron">I</span>
          <span className="text-white">nside</span>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="pb-16">
      <section className="page-shell py-10 lg:py-16">
        <div className="card overflow-hidden">
          <div className="relative aspect-[16/7] min-h-[280px] w-full sm:min-h-[360px] lg:min-h-[480px]">
            <Image
              src={heroBanner}
              alt="Region 7 Sai Retreat hero banner"
              fill
              priority
              className="object-cover"
              style={{ objectPosition: "20% 35%" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-navy/18 to-navy/70" />
            <div className="absolute inset-x-0 bottom-0 flex justify-end p-6 sm:p-8 lg:inset-y-6 lg:bottom-6 lg:left-auto lg:right-[11%] lg:w-[55%] lg:items-center lg:p-0">
              <div className="w-full max-w-3xl rounded-[2rem] border border-white/25 bg-white/14 p-5 text-white backdrop-blur-md sm:p-7 lg:max-w-none lg:p-7">
                <h1 className="max-w-4xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                  43rd Annual Regional (Region 7) Retreat
                </h1>
                <ThemeWordmark />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell grid gap-10 lg:grid-cols-[1.35fr,0.9fr]">
        <div className="card relative overflow-hidden p-8 sm:p-10 lg:p-12">
          <div className="absolute inset-0 bg-halo opacity-80" />
          <div className="relative">
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Retreat Details
            </h2>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={retreat.registrationUrl}
                className="rounded-full bg-navy px-6 py-4 text-lg font-semibold text-white hover:bg-saffron"
              >
                Register
              </Link>
              <Link
                href="/agenda"
                className="rounded-full border border-navy/15 bg-white px-6 py-4 text-lg font-semibold text-navy hover:border-saffron/40 hover:text-saffron"
              >
                View full program
              </Link>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.5rem] bg-white/90 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-saffron">Date:</p>
                <p className="mt-3 text-xl font-semibold leading-8">{retreat.dates}</p>
              </div>
              <div className="rounded-[1.5rem] bg-white/90 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-saffron">Time:</p>
                <p className="mt-3 text-xl font-semibold leading-8">{retreat.timeWindow}</p>
              </div>
              <div className="rounded-[1.5rem] bg-white/90 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-saffron">Venue:</p>
                <p className="mt-3 text-xl font-semibold leading-8">{retreat.venue}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card overflow-hidden">
          <div className="border-b border-white/60 bg-gradient-to-br from-navy to-[#274a72] p-6 text-white">
            <Image
              src={retreat.logoUrl}
              alt="SSIO logo"
              width={84}
              height={84}
              className="h-20 w-20 rounded-full bg-white/90 p-2"
            />
            <p className="mt-6 text-sm uppercase tracking-[0.24em] text-white/70">
              Retreat inspiration
            </p>
          </div>
          <div className="relative aspect-[4/3]">
            <Image
              src={retreat.heroImageUrl}
              alt="Swami retreat inspiration"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="page-shell grid gap-8 pb-8 pt-10 lg:grid-cols-[1.2fr,0.8fr] lg:pt-14">
        <div className="space-y-8">
          <section className="card p-8 sm:p-10">
            <p className="pill">Theme</p>
            <h2 className="section-title mt-5">{retreat.theme}</h2>
            <p className="section-copy mt-5">
              This theme invites devotees to think of spiritual life as steady inner
              training: discipline with love, devotion with purpose, service with humility,
              and transformation that reaches everyday life.
            </p>
          </section>

        </div>

        <AgendaNav />
      </section>

      <section className="page-shell py-8">
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
                <p className="mt-3 text-lg leading-8 text-navy/75">{day.summary}</p>
                <div className="mt-5 space-y-3">
                  {day.items.slice(0, 4).map((item) => (
                    <div key={`${day.id}-${item.time}`} className="flex items-center gap-3 rounded-2xl bg-sand p-4">
                      <span aria-hidden="true" className="text-3xl shrink-0">
                        {item.icon}
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-saffron">
                          {item.time}
                        </p>
                        <p className="mt-1 text-xl font-semibold leading-7">{item.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell grid gap-8 py-8 lg:grid-cols-[1fr,1fr]">
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

        <section id="registration" className="card p-8 sm:p-10">
          <p className="pill">Registration</p>
          <h2 className="section-title mt-5">Ready for final registration details</h2>
          <p className="mt-5 text-lg leading-8 text-navy/75">
            This draft is prepared for pricing, registration form links, lodging details,
            and support contacts once the committee finalizes them.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {contacts.map((contact) => (
              <div key={contact.title} className="rounded-[1.75rem] bg-rose/55 p-5">
                <p className="text-sm uppercase tracking-[0.18em] text-saffron">
                  {contact.title}
                </p>
                <p className="mt-3 text-lg font-semibold leading-7">{contact.detail}</p>
              </div>
            ))}
          </div>
        </section>
      </section>

      <section className="page-shell py-8">
        <div className="card p-8 sm:p-10">
          <p className="pill">Frequently Asked</p>
          <div className="mt-6 grid gap-4">
            {faqs.slice(0, 3).map((faq) => (
              <div key={faq.question} className="rounded-[1.5rem] border border-navy/10 bg-white p-6">
                <h3 className="text-2xl font-semibold">{faq.question}</h3>
                <p className="mt-3 text-lg leading-8 text-navy/75">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
