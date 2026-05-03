import { AgendaDay } from "@/lib/content";

type DayTimelineProps = {
  day: AgendaDay;
};

export function DayTimeline({ day }: DayTimelineProps) {
  return (
    <section id={day.id} className="scroll-mt-28">
      <div className="card overflow-hidden">
        <div className="border-b border-navy/10 bg-gradient-to-r from-white via-white to-sky/40 p-8">
          <p className="pill mb-4">{day.label}</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">{day.date}</h2>
          <p className="mt-3 max-w-3xl text-lg leading-8 text-navy/78">{day.summary}</p>
        </div>
        <div className="p-6 sm:p-8">
          <div className="space-y-4">
            {day.items.map((item) => (
              <article
                key={`${day.id}-${item.time}-${item.title}`}
                className="grid gap-4 rounded-[1.75rem] border border-navy/10 bg-white p-5 sm:grid-cols-[10rem,1fr] sm:items-center sm:p-6"
              >
                <div className="text-2xl font-semibold text-saffron">{item.time}</div>
                <div>
                  <h3 className="text-2xl font-semibold text-navy sm:text-[1.8rem]">
                    {item.title}
                  </h3>
                  {item.note ? (
                    <p className="mt-2 text-base leading-7 text-navy/70">{item.note}</p>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
