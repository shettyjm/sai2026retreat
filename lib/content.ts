export type AgendaItem = {
  time: string;
  title: string;
  note?: string;
};

export type AgendaDay = {
  id: string;
  label: string;
  date: string;
  summary: string;
  items: AgendaItem[];
};

export const retreat = {
  name: "43rd Annual Region 7 Sai Retreat",
  theme: "Be The Spiritual Athlete Inside",
  dates: "Friday, August 21, 2026 to Sunday, August 23, 2026",
  timeWindow: "Friday 6:00 PM to Sunday 4:00 PM",
  venue: "Monte Toyon Camp & Conference Center",
  address: "220 Cloister Lane, Aptos, CA 95003",
  venueUrl: "https://www.uccr.org/monte-toyon",
  registrationUrl: "#registration",
  mapUrl: "https://maps.google.com/?q=220+Cloister+Lane+Aptos+CA+95003",
  logoUrl:
    "https://region7saicenters.org/region7new/retreat/assets/images/ssio-logo.png",
  heroImageUrl:
    "https://region7saicenters.org/region7new/retreat/assets/images/swami2025.jpg",
};

export const highlights = [
  "Devotional offerings and spiritual fellowship",
  "Speaker sessions centered on discipline, love, and inner transformation",
  "Workshops, reflection spaces, and quiet nature moments",
  "Dedicated SSE and young adult programming",
  "Family-friendly rhythm with clear access to each day’s agenda",
  "A peaceful redwood setting for prayer, service, and renewal",
];

export const agenda: AgendaDay[] = [
  {
    id: "friday",
    label: "Friday",
    date: "August 21, 2026",
    summary: "Arrival, settling in, devotional opening, and fellowship.",
    items: [
      { time: "6:00 PM", title: "Arrival and check-in" },
      { time: "6:45 PM", title: "Dinner" },
      { time: "8:00 PM", title: "Outdoor firepit gathering", note: "Weather permitting" },
      { time: "9:00 PM", title: "Devotional offering and quiet close" },
    ],
  },
  {
    id: "saturday",
    label: "Saturday",
    date: "August 22, 2026",
    summary: "The fullest retreat day with practice, learning, reflection, and evening offering.",
    items: [
      { time: "6:00 AM", title: "Suprabatham" },
      { time: "6:30 AM", title: "Nagar Sankirtan" },
      { time: "7:15 AM", title: "Yoga, nature walk, or fireball activity" },
      { time: "8:00 AM", title: "Breakfast" },
      { time: "9:00 AM", title: "Check-in continuation and welcome flow" },
      { time: "10:00 AM", title: "Devotional offering" },
      { time: "11:00 AM", title: "Speaker session" },
      { time: "12:30 PM", title: "Lunch" },
      { time: "2:00 PM", title: "Workshops" },
      { time: "3:30 PM", title: "1:1 with Swami or reflection experience" },
      { time: "4:30 PM", title: "Tea break" },
      { time: "5:15 PM", title: "Stories of unconditional love" },
      { time: "6:30 PM", title: "Dinner" },
      { time: "8:00 PM", title: "Young adult offering" },
    ],
  },
  {
    id: "sunday",
    label: "Sunday",
    date: "August 23, 2026",
    summary: "Prayerful closing with speaker reflection, workshops, and departure.",
    items: [
      { time: "6:00 AM", title: "Suprabatham" },
      { time: "6:30 AM", title: "Nagar Sankirtan" },
      { time: "7:15 AM", title: "Nature walk or fireball activity" },
      { time: "8:00 AM", title: "Breakfast" },
      { time: "9:00 AM", title: "Devotional offering" },
      { time: "10:00 AM", title: "Speaker session" },
      { time: "11:15 AM", title: "Q&A with speakers" },
      { time: "12:30 PM", title: "Lunch" },
      { time: "1:30 PM", title: "Workshops" },
      { time: "3:00 PM", title: "Closing prayer" },
      { time: "4:00 PM", title: "Departure" },
    ],
  },
];

export const speakers = [
  {
    name: "Speaker to be announced",
    role: "Retreat keynote",
    bio: "Placeholder profile for the main retreat speaker. This section is ready to swap in final names, bios, and photos later.",
  },
  {
    name: "Panelist to be announced",
    role: "Workshop facilitator",
    bio: "Use this card area for workshop leaders, moderators, and devotional contributors as details are finalized.",
  },
  {
    name: "Young adult speaker to be announced",
    role: "YA session",
    bio: "A dedicated card is included so the young adult program can remain visible as part of the overall retreat experience.",
  },
];

export const logistics = [
  "Expect a peaceful camp setting surrounded by redwoods, shared movement between program spaces, and a devotional rhythm throughout the day.",
  "Bring comfortable modest clothing, layers for cool mornings and evenings, walking shoes, a water bottle, medicines, and any personal devotional items.",
  "Food details, lodging assignments, transportation coordination, and quiet-hour instructions can be finalized here once confirmed.",
  "Arrival guidance should include parking directions, check-in windows, and elder-friendly drop-off notes.",
  "This section is structured for emergency preparedness, dietary notes, weather expectations, and family support information.",
];

export const youthNotes = [
  "SSE check-in can be highlighted near the family arrival flow so parents know exactly where to go.",
  "Children and youth can join common devotional segments while having dedicated age-appropriate activities throughout the day.",
  "Saturday can feature devotional participation, structured activities, lunch, afternoon sessions, and rejoining the common program.",
  "Young adults can have clearly marked speaker time, workshops, and offering moments integrated into the main retreat timeline.",
];

export const faqs = [
  {
    question: "When should I arrive?",
    answer:
      "The retreat opens Friday, August 21, 2026 at 6:00 PM. The draft schedule currently suggests arriving in time for check-in and dinner.",
  },
  {
    question: "Where is Monte Toyon?",
    answer:
      "Monte Toyon Camp & Conference Center is located at 220 Cloister Lane, Aptos, CA 95003.",
  },
  {
    question: "Is food included?",
    answer:
      "Meal timing is built into the draft agenda. Final meal and dietary accommodation details can be added once registration details are confirmed.",
  },
  {
    question: "Is this family friendly?",
    answer:
      "Yes. The site is being structured for families, elders, and first-time attendees with large text, clear day-by-day guidance, and quick agenda access.",
  },
  {
    question: "Will there be an SSE program?",
    answer:
      "Yes. A dedicated SSE and youth page is included in this first draft and can be expanded with finalized schedules.",
  },
  {
    question: "Who should I contact for registration help?",
    answer:
      "This draft includes placeholder contact areas that can be updated with event coordinators and regional contacts.",
  },
];

export const contacts = [
  {
    title: "Retreat registration",
    detail: "Registration link and support contact",
  },
  {
    title: "Regional coordinator",
    detail: "Coordinator name, phone, and email",
  },
  {
    title: "Family / SSE support",
    detail: "Primary contact for parents and youth questions",
  },
];
