import { speakers } from "@/lib/content";

export default function SpeakersPage() {
  return (
    <main className="page-shell py-10 lg:py-14">
      <div className="card p-8 sm:p-10">
        <p className="pill">Speakers</p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
          Speaker cards ready to expand
        </h1>
        <p className="mt-5 max-w-3xl text-xl leading-9 text-navy/78">
          This first draft keeps the speaker section clean and easy to update as final names,
          photos, and bios are confirmed.
        </p>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {speakers.map((speaker) => (
            <article key={speaker.name} className="rounded-[2rem] border border-navy/10 bg-white p-6">
              <div className="mb-5 flex h-32 items-center justify-center rounded-[1.75rem] bg-sky/55 text-lg font-semibold text-navy/70">
                Photo placeholder
              </div>
              <p className="text-sm uppercase tracking-[0.18em] text-saffron">{speaker.role}</p>
              <h2 className="mt-3 text-3xl font-semibold">{speaker.name}</h2>
              <p className="mt-4 text-lg leading-8 text-navy/75">{speaker.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
