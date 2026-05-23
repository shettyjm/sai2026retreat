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
                className="flex flex-col gap-4 rounded-[1.75rem] border border-navy/10 bg-white p-5 sm:flex-row sm:items-center sm:p-6"
              >
                <div
                  aria-hidden="true"
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-sand text-3xl shadow-sm sm:h-16 sm:w-16 sm:text-4xl"
                >
                  {item.icon}
                </div>
                <div className="w-40 shrink-0 text-2xl font-semibold text-saffron">
                  {item.time}
                </div>
                <div className="flex-1">
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
