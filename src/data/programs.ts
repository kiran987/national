// ─────────────────────────────────────────────────────────────────────────────
// programs.ts  —  Source-of-truth data for NAA programs
//
// ACTIVE programs are now: Basketball, Volleyball, Badminton,
// National Shield - Martial Arts (4 active programs).
//
// Athletics, Soccer Little Kids, and new sports are Coming Soon.
//
// NOTE: Content Collections are the canonical source for program detail pages.
// This file provides lightweight references used on the homepage, programs
// index page, and navigation. Update the matching .md file in
// src/content/programs/ for any change that appears on a detail page.
// ─────────────────────────────────────────────────────────────────────────────

import { newSportPrograms } from './newSports';

export interface ProgramFeature {
  title: string;
  description: string;
  icon: string;
}

export interface ProgramTierDetail {
  name: string;
  badge?: string;
  ages: string;
  format: string;
  focus: string;
  ratio: string;
  curriculum: string[];
}

export interface ProgramFAQ {
  question: string;
  answer: string;
}

export interface DetailedProgram {
  id: string;
  slug: string;
  order: number;
  name: string;
  navTitle: string;
  shortName: string;
  badge: string;
  subtitle: string;
  tagline: string;
  emoji: string;
  icon: string;
  color: string;
  accentColor: string;
  bgColor: string;
  description: string;
  longDescription: string;
  ages: string;
  ratio: string;
  venue: string;
  seasonDuration: string;
  sessionsPerWeek: string;
  blockWeeks: number;
  blockPrice: number;
  hourlyRate: number;
  paymentPlan: boolean;
  partnerInfo?: {
    name: string;
    description: string;
    logo?: string;
  };
  status?: 'active' | 'starting-soon' | 'coming-soon';
  highlights: string[];
  skillsFocus: string[];
  tiers: ProgramTierDetail[];
  whatsIncluded: string[];
  faqs: ProgramFAQ[];
  image?: string;
  gallery?: string[];
}

export interface UpcomingSport {
  name: string;
  emoji: string;
  tag: string;
  description: string;
  targetAges: string;
  status: string;
  // If set, a 'View Full Details' button links to this page
  detailPageUrl?: string;
  // Badge label override for Coming Soon items with detail pages
  detailBadge?: string;
}

// ─── 4 Core Academies (2 Active In-Session · 2 Starting Soon) ───────────────────
const activeProgramsRaw: DetailedProgram[] = [
  {
    id: 'basketball',
    slug: 'basketball',
    order: 7,
    status: 'starting-soon',
    name: 'National Hoops - Basketball',
    navTitle: 'Basketball',
    shortName: 'National Hoops',
    badge: 'Starting Soon · Youth & Junior Development',
    subtitle: 'Technical Skill, Spacing & Game IQ',
    tagline: 'Building confident, high-IQ ball handlers and decisive team players.',
    emoji: '',
    icon: 'basketball',
    color: '#021F47',
    accentColor: '#DDAA40',
    bgColor: 'rgba(2,31,71,0.08)',
    image: '/images/programs/basketball-action-1.webp',
    gallery: [
      '/images/programs/basketball-action-1.webp',
      '/images/programs/basketball-portrait-1.webp',
      '/images/programs/basketball-portrait-2.webp',
    ],
    description:
      'Structured basketball skill development focusing on dribbling mechanics, shooting form, triple-threat decision making, footwork, and small-sided 3v3 and 4v4 game play under screened, Safe Sport–trained coaches.',
    longDescription:
      'The National Athletics Academy Basketball program provides a progressive developmental pathway for players aged 6 to 15. Rather than relying solely on unstructured scrimmages, our curriculum breaks down critical motor patterns — footwork, balance, shooting mechanics, passing lanes, and court awareness — before applying them in fast-paced, decision-rich game scenarios.',
    ages: 'Ages 6–15 (Junior Hoops: 6–10, Youth Hoops: 11–15)',
    ratio: '1:10 to 1:14 Coach-to-Athlete Ratio',
    venue: 'Fellowship Hall Gym, Knox-Metropolitan United Church, 2340 Victoria Ave, Regina, SK S4P 0S6',
    seasonDuration: 'Registration Starts Soon',
    sessionsPerWeek: 'Schedule announced when registration opens',
    blockWeeks: 8,
    blockPrice: 205,
    hourlyRate: 0,
    paymentPlan: true,
    teamLinktUrl: 'https://app.teamlinkt.com/register/find/nationalathleticsacademy?cid=79159',
    highlights: [
      'Junior Hoops (Ages 6–10): $205 CAD (16 Classes · $102.50/mo)',
      'Youth Hoops (Ages 11–15): $225 CAD (16 Classes · $112.50/mo)',
      'Pay in 2 convenient monthly installments ($102.50/mo or $112.50/mo)',
      'High-touch 1:10 to 1:14 maximum athlete-to-coach ratios',
      'Small-sided 3v3 and 4v4 games to maximize touches and live decision-making',
      'Official NAA Athlete Progress Report card with benchmark skill rubric',
    ],
    skillsFocus: [
      'Two-Hand & Weak-Hand Ball Handling Mastery',
      'Triple Threat & Dynamic First-Step Separation',
      'Shooting Form, Balance, Arc & Follow-Through Mechanics',
      'Court Spacing, Give-and-Go Cuts & Pick-and-Roll Fundamentals',
      'On-Ball Defensive Stance, Footwork & Help-Side Communication',
      'Transition Speed, Fast-Break Spacing & Game IQ',
    ],
    tiers: [
      {
        name: 'Junior Hoops',
        badge: 'Ages 6–10 · 16 Classes · $205 CAD ($102.50/mo)',
        ages: 'Ages 6–10',
        format: '16 Classes · $205 CAD ($102.50/mo in 2 installments)',
        focus:
          'Fundamental ball handling, eye-hand coordination, modified basket heights (8.5–9ft), shooting form, and introductory 3v3 small-court games.',
        ratio: '1:10 to 1:12 Coach Ratio',
        curriculum: [
          'Stationary ball control and finger-pad dribbling mechanics',
          'Jump stops, pivots, and basic triple-threat position',
          'Target shooting form with size 5/6 lightweight basketballs',
          'Fun obstacle courses and mini 3v3 small-court games',
        ],
      },
      {
        name: 'Youth Hoops',
        badge: 'Ages 11–15 · 16 Classes · $225 CAD ($112.50/mo)',
        ages: 'Ages 11–15',
        format: '16 Classes · $225 CAD ($112.50/mo in 2 installments)',
        focus:
          'Advanced ball handling, crossover & separation moves, pick-and-roll execution, lockdown man-to-man defense, fast-break decision making, and 4v4/5v5 scrimmages.',
        ratio: '1:12 to 1:14 Coach Ratio',
        curriculum: [
          'Advanced separation moves (crossovers, hesitation, step-backs)',
          'Layup footwork cadence and catch-and-shoot mechanics',
          'Pick-and-roll, pick-and-pop, and motion offense concepts',
          'Full-court defensive rotations and competitive matchplay',
        ],
      },
    ],
    whatsIncluded: [
      'Junior Hoops (Ages 6–10): $205 CAD (16 Classes · $102.50/mo in 2 installments)',
      'Youth Hoops (Ages 11–15): $225 CAD (16 Classes · $112.50/mo in 2 installments)',
      'Official NAA National Hoops Training Jersey',
      'Screened, Safe Sport–trained coach-led training sessions with progressive weekly curriculum',
      'Mid-season benchmark check and end-of-block NAA Progress Report',
      'Dedicated team communications & schedule updates via the TeamLinkt app',
      'Eligible for 10% multi-child family discounts',
    ],
    faqs: [
      {
        question: 'What gear does my athlete need to bring to basketball?',
        answer:
          'Athletes need clean, non-marking indoor court shoes, comfortable athletic shorts/shirt, and a water bottle. NAA provides size-appropriate Wilson/Spalding training balls and training jerseys during sessions.',
      },
      {
        question: 'What size basketball and hoop heights are used?',
        answer:
          'We use age-appropriate equipment: Size 5/6 balls and lowered rims (8.5–9 ft) for Junior Hoops (ages 6–10); official Size 6/7 balls and standard 10 ft rims for Youth Hoops (ages 11–15).',
      },
      {
        question: 'Can beginners join the Basketball Academy?',
        answer:
          'Absolutely! Our Junior Hoops tier (Ages 6–10) welcomes complete beginners and multi-sport athletes. Coaches differentiate drills so every player develops confidence at their current skill level.',
      },
      {
        question: 'When are final schedules and training groups confirmed?',
        answer:
          'Final schedules and training group assignments will be confirmed in the TeamLinkt app once registrations and facility allocations are complete.',
      },
    ],
  },
  {
    id: 'volleyball',
    slug: 'volleyball',
    order: 2,
    status: 'active',
    name: 'National Spike - Volleyball',
    navTitle: 'Volleyball',
    shortName: 'National Spike',
    badge: 'Winter 2027 · Registration Opens Nov 1',
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
      'Comprehensive indoor volleyball instruction covering forearm platform passing, overhead setting precision, overhand serve consistency, spike approach footwork, and team defensive rotation with age-adjusted net heights at the University of Regina Green Gym.',
    longDescription:
      'Volleyball demands explosive agility, exceptional hand-eye coordination, and split-second teamwork. The NAA Volleyball Academy provides Regina youth with a technical foundation that standard school physical education cannot match. Led by screened, Safe Sport–trained coaches (including NCCP Volleyball Canada trained leadership), players master ball control mechanics in structured drills and small-sided modified games at the University of Regina Green Gym.',
    ages: 'Ages 8–16 (Spike Juniors: 8–12, Spike Elite: 13–16)',
    venue: 'Green Gym, Centre for Kinesiology and Health Studies, University of Regina, 3737 Wascana Parkway, Regina, SK S4S 0A2',
    seasonDuration: 'Winter 2027: Jan 26 – Mar 11, 2027 (10 Sessions · Tuesdays & Thursdays)',
    sessionsPerWeek: '2× / week · Batch 1: 6:00–6:45 PM or Batch 2: 6:45–7:30 PM (40–45 min on-court coaching)',
    blockWeeks: 7,
    blockPrice: 230,
    hourlyRate: 0,
    paymentPlan: true,
    highlights: [
      'Winter 2027 registration opens November 1, 2026',
      '10 sessions · Tuesdays & Thursdays · Jan 26 – Mar 11, 2027 (no sessions Feb 9–18)',
      'Two batches: Batch 1 · 6:00–6:45 PM or Batch 2 · 6:45–7:30 PM (45-min slots, 40–45 min of on-court coaching)',
      'Venue: Green Gym, Centre for Kinesiology and Health Studies, University of Regina',
      'Spike Juniors (Ages 8–12): $230 CAD · Spike Elite (Ages 13–16): $260 CAD',
      'Mandatory Training Kit Fee: $30 CAD per athlete, in addition to program tuition',
      'Tuition can be split into 3 installments (the Training Kit fee is paid in full, no installments)',
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
        name: 'Spike Juniors',
        badge: 'Ages 8–12 · 45-min batches · $230 CAD',
        ages: 'Ages 8–12',
        format: '10 sessions · Tue & Thu · 6:00–6:45 or 6:45–7:30 PM · $230 CAD',
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
        badge: 'Ages 13–16 · 45-min batches · $260 CAD',
        ages: 'Ages 13–16',
        format: '10 sessions · Tue & Thu · 6:00–6:45 or 6:45–7:30 PM · $260 CAD',
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
      'Spike Juniors (Ages 8–12): $230 CAD · 10 sessions',
      'Spike Elite (Ages 13–16): $260 CAD · 10 sessions',
      '10 Training Sessions (45-min batches) at the University of Regina Green Gym',
      'Tuesdays & Thursdays, Jan 26 – Mar 11, 2027 (Batch 1: 6:00–6:45 PM · Batch 2: 6:45–7:30 PM)',
      'Mandatory Training Kit Fee: $30 CAD per athlete (in addition to tuition)',
      'Tuition can be split into 3 installments (the Training Kit fee is paid in full, no installments)',
      'Screened, Safe Sport–trained coach instruction, scrimmages & regulation adjusted net facilities',
      'End-of-block NAA Volleyball Progress Report',
      'Dedicated team communications & schedule updates via the TeamLinkt app',
    ],
    faqs: [
      {
        question: 'What does Winter 2027 cost, and can I pay in installments?',
        answer:
          'Spike Juniors is $230 CAD and Spike Elite is $260 CAD for 10 sessions. Every athlete also pays a mandatory $30 CAD Training Kit fee. Tuition can be split into 3 installments (the Training Kit fee is paid in full, no installments).',
      },
      {
        question: 'When and where does Winter 2027 volleyball run?',
        answer:
          'Tuesdays and Thursdays from Jan 26 to Mar 11 (no sessions Feb 9–18) at the University of Regina Green Gym. Choose Batch 1 (6:00–6:45 PM) or Batch 2 (6:45–7:30 PM). Registration opens November 1, 2026.',
      },
      {
        question: 'Are knee pads required for volleyball?',
        answer:
          'Volleyball knee pads are strongly recommended for safety and comfort. Clean, non-marking indoor court shoes and comfortable athletic wear are mandatory.',
      },
      {
        question: 'My child has never played volleyball before. Can they join?',
        answer:
          'Yes! Our Spike Juniors tier (Ages 8–12) welcomes complete beginners. We use low-impact training balls so athletes learn proper technique without discomfort.',
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
  },
  {
    id: 'badminton',
    slug: 'badminton',
    order: 1,
    status: 'active',
    name: 'National Smash - Badminton',
    navTitle: 'Badminton',
    shortName: 'National Smash',
    badge: 'Winter 2027 · Registration Opens Nov 1',
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
      'Specialized badminton coaching covering forehand and backhand grip mechanics, 6-corner court footwork, clear, drop, smash, and net-kill shot execution, with tactical singles and doubles matchplay at the University of Regina Green Gym.',
    longDescription:
      'Badminton is the world\'s fastest racket sport, demanding exceptional cardiovascular endurance, hand-eye reactivity, and explosive multi-directional footwork. The NAA Badminton Academy provides structured technical instruction for Regina youth at the University of Regina Green Gym, transforming recreational backyard play into crisp, competitive court mastery under screened, Safe Sport–trained coaches across our progressive 10-session Winter 2027 curriculum.',
    ages: 'Ages 6–16 (Smash Juniors: 6–10, Smash Elite: 11–16, Smash Pro: 10–16)',
    ratio: '1:8 to 1:15 Coach-to-Athlete Ratio',
    venue: 'Green Gym, Centre for Kinesiology and Health Studies, University of Regina, 3737 Wascana Parkway, Regina, SK S4S 0A2',
    seasonDuration: 'Winter 2027: Jan 26 – Mar 11, 2027 (10 Sessions · Tuesdays & Thursdays)',
    sessionsPerWeek: '2× / week · Batch 1: 6:00–6:45 PM or Batch 2: 6:45–7:30 PM (40–45 min on-court coaching) · Smash Pro: 6:00–7:30 PM (90 min)',
    blockWeeks: 7,
    blockPrice: 150,
    hourlyRate: 0,
    paymentPlan: true,
    highlights: [
      'Winter 2027 registration opens November 1, 2026 on TeamLinkt',
      '10 sessions · Tuesdays & Thursdays · Jan 26 – Mar 11, 2027 (no sessions Feb 9–18)',
      'Two batches: Batch 1 · 6:00–6:45 PM or Batch 2 · 6:45–7:30 PM (45-min slots, 40–45 min of on-court coaching)',
      'Venue: Green Gym, Centre for Kinesiology and Health Studies, University of Regina',
      'Smash Juniors (Ages 6–10): $150 CAD · Smash Elite (Ages 11–16): $175 CAD · Smash Pro (Intensive): $295 CAD',
      'Mandatory Training Kit Fee: $30 CAD per athlete, in addition to program tuition',
      'Tuition can be split into 3 installments (the Training Kit fee is paid in full, no installments)',
      'Smash Juniors and Smash Elite are open, mixed-level classes: beginners and advanced players train together',
      'Smash Pro: 6:00–7:30 PM (90-min sessions) for intensive tactical training & matchplay',
      '10% Sibling Discount for 2nd registered child, applied through the TeamLinkt system at checkout',
      'Strict 1:8 to 1:15 athlete-to-coach ratios ensuring individualized racket technique',
      'High-grade Yonex practice nylon shuttles (Mavis 300/350) provided; athletes bring their own racket',
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
        name: 'Smash Juniors',
        badge: 'Ages 6–10 · 45-min batches · $150 CAD',
        ages: 'Ages 6–10',
        format: '10 sessions · Tue & Thu · 6:00–6:45 or 6:45–7:30 PM · $150 CAD',
        focus:
          'Open, mixed-level class for beginners through advanced players. Physical literacy, hand-eye coordination, neutral grip habits, underhand serving accuracy, court boundary games, gentle net drops, swat attacks, and Jamboree mini-meet competition.',
        ratio: '1:8 to 1:10 Coach Ratio',
        curriculum: [
          'Shake-hands V-grip, pancake grip elimination, birdie balance relay',
          'Rocket Launch high underhand serves, Battleship hoop target scoring',
          'Agility ladder footwork, bunny hops, Hungry Hippos birdie collection',
          'Scissor-throw mechanics, 12 o\'clock contact, Sky Ball high rallies',
          'Gentle tape drops, soft hands drills, Drop the Bomb basket targets',
          'Short-distance wall volleys, mid-court slap drills, Dodge-Rally game',
          'Monster Swat downward attacks, Shield Protectors coach lob defense',
          'Partner rally patterns, court boundary games, serve-and-return challenges',
          'Skills circuit review (grip, serve, drop, swat) and personal-best challenges',
          'Jamboree Mini-Meet, rotating partner matches, achievement certificates',
        ],
      },
      {
        name: 'Smash Elite',
        badge: 'Ages 11–16 · 45-min batches · $175 CAD',
        ages: 'Ages 11–16',
        format: '10 sessions · Tue & Thu · 6:00–6:45 or 6:45–7:30 PM · $175 CAD',
        focus:
          'Open, mixed-level class for beginners through advanced players. Tactical footwork, split-step timing, forehand/backhand grip switching, low backhand flick serves, baseline attacking clears, spinning net tumbles, flat drives, jump smashes, doubles rotations, and sudden-death tournament matchplay.',
        ratio: '1:12 to 1:15 Coach Ratio',
        curriculum: [
          'Forehand vs. backhand bevel grips, split-step timing, rapid-fire feed reactions',
          'Low backhand flick serves, deceptive service variations, 3-shot rally battles',
          '6-corner timed shadow ghosting, heel-to-toe lunges, push-off recoveries',
          'Attacking clears vs. defensive high clears, scissor kicks, deep line targets',
          'Slow/fast disguised slice drops, hair-pin net tumbles, Cat-and-Mouse net battles',
          '2v2 flat drive battles down the tramlines, thumb-press punch drives, Speed Trap rallies',
          'Jump smash mechanics & steep angles, defense blocks, Attack vs. Defense Gauntlet',
          'Doubles rotation systems (front/back vs. side-by-side), communication and court cover',
          'Match tactics: serve and 3rd-shot patterns under pressure, ladder matchplay',
          'Sudden-Death Grudge Cup (to 11 pts), refereed games, individual skill evaluations',
        ],
      },
      {
        name: 'Smash Pro',
        badge: 'Intensive · 90-min sessions · $295 CAD',
        ages: 'Ages 10–16',
        format: '10 sessions · Tue & Thu · 6:00–7:30 PM · $295 CAD',
        focus:
          'Intensive tactical training and matchplay in 90-minute sessions. Pattern building for singles and doubles, pressure situations, and structured match days for players ready to compete.',
        ratio: '1:8 to 1:12 Coach Ratio',
        curriculum: [
          'Performance baseline: stroke and footwork audit, fitness check, diagnostic matchplay',
          'Attacking clears, rear-court depth, and deception from the baseline',
          'Net game: spinning tumbles, hair-pins, net kills, and net-battle tactics',
          'Serve and receive tactics: low flick, drive serves, and 3rd/4th-shot patterns',
          'Smash power: jump smash, steep angles, follow-up shots, and defense blocks',
          'Singles tactics: tempo control, patterns of play, and opponent scouting',
          'Doubles systems: attack/defend rotations, lead communication, and mixed pairs',
          'Pressure play: points from deficit, tie-break situations, and match-point routines',
          'Match day: round-robin matchplay with coach analysis and debriefs',
          'Smash Pro Invitational: tournament format, refereed games, and individual evaluations',
        ],
      },
    ],
    whatsIncluded: [
      'Smash Juniors (Ages 6–10): $150 CAD · 10 sessions · open, mixed-level class',
      'Smash Elite (Ages 11–16): $175 CAD · 10 sessions · open, mixed-level class',
      'Smash Pro (Intensive tactical training & matchplay): $295 CAD · 10 sessions · 6:00–7:30 PM (90 min)',
      'Mandatory Training Kit Fee: $30 CAD per athlete (in addition to tuition)',
      'Tuition can be split into 3 installments (the Training Kit fee is paid in full, no installments)',
      '10 Training Sessions (45-min batches) at the University of Regina Green Gym',
      'Tuesdays & Thursdays, Jan 26 – Mar 11, 2027 (Batch 1: 6:00–6:45 PM · Batch 2: 6:45–7:30 PM)',
            '10% Sibling Discount for 2nd registered child, applied through the TeamLinkt system at checkout',
      'High-grade Yonex practice nylon shuttles provided for all drills',
      'End-of-block NAA Badminton Progress Report card & skill evaluation',
      'Dedicated team communications & schedule updates via the TeamLinkt app',
    ],
    faqs: [
      {
        question: 'Do athletes need to bring their own badminton racket?',
        answer:
          'Yes. Athletes must bring their own standard badminton racket. NAA does not provide rackets, but Yonex practice shuttles are provided for all drills.',
      },
      {
        question: 'What footwear and equipment are required?',
        answer:
          'Clean, non-marking indoor court shoes with good lateral support are mandatory to protect gymnasium hardwood and player ankles. Comfortable athletic shorts/t-shirt and a water bottle are required. Shuttles and training gear are fully provided by NAA.',
      },
      {
        question: 'Is badminton suitable for beginners?',
        answer:
          'Yes! Badminton is one of the most accessible sports for developing foundational hand-eye reactivity and footwork. Smash Juniors (Ages 6–10) and Smash Elite (Ages 11–16) are open, mixed-level classes where beginners and advanced players train together, with drills adjusted to each athlete. Smash Pro is the intensive batch for players who want high-level tactical training and matchplay.',
      },
      {
        question: 'How long are the sessions and when does the program run?',
        answer:
          'Winter 2027 runs 10 sessions on Tuesdays and Thursdays from Jan 26 to Mar 11 (no sessions Feb 9–18): Jan 26, 28, Feb 2, 4, 23, 25, Mar 2, 4, 9 and 11. Choose Batch 1 (6:00–6:45 PM) or Batch 2 (6:45–7:30 PM). Each slot is 45 minutes, with 40–45 minutes of on-court coaching. Coaches follow a strict 90-second maximum instruction/demonstration pacing rule so kids spend their time active and hitting shuttles, not listening to long lectures.',
      },
      {
        question: 'What does Winter 2027 cost, and can I pay in installments?',
        answer:
          'Smash Juniors is $150 CAD, Smash Elite is $175 CAD, and Smash Pro (intensive tactical training & matchplay, 6:00–7:30 PM) is $295 CAD. Every athlete also pays a mandatory $30 CAD Training Kit fee. Tuition can be split into 3 installments (the Training Kit fee is paid in full, no installments).',
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
  },
  {
    id: 'national-shield',
    slug: 'national-shield',
    order: 6,
    status: 'starting-soon',
    name: 'National Shield - Martial Arts',
    navTitle: 'National Shield - Martial Arts',
    shortName: 'National Shield - Martial Arts',
    badge: 'Starting Soon · Ages 5–17 & Adults',
    subtitle: 'Fitness-First Martial Arts & Personal Development',
    tagline: 'Strong Body. Confident Mind. Safe Choices.',
    emoji: '',
    icon: 'shield',
    color: '#1a1a2e',
    accentColor: '#DDAA40',
    bgColor: 'rgba(26,26,46,0.08)',
    image: '/images/programs/martialarts-action-1.webp',
    teamLinktUrl: 'https://app.teamlinkt.com/register/go/nationalathleticsacademy/201750',
    description:
      'Fitness-focused personal development through martial arts for ages 5 to 18+ and super-seniors. The SHIELD Safety System, BRAVE Anti-Bullying Program, and a 5-level achievement system — delivered by VSC-screened, Respect in Sport certified coaches following the Rule of Two.',
    longDescription:
      'National Shield - Martial Arts is a fitness-first, safety-focused personal development program built on five pillars: Power, Protect, Confidence, Respect, and Skill. Participants build genuine fitness, learn martial arts fundamentals, and develop real personal safety awareness through the SHIELD Safety System and BRAVE Anti-Bullying curriculum. We do not teach children to look for fights — we teach them to avoid conflict, respond confidently, stay safe, and get help.',
    ages: 'Ages 5–12, 13–17, 18+ & Super-Seniors (3 streams)',
    ratio: '1:8 to 1:12 Coach-to-Athlete Ratio',
    venue: 'Regina Facility TBA',
    seasonDuration: 'Registration Starts Soon',
    sessionsPerWeek: '$100 CAD total · Schedule announced when registration opens',
    blockWeeks: 4,
    blockPrice: 100,
    hourlyRate: 0,
    paymentPlan: true,
    highlights: [
      'SHIELD Safety System — a 6-step structured personal safety framework taught every cycle',
      'BRAVE Anti-Bullying Program — scenario role-play, not lecture',
      '5-level National Shield Achievement System — Foundation through Leader',
      'Every coach holds VSC, Respect in Sport, First Aid/CPR-C, and concussion certification',
      'NAA follows the Rule of Two: interactions between coaches and participants always take place in open, observable settings with two screened adults present, never one-on-one behind closed doors.',
      'Monthly Shield Challenge Day with effort & character-based recognition',
    ],
    skillsFocus: [
      'Fitness — Strength, Endurance, Agility & Explosive Conditioning',
      'Martial Arts Fundamentals — Stance, Footwork, Pad Work & Controlled Technique',
      'SHIELD Safety System — 6 Personal Safety Principles',
      'BRAVE Anti-Bullying — 5-Step Assertive Response Framework',
      'Confidence & Assertive Communication Under Pressure',
      'Discipline, Leadership & Respect in Sport Values',
    ],
    tiers: [
      {
        name: 'National Shield Juniors',
        badge: 'Ages 5–12 · $100 CAD total',
        ages: 'Ages 5–12',
        teamLinktUrl: 'https://app.teamlinkt.com/register/go/nationalathleticsacademy/201750',
        format: '$100 CAD total · Registration starts soon',
        focus:
          '40% fitness, agility & coordination, 25% martial arts fundamentals (boxing stance, footwork, controlled strikes), 20% personal safety & anti-bullying (STOP → MOVE AWAY → GET HELP), 15% focus, discipline & teamwork. Strict zero child-to-child contact — all strike training is performed exclusively on coach-held focus mitts and kick shields. Coaches split the floor into two development tracks: Ages 5–8 for motor skills and games, and Ages 9–12 for multi-strike combinations and safety roleplay.',
        ratio: '1:8 Coach Ratio (min. 2 adults)',
        curriculum: [
          'Ready stance, footwork balance, and coach-held pad work',
          'STOP → MOVE AWAY → GET HELP — personal safety protocol',
          'Agility ladders, reaction drills, balance challenges, and relay circuits',
          'BRAVE Anti-Bullying Program — boundary-setting and assertive de-escalation roleplay',
          'Identifying trusted adults and building situational confidence',
        ],
      },
      {
        name: 'National Shield Youth',
        badge: 'Ages 13–17 · $100 CAD total',
        ages: 'Ages 13–17',
        teamLinktUrl: 'https://app.teamlinkt.com/register/go/nationalathleticsacademy/201751',
        format: '$100 CAD total · Registration starts soon',
        focus:
          '40% strength & athletic conditioning, 30% multi-discipline martial arts depth (boxing, kickboxing, wrestling movement, grappling fundamentals), 15% practical self-defence scenarios & situational awareness, 15% leadership, mindset & resilience. Controlled partner technical drills with matched size/maturity; light technical sparring at Level 3+ requires protective equipment and parental consent.',
        ratio: '1:10 Coach Ratio (min. 2 adults)',
        curriculum: [
          'Structured functional strength progression (bodyweight → resistance bands → light external loads)',
          'Practical defensive positioning and tactical escape mechanics',
          'Full SHIELD Safety System — awareness, boundary setting, and threat de-escalation',
          'Junior Leader pathway — senior youth mentor and assist Junior classes under coach supervision',
          '12-Week BUILD → PROTECT → PERFORM cycle with benchmark assessments',
        ],
      },
      {
        name: 'National Shield Pro',
        badge: 'Ages 18+ & Super-Seniors',
        ages: 'Ages 18+ & Super-Seniors',
        format: 'Coming Soon',
        focus:
          '35% functional mobility, joint health & cardiovascular conditioning, 35% applied striking & grappling mechanics (boxing, Muay Thai, clinch work, ground survival), 20% real-world self-defence tactics (situational de-escalation, escape angles, everyday awareness), 10% breathwork, active recovery & stress modulation. Scalable by track: Fitness & Technique (pad work, heavy bag drills, zero-impact technical repetitions) or Advanced Applied (controlled, low-impact tactical drilling with full protective gear).',
        ratio: '1:12 Coach Ratio (min. 1 lead coach + 1 assistant)',
        curriculum: [
          'Joint-friendly functional fitness — scalable intervals, core stability, and balance preservation (ideal for older adults and super-seniors)',
          'Real-world self-defence tactics — identifying threat cues, managing close-quarters distance, and breakaways',
          'Multi-discipline pad combinations and partner target drills',
          'Fall prevention & recovery — safe break-falls, base-building, and getting up from the ground efficiently',
          'Post-session mobility protocols and joint longevity exercises',
        ],
      },
    ],
    whatsIncluded: [
      'National Shield Pro (Ages 18+): Coming Soon',
      'SHIELD Safety System and BRAVE Anti-Bullying curriculum every cycle',
      'Monthly Shield Challenge Day — fitness, skill, mindset & character assessment',
      'National Shield Achievement Levels 1–5 with certificates & patches',
      'All training pads and equipment provided — no personal gear required for beginners',
    ],
    faqs: [
      {
        question: 'Is this a fight club or MMA program?',
        answer:
          'No. National Shield is a fitness-first, safety-focused personal development program. We do not teach children to look for fights. No child-to-child contact is permitted in the Juniors stream, and no sparring occurs until Level 3+ in the Youth stream with parental consent and full protective equipment.',
      },
      {
        question: 'What certifications do National Shield coaches hold?',
        answer:
          'Every National Shield coach holds a Criminal Record Check plus Vulnerable Sector Check, Respect in Sport (Activity Leader), NCCP Safe Sport Training, Standard First Aid + CPR-C (AED), and concussion recognition certification. NAA follows the Rule of Two: interactions between coaches and participants always take place in open, observable settings with two screened adults present, never one-on-one behind closed doors.',
      },
      {
        question: 'What should my athlete wear or bring?',
        answer:
          'Athletes should wear clean, comfortable athletic apparel (t-shirt and gym shorts/sweatpants) and indoor gym runners. All kick pads, strike shields, and safety gear are provided on site by NAA.',
      },
    ],
  },
];

// Display order: Badminton, Volleyball, Chess, Table Tennis, Snowboarding, National Shield, Basketball
export const activePrograms: DetailedProgram[] = [...activeProgramsRaw, ...newSportPrograms].sort((a, b) => a.order - b.order);

// ─── Coming Soon Programs (Full Detail Pages Available) ──────────────────────
// These programs have complete detail pages but are not yet running.
// They appear in the Coming Soon section with a 'View Full Program Details' link.
export const comingSoonPrograms: DetailedProgram[] = [
  {
    id: 'camps',
    slug: 'camps',
    order: 8,
    name: 'Camps & Clinics',
    navTitle: 'Camps & Clinics',
    shortName: 'Camps',
    badge: 'School Breaks, PD Days & Summer',
    subtitle: 'Multi-Sport Day Camps, Clinics & School Programming',
    tagline: 'Sport learning beyond the regular season — all ages, all breaks, all sports.',
    emoji: '',
    icon: 'camps',
    color: '#14532d',
    accentColor: '#DDAA40',
    bgColor: 'rgba(20,83,45,0.08)',
    description:
      'Full-week summer day camps, school-break camps, PD day programs, in-school delivery, birthday parties, and corporate sports days — multi-sport options covering basketball, volleyball, martial arts fitness, and more.',
    longDescription:
      'NAA Camps & Clinics extend sport learning beyond the regular season. Whether it\'s a full week of multi-sport summer camp, a 3-day February break intensive, a single PD day, or an in-school delivery for your class, NAA provides structured, certified-coach-led programming for all ages. Every camp ends with a mini tournament or showcase.',
    ages: 'Ages 4–17 (varies by camp type) & Adults',
    ratio: '1:6 to 1:12 Coach-to-Athlete Ratio',
    venue: 'Regina School Gymnasiums & Community Facilities',
    seasonDuration: 'Year-Round (Summer, School Breaks, PD Days)',
    sessionsPerWeek: 'Full-Day, Half-Day & Multi-Day Formats',
    blockWeeks: 1,
    blockPrice: 0, // Varies by camp
    hourlyRate: 0,
    paymentPlan: false,
    highlights: [
      'Multi-sport sampling — basketball, volleyball, martial arts fitness & more',
      'Certified coaches with valid First Aid/CPR and Respect in Sport',
      'End-of-camp mini tournament or showcase for every participant',
      'Summer Day Camps — full-week programs through July & August',
      'School-Break Camps — February, Spring & December breaks',
      'PD Day single-day programs and in-school delivery partnerships',
    ],
    skillsFocus: [
      'Multi-Sport Sampling — Basketball, Volleyball & Martial Arts Fitness',
      'Teamwork, Communication & Sportsmanship',
      'Physical Literacy — Agility, Balance & Coordination',
      'Fun Competition — Mini Tournaments & Showcase Events',
      'Creative Problem Solving & Leadership Games',
    ],
    tiers: [
      {
        name: 'Summer Day Camps',
        badge: 'July & August',
        ages: 'Ages 5–15',
        format: 'Full-Week · Mon–Fri · Drop-Off & Pick-Up',
        focus:
          'Immersive multi-sport weeks through July and August. Morning skills, afternoon games, Friday end-of-week mini championship.',
        ratio: '1:8 Coach Ratio',
        curriculum: [
          'Daily sport rotation — basketball, volleyball, martial arts fitness, and more',
          'Skills & drills in the morning, scrimmages and games in the afternoon',
          'Leadership and teamwork challenges throughout the week',
          'Friday Mini Tournament — every camper competes and earns recognition',
        ],
      },
      {
        name: 'School-Break Camps',
        badge: 'Feb, Spring & December',
        ages: 'Ages 5–15',
        format: '3–5 Day Intensive · Half-Day or Full-Day Options',
        focus:
          'February, spring and December break multi-sport intensive programs. Active, structured, and certified-coach-led every session.',
        ratio: '1:8 Coach Ratio',
        curriculum: [
          'Multi-sport sampling across all 3–5 days of the break',
          'Skill progression each day with friendly competition finale',
          'Flexible half-day or full-day registration options',
          'Drop-in single-day option available on select breaks',
        ],
      },
      {
        name: 'PD Day & In-School Programs',
        badge: 'School Partnerships',
        ages: 'Ages 5–17 (K–12)',
        format: 'Single Day (PD) · During School Hours (In-School)',
        focus:
          'PD day single-day camps aligned with Regina school calendars. In-school delivery of structured sport programming during the school day.',
        ratio: '1:10 Coach Ratio',
        curriculum: [
          'PD Day — full sport day with skill stations and mini-games',
          'In-school delivery — curriculum-aligned physical activity and sport sampling',
          'Customizable program content based on school/class request',
          'Can be booked as a single day or as a full-year school partnership',
        ],
      },
      {
        name: 'Birthday Parties & Corporate Events',
        badge: 'Private Events',
        ages: 'Ages 4–12 (Birthday) · Adults (Corporate)',
        format: 'Hosted Event · 90–120 min',
        focus:
          'Hosted sport birthday parties with NAA staff and equipment, and corporate team-building sports days with full NAA event management.',
        ratio: 'Staff based on group size',
        curriculum: [
          'Customized activity lineup based on age and sport preference',
          'All equipment provided — cones, balls, pads, agility gear',
          'Experienced NAA host coaches managing the full event',
          'Corporate events include league-style tournaments and team challenges',
        ],
      },
    ],
    whatsIncluded: [
      'Certified coach-led programming every session',
      'All sport equipment provided — no gear required',
      'End-of-camp showcase or mini tournament',
      'Participant certificate or recognition item',
      'Dedicated communications and weather-alert notifications',
    ],
    faqs: [
      {
        question: 'How do I register for a camp or clinic?',
        answer:
          'Camp registration opens through our TeamLinkt portal and is announced via our contact list. Sign up on our Contact page to receive early notification when each camp opens.',
      },
      {
        question: 'What age groups are camps available for?',
        answer:
          'Most camps run for ages 5–15. Some specialty programs (e.g. National Shield Pro, Corporate Events) are for adults. Each camp listing specifies the age group.',
      },
      {
        question: 'Can my child attend just one day of a multi-day camp?',
        answer:
          'Single-day drop-in options are available on select camps. Full-week and multi-day registrations get the best experience and pricing.',
      },
    ],
  },
  {
    id: 'tournaments',
    slug: 'tournaments',
    order: 9,
    name: 'Tournaments',
    navTitle: 'Tournaments',
    shortName: 'Tournaments',
    badge: 'Competitive Fixtures & Showcases',
    subtitle: 'Seasonal Invitationals, Showcases & Multi-Sport Jamborees',
    tagline: 'High-energy, well-organized competition celebrating sportsmanship and athletic excellence in Regina.',
    emoji: '',
    icon: 'trophy',
    color: '#83161B',
    accentColor: '#DDAA40',
    bgColor: 'rgba(131,22,27,0.08)',
    description:
      'Organized seasonal invitationals, 3v3 basketball fixtures, volleyball invitationals, and youth showcases with certified officials, live TeamLinkt scoring, awards, and medals.',
    longDescription:
      'Competition is where training meets character. National Athletics Academy organizes premium, family-friendly tournament series across Regina sporting venues. With certified officials, transparent division seeding, real-time live digital brackets on TeamLinkt, and an uncompromising commitment to Respect in Sport, NAA tournaments set a new standard for youth athletics events in Saskatchewan.',
    ages: 'All Ages (Youth, Juniors & Community Divisions)',
    ratio: 'Official Staffing & Certified Referees',
    venue: 'KHS Gymnasium, University of Regina (3925 Goldenrod Loop / 3737 Wascana Pkwy, Regina, SK S4S 0A2) & Partner Fieldhouses',
    seasonDuration: 'Year-Round Weekend Tournament Series',
    sessionsPerWeek: 'Weekend Events (Single-Day & Two-Day Showcases)',
    blockWeeks: 1,
    blockPrice: 140,
    hourlyRate: 15.0,
    paymentPlan: false,
    highlights: [
      'Live tournament brackets and digital scoring synced via TeamLinkt',
      'Certified referees and official scorekeepers for fair, high-standard play',
      'Medals, championship trophies, MVP awards, and sportsmanship banners',
      'Certified First Aid / CPR safety personnel on-site for all fixtures',
      'Turnkey team registration and individual free-agent player placement',
    ],
    skillsFocus: [
      'High-Pressure Decision Making & Clutch Game Execution',
      'Sportsmanship, Respect in Sport Etiquette & Team Camaraderie',
      'Tactical Adaptation to Opponent Matchups and Defensive Sets',
      'Time Management, Clock Awareness & Game Strategy',
      'Handling Victory with Humility and Defeat with Resilience',
    ],
    tiers: [
      {
        name: 'Prairie Hoops Classic',
        badge: 'Basketball',
        ages: 'U11, U13, U15 & U17 Divisions',
        format: '3-Game Guarantee · Weekend Tournament',
        focus: '5v5 and 3v3 basketball showcase with certified officials, shot clocks, MVP awards, and live TeamLinkt scoring.',
        ratio: 'Certified Referees',
        curriculum: [
          'Pool play followed by single-elimination championship brackets',
          'Official Basketball Saskatchewan certified referee crews',
          'All-Tournament Team and Championship Trophy presentations',
        ],
      },
      {
        name: 'Queen City Net Sports Open',
        badge: 'Volleyball',
        ages: 'Junior (10–13) & Senior (14–17) Divisions',
        format: 'Full-Day Tournament · Pool + Playoff Bracket',
        focus: 'Competitive volleyball invitationals with singles, doubles, and 6v6 team brackets on regulation hardwood courts.',
        ratio: 'Official Line Judges & Refs',
        curriculum: [
          'Morning round-robin seeding pools with guaranteed set minimums',
          'Afternoon Gold and Silver playoff brackets with medal rounds',
          'Fast-paced tournament schedule with zero wasted downtime',
        ],
      },
      {
        name: 'Shield Challenge Day Showcase',
        badge: 'National Shield',
        ages: 'All National Shield Streams',
        format: 'Monthly · Saturday · 2–3 Hours',
        focus: 'Monthly Shield Challenge Day — fitness, skill, mindset & personal development assessment with parent demonstration.',
        ratio: 'Full Coaching Staff',
        curriculum: [
          'FITNESS — endurance, strength, agility assessment',
          'SKILL — pad accuracy, footwork, reaction benchmarks',
          'MINDSET & CHARACTER — effort, teamwork & peer support recognition',
        ],
      },
      {
        name: 'Multi-Sport Jamborees',
        badge: 'Community Events',
        ages: 'All Ages',
        format: 'Weekend Event · Half-Day or Full-Day',
        focus: 'Community multi-sport festivals combining basketball, volleyball, and fitness challenges for all age groups.',
        ratio: 'Tournament Staff & Refs',
        curriculum: [
          'Sport stations and mini-matches across multiple NAA disciplines',
          'Family-friendly format with spectator areas and food',
          'Medals, ribbons and sportsmanship recognition for every participant',
        ],
      },
    ],
    whatsIncluded: [
      'Guaranteed minimum match / event entries (3-game guarantee)',
      'Official game balls, regulation court setups, and scorekeeping',
      'Live bracket updates and team alerts',
      'Championship medals, MVP recognition, and team trophies',
      'On-site certified First Aid staff and event photography',
    ],
    faqs: [
      {
        question: 'Can individual players sign up if they do not have a full team?',
        answer:
          'Yes! We welcome free-agent individual registrations. Our tournament director will place free agents onto a balanced NAA house team coached by certified staff.',
      },
      {
        question: 'Where can parents follow live scores and tournament brackets?',
        answer:
          'All NAA tournaments sync live to the TeamLinkt app and team portals, allowing parents and grandparents to view real-time standings and court assignments.',
      },
    ],
  },
];

// ─── Starting Soon / Starting Next Season ──────────────────────────────────────
export const upcomingSports: UpcomingSport[] = [
  {
    name: 'Camps & Clinics',
    emoji: '',
    tag: 'Summer Day Camps, School Breaks, PD Days & In-School',
    description:
      'Full-week summer day camps, school-break programs, PD day camps, birthday parties and corporate sports days — multi-sport, certified coaches, all ages.',
    targetAges: 'Ages 4–17 & Adults',
    status: 'Starting Soon',
    detailPageUrl: '/programs/camps/',
    detailBadge: 'Full Program Details Available',
  },
  {
    name: 'Tournaments & Showcases',
    emoji: '',
    tag: 'Seasonal Invitationals, 3v3 Showdowns & Multi-Sport Jamborees',
    description:
      'Organized competitive tournaments with live TeamLinkt brackets, certified referees, medals, MVP awards, and family-friendly showcase events across Regina.',
    targetAges: 'All Ages',
    status: 'Starting Soon',
    detailPageUrl: '/programs/tournaments/',
    detailBadge: 'Full Program Details Available',
  },
  {
    name: 'Basketball Academy',
    emoji: '',
    tag: 'Skills, Spacing & Game IQ',
    description:
      'Structured basketball development focusing on dribbling mechanics, shooting form, footwork, and small-sided 3v3 and 4v4 game play under certified coaches.',
    targetAges: 'Ages 6–15',
    status: 'Starting Soon',
  },
  {
    name: 'Athletics (Track & Field)',
    emoji: '',
    tag: 'Sprint, Jump & Field Foundations',
    description:
      'Track & field foundations covering sprint mechanics, hurdle rhythm, long jump, throwing form, and relay handoffs for ages 6–16.',
    targetAges: 'Ages 6–16',
    status: 'Starting Soon',
  },
  {
    name: 'Flag Football & Ball Hockey',
    emoji: '',
    tag: 'Multi-Sport Seasonal Leagues',
    description:
      'Non-contact team sports building route-running, stick handling, teamwork, and high-energy community game play.',
    targetAges: 'Ages 6–15',
    status: 'Starting Soon',
  },
  {
    name: 'Pickleball & Family Recreation',
    emoji: '',
    tag: 'Community Net Sport',
    description:
      'Dinking mechanics, third-shot drops, court positioning, and fun multi-generational doubles leagues on indoor hardwood.',
    targetAges: 'Ages 10+ & Adult / Senior',
    status: 'Starting Soon',
  },
  {
    name: 'Strength & Conditioning / Physical Literacy',
    emoji: '',
    tag: 'Athletic Foundation & Movement Skills',
    description:
      'Sequenced LTAD youth strength, injury prevention, core stability, and agility mechanics for multi-sport athletes.',
    targetAges: 'Ages 8–17 & Adult',
    status: 'Starting Soon',
  },
];

// ─── Discount Policies ────────────────────────────────────────────────────────
export const discountPolicies = {
  multiChild: '10% discount for second and subsequent siblings, applied automatically through the TeamLinkt registration system at checkout',
  paymentPlans: 'Tuition can be split into 3 installments',
  financialAid: 'Flexible payment plans, multi-child discounts, and subsidized community spaces available — no child is turned away for cost alone.',
};

// ─── Athlete Progress Report ──────────────────────────────────────────────────
export const athleteProgressReportDetails = {
  title: 'The NAA Athlete Progress Report',
  subtitle: 'Objective Skill & Character Milestone Tracking',
  tagline: 'Structured Developmental Feedback For Every Athlete',
  description:
    'Most recreational leagues in Regina offer participation without structured developmental feedback. At NAA, every athlete receives an official end-of-block Progress Report created by certified coaches, tracking specific technical, tactical, physical, and character benchmarks.',
  milestones: [
    {
      category: 'Technical Competency',
      icon: 'technical',
      description:
        'Sport-specific motor skills graded on an objective developmental rubric.',
    },
    {
      category: 'Physical Literacy & Athletic Base',
      icon: 'movement',
      description:
        'Agility, balance, sprint mechanics, and spatial awareness evaluated against age-appropriate LTAD standards.',
    },
    {
      category: 'Tactical & Decision-Making IQ',
      icon: 'tactics',
      description:
        'Court/field vision, defensive positioning, small-sided game decision speed, and strategic understanding.',
    },
    {
      category: 'Character, Effort & Leadership',
      icon: 'character',
      description:
        'Coachability, sportsmanship, peer encouragement, resilience after errors, and adherence to Respect in Sport values.',
    },
  ],
};

// ─── LTAD Pathway Stages ──────────────────────────────────────────────────────
export const pathwayStages = [
  { stage: 'Active Start', ages: '2–5', programs: 'Active Movement & Agility (Starting Soon)', objective: 'Joyful movement exploration, balance, listening skills, and early motor confidence' },
  { stage: 'FUNdamentals', ages: '5–8', programs: 'National Shield Juniors, Discover Basketball, Badminton Kids', objective: 'Fundamental movement skills across core sports; multi-sport sampling priority' },
  { stage: 'Learn to Train', ages: '8–12', programs: 'Develop Basketball, Develop Volleyball, National Shield Juniors, Badminton Kids', objective: 'Technical skill acquisition, small-sided game IQ, sport sampling maintained' },
  { stage: 'Train to Train', ages: '12–16', programs: 'Advance Basketball, Advance Volleyball, National Shield Youth, Badminton Youth & Teens', objective: 'Sport-specific tactical development combined with progressive athletic strength base' },
  { stage: 'Train to Compete', ages: '14–18', programs: 'NAA Tournament Series, Competitive Invitationals, High School Prep', objective: 'High school / provincial competitive excellence, showcase tournaments, and leadership' },
  { stage: 'Active for Life', ages: 'All Ages', programs: 'National Shield Pro, Community Tournaments, Camps & Clinics', objective: 'Lifelong fitness, camaraderie, competitive recreation, and community belonging' },
];

// ─── Camps & Clinics Section (Programs Index display) ─────────────────────────
export const campsAndClinicsSection = {
  badge: 'CAMPS & CLINICS',
  title: 'Camps, Clinics & School Programs',
  subtitle: 'Sport learning beyond the regular season — summer camps, school-break programming, PD days, and in-school delivery.',
  items: [
    { id: 'summer-day-camps', name: 'Summer Day Camps', emoji: '', ages: 'AGES 5–15', description: 'Full-week multi-sport day camps through July and August. Morning drop-off, end-of-week mini tournament.' },
    { id: 'school-break-camps', name: 'School-Break Camps', emoji: '', ages: 'AGES 5–15', description: 'February break, spring break, and December break intensive programs. Multi-sport options.' },
    { id: 'pd-day-camps', name: 'PD-Day Camps', emoji: '', ages: 'AGES 5–15', description: 'Single-day programs aligned with Regina school PD days. Book individual days or full packages.' },
    { id: 'in-school-delivery', name: 'In-School Delivery', emoji: '', ages: 'AGES K–12', description: 'NAA coaches deliver programming inside partner schools during the school day.' },
    { id: 'birthday-parties', name: 'Birthday Party Packages', emoji: '', ages: 'AGES 4–12', description: 'Hosted sport birthday parties with NAA staff, equipment, and a customized activity lineup.' },
    { id: 'corporate-sports-days', name: 'Corporate Sports Days', emoji: '', ages: 'ADULTS', description: 'Team-building events, leagues, and corporate tournaments with full NAA staff and equipment.' },
  ],
};

// ─── Legacy compatibility shims ───────────────────────────────────────────────
export const pillars = activePrograms.map((p) => ({
  id: p.id,
  number: p.order,
  name: p.name,
  navTitle: p.navTitle,
  subtitle: p.subtitle,
  icon: p.icon,
  color: p.color,
  bgColor: p.bgColor,
  description: p.description,
  highlights: p.highlights,
  sports: [p.name],
  items: [{ name: p.name, emoji: p.emoji, category: 'Active Sports Programs', description: p.description, ages: p.ages, ratio: p.ratio, venue: p.venue, sessionsPerWeek: p.sessionsPerWeek, blockWeeks: p.blockWeeks, blockPrice: p.blockPrice, hourlyRate: p.hourlyRate, paymentPlan: p.paymentPlan }],
}));

export const tiers = [
  { name: 'Discover', ages: '2–7', format: '8–10 weeks · 45–60 min · 1×/week', focus: 'Fundamental movement skills, hand-eye coordination, joyful exploration', ratio: '1:6 to 1:8' },
  { name: 'Develop', ages: '8–12', format: '10 weeks · 60–75 min · 1×/week', focus: 'Technical fundamentals, small-sided games, multi-sport sampling', ratio: '1:10 to 1:12' },
  { name: 'Advance', ages: '12–16', format: '10 weeks · 90 min · 1–2×/week', focus: 'Tactical awareness, position play, competitive gameplay application', ratio: '1:12 to 1:14' },
  { name: 'Tournaments', ages: 'All Ages', format: 'Weekend invitationals & showcases', focus: 'Competitive matches, sportsmanship, live scoring, and awards', ratio: 'Certified Referees' },
];
