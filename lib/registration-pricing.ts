export type TierKey = "under5" | "age6_11" | "age12up";

export type MealKey = "breakfast" | "lunch" | "dinner";

export type DayName = "Friday" | "Saturday" | "Sunday";

export type LodgingKey =
  | "fri_sun"
  | "fri_sat"
  | "sat_sun"
  | "day_sat"
  | "day_sun"
  | "day_both";

export type AgeTier = {
  lodging: number;
  dayFee: number;
  meals: Record<MealKey, number>;
};

export type LodgingOption = {
  label: string;
  sub: string;
  nights: number;
  dayFees: number;
  days: Partial<Record<DayName, MealKey[]>>;
};

export const AGE: Record<TierKey, AgeTier> = {
  under5: {
    lodging: 0,
    dayFee: 0,
    meals: { breakfast: 0, lunch: 0, dinner: 0 },
  },
  age6_11: {
    lodging: 44.5,
    dayFee: 18.75,
    meals: { breakfast: 10.731, lunch: 12.86625, dinner: 14.2 },
  },
  age12up: {
    lodging: 81.5,
    dayFee: 34.75,
    meals: { breakfast: 15.71325, lunch: 18.88875, dinner: 21.7 },
  },
};

export const ADULT_AGES: { label: string; tier: TierKey }[] = [
  { label: "Young Adult", tier: "age12up" },
  { label: "Adult", tier: "age12up" },
  { label: "Senior", tier: "age12up" },
];

export const CHILD_AGES: { label: string; tier: TierKey }[] = [
  { label: "5 and under", tier: "under5" },
  { label: "6 through 11", tier: "age6_11" },
];

export const GENDERS = [
  "Female",
  "Male",
  "Non-binary",
  "Prefer not to say",
] as const;

export const SERVICES = [
  "Altar",
  "Audio/Video Operations",
  "Book Store",
  "Campsite Activities",
  "Devotional Help",
  "Food Service",
  "Medical",
  "Parking Support",
  "Registration Desk",
  "SSE Assistance",
  "Ushering",
  "Venue Cleanup",
  "Venue Setup",
  "Videography",
  "Envirocare",
] as const;

export const MEALS: Record<MealKey, { name: string; time: string }> = {
  breakfast: { name: "Breakfast", time: "morning" },
  lunch: { name: "Lunch", time: "midday" },
  dinner: { name: "Dinner", time: "evening" },
};

export const ALL_MEALS: MealKey[] = ["breakfast", "lunch", "dinner"];

export const LODGING: Record<LodgingKey, LodgingOption> = {
  fri_sun: {
    label: "Overnight Stay",
    sub: "Friday PM thru Sunday PM",
    nights: 2,
    dayFees: 0,
    days: { Friday: ["dinner"], Saturday: ALL_MEALS, Sunday: ALL_MEALS },
  },
  fri_sat: {
    label: "Overnight Stay",
    sub: "Friday PM thru Saturday PM",
    nights: 1,
    dayFees: 0,
    days: { Friday: ["dinner"], Saturday: ALL_MEALS },
  },
  sat_sun: {
    label: "Overnight Stay",
    sub: "Saturday AM thru Sunday PM",
    nights: 1,
    dayFees: 0,
    days: { Saturday: ALL_MEALS, Sunday: ALL_MEALS },
  },
  day_sat: {
    label: "Day Only",
    sub: "Saturday",
    nights: 0,
    dayFees: 1,
    days: { Saturday: ALL_MEALS },
  },
  day_sun: {
    label: "Day Only",
    sub: "Sunday",
    nights: 0,
    dayFees: 1,
    days: { Sunday: ALL_MEALS },
  },
  day_both: {
    label: "Day Only",
    sub: "Both Days",
    nights: 0,
    dayFees: 2,
    days: { Saturday: ALL_MEALS, Sunday: ALL_MEALS },
  },
};

export const LODGING_KEYS: LodgingKey[] = [
  "fri_sun",
  "fri_sat",
  "sat_sun",
  "day_sat",
  "day_sun",
  "day_both",
];

export function packagePrice(tier: TierKey, key: LodgingKey): number {
  const a = AGE[tier];
  const L = LODGING[key];
  let t = L.nights * a.lodging + L.dayFees * a.dayFee;
  for (const meals of Object.values(L.days)) {
    if (!meals) continue;
    for (const m of meals) t += a.meals[m];
  }
  return t;
}

export type Person = {
  id: number;
  type: "adult" | "child";
  first: string;
  last: string;
  center?: string;
  ageLabel: string;
  tier: TierKey | null;
  gender?: string;
  email?: string;
  phone?: string;
  lodging: LodgingKey | null;
  selected: Partial<Record<DayName, Set<MealKey>>>;
  services?: Set<string>;
  comments?: string;
};

export function personTotal(p: Person): number {
  if (!p.lodging || !p.tier) return 0;
  const a = AGE[p.tier];
  const L = LODGING[p.lodging];
  let t = L.nights * a.lodging + L.dayFees * a.dayFee;
  for (const set of Object.values(p.selected)) {
    if (!set) continue;
    set.forEach((m) => {
      t += a.meals[m];
    });
  }
  return t;
}

export const money = (n: number): string => `$${n.toFixed(2)}`;
