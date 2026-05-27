import { PageBanner } from "@/components/page-banner";

export default function SseYouthPage() {
  return (
    <>
      <PageBanner />
      <main className="page-shell py-10 lg:py-14">
        <div className="card p-8 sm:p-10">
          <p className="pill">SSE</p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
            SSE Program
          </h1>

          <div className="mt-8 rounded-[1.75rem] border border-saffron/40 bg-sand p-10 text-center sm:p-14">
            <p className="text-5xl" aria-hidden="true">
              📚
            </p>
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">
              Coming soon
            </h2>
          </div>
        </div>
      </main>
    </>
  );
}
