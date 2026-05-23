import { PageBanner } from "@/components/page-banner";
import { youthNotes } from "@/lib/content";

export default function SseYouthPage() {
  return (
    <>
      <PageBanner />
      <main className="page-shell py-10 lg:py-14">
      <div className="card p-8 sm:p-10">
        <p className="pill">SSE / Youth</p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
          A clearer path for families, children, and young adults
        </h1>
        <p className="mt-5 max-w-3xl text-xl leading-9 text-navy/78">
          This section is built to make family participation visible and reassuring, instead of
          feeling like a separate afterthought.
        </p>
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
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
