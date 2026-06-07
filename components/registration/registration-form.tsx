"use client";

import { useMemo, useState } from "react";

import {
  ADULT_AGES,
  AGE,
  CHILD_AGES,
  GENDERS,
  LODGING,
  LODGING_KEYS,
  MEALS,
  SERVICES,
  money,
  packagePrice,
  personTotal,
  type DayName,
  type LodgingKey,
  type MealKey,
  type Person,
  type TierKey,
} from "@/lib/registration-pricing";

let uid = 0;
const nextId = () => ++uid;

type Status = "idle" | "submitting" | "success" | "error";

function makeAdult(): Person {
  return {
    id: nextId(),
    type: "adult",
    first: "",
    last: "",
    center: "",
    ageLabel: "",
    tier: "age12up",
    gender: "",
    email: "",
    phone: "",
    lodging: null,
    selected: {},
    services: new Set(),
    comments: "",
  };
}

function makeChild(): Person {
  return {
    id: nextId(),
    type: "child",
    first: "",
    last: "",
    ageLabel: "",
    tier: null,
    lodging: null,
    selected: {},
  };
}

function defaultMealsFor(lodging: LodgingKey): Partial<Record<DayName, Set<MealKey>>> {
  const out: Partial<Record<DayName, Set<MealKey>>> = {};
  for (const [day, meals] of Object.entries(LODGING[lodging].days)) {
    if (!meals) continue;
    out[day as DayName] = new Set(meals);
  }
  return out;
}

export function RegistrationForm() {
  const [people, setPeople] = useState<Person[]>(() => [makeAdult()]);
  const [scholarship, setScholarship] = useState(0);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const updatePerson = (id: number, patch: Partial<Person> | ((p: Person) => Person)) =>
    setPeople((prev) =>
      prev.map((p) => {
        if (p.id !== id) return p;
        return typeof patch === "function" ? patch(p) : { ...p, ...patch };
      }),
    );

  const removePerson = (id: number) =>
    setPeople((prev) => prev.filter((p) => p.id !== id));

  const addAdult = () => setPeople((prev) => [...prev, makeAdult()]);
  const addChild = () => setPeople((prev) => [...prev, makeChild()]);

  const adults = people.filter((p) => p.type === "adult");
  const children = people.filter((p) => p.type === "child");

  const grand = useMemo(
    () => people.reduce((acc, p) => acc + personTotal(p), 0) + scholarship,
    [people, scholarship],
  );

  const onSubmit = async () => {
    setStatus("submitting");
    setErrorMsg("");
    const payload = {
      adults: adults.map((p) => ({
        name: `${p.first} ${p.last}`.trim(),
        center: p.center ?? "",
        ageGroup: p.ageLabel,
        gender: p.gender ?? "",
        email: p.email ?? "",
        phone: p.phone ?? "",
        lodging: p.lodging
          ? `${LODGING[p.lodging].label} (${LODGING[p.lodging].sub})`
          : null,
        meals: Object.fromEntries(
          Object.entries(p.selected).map(([d, s]) => [d, [...(s ?? [])]]),
        ),
        services: [...(p.services ?? new Set())],
        comments: p.comments ?? "",
        subtotal: Number(personTotal(p).toFixed(2)),
      })),
      children: children.map((p) => ({
        name: `${p.first} ${p.last}`.trim(),
        ageGroup: p.ageLabel,
        lodging: p.lodging
          ? `${LODGING[p.lodging].label} (${LODGING[p.lodging].sub})`
          : null,
        meals: Object.fromEntries(
          Object.entries(p.selected).map(([d, s]) => [d, [...(s ?? [])]]),
        ),
        subtotal: Number(personTotal(p).toFixed(2)),
      })),
      scholarship,
      total: Number(grand.toFixed(2)),
    };
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Server responded ${res.status}`);
      setStatus("success");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Unknown error");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-[2rem] border border-leaf/40 bg-gradient-to-br from-sand to-white p-8 text-navy sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-saffron">
          Registration received
        </p>
        <h3 className="mt-3 text-3xl font-semibold">Thank you — your details are with us.</h3>
        <p className="mt-4 text-lg leading-8 text-navy/80">
          We&rsquo;ll be in touch with payment instructions shortly. If you need to make
          changes, email{" "}
          <a className="font-semibold text-saffron" href="mailto:reg7retreat@gmail.com">
            reg7retreat@gmail.com
          </a>
          .
        </p>
        <p className="mt-6 text-2xl font-semibold">Estimated total: {money(grand)}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-serif text-2xl font-semibold text-navy">Adult Registrants</h3>
        <p className="mt-1 text-sm text-navy/65">
          Seniors, Adults and Young Adults. Add one card per adult.
        </p>
        <div className="mt-4 space-y-4">
          {adults.map((p, idx) => (
            <AdultCard
              key={p.id}
              index={idx + 1}
              person={p}
              onChange={updatePerson}
              onRemove={removePerson}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={addAdult}
          className="mt-4 inline-flex items-center gap-2 rounded-xl border-2 border-saffron bg-white px-4 py-2.5 text-sm font-semibold text-saffron transition hover:bg-saffron hover:text-white"
        >
          <PlusIcon /> Add Adult Registrant
        </button>
      </div>

      <div>
        <h3 className="font-serif text-2xl font-semibold text-navy">Accompanying Children</h3>
        <p className="mt-1 text-sm text-navy/65">
          Additional fields appear once you enter the child&rsquo;s first name.
        </p>
        <div className="mt-4 space-y-4">
          {children.map((p, idx) => (
            <ChildCard
              key={p.id}
              index={idx + 1}
              person={p}
              onChange={updatePerson}
              onRemove={removePerson}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={addChild}
          className="mt-4 inline-flex items-center gap-2 rounded-xl border-2 border-saffron bg-white px-4 py-2.5 text-sm font-semibold text-saffron transition hover:bg-saffron hover:text-white"
        >
          <PlusIcon /> Add Accompanying Child
        </button>
      </div>

      <div>
        <h3 className="font-serif text-2xl font-semibold text-navy">Scholarship Fund</h3>
        <p className="mt-1 text-sm text-navy/65">
          Optional — help cover the cost of attendance for others.
        </p>
        <div className="mt-4 rounded-[1.25rem] border border-navy/10 bg-white p-5">
          <label className="block text-sm font-semibold text-navy">
            Additional amount towards scholarship fund
          </label>
          <div className="relative mt-2 max-w-xs">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-navy/60">
              $
            </span>
            <input
              type="number"
              min={0}
              step={1}
              placeholder="0"
              value={scholarship || ""}
              onChange={(e) => setScholarship(Number(e.target.value) || 0)}
              className="w-full rounded-xl border-2 border-navy/15 bg-white py-2.5 pl-7 pr-3 text-navy focus:border-saffron focus:outline-none focus:ring-2 focus:ring-saffron/30"
            />
          </div>
        </div>
      </div>

      <Summary
        people={people}
        scholarship={scholarship}
        grand={grand}
        onSubmit={onSubmit}
        status={status}
        errorMsg={errorMsg}
      />
    </div>
  );
}

function AdultCard({
  index,
  person,
  onChange,
  onRemove,
}: {
  index: number;
  person: Person;
  onChange: (id: number, patch: Partial<Person> | ((p: Person) => Person)) => void;
  onRemove: (id: number) => void;
}) {
  const setLodging = (key: LodgingKey) =>
    onChange(person.id, {
      lodging: key,
      selected: defaultMealsFor(key),
    });

  const toggleService = (svc: string) =>
    onChange(person.id, (prev) => {
      const next = new Set(prev.services ?? []);
      if (next.has(svc)) next.delete(svc);
      else next.add(svc);
      return { ...prev, services: next };
    });

  return (
    <div className="animate-rise rounded-[1.5rem] border border-navy/10 bg-white p-6 shadow-sm">
      <CardHeader
        badge={index}
        title="Adult Registrant"
        onRemove={() => onRemove(person.id)}
      />

      <Field label="Name" required>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <TextInput
            placeholder="First"
            value={person.first}
            onChange={(v) => onChange(person.id, { first: v })}
          />
          <TextInput
            placeholder="Last"
            value={person.last}
            onChange={(v) => onChange(person.id, { last: v })}
          />
        </div>
      </Field>

      <Field label="Sai Center / City" required>
        <TextInput
          placeholder="e.g. San Jose"
          value={person.center ?? ""}
          onChange={(v) => onChange(person.id, { center: v })}
        />
      </Field>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <Field label="Age Group" required>
          <Select
            value={person.ageLabel}
            onChange={(v) => onChange(person.id, { ageLabel: v, tier: "age12up" })}
            options={[{ label: "Select...", value: "" }, ...ADULT_AGES.map((a) => ({ label: a.label, value: a.label }))]}
          />
        </Field>
        <Field label="Gender" required>
          <Select
            value={person.gender ?? ""}
            onChange={(v) => onChange(person.id, { gender: v })}
            options={[{ label: "Select...", value: "" }, ...GENDERS.map((g) => ({ label: g, value: g }))]}
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <Field label="Email" required>
          <TextInput
            type="email"
            placeholder="name@email.com"
            value={person.email ?? ""}
            onChange={(v) => onChange(person.id, { email: v })}
          />
        </Field>
        <Field label="Phone" required>
          <TextInput
            type="tel"
            placeholder="(555) 555-5555"
            value={person.phone ?? ""}
            onChange={(v) => onChange(person.id, { phone: v })}
          />
        </Field>
      </div>

      <Field label="Lodging Type (Seniors, Adults and Young Adults)" required>
        <LodgingRadios person={person} onSelect={setLodging} />
      </Field>

      {person.lodging && (
        <Field label="Meals">
          <MealsPicker person={person} onChange={onChange} />
        </Field>
      )}

      <Field label="Service preferences during the retreat">
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-3">
          {SERVICES.map((svc) => {
            const checked = person.services?.has(svc) ?? false;
            return (
              <label
                key={svc}
                className="flex cursor-pointer items-center gap-2 text-sm text-navy"
              >
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={checked}
                  onChange={() => toggleService(svc)}
                />
                <BoxCheck checked={checked} />
                <span>{svc}</span>
              </label>
            );
          })}
        </div>
      </Field>

      <Field label="Do you have special needs, requests (including lodging), food allergies, or other comments?">
        <textarea
          value={person.comments ?? ""}
          onChange={(e) => onChange(person.id, { comments: e.target.value })}
          rows={3}
          className="w-full resize-y rounded-xl border-2 border-navy/15 bg-white p-3 text-navy focus:border-saffron focus:outline-none focus:ring-2 focus:ring-saffron/30"
        />
      </Field>

      <SubtotalLine total={personTotal(person)} />
    </div>
  );
}

function ChildCard({
  index,
  person,
  onChange,
  onRemove,
}: {
  index: number;
  person: Person;
  onChange: (id: number, patch: Partial<Person> | ((p: Person) => Person)) => void;
  onRemove: (id: number) => void;
}) {
  const setLodging = (key: LodgingKey) =>
    onChange(person.id, {
      lodging: key,
      selected: defaultMealsFor(key),
    });

  const setAge = (label: string) => {
    const found = CHILD_AGES.find((a) => a.label === label);
    onChange(person.id, {
      ageLabel: label,
      tier: found?.tier ?? null,
      lodging: null,
      selected: {},
    });
  };

  const showMore = person.first.trim() !== "";

  return (
    <div className="animate-rise rounded-[1.5rem] border border-navy/10 bg-white p-6 shadow-sm">
      <CardHeader badge={index} title="Child" onRemove={() => onRemove(person.id)} />

      <Field label="Name">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <TextInput
            placeholder="First"
            value={person.first}
            onChange={(v) => onChange(person.id, { first: v })}
          />
          <TextInput
            placeholder="Last"
            value={person.last}
            onChange={(v) => onChange(person.id, { last: v })}
          />
        </div>
      </Field>

      {showMore && (
        <>
          <div className="max-w-xs">
            <Field label="Age Group" required>
              <Select
                value={person.ageLabel}
                onChange={setAge}
                options={[
                  { label: "Select...", value: "" },
                  ...CHILD_AGES.map((a) => ({ label: a.label, value: a.label })),
                ]}
              />
            </Field>
          </div>

          {person.tier && (
            <Field label="Lodging Type" required>
              <LodgingRadios person={person} onSelect={setLodging} />
            </Field>
          )}

          {person.lodging && (
            <Field label="Meals">
              <MealsPicker person={person} onChange={onChange} />
            </Field>
          )}
        </>
      )}

      <SubtotalLine total={personTotal(person)} />
    </div>
  );
}

function LodgingRadios({
  person,
  onSelect,
}: {
  person: Person;
  onSelect: (key: LodgingKey) => void;
}) {
  return (
    <div className="grid gap-2">
      {LODGING_KEYS.map((key) => {
        const opt = LODGING[key];
        const pr = person.tier ? packagePrice(person.tier, key) : null;
        const checked = person.lodging === key;
        return (
          <label
            key={key}
            className={`relative flex cursor-pointer items-center gap-3 rounded-xl border-2 bg-white px-4 py-3 transition ${
              checked
                ? "border-saffron bg-sand/60 shadow-[0_0_0_3px_rgba(196,108,42,0.12)]"
                : "border-navy/12 hover:border-saffron/60"
            }`}
          >
            <input
              type="radio"
              name={`lodging-${person.id}`}
              className="sr-only"
              checked={checked}
              onChange={() => onSelect(key)}
            />
            <RadioDot checked={checked} />
            <span className="flex-1">
              <span className="text-sm font-semibold text-navy">{opt.label}</span>
              <span className="block text-xs text-navy/65">{opt.sub}</span>
            </span>
            {pr !== null && (
              <span
                className={`font-serif text-base font-semibold ${
                  pr === 0 ? "italic text-saffron" : "text-navy"
                }`}
              >
                {pr === 0 ? "Free" : money(pr)}
              </span>
            )}
          </label>
        );
      })}
    </div>
  );
}

function MealsPicker({
  person,
  onChange,
}: {
  person: Person;
  onChange: (id: number, patch: Partial<Person> | ((p: Person) => Person)) => void;
}) {
  if (!person.lodging || !person.tier) return null;
  const a = AGE[person.tier];
  const cfg = LODGING[person.lodging];

  const toggleMeal = (day: DayName, meal: MealKey) =>
    onChange(person.id, (prev) => {
      const next = { ...prev.selected };
      const set = new Set(next[day] ?? []);
      if (set.has(meal)) set.delete(meal);
      else set.add(meal);
      next[day] = set;
      return { ...prev, selected: next };
    });

  const toggleAll = (day: DayName, meals: MealKey[], on: boolean) =>
    onChange(person.id, (prev) => {
      const next = { ...prev.selected };
      next[day] = new Set(on ? meals : []);
      return { ...prev, selected: next };
    });

  return (
    <div className="grid gap-3">
      {Object.entries(cfg.days).map(([day, meals]) => {
        if (!meals) return null;
        const d = day as DayName;
        const selected = person.selected[d] ?? new Set<MealKey>();
        const allOn = meals.every((m) => selected.has(m));
        return (
          <div key={d} className="overflow-hidden rounded-xl border border-navy/12 bg-white">
            <div className="flex items-center justify-between gap-3 border-b border-navy/10 bg-sand/60 px-4 py-2.5">
              <span className="font-serif text-base font-semibold text-navy">
                <span className="mr-2 text-saffron">●</span>
                {d}
              </span>
              <label className="flex cursor-pointer items-center gap-2 text-xs text-navy/70">
                All meals
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={allOn}
                  onChange={(e) => toggleAll(d, meals, e.target.checked)}
                />
                <SwitchDot on={allOn} />
              </label>
            </div>
            <div className="grid grid-cols-1 gap-2 p-3 sm:grid-cols-3">
              {meals.map((m) => {
                const checked = selected.has(m);
                return (
                  <label
                    key={m}
                    className={`relative flex cursor-pointer items-center gap-3 rounded-lg border-2 bg-white px-3 py-2.5 transition ${
                      checked ? "border-saffron bg-sand/40" : "border-navy/10 hover:border-saffron/60"
                    }`}
                  >
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={checked}
                      onChange={() => toggleMeal(d, m)}
                    />
                    <BoxCheck checked={checked} />
                    <span className="flex-1">
                      <span className="block text-sm font-semibold text-navy">
                        {MEALS[m].name}
                      </span>
                      <span className="block text-xs text-navy/60">{MEALS[m].time}</span>
                    </span>
                    <span
                      className={`text-xs font-semibold ${
                        a.meals[m] === 0 ? "text-saffron" : "text-navy/70"
                      }`}
                    >
                      {a.meals[m] === 0 ? "Free" : money(a.meals[m])}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Summary({
  people,
  scholarship,
  grand,
  onSubmit,
  status,
  errorMsg,
}: {
  people: Person[];
  scholarship: number;
  grand: number;
  onSubmit: () => void;
  status: Status;
  errorMsg: string;
}) {
  const hasPeople = people.some((p) => personTotal(p) > 0 || p.first || p.last);
  return (
    <div className="sticky bottom-3 z-10 mt-6">
      <div className="rounded-[1.5rem] bg-navy p-6 text-white shadow-[0_18px_40px_-18px_rgba(15,32,57,0.7)]">
        <p className="font-serif text-sm uppercase tracking-[0.12em] text-saffron">
          Registration summary
        </p>
        <div className="mt-3 space-y-1.5 text-sm">
          {hasPeople ? (
            <>
              {people.map((p) => {
                const total = personTotal(p);
                const name =
                  p.first || p.last
                    ? `${p.first} ${p.last}`.trim()
                    : p.type === "adult"
                      ? "Adult registrant"
                      : "Child";
                const sub = p.lodging
                  ? `${LODGING[p.lodging].label} — ${LODGING[p.lodging].sub}`
                  : "no lodging selected yet";
                return (
                  <div
                    key={p.id}
                    className="flex items-baseline justify-between gap-3 text-white/85"
                  >
                    <span>
                      {name}{" "}
                      <span className="text-white/55">({sub})</span>
                    </span>
                    <span className="font-semibold">{money(total)}</span>
                  </div>
                );
              })}
              {scholarship > 0 && (
                <div className="flex items-baseline justify-between gap-3 text-white/85">
                  <span>Scholarship fund</span>
                  <span className="font-semibold">{money(scholarship)}</span>
                </div>
              )}
            </>
          ) : (
            <span className="italic text-white/55">Add a registrant to begin.</span>
          )}
        </div>
        <div className="mt-4 flex items-baseline justify-between border-t border-white/15 pt-3">
          <span className="text-xs uppercase tracking-[0.18em] text-saffron">
            Total due
          </span>
          <span className="font-serif text-3xl font-semibold">{money(grand)}</span>
        </div>
        <button
          type="button"
          onClick={onSubmit}
          disabled={status === "submitting"}
          className="mt-4 w-full rounded-xl bg-sunset px-4 py-3.5 text-base font-semibold text-navy transition hover:bg-white disabled:cursor-wait disabled:opacity-70"
        >
          {status === "submitting" ? "Submitting…" : "Continue to payment"}
        </button>
        {status === "error" && (
          <p className="mt-3 text-sm text-sunset">
            Something went wrong: {errorMsg}. Please try again or email{" "}
            <a className="font-semibold underline" href="mailto:reg7retreat@gmail.com">
              reg7retreat@gmail.com
            </a>
            .
          </p>
        )}
      </div>
    </div>
  );
}

function CardHeader({
  badge,
  title,
  onRemove,
}: {
  badge: number;
  title: string;
  onRemove: () => void;
}) {
  return (
    <div className="mb-4 flex items-center justify-between gap-3 border-b border-navy/10 pb-3">
      <div className="flex items-center gap-2.5">
        <span className="grid h-7 w-7 place-items-center rounded-full bg-navy text-xs font-bold text-white">
          {badge}
        </span>
        <span className="font-serif text-lg font-semibold text-navy">{title}</span>
      </div>
      <button
        type="button"
        onClick={onRemove}
        className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs text-navy/65 transition hover:bg-sand hover:text-saffron"
      >
        <XIcon /> Remove
      </button>
    </div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-4">
      <label className="mb-2 block text-sm font-semibold text-navy">
        {label}
        {required && <span className="ml-1 text-saffron">*</span>}
      </label>
      {children}
    </div>
  );
}

function TextInput({
  type = "text",
  value,
  onChange,
  placeholder,
}: {
  type?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full rounded-xl border-2 border-navy/15 bg-white px-3 py-2.5 text-navy placeholder-navy/35 focus:border-saffron focus:outline-none focus:ring-2 focus:ring-saffron/30"
    />
  );
}

function Select({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  options: { label: string; value: string }[];
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-xl border-2 border-navy/15 bg-white px-3 py-2.5 text-navy focus:border-saffron focus:outline-none focus:ring-2 focus:ring-saffron/30"
    >
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
}

function SubtotalLine({ total }: { total: number }) {
  return (
    <div className="mt-4 flex items-baseline justify-end gap-3 border-t border-dashed border-navy/15 pt-3 text-sm text-navy/65">
      Subtotal <span className="font-serif text-lg font-semibold text-navy">{money(total)}</span>
    </div>
  );
}

function RadioDot({ checked }: { checked: boolean }) {
  return (
    <span
      className={`grid h-5 w-5 shrink-0 place-items-center rounded-full border-2 ${
        checked ? "border-saffron" : "border-navy/30"
      }`}
    >
      <span
        className={`h-2.5 w-2.5 rounded-full bg-saffron transition ${
          checked ? "scale-100" : "scale-0"
        }`}
      />
    </span>
  );
}

function BoxCheck({ checked }: { checked: boolean }) {
  return (
    <span
      className={`grid h-5 w-5 shrink-0 place-items-center rounded-md border-2 transition ${
        checked ? "border-saffron bg-saffron" : "border-navy/25 bg-white"
      }`}
    >
      <svg
        viewBox="0 0 16 16"
        className={`h-3 w-3 stroke-white ${checked ? "opacity-100" : "opacity-0"}`}
        fill="none"
        strokeWidth={3}
      >
        <polyline points="2,8 6,12 14,3" />
      </svg>
    </span>
  );
}

function SwitchDot({ on }: { on: boolean }) {
  return (
    <span
      className={`relative inline-block h-5 w-9 shrink-0 rounded-full transition ${
        on ? "bg-saffron" : "bg-navy/20"
      }`}
    >
      <span
        className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition ${
          on ? "left-[1.125rem]" : "left-0.5"
        }`}
      />
    </span>
  );
}

function PlusIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" strokeWidth={2}>
      <path d="M8 2v12M2 8h12" stroke="currentColor" strokeLinecap="round" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" strokeWidth={1.8}>
      <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeLinecap="round" />
    </svg>
  );
}
