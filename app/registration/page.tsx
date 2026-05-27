import Link from "next/link";

import { PageBanner } from "@/components/page-banner";
import {
  lodgingOptions,
  pricingRows,
  registrationNotes,
  retreat,
} from "@/lib/content";

export default function RegistrationPage() {
  return (
    <>
      <PageBanner />
      <main className="page-shell py-10 lg:py-14">
      <section className="card p-8 sm:p-10">
        <p className="pill">Registration</p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
          {retreat.name}
        </h1>
        <p className="mt-3 text-lg text-navy/70">
          {retreat.dates} &middot; {retreat.venue}
        </p>

        <p className="mt-6 text-lg leading-8 text-navy/80">
          Please read the following instructions and click the{" "}
          <span className="font-semibold">Register</span> button at the bottom of
          this page to register using a credit card. If you would like to mail a
          check, please send an email to{" "}
          <Link
            href={`mailto:${retreat.registrationEmail}`}
            className="font-semibold text-saffron hover:text-navy"
          >
            {retreat.registrationEmail}
          </Link>{" "}
          or call{" "}
          <Link
            href={`tel:${retreat.registrationPhone.replace(/-/g, "")}`}
            className="font-semibold text-saffron hover:text-navy"
          >
            {retreat.registrationPhone}
          </Link>
          .
        </p>

        <div className="mt-6 rounded-[1.5rem] border border-saffron/30 bg-sand p-6">
          <p className="text-lg font-semibold text-navy">
            Pre-registration is required even if you are a day attendee.
          </p>
        </div>
      </section>

      <section className="card mt-8 p-8 sm:p-10">
        <p className="pill">Lodging Information</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {lodgingOptions.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.5rem] border border-navy/10 bg-white p-6"
            >
              <h3 className="text-xl font-semibold text-navy">{item.title}</h3>
              <p className="mt-3 text-base leading-7 text-navy/75">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="card mt-8 p-8 sm:p-10">
        <p className="pill">Retreat Pricing</p>
        <p className="mt-4 text-base text-navy/70">
          Prices are per person and grouped by age.
        </p>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-left">
            <thead>
              <tr className="bg-navy text-white">
                <th className="rounded-tl-2xl px-4 py-3 text-sm font-semibold uppercase tracking-wider">
                  Age Group
                </th>
                <th className="px-4 py-3 text-sm font-semibold uppercase tracking-wider">
                  Total (Overnight Stay)
                </th>
                <th className="px-4 py-3 text-sm font-semibold uppercase tracking-wider">
                  1 Day Attendee
                </th>
                <th className="rounded-tr-2xl px-4 py-3 text-sm font-semibold uppercase tracking-wider">
                  2 Day Attendee
                </th>
              </tr>
            </thead>
            <tbody>
              {pricingRows.map((row, index) => (
                <tr
                  key={row.ageGroup}
                  className={
                    index % 2 === 0
                      ? "bg-white text-navy"
                      : "bg-sand/60 text-navy"
                  }
                >
                  <td className="px-4 py-3 text-base font-semibold">
                    {row.ageGroup}
                  </td>
                  <td className="px-4 py-3 text-base font-semibold text-saffron">
                    {row.overnight}
                  </td>
                  <td className="px-4 py-3 text-base">{row.oneDay}</td>
                  <td className="px-4 py-3 text-base">{row.twoDay}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 rounded-[1.5rem] bg-sky/55 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-navy/70">
            Notes
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-7 text-navy/80">
            {registrationNotes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="card mt-8 p-8 sm:p-10">
        <p className="pill">Scholarship Fund</p>
        <h2 className="mt-4 text-2xl font-semibold text-navy">
          Need-Based Financial Assistance
        </h2>
        <p className="mt-5 text-lg leading-8 text-navy/80">
          We do not want anyone to &ldquo;miss&rdquo; the retreat because of
          financial constraints. Participants may apply for scholarships or
          need-based financial assistance. However, scholarship funds are
          limited, and devotees are encouraged to consider all stay options.
          Scholarships will be evaluated on a case-by-case basis, and we might
          have to wait until we receive all scholarship requests before deciding.
          Please get in touch with registration for scholarships. Participants
          may also voluntarily contribute towards scholarship amounts beyond the
          retreat fee.
        </p>
      </section>

      <section className="card mt-8 p-8 sm:p-10">
        <p className="pill">Questions</p>
        <p className="mt-5 text-lg leading-8 text-navy/80">
          For any questions, please email{" "}
          <Link
            href={`mailto:${retreat.registrationEmail}`}
            className="font-semibold text-saffron hover:text-navy"
          >
            {retreat.registrationEmail}
          </Link>
          .
        </p>
      </section>

      <section className="mt-10 rounded-[2rem] border border-saffron/40 bg-gradient-to-br from-navy to-[#274a72] p-8 text-white sm:p-10">
        <p className="text-sm uppercase tracking-[0.24em] text-sunset">
          Ready to register?
        </p>
        <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
          Complete your registration with a credit card
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-white/85">
          The Register button below opens the secure Cognito Forms registration
          page in a new tab.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href={retreat.cognitoFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-sunset px-8 py-4 text-lg font-semibold text-navy hover:bg-white"
          >
            Register
          </Link>
          <Link
            href={`mailto:${retreat.registrationEmail}`}
            className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-base font-semibold text-white hover:bg-white/20"
          >
            Email registration team
          </Link>
        </div>
      </section>
      </main>
    </>
  );
}
