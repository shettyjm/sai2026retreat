import Link from "next/link";

import { PageBanner } from "@/components/page-banner";
import { logistics, retreat } from "@/lib/content";

export default function LogisticsPage() {
  return (
    <>
      <PageBanner />
      <main className="page-shell py-10 lg:py-14">
      <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
        <section className="card p-8 sm:p-10">
          <p className="pill">Communication</p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
            Important retreat information
          </h1>
          <div className="mt-8 grid gap-4">
            {logistics.map((item) => (
              <div key={item} className="rounded-[1.75rem] bg-white p-6">
                <p className="text-lg leading-8 text-navy/80">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="card p-8 sm:p-10">
          <p className="pill">Venue Notes</p>
          <h2 className="mt-5 text-3xl font-semibold">{retreat.venue}</h2>
          <p className="mt-4 text-lg leading-8 text-navy/78">{retreat.address}</p>
          <p className="mt-5 text-lg leading-8 text-navy/75">
            Use this area for arrival notes, parking flow, cabin or lodging expectations, and
            quiet hours once final committee details are available.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={retreat.venueUrl}
              className="rounded-full bg-navy px-6 py-3 text-base font-semibold text-white hover:bg-saffron"
            >
              Visit venue page
            </Link>
            <Link
              href={retreat.mapUrl}
              className="rounded-full border border-navy/15 bg-white px-6 py-3 text-base font-semibold text-navy hover:border-saffron/40 hover:text-saffron"
            >
              Open map
            </Link>
          </div>
        </section>
      </div>
      </main>
    </>
  );
}
