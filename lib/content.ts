export type AgendaItem = {
  time: string;
  title: string;
  note?: string;
  icon: string;
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
  registrationUrl: "/registration",
  cognitoFormUrl:
    "https://www.cognitoforms.com/SSIOUSARegion7AnnualRetreat/RegistrationForSSSIOUSARegion743rdAnnualRegionalRetreat2026",
  registrationEmail: "reg7retreat@gmail.com",
  registrationPhone: "650-641-0059",
  mapUrl: "https://maps.google.com/?q=220+Cloister+Lane+Aptos+CA+95003",
  logoUrl:
    "https://region7saicenters.org/region7new/retreat/assets/images/ssio-logo.png",
  heroImageUrl:
    "https://region7saicenters.org/region7new/retreat/assets/images/swami2025.jpg",
};

export const lodgingOptions = [
  {
    title: "Semi-Private Lodges",
    description: "No semi-private lodges at this location.",
  },
  {
    title: "Cabins / Dorms",
    description:
      "Dormitory-style accommodations include a variety of room configurations that sleep 4, 6, and 8 guests. Sleeping arrangements feature twin-size wooden bunk beds. Bathrooms are separated for men and women and include multiple toilets, sinks, and private shower stalls. Men and women will be housed in separate rooms, as family dormitories are not available. Boys will room with their fathers, and girls will room with their mothers. Guests should bring their own bedding, including sheets or sleeping bags, pillows, and towels.",
  },
  {
    title: "Day Use",
    description:
      "For people who will attend the retreat for 1 or 2 days with no overnight staying onsite.",
  },
];

export type PricingRow = {
  ageGroup: string;
  overnight: string;
  oneDay: string;
  twoDay: string;
};

export const pricingRows: PricingRow[] = [
  { ageGroup: "5 and under", overnight: "$0", oneDay: "$0", twoDay: "$0" },
  { ageGroup: "6 through 11", overnight: "$120", oneDay: "$57", twoDay: "$113" },
  { ageGroup: "12 and Up", overnight: "$194", oneDay: "$91", twoDay: "$182" },
];

export const registrationNotes = [
  "Registration for the entire retreat includes lodging for one night, two breakfasts, two lunches, and two dinners.",
  '"Day Use - Sat" includes breakfast, lunch, and dinner.',
  '"Day Use - Sun" includes breakfast, lunch, and dinner.',
];

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
      { time: "6:00 PM", title: "Arrival and check-in", icon: "🎒" },
      { time: "6:45 PM", title: "Dinner", icon: "🍽️" },
      { time: "8:00 PM", title: "Outdoor firepit gathering", note: "Weather permitting", icon: "🔥" },
      { time: "9:00 PM", title: "Devotional offering and quiet close", icon: "🪔" },
    ],
  },
  {
    id: "saturday",
    label: "Saturday",
    date: "August 22, 2026",
    summary: "The fullest retreat day with practice, learning, reflection, and evening offering.",
    items: [
      { time: "6:00 AM", title: "Suprabatham", icon: "🌅" },
      { time: "6:30 AM", title: "Nagar Sankirtan", icon: "🎶" },
      { time: "7:15 AM", title: "Yoga, nature walk, or fireball activity", icon: "🧘" },
      { time: "8:00 AM", title: "Breakfast", icon: "🥣" },
      { time: "9:00 AM", title: "Check-in continuation and welcome flow", icon: "👋" },
      { time: "10:00 AM", title: "Devotional offering", icon: "🪔" },
      { time: "11:00 AM", title: "Speaker session", icon: "🎤" },
      { time: "12:30 PM", title: "Lunch", icon: "🍽️" },
      { time: "2:00 PM", title: "Workshops", icon: "🛠️" },
      { time: "3:30 PM", title: "1:1 with Swami or reflection experience", icon: "🙏" },
      { time: "4:30 PM", title: "Tea break", icon: "☕" },
      { time: "5:15 PM", title: "Stories of unconditional love", icon: "💗" },
      { time: "6:30 PM", title: "Dinner", icon: "🍽️" },
      { time: "8:00 PM", title: "Young adult offering", icon: "🌟" },
    ],
  },
  {
    id: "sunday",
    label: "Sunday",
    date: "August 23, 2026",
    summary: "Prayerful closing with speaker reflection, workshops, and departure.",
    items: [
      { time: "6:00 AM", title: "Suprabatham", icon: "🌅" },
      { time: "6:30 AM", title: "Nagar Sankirtan", icon: "🎶" },
      { time: "7:15 AM", title: "Nature walk or fireball activity", icon: "🌳" },
      { time: "8:00 AM", title: "Breakfast", icon: "🥣" },
      { time: "9:00 AM", title: "Devotional offering", icon: "🪔" },
      { time: "10:00 AM", title: "Speaker session", icon: "🎤" },
      { time: "11:15 AM", title: "Q&A with speakers", icon: "❓" },
      { time: "12:30 PM", title: "Lunch", icon: "🍽️" },
      { time: "1:30 PM", title: "Workshops", icon: "🛠️" },
      { time: "3:00 PM", title: "Closing prayer", icon: "🙏" },
      { time: "4:00 PM", title: "Departure", icon: "🚗" },
    ],
  },
];

import type { StaticImageData } from "next/image";

import aparnaMurali from "@/assets/AparnaMurali.jpeg";

export type Speaker = {
  name: string;
  role: string;
  bio: string;
  image?: StaticImageData;
};

export const speakers: Speaker[] = [
  {
    name: "Alejandro “Alex” Grana",
    role: "Retreat speaker",
    bio: "Originally from Peru, Alejandro “Alex” Grana, first met Sri Sathya Sai Baba in the mid 1980’s. Since then, he’s received direct guidance from Swami and has also served in various SSSIO capacities over the last 30 years. Starting his journey as a Young Adult Coordinator, in the US Alex has served as Devotional Coordinator and President of Region 10, National Service Coordinator and National Vice President. As part of his international duties with the SSSIO, he served as Secretary of the Humanitarian Relief Committee and Chairman of the Events and Hospitality Committee, responsible for coordinating all pilgrimages and events to Prasanthi Nilayam and around the world. He has also been blessed to direct and present devotional programs in Swami’s Divine Presence. Today, Alex serves as the US National Council President, Chairman of the International Events Committee, and Member of the International Humanitarian Relief Committee.\n\nAlex settled in Texas in 1993, graduating with honors from the University of Texas at Austin for both his undergraduate degree and MBA. After a successful corporate career, Alex retired as head of global investments of Tivoli Systems — IBM Software Group, to pursue his own entrepreneurial interests. He and his family also own and operate a brand of Montessori schools in Austin.",
  },
  {
    name: "Aparna Murali",
    role: "Retreat speaker",
    bio: "Aparna Murali is deeply grateful for the blessing of being born into a family devoted to Bhagawan since the early 1960s. While Balvikas laid a strong foundation for loving God, it was the three transformative years spent living as His student that profoundly shaped her spiritual journey. She feels blessed to have had the opportunity to serve at all levels of the SSSIO — Center, Regional, National, Zonal, and International. She currently serves as a member of the SSSIO Education Committee and as the Zone 1 Education Coordinator. Among all her roles, the one she cherishes the most is being part of SSE as a perpetual learner.\n\nProfessionally, Aparna works in the Department of Obstetrics and Gynecology at UCLA as a Reproductive Genetic Counselor. In addition to her clinical practice, she is actively involved in teaching and mentorship, serving as faculty and clinical supervisor for UCLA's Graduate Program in Genetic Counseling, where she shares her knowledge and passion with the next generation of counselors.",
    image: aparnaMurali,
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
