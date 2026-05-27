import { AgendaNav } from "@/components/agenda-nav";
import { DayTimeline } from "@/components/day-timeline";
import { PageBanner } from "@/components/page-banner";
import { agenda } from "@/lib/content";

export default function AgendaPage() {
  return (
    <>
      <PageBanner />
      <main className="page-shell grid gap-8 py-10 lg:grid-cols-[0.8fr,1.45fr] lg:py-14">
      <div className="lg:order-2">
        <div className="mb-8 card p-8 sm:p-10">
          <p className="pill">Program</p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
            Walk through of the Retreat One Day at a Time
          </h1>
        </div>

        <div className="mb-8 rounded-[1.75rem] border border-saffron/40 bg-sand p-10 text-center sm:p-14">
          <p className="text-5xl" aria-hidden="true">
            📅
          </p>
          <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">
            Coming soon
          </h2>
        </div>

        <div
          className="pointer-events-none select-none space-y-8 opacity-80"
          style={{ filter: "blur(6px)" }}
          aria-hidden="true"
        >
          {agenda.map((day) => (
            <DayTimeline key={day.id} day={day} />
          ))}
        </div>
      </div>
      <div className="lg:order-1">
        <AgendaNav />
      </div>
      </main>
    </>
  );
}
