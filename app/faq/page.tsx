import { PageBanner } from "@/components/page-banner";
import { faqs } from "@/lib/content";

export default function FaqPage() {
  return (
    <>
      <PageBanner />
      <main className="page-shell py-10 lg:py-14">
      <div className="card p-8 sm:p-10">
        <p className="pill">FAQ</p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
          Practical answers for first-time and returning attendees
        </h1>
        <div className="mt-8 grid gap-4">
          {faqs.map((faq) => (
            <article key={faq.question} className="rounded-[1.75rem] border border-navy/10 bg-white p-6">
              <h2 className="text-2xl font-semibold">{faq.question}</h2>
              <p className="mt-3 text-lg leading-8 text-navy/75">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
      </main>
    </>
  );
}
