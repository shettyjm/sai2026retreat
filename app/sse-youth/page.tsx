import { PageBanner } from "@/components/page-banner";
import { youthNotes } from "@/lib/content";

export default function SseYouthPage() {
  return (
    <>
      <PageBanner />
      <main className="page-shell py-10 lg:py-14">
        <div className="card p-8 sm:p-10">
          <p className="pill">SSE</p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
            SSE Program — Yet to finalize
          </h1>
          <p className="mt-5 max-w-3xl text-xl leading-9 text-navy/78">
            This section is built to make family participation visible and reassuring, instead of
            feeling like a separate afterthought.
          </p>

          <div className="mt-8 rounded-[1.75rem] border-2 border-saffron/50 bg-sand p-6 text-center sm:p-8">
            <p className="text-4xl" aria-hidden="true">
              🔒
            </p>
            <h2 className="mt-3 text-2xl font-bold text-navy sm:text-3xl">
              SSE Program — Yet to finalize
            </h2>
            <p className="mt-3 mx-auto max-w-2xl text-base leading-7 text-navy/75 sm:text-lg">
              The SSE and youth program below is a working draft and is intentionally
              blurred until the committee finalizes the schedule. Check back soon.
            </p>
          </div>

          <div
            className="pointer-events-none mt-8 grid select-none gap-5 opacity-80 lg:grid-cols-2"
            style={{ filter: "blur(6px)" }}
            aria-hidden="true"
          >
            {youthNotes.map((item, index) => (
              <article key={item} className="rounded-[2rem] border border-navy/10 bg-white p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-saffron">
                  Step {index + 1}
                </p>
                <p className="mt-4 text-xl leading-8 text-navy/80">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
