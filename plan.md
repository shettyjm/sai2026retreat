# Sri Sathya Sai International Organization — Region 7
# 43rd Annual Retreat Website Plan

## 1. Website Goal

Create a beautiful, peaceful, mobile-friendly static website for the Sri Sathya Sai International Organization Region 7 — 43rd Annual Retreat.

The site should help devotees and families quickly understand:

- Retreat theme
- Dates and location
- Registration details
- Full weekend agenda
- Speakers
- Logistics
- SSE / youth program
- FAQ and important information
- Contact details

## 2. Retreat Details

Event: 43rd Annual Region 7 Sai Retreat  
Theme: Be The Spiritual Athlete Inside  
Dates: Friday, August 21, 2026, 6:00 PM to Sunday, August 23, 2026, 4:00 PM  
Location: Monte Toyon Camp & Conference Center  
Address: 220 Cloister Lane, Aptos, CA 95003  
Venue URL: https://www.uccr.org/monte-toyon

## 3. Design Direction

Style should feel:

- Spiritual
- Warm
- Peaceful
- Premium but simple
- Easy for families and elders to use
- Mobile-first
- WhatsApp-share friendly

Suggested visual style:

- White / cream background
- Soft gold, saffron, and deep blue accents
- Gentle gradients
- Rounded cards
- Timeline-based agenda
- Large readable fonts
- Minimal clutter
- Devotional but not overly busy

## 4. Recommended Tech Stack

Use:

- Next.js App Router
- TypeScript
- Tailwind CSS
- Static content files
- No database for MVP
- Deploy to Vercel

Optional later:

- CMS using Markdown files
- Google Forms registration link
- Speaker image uploads
- PDF download
- FAQ search
- Admin-editable content later

## 5. Website Pages / Sections

### Homepage

Sections:

1. Hero
   - Event name
   - Theme
   - Dates
   - Location
   - Register button
   - View agenda button

2. Theme Section
   - “Be The Spiritual Athlete Inside”
   - Short explanation of spiritual discipline, devotion, service, love, and inner transformation

3. Retreat Highlights
   - Devotional programs
   - Speaker sessions
   - Workshops
   - Youth / SSE activities
   - Nature, silence, and fellowship
   - 1:1 with Swami / reflection experience

4. Weekend Timeline Preview
   - Friday arrival
   - Saturday full retreat day
   - Sunday closing program

5. Location
   - Monte Toyon, Aptos
   - Redwood forest retreat setting
   - Map link
   - Important arrival notes

6. Registration
   - Price placeholder
   - Form link placeholder
   - Contact info

7. Contact Cards
   - Event coordinators
   - Regional contact

---

### Agenda Page

Use a beautiful vertical timeline.

#### Friday — August 21, 2026

- 6:00 PM — Arrival and check-in
- Dinner
- Outdoor firepit
- Devotional offering

#### Saturday — August 22, 2026

- Suprabatham
- Nagar Sankirtan
- Yoga / Nature walk / Fireball activity
- Breakfast
- Check-in continuation
- Devotional offering
- Speaker session
- Lunch
- Workshops
- 1:1 with Swami / reflection
- Tea break
- Stories of Unconditional Love
- Dinner
- YA offering

#### Sunday — August 23, 2026

- Suprabatham
- Nagar Sankirtan
- Nature walk / Fireball activity
- Breakfast
- Devotional offering
- Speaker session
- Q&A with speakers
- Lunch
- Workshops
- Closing prayer
- Departure by 4:00 PM

---

### Speakers Page

Speaker card format:

Name: Sai Sai Sai  
Bio: Sai devotee for life  
Photo: placeholder image for now

Make it easy to add more speakers later.

---

### Logistics Page

Include:

- What to expect at the site
- Items to bring
- Emergency preparedness
- Transportation
- Food and dietary information
- Lodging expectations
- Parking
- Weather guidance
- Check-in process
- Quiet hours
- Family and elder-friendly notes

---

### SSE / Youth Page

Sections:

- SSE check-in
- Participation in common program
- Saturday devotional program
- SSE activity item 1
- SSE activity item 2
- Lunch
- Afternoon SSE activities
- Rejoining common program

---

### FAQ Page

Suggested FAQ:

- When should I arrive?
- Where is Monte Toyon?
- Is food included?
- Can dietary restrictions be accommodated?
- What should I bring?
- Is this family friendly?
- Is there an SSE program?
- Who do I contact for registration help?
- What happens after registration?
- Is transportation provided?

## 6. Contact Information

Event Coordinators:

- Ram Sivaraman
- Shalini Sekar
- Jayanti Srinivasan

Phone: 1-800-SAI-RETREAT  
Email: sairetreat@region7saicenter.org

Regional Contact:

- Niranjen Kanapathipillai

Phone: 1-800-SAI-RETREAT  
Email: sairetreat@region7saicenter.org

## 7. Content Structure

Create files like:

```txt
/src/content/retreat.ts
/src/content/agenda.ts
/src/content/speakers.ts
/src/content/faq.ts
