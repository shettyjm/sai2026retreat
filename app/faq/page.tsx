import Link from "next/link";

import { PageBanner } from "@/components/page-banner";
import { retreat } from "@/lib/content";

export default function FaqPage() {
  return (
    <>
      <PageBanner />
      <main className="page-shell py-10 lg:py-14">
        <div className="card p-8 sm:p-10">
          <p className="pill">Contacts</p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
            Contact information
          </h1>

          <div className="mt-8 rounded-[1.75rem] border border-saffron/40 bg-sand p-8 text-center sm:p-10">
            <p className="text-5xl" aria-hidden="true">
              📇
            </p>
            <h2 className="mt-4 text-2xl font-bold text-navy sm:text-3xl">
              Coming soon
            </h2>
            <p className="mt-4 mx-auto max-w-2xl text-lg leading-8 text-navy/75 sm:text-xl">
              We are gathering contact details for the retreat coordinators,
              regional team, and support volunteers. This page will be updated
              with names, phone numbers, and emails as the committee finalizes
              roles.
            </p>
            <p className="mt-6 text-base leading-7 text-navy/80 sm:text-lg">
              In the meantime, please reach out to{" "}
              <Link
                href={`mailto:${retreat.registrationEmail}`}
                className="font-bold text-saffron hover:text-navy"
              >
                {retreat.registrationEmail}
              </Link>{" "}
              or call{" "}
              <Link
                href={`tel:${retreat.registrationPhone.replace(/-/g, "")}`}
                className="font-bold text-saffron hover:text-navy"
              >
                {retreat.registrationPhone}
              </Link>{" "}
              for any retreat-related questions.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
