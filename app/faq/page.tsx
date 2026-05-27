import Link from "next/link";

import { PageBanner } from "@/components/page-banner";

type Contact = {
  name: string;
  phone: string;
};

const retreatCoordinators: Contact[] = [
  { name: "Jayanthi Srinivasan", phone: "408-529-5814" },
  { name: "Shalini Sekar", phone: "925-586-0072" },
  { name: "Ram Sivaraman", phone: "925-785-4941" },
];

const regionalContact: Contact = {
  name: "Niranjen Kanepathipillai",
  phone: "916-627-5084",
};

function ContactRow({ contact }: { contact: Contact }) {
  return (
    <div className="flex flex-col gap-1 rounded-[1.25rem] border border-navy/10 bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-xl font-semibold text-navy">{contact.name}</p>
      <Link
        href={`tel:${contact.phone.replace(/-/g, "")}`}
        className="text-xl font-semibold text-saffron hover:text-navy"
      >
        {contact.phone}
      </Link>
    </div>
  );
}

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

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-saffron sm:text-3xl">
              Retreat Coordinators
            </h2>
            <div className="mt-4 grid gap-3">
              {retreatCoordinators.map((c) => (
                <ContactRow key={c.name} contact={c} />
              ))}
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-saffron sm:text-3xl">
              Regional Contact
            </h2>
            <div className="mt-4 grid gap-3">
              <ContactRow contact={regionalContact} />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
