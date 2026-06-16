import Link from "next/link";

import { PageBanner } from "@/components/page-banner";
import {
  lodgingOptions,
  pricingRows,
  retreat,
} from "@/lib/content";

export default function RegistrationPage() {
  return (
    <>
      <PageBanner />
      <main className="page-shell pt-3 pb-10 lg:pt-4 lg:pb-14">
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
          <span className="font-semibold">Register</span> button at the bottom
          of this page to register using a credit card or PayPal account. If you would like to
          mail a check, please send an email to{" "}
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
        <div className="mt-6 flex flex-col gap-4">
          {lodgingOptions.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.5rem] border border-navy/10 bg-white p-6"
            >
              <h3 className="text-xl font-semibold text-navy">{item.title}</h3>
              <p
                className={`mt-3 text-base leading-7 ${
                  item.tone === "warning"
                    ? "font-semibold text-red-600"
                    : "text-navy/75"
                }`}
              >
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
          <table className="w-full min-w-[820px] border-collapse text-left">
            <thead>
              <tr className="bg-navy text-white">
                <th className="rounded-tl-2xl px-4 py-3 text-sm font-semibold uppercase tracking-wider">
                  Age Group
                </th>
                <th className="px-4 py-3 text-sm font-semibold uppercase tracking-wider leading-tight">
                  Overnight Stay
                  <br />
                  Friday PM - Sunday PM
                </th>
                <th className="px-4 py-3 text-sm font-semibold uppercase tracking-wider leading-tight">
                  Overnight Stay
                  <br />
                  Friday PM - Saturday PM
                </th>
                <th className="px-4 py-3 text-sm font-semibold uppercase tracking-wider leading-tight">
                  Overnight Stay
                  <br />
                  Saturday AM - Sunday PM
                </th>
                <th className="px-4 py-3 text-sm font-semibold uppercase tracking-wider leading-tight">
                  Day Attendee
                  <br />
                  (Saturday Or Sunday, No Lodging)
                </th>
                <th className="rounded-tr-2xl px-4 py-3 text-sm font-semibold uppercase tracking-wider leading-tight">
                  Day Attendee
                  <br />
                  (Saturday and Sunday, No Lodging)
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
                  <td className="px-4 py-3 text-base font-semibold text-[#F97316]">
                    {row.friSun}
                  </td>
                  <td className="px-4 py-3 text-base font-semibold text-[#F97316]">
                    {row.friSat}
                  </td>
                  <td className="px-4 py-3 text-base font-semibold text-[#F97316]">
                    {row.satSun}
                  </td>
                  <td className="px-4 py-3 text-base font-semibold text-[#F97316]">{row.oneDay}</td>
                  <td className="px-4 py-3 text-base font-semibold text-[#F97316]">{row.twoDay}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 rounded-[1.5rem] bg-sky/55 p-6">
          <ul className="space-y-3 text-base leading-7 text-navy/80">
            <li>
              <span className="font-semibold text-navy">
                Overnight Stay &ndash; Friday PM to Sunday PM:
              </span>{" "}
              Includes lodging for Friday and Saturday nights, dinner on Friday,
              and breakfast, lunch, and dinner on both Saturday and Sunday.
            </li>
            <li>
              <span className="font-semibold text-navy">
                Overnight Stay &ndash; Friday PM to Saturday PM:
              </span>{" "}
              Includes lodging for Friday night, dinner on Friday, and
              breakfast, lunch, and dinner on Saturday.
            </li>
            <li>
              <span className="font-semibold text-navy">
                Overnight Stay &ndash; Saturday AM to Sunday PM:
              </span>{" "}
              Includes lodging for Saturday night, and breakfast, lunch, and
              dinner on both Saturday and Sunday.
            </li>
            <li>
              <span className="font-semibold text-navy">
                Day Attendee &ndash; Saturday (No Lodging):
              </span>{" "}
              Includes breakfast, lunch, and dinner on Saturday, along with
              access to all Saturday activities. Lodging is not included.
            </li>
            <li>
              <span className="font-semibold text-navy">
                Day Attendee &ndash; Sunday (No Lodging):
              </span>{" "}
              Includes breakfast, lunch, and dinner on Sunday, along with
              access to all Sunday activities. Lodging is not included.
            </li>
          </ul>
        </div>
      </section>

      <section className="card mt-8 p-8 sm:p-10">
        <p className="pill">Scholarship Fund</p>
        <h2 className="mt-4 text-2xl font-semibold text-navy">
          Need-Based Financial Assistance
        </h2>
        <p className="mt-5 text-lg leading-8 text-navy/80">
          We do not want anyone to miss the retreat because of
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
            className="rounded-full bg-[#F97316] px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-white hover:text-navy"
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
