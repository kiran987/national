import type { DetailedProgram } from '../programs';

// ARCHIVED: National Spike volleyball, Fall 2026 (Oct 22 - Dec 10, 2026, Knox-Met Fellowship Hall Gym).
// Snapshot of the program as it ran before Winter 2027. Not rendered on the live site.
export const volleyballFall2026: DetailedProgram =
{
  id: 'volleyball',
  slug: 'volleyball',
  order: 2,
  status: 'active',
  name: 'National Spike - Volleyball',
  navTitle: 'Volleyball',
  shortName: 'National Spike',
  badge: 'Registration Open · Active Academy',
  subtitle: 'Passing Precision, Setting & Attack Mechanics',
  tagline: 'Developing dynamic movement, court agility, and crisp volleyball fundamentals.',
  emoji: '',
  icon: 'volleyball',
  color: '#83161B',
  accentColor: '#DDAA40',
  bgColor: 'rgba(131,22,27,0.08)',
  image: '/images/programs/volleyball-action-1.webp',
  gallery: [
    '/images/programs/volleyball-action-1.webp',
    '/images/programs/volleyball-portrait-1.webp',
    '/images/programs/volleyball-portrait-2.webp',
    '/images/programs/volleyball-portrait-3.webp',
  ],
  description:
    'Comprehensive indoor volleyball instruction covering forearm platform passing, overhead setting precision, overhand serve consistency, spike approach footwork, and team defensive rotation with age-adjusted net heights at Knox-Met Fellowship Hall Gym.',
  longDescription:
    'Volleyball demands explosive agility, exceptional hand-eye coordination, and split-second teamwork. The NAA Volleyball Academy provides Regina youth with a technical foundation that standard school physical education cannot match. Led by screened, Safe Sport–trained coaches (including NCCP Volleyball Canada trained leadership), players master ball control mechanics in structured drills and small-sided modified games at Knox-Met Fellowship Hall Gym (Downtown Regina).',
  ages: 'Ages 8–16 (Spike Foundations: 8–12, Spike Elite: 13–16)',
  venue: 'Knox-Met Fellowship Hall Gym, 2340 Victoria Ave, Regina, SK',
  seasonDuration: 'Fall 2026: Oct 22 – Dec 10, 2026 (8 Weeks · 16 Classes)',
  sessionsPerWeek: 'Thu & Fri (Phase 1) · Tue & Thu (Phase 2) · 7:00–8:00 PM (60 mins)',
  blockWeeks: 8,
  blockPrice: 205,
  hourlyRate: 0,
  paymentPlan: true,
  teamLinktUrl: 'https://app.teamlinkt.com/register/find/nationalathleticsacademy?cid=79253',
  highlights: [
    'Fall 2026: Currently in session at Knox-Met Fellowship Hall Gym (2340 Victoria Ave)',
    'Venue: Knox-Met Fellowship Hall Gym (Downtown Regina)',
    'Total 16 Sessions: 7:00 PM – 8:00 PM (60 mins)',
    'Phase 1 (Oct 22 – Nov 13): Thursdays & Fridays (8 sessions)',
    'Phase 2 (Nov 17 – Dec 10): Tuesdays & Thursdays (8 sessions)',
    'Spike Foundations (Ages 8–12): $205 CAD · Spike Elite (Ages 13–16): $225 CAD',
    'Age-adjusted net heights and lightweight Mikasa trainer balls for optimal learning',
    'Screened, Safe Sport–trained coaches emphasizing injury-safe landing mechanics',
    'Dedicated focus on the 3-contact rally principle (Pass, Set, Attack)',
    'Overhand serving progression from underhand basics to power float serves',
    'End-of-block NAA Athlete Progress Report card and skill evaluations',
  ],
  skillsFocus: [
    'Forearm Platform Angle, Shoulder Shrug & Target Control',
    'Overhead Finger-Set Placement, Footwork & Body Alignment',
    'Overhand Serve Mechanics, Toss Consistency & Contact Velocity',
    '3-Step & 4-Step Spike Approach, Arm Swing & Landing Balance',
    'Base Defense, Tip Coverage, Digging & Court Communication',
    'Rotational Rules, Free-Ball Transition & Rally Management',
  ],
  tiers: [
    {
      name: 'Spike Foundations',
      badge: 'Ages 8–12 · 60 min · $205 CAD',
      ages: 'Ages 8–12',
      format: '60 min · Thu/Fri then Tue/Thu (7:00–8:00 PM) · $205 CAD',
      focus:
        'Movement to the ball, solid forearm platform passing, overhead setting touch, underhand & intro overhand serving, and modified Tripleball gameplay.',
      ratio: '1:10 to 1:12 Coach Ratio',
      curriculum: [
        'Ready stance, split-step movement, and platform construction',
        'Soft hands overhead setting mechanics above the forehead',
        'Consistent underhand and introductory overhand serving form',
        'Tripleball format to maximize multi-contact rallies and touches',
      ],
    },
    {
      name: 'Spike Elite',
      badge: 'Ages 13–16 · 60 min · $225 CAD',
      ages: 'Ages 13–16',
      format: '60 min · Thu/Fri then Tue/Thu (7:00–8:00 PM) · $225 CAD',
      focus:
        'Overhand float serving, spike approach timing, block positioning, defensive digging, offensive transition, and full 6v6 competitive play.',
      ratio: '1:12 to 1:14 Coach Ratio',
      curriculum: [
        'Aggressive overhand float and spot serving',
        'Dynamic spike approach, vertical takeoff, and wrist-snap finishes',
        'Perimeter and rotational defensive schemes with vocal calling',
        'Full matchplay, referee etiquette, and game tactical management',
      ],
    },
  ],
  whatsIncluded: [
    'Spike Foundations (Ages 8–12): $205 CAD · 16 Sessions (60 mins)',
    'Spike Elite (Ages 13–16): $225 CAD · 16 Sessions (60 mins)',
    '16 Training Sessions (Oct 22 – Dec 10, 2026) · 7:00 PM – 8:00 PM',
    'Official NAA National Spike Training Shirt',
    'Screened, Safe Sport–trained coach instruction, scrimmages & regulation adjusted net facilities',
    'End-of-block NAA Volleyball Progress Report',
    'Dedicated team communications & schedule updates via the TeamLinkt app',
  ],
  faqs: [
    {
      question: 'Are knee pads required for volleyball?',
      answer:
        'Volleyball knee pads are strongly recommended for safety and comfort. Clean, non-marking indoor court shoes and comfortable athletic wear are mandatory.',
    },
    {
      question: 'My child has never played volleyball before. Can they join?',
      answer:
        'Yes! Our Spike Foundations tier (Ages 8–12) welcomes complete beginners. We use low-impact training balls so athletes learn proper technique without discomfort.',
    },
    {
      question: 'How does the Family & Multi-Child Discount work?',
      answer:
        'We offer a 10% discount starting on your second registered participant (and each additional child). Complete registration for Child 1, then click "+ Register Another Participant" before paying. Your 10% multi-child discount is applied automatically by the TeamLinkt registration system at checkout when the registration is eligible.',
    },
    {
      question: 'When are final schedules and training groups confirmed?',
      answer:
        'Final schedules and training group assignments will be confirmed in the TeamLinkt app once registrations and facility allocations are complete.',
    },
  ],
};

export const volleyballFall2026Schedule = [
{
  id: 'volleyball-fall-foundations',
  sport: 'Volleyball',
  season: 'Fall 2026',
  tier: 'Spike Foundations',
  ageGroup: 'Ages 8–12',
  facility: 'Knox-Met Fellowship Hall Gym',
  address: '2340 Victoria Ave, Regina (Downtown)',
  day: 'Thu & Fri (Oct 22–Nov 13) · Tue & Thu (Nov 17–Dec 10)',
  timeSlot: '7:00 PM – 8:00 PM (60 mins)',
  dates: 'Oct 22 – Dec 10, 2026 (Total 16 Classes · Phase 1 & 2)',
  coachRatio: '1:10 Ratio',
  status: 'In Session',
  price: '$205 CAD',
  registerUrl: 'https://app.teamlinkt.com/register/find/nationalathleticsacademy?cid=79253',
  notes: 'Currently In Session at Church. 16 Classes (7:00–8:00 PM). Low-impact Mikasa trainer balls, adjusted net heights.'
},
{
  id: 'volleyball-fall-elite',
  sport: 'Volleyball',
  season: 'Fall 2026',
  tier: 'Spike Elite',
  ageGroup: 'Ages 13–16',
  facility: 'Knox-Met Fellowship Hall Gym',
  address: '2340 Victoria Ave, Regina (Downtown)',
  day: 'Thu & Fri (Oct 22–Nov 13) · Tue & Thu (Nov 17–Dec 10)',
  timeSlot: '7:00 PM – 8:00 PM (60 mins)',
  dates: 'Oct 22 – Dec 10, 2026 (Total 16 Classes · Phase 1 & 2)',
  coachRatio: '1:12 Ratio',
  status: 'In Session',
  price: '$225 CAD',
  registerUrl: 'https://app.teamlinkt.com/register/find/nationalathleticsacademy?cid=79253',
  notes: 'Currently In Session at Church. 16 Classes (7:00–8:00 PM). Float serves, spike approach footwork, 6v6 match play.'
}
];
