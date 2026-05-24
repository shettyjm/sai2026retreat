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
            Walk through the retreat one day at a time
          </h1>
          <p className="mt-5 max-w-3xl text-xl leading-9 text-navy/78">
            Each day is presented as a large, easy-to-scan timeline so families, elders, and
            volunteers can quickly find the next part of the retreat.
          </p>
        </div>

        <div className="mb-8 rounded-[1.75rem] border-2 border-saffron/50 bg-sand p-6 text-center sm:p-8">
          <p className="text-4xl" aria-hidden="true">
            🔒
          </p>
          <h2 className="mt-3 text-2xl font-bold text-navy sm:text-3xl">
            Draft program — not yet approved
          </h2>
          <p className="mt-3 mx-auto max-w-2xl text-base leading-7 text-navy/75 sm:text-lg">
            The full schedule below is a working draft and is intentionally blurred
            until the committee finalizes and approves the program. Check back soon.
          </p>
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
