import Image from "next/image";

import { PageBanner } from "@/components/page-banner";
import { speakers } from "@/lib/content";

export default function SpeakersPage() {
  return (
    <>
      <PageBanner />
      <main className="page-shell py-10 lg:py-14">
      <div className="card p-8 sm:p-10">
        <p className="pill">Speakers</p>
        <p className="mt-5 max-w-3xl text-xl leading-9 text-navy/78">
          Meet the speakers joining us at Monte Toyon. Additional speakers and workshop
          facilitators will be added as they are confirmed.
        </p>
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {speakers.map((speaker) => (
            <article key={speaker.name} className="rounded-[2rem] border border-navy/10 bg-white p-6">
              {speaker.image ? (
                <div className="mb-5 overflow-hidden rounded-[1.75rem] bg-sky/55">
                  <Image
                    src={speaker.image}
                    alt={`Portrait of ${speaker.name}`}
                    className="h-72 w-full object-cover"
                    placeholder="blur"
                  />
                </div>
              ) : (
                <div className="mb-5 flex h-72 items-center justify-center rounded-[1.75rem] bg-sky/55 text-lg font-semibold text-navy/70">
                  Photo placeholder
                </div>
              )}
              <p className="text-sm uppercase tracking-[0.18em] text-saffron">{speaker.role}</p>
              <h2 className="mt-3 text-3xl font-semibold">{speaker.name}</h2>
              <div className="mt-4 space-y-4 text-lg leading-8 text-navy/75">
                {speaker.bio.split("\n\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
      </main>
    </>
  );
}
