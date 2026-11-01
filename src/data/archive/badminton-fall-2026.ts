import type { DetailedProgram } from '../programs';

// ARCHIVED: National Smash badminton, Fall 2026 (Oct 22 - Dec 10, 2026, Knox-Met Fellowship Hall Gym).
// Snapshot of the program as it ran before Winter 2027. Not rendered on the live site.
export const badmintonFall2026: DetailedProgram =
{
  id: 'badminton',
  slug: 'badminton',
  order: 1,
  status: 'active',
  name: 'National Smash - Badminton',
  navTitle: 'Badminton',
  shortName: 'National Smash',
  badge: 'Registration Open · Active Academy',
  subtitle: 'Grip Precision, Footwork Ladders & Fast-Twitch Agility',
  tagline: 'High-speed reflexes, deceptive racket angles, and master court footwork.',
  emoji: '',
  icon: 'badminton',
  color: '#021F47',
  accentColor: '#DDAA40',
  bgColor: 'rgba(2,31,71,0.08)',
  image: '/images/programs/badminton-action-1.webp',
  gallery: [
    '/images/programs/badminton-action-1.webp',
    '/images/programs/badminton-action-2.webp',
    '/images/programs/badminton-portrait-1.webp',
    '/images/programs/badminton-portrait-2.webp',
  ],
  description:
    'Specialized badminton coaching covering forehand and backhand grip mechanics, 6-corner court footwork, clear, drop, smash, and net-kill shot execution, with tactical singles and doubles matchplay at Knox-Met Fellowship Hall Gym.',
  longDescription:
    'Badminton is the world\'s fastest racket sport, demanding exceptional cardiovascular endurance, hand-eye reactivity, and explosive multi-directional footwork. The NAA Badminton Academy provides structured technical instruction for Regina youth at Knox-Met Fellowship Hall Gym (Downtown Regina), transforming recreational backyard play into crisp, competitive court mastery under screened, Safe Sport–trained coaches across our progressive Fall 2026 curriculum.',
  ages: 'Ages 6–15 (Smash Foundation: 6–10, Smash Elite: 11–15)',
  ratio: '1:8 to 1:15 Coach-to-Athlete Ratio',
  venue: 'Knox-Met Fellowship Hall Gym, 2340 Victoria Ave, Regina, SK',
  seasonDuration: 'Fall 2026: Oct 22 – Dec 10, 2026 (8 Weeks)',
  sessionsPerWeek: 'Thursdays 5:30–7:00 PM (90 mins, 8 Weeks)',
  blockWeeks: 8,
  blockPrice: 125,
  hourlyRate: 0,
  paymentPlan: true,
  teamLinktUrl: 'https://app.teamlinkt.com/register/go/nationalathleticsacademy/200985',
  highlights: [
    'Fall 2026: Currently in session at Knox-Met Fellowship Hall Gym (2340 Victoria Ave)',
    'Oct 22 – Dec 10, 2026: 8 classes · Thursdays 5:30 PM – 7:00 PM (90 mins, 8 Weeks)',
    'Smash Foundation (Ages 6–10): $125 CAD · Smash Elite (Ages 11–15): $150 CAD',
    'Official NAA Training Jersey available for $22 CAD',
    '10% Sibling Discount available for 2nd registered child',
    '90-minute high-energy sessions with Yonex practice shuttles and loaner rackets provided',
    'Strict 1:8 to 1:15 athlete-to-coach ratios ensuring individualized racket technique',
    'High-grade Yonex practice nylon shuttles (Mavis 300/350) and loaner rackets provided',
    'End-of-block NAA Athlete Progress Report card and individual skill evaluations',
  ],
  skillsFocus: [
    'Shake-Hands "V-Grip", Backhand Thumb-Press & Instant Grip Switching',
    'Split-Step Timing, Agility Footwork Ladders & 6-Corner Court Cadence',
    'Underhand High Serves, Low Backhand Flick Serves & 3rd-Shot Patterns',
    'High Overhead Clears, Scissor-Kick Transitions & Rear-Court Depth',
    'Gentle Drops, Slow/Fast Slices, Tight Tumbling Net Spins & Brush Net Kills',
    'Flat-Trajectory Mid-Court Drives, Jump Smash Power & Reflexive Defense Blocks',
    'Doubles Rotational Systems (Attack Front/Back vs. Defend Side-by-Side) & Tournament Matchplay',
  ],
  tiers: [
    {
      name: 'Smash Foundation',
      badge: 'Ages 6–10 · 90 min · $125 CAD',
      ages: 'Ages 6–10',
      format: '90 min · Thursdays 5:30–7:00 PM · $125 CAD',
      teamLinktUrl: 'https://app.teamlinkt.com/register/go/nationalathleticsacademy/200985',
      focus:
        'Physical literacy, hand-eye coordination, neutral grip habits, underhand serving accuracy, court boundary games, gentle net drops, swat attacks, and Jamboree mini-meet competition.',
      ratio: '1:8 to 1:10 Coach Ratio',
      curriculum: [
        'Week 1: Shake-hands V-grip, pancake grip elimination, birdie balance relay',
        'Week 2: Rocket Launch high underhand serves, Battleship hoop target scoring',
        'Week 3: Agility ladder footwork, bunny hops, Hungry Hippos birdie collection',
        'Week 4: Scissor-throw mechanics, 12 o\'clock contact, Sky Ball high rallies',
        'Week 5: Gentle tape drops, soft hands drills, Drop the Bomb basket targets',
        'Week 6: Short-distance wall volleys, mid-court slap drills, Dodge-Rally game',
        'Week 7: Monster Swat downward attacks, Shield Protectors coach lob defense',
        'Week 8: Jamboree Mini-Meet, rotating partner matches, achievement certificates',
      ],
    },
    {
      name: 'Smash Elite',
      badge: 'Ages 11–15 · 90 min · $150 CAD',
      ages: 'Ages 11–15',
      format: '90 min · Thursdays 5:30–7:00 PM · $150 CAD',
      teamLinktUrl: 'https://app.teamlinkt.com/register/go/nationalathleticsacademy/200984',
      focus:
        'Tactical footwork, split-step timing, forehand/backhand grip switching, low backhand flick serves, baseline attacking clears, spinning net tumbles, flat drives, jump smashes, doubles rotations, and sudden-death tournament matchplay.',
      ratio: '1:12 to 1:15 Coach Ratio',
      curriculum: [
        'Week 1: Forehand vs. backhand bevel grips, split-step timing, rapid-fire feed reactions',
        'Week 2: Low backhand flick serves, deceptive service variations, 3-shot rally battles',
        'Week 3: 6-corner timed shadow ghosting, heel-to-toe lunges, push-off recoveries',
        'Week 4: Attacking clears vs. defensive high clears, scissor kicks, deep line targets',
        'Week 5: Slow/fast disguised slice drops, hair-pin net tumbles, Cat-and-Mouse net battles',
        'Week 6: 2v2 flat drive battles down the tramlines, thumb-press punch drives, Speed Trap rallies',
        'Week 7: Jump smash mechanics & steep angles, defense blocks, Attack vs. Defense Gauntlet',
        'Week 8: Doubles rotation (front/back vs. side-by-side), Sudden-Death Grudge Cup (to 11 pts)',
      ],
    },
  ],
  whatsIncluded: [
    'Smash Foundation (Ages 6–10): $125 CAD · 90 min sessions',
    'Smash Elite (Ages 11–15): $150 CAD · 90 min sessions',
    '8 Training Sessions (90 minutes each) at Knox-Met Church Gym',
    'Thursdays 5:30–7:00 PM (Oct 22 – Dec 10, 2026)',
    'Official NAA Training Jersey available for purchase ($22 CAD)',
    '10% Sibling Discount for 2nd registered child',
    'High-grade Yonex practice nylon shuttles provided for all drills',
    'High-quality loaner rackets available at every session upon request',
    'End-of-block NAA Badminton Progress Report card & skill evaluation',
    'Dedicated team communications & schedule updates via the TeamLinkt app',
  ],
  faqs: [
    {
      question: 'Do athletes need to bring their own badminton racket?',
      answer:
        'Athletes are encouraged to bring their own standard badminton racket, but NAA provides high-quality loaner rackets at every session for participants who do not have one.',
    },
    {
      question: 'What footwear and equipment are required?',
      answer:
        'Clean, non-marking indoor court shoes with good lateral support are mandatory to protect gymnasium hardwood and player ankles. Comfortable athletic shorts/t-shirt and a water bottle are required. Shuttles and training gear are fully provided by NAA.',
    },
    {
      question: 'Is badminton suitable for beginners?',
      answer:
        'Yes! Badminton is one of the most accessible sports for developing foundational hand-eye reactivity and footwork. Our Smash Foundation tier (Ages 6–10) caters to beginners with fun movement games and physical literacy, while Smash Elite (Ages 11–15) provides clear progression for both new and intermediate players.',
    },
    {
      question: 'How long are the sessions and when does the program run?',
      answer:
        'Sessions are 90 minutes each (5:30–7:00pm) on Thursdays (Oct 22 – Dec 10). Coaches follow a strict 90-second maximum instruction/demonstration pacing rule so kids spend their time active and hitting shuttles, not listening to long lectures.',
    },
    {
      question: 'How does the Family & Multi-Child Discount work?',
      answer:
        'We offer a 10% discount starting on your second registered participant (and each additional child). 1) Same Sport (Automatic): Complete registration for Child 1, then click "+ Register Another Participant" before paying. Your 10% multi-child discount will apply automatically at checkout. 2) Different Sports (Manual Refund): If enrolling across different sports (e.g. Badminton + Volleyball), complete each registration normally and email info@naacanada.org with the participant names and order numbers for a 10% refund within 7–10 business days.',
    },
    {
      question: 'When are final schedules and training groups confirmed?',
      answer:
        'Final schedules and training group assignments will be confirmed in the TeamLinkt app once registrations and facility allocations are complete.',
    },
  ],
};

export const badmintonFall2026Schedule = [
{
  id: 'badminton-foundation',
  sport: 'Badminton',
  season: 'Fall 2026',
  tier: 'Smash Foundation',
  ageGroup: 'Ages 6–10',
  facility: 'Knox-Met Fellowship Hall Gym',
  address: '2340 Victoria Ave, Regina (Downtown)',
  day: 'Thursday',
  timeSlot: '5:30 PM – 7:00 PM (90 mins)',
  dates: 'Oct 22 – Dec 10, 2026 (8 Classes · 8 Weeks)',
  coachRatio: '1:8 to 1:10 Ratio',
  status: 'In Session',
  price: '$125 CAD',
  registerUrl: 'https://app.teamlinkt.com/register/go/nationalathleticsacademy/200985',
  notes: 'Currently In Session at Church. 8 classes (90 mins). Rackets & Yonex shuttles provided.'
},
{
  id: 'badminton-elite',
  sport: 'Badminton',
  season: 'Fall 2026',
  tier: 'Smash Elite',
  ageGroup: 'Ages 11–15',
  facility: 'Knox-Met Fellowship Hall Gym',
  address: '2340 Victoria Ave, Regina (Downtown)',
  day: 'Thursday',
  timeSlot: '5:30 PM – 7:00 PM (90 mins)',
  dates: 'Oct 22 – Dec 10, 2026 (8 Classes · 8 Weeks)',
  coachRatio: '1:12 to 1:14 Ratio',
  status: 'In Session',
  price: '$150 CAD',
  registerUrl: 'https://app.teamlinkt.com/register/go/nationalathleticsacademy/200984',
  notes: 'Currently In Session at Church. 8 classes (90 mins). Footwork ladders, slice drops, jump smash tactics.'
}
];
