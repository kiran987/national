// ─────────────────────────────────────────────────────────────────────────────
// programs.ts  —  Source-of-truth data for NAA programs
//
// ACTIVE programs are now: Basketball, Volleyball, National Shield,
// Camps & Clinics, Tournaments (5 core programs).
//
// Athletics, Soccer Little Kids, Badminton, and new sports are Coming Soon.
//
// NOTE: Content Collections are the canonical source for program detail pages.
// This file provides lightweight references used on the homepage, programs
// index page, and navigation. Update the matching .md file in
// src/content/programs/ for any change that appears on a detail page.
// ─────────────────────────────────────────────────────────────────────────────

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
  highlights: string[];
  skillsFocus: string[];
  tiers: ProgramTierDetail[];
  whatsIncluded: string[];
  faqs: ProgramFAQ[];
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

// ─── 3 Core Active Programs (Live Now) ─────────────────────────────────────────
export const activePrograms: DetailedProgram[] = [
  {
    id: 'basketball',
    slug: 'basketball',
    order: 1,
    name: 'Basketball Academy',
    navTitle: 'Basketball',
    shortName: 'Basketball',
    badge: 'Youth & Junior Development',
    subtitle: 'Technical Skill, Spacing & Game IQ',
    tagline: 'Building confident, high-IQ ball handlers and decisive team players.',
    emoji: '🏀',
    icon: '🏀',
    color: '#021F47',
    accentColor: '#DDAA40',
    bgColor: 'rgba(2,31,71,0.08)',
    description:
      'Structured basketball skill development focusing on dribbling mechanics, shooting form, triple-threat decision making, footwork, and small-sided 3v3 and 4v4 game play under certified Basketball Canada coaches.',
    longDescription:
      'The National Athletics Academy Basketball program provides a progressive developmental pathway for players aged 5 to 16. Rather than relying solely on unstructured scrimmages, our curriculum breaks down critical motor patterns — footwork, balance, shooting mechanics, passing lanes, and court awareness — before applying them in fast-paced, decision-rich game scenarios.',
    ages: 'Ages 5–16 (Discover, Develop, Advance)',
    ratio: '1:10 to 1:14 Coach-to-Athlete Ratio',
    venue: 'Regina Public & Catholic School Gymnasiums',
    seasonDuration: '10-Week Seasonal Block (Fall, Winter, Spring)',
    sessionsPerWeek: '1–2× / week · 60–90 min',
    blockWeeks: 10,
    blockPrice: 195,
    hourlyRate: 19.5,
    paymentPlan: true,
    highlights: [
      'Structured 10-week seasonal blocks with progressive weekly curricula',
      'Basketball Canada certified coaching staff with competitive experience',
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
        name: 'Discover Hoops',
        badge: 'FUNdamentals',
        ages: 'Ages 5–7',
        format: '8–10 Weeks · 60 min · 1×/week',
        focus:
          'Joyful exploration, eye-hand coordination, modified basket heights (8.5ft), introductory dribbling games, and active motor skills.',
        ratio: '1:10 Coach Ratio',
        curriculum: [
          'Stationary ball control and finger pad dribbling',
          'Jump stops, pivots, and basic triple-threat position',
          'Target shooting form with size 5 lightweight basketballs',
          'Fun obstacle courses and mini 2v2 small-court games',
        ],
      },
      {
        name: 'Develop Hoops',
        badge: 'Core Skills',
        ages: 'Ages 8–11',
        format: '10 Weeks · 75 min · 1×/week',
        focus:
          'Technical fundamentals, crossover & change-of-direction moves, layups from both sides, defensive sliding, and 3v3 structured play.',
        ratio: '1:12 Coach Ratio',
        curriculum: [
          'Speed dribbling, protective dribble, and retreat footwork',
          'Layup footwork (right/left stride cadence) and rim finishing',
          'Catch-and-shoot mechanics and free-throw routines',
          '3v3 half-court tactical spacing and screen-away cuts',
        ],
      },
      {
        name: 'Advance Hoops',
        badge: 'Competitive IQ',
        ages: 'Ages 12–16',
        format: '10 Weeks · 90 min · 2×/week',
        focus:
          'High-school prep, tactical awareness, pick-and-roll execution, lockdown man-to-man defense, fast-break decision making, and 4v4/5v5 scrimmages.',
        ratio: '1:14 Coach Ratio',
        curriculum: [
          'Advanced separation moves (step-backs, hesitation, euro-steps)',
          'Reading defensive closeouts and secondary help defenders',
          'Pick-and-roll, pick-and-pop, and motion offense concepts',
          'Full-court defensive rotations and competitive matchplay',
        ],
      },
    ],
    whatsIncluded: [
      'Official NAA Basketball Academy Training Jersey',
      '10 weeks of certified coach-led training (60–90 min sessions)',
      'Mid-season benchmark check and end-of-block NAA Progress Report',
      'Dedicated team portal & live communications',
      'Eligible for 10% multi-child and multi-sport family discounts',
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
          'We use age-appropriate equipment: Size 5 balls and lowered rims (8.5–9 ft) for Discover (ages 5–7); Size 6 balls and standard 10 ft rims for Develop (ages 8–11); and official Size 6/7 balls for Advance (ages 12–16).',
      },
      {
        question: 'Can beginners join the Basketball Academy?',
        answer:
          'Absolutely! Our Discover and Develop tiers are specifically designed for beginners and multi-sport athletes. Coaches differentiate drills so every player develops confidence at their current skill level.',
      },
    ],
  },
  {
    id: 'volleyball',
    slug: 'volleyball',
    order: 2,
    name: 'Volleyball Academy',
    navTitle: 'Volleyball',
    shortName: 'Volleyball',
    badge: 'Indoor Skill & Team Progression',
    subtitle: 'Passing Precision, Setting & Attack Mechanics',
    tagline: 'Developing dynamic movement, court agility, and crisp volleyball fundamentals.',
    emoji: '🏐',
    icon: '🏐',
    color: '#83161B',
    accentColor: '#DDAA40',
    bgColor: 'rgba(131,22,27,0.08)',
    description:
      'Comprehensive indoor volleyball instruction covering forearm platform passing, overhead setting precision, overhand serve consistency, spike approach footwork, and team defensive rotation with age-adjusted net heights.',
    longDescription:
      'Volleyball demands explosive agility, exceptional hand-eye coordination, and split-second teamwork. The NAA Volleyball Academy provides Regina youth with a technical foundation that standard school physical education cannot match. Led by Volleyball Canada certified coaches, players master ball control mechanics in structured drills and small-sided modified games.',
    ages: 'Ages 8–16 (Develop & Advance)',
    ratio: '1:10 to 1:14 Coach-to-Athlete Ratio',
    venue: 'Regina Public & Catholic School Gymnasiums',
    seasonDuration: '10-Week Seasonal Block (Fall, Winter, Spring)',
    sessionsPerWeek: '1× / week · 75–90 min',
    blockWeeks: 10,
    blockPrice: 185,
    hourlyRate: 14.8,
    paymentPlan: true,
    highlights: [
      'Age-adjusted net heights and lightweight Mikasa trainer balls for optimal learning',
      'Volleyball Canada certified coaches emphasizing injury-safe landing mechanics',
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
        name: 'Develop Volleyball',
        badge: 'Foundations',
        ages: 'Ages 8–12',
        format: '10 Weeks · 75 min · 1×/week',
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
        name: 'Advance Volleyball',
        badge: 'Tactical & Matchplay',
        ages: 'Ages 13–16',
        format: '10 Weeks · 90 min · 1–2×/week',
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
      'Official NAA Volleyball Academy Training Shirt',
      '10 weeks of certified coach instruction and scrimmages',
      'Access to regulation gym facilities and adjusted net systems',
      'End-of-block NAA Volleyball Progress Report',
      'Dedicated team communications and notifications',
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
          'Yes! Our Develop Volleyball tier (Ages 8–12) welcomes complete beginners. We use low-impact training balls so athletes learn proper technique without discomfort.',
      },
    ],
  },
  {
    id: 'national-shield',
    slug: 'national-shield',
    order: 3,
    name: 'National Shield Martial Arts',
    navTitle: 'National Shield',
    shortName: 'National Shield',
    badge: 'Power · Protect · Perform',
    subtitle: 'Fitness-First Martial Arts & Personal Development',
    tagline: 'Strong Body. Confident Mind. Safe Choices.',
    emoji: '🛡️',
    icon: '🛡️',
    color: '#1a1a2e',
    accentColor: '#DDAA40',
    bgColor: 'rgba(26,26,46,0.08)',
    description:
      'Fitness-focused personal development through martial arts for ages 5 to 18+ and super-seniors. The SHIELD Safety System™, BRAVE Anti-Bullying Program, and a 5-level achievement system — delivered by VSC-screened, Respect in Sport certified coaches following the Rule of Two.',
    longDescription:
      'National Shield Martial Arts is a fitness-first, safety-focused personal development program built on five pillars: Power, Protect, Confidence, Respect, and Skill. Participants build genuine fitness, learn martial arts fundamentals, and develop real personal safety awareness through the SHIELD Safety System™ and BRAVE Anti-Bullying curriculum. We do not teach children to look for fights — we teach them to avoid conflict, respond confidently, stay safe, and get help.',
    ages: 'Ages 5–12, 13–17, 18+ & Super-Seniors (3 streams)',
    ratio: '1:8 to 1:12 Coach-to-Athlete Ratio',
    venue: 'Matted Gymnasium Facilities — Regina',
    seasonDuration: '12-Week Foundation Cycle',
    sessionsPerWeek: '1× or 2× / week · Friday & Saturday evenings · 60 min',
    blockWeeks: 12,
    blockPrice: 0, // TBD — Contact Us
    hourlyRate: 0,
    paymentPlan: true,
    highlights: [
      'SHIELD Safety System™ — a 6-step structured personal safety framework taught every cycle',
      'BRAVE Anti-Bullying Program — scenario role-play, not lecture',
      '5-level National Shield Achievement System — Foundation through Leader',
      'Every coach holds VSC, Respect in Sport, First Aid/CPR-C, and concussion certification',
      'Rule of Two enforced — no adult ever alone with a child, ever',
      'Monthly Shield Challenge Day with effort & character-based recognition',
    ],
    skillsFocus: [
      'Fitness — Strength, Endurance, Agility & Explosive Conditioning',
      'Martial Arts Fundamentals — Stance, Footwork, Pad Work & Controlled Technique',
      'SHIELD Safety System™ — 6 Personal Safety Principles',
      'BRAVE Anti-Bullying — 5-Step Assertive Response Framework',
      'Confidence & Assertive Communication Under Pressure',
      'Discipline, Leadership & Respect in Sport Values',
    ],
    tiers: [
      {
        name: 'National Shield Juniors',
        badge: 'Ages 5–12',
        ages: 'Ages 5–12',
        format: '12 Weeks · 60 min · 1–2×/week',
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
        badge: 'Ages 13–17',
        ages: 'Ages 13–17',
        format: '12 Weeks · 60 min · 1–2×/week',
        focus:
          '40% strength & athletic conditioning, 30% multi-discipline martial arts depth (boxing, kickboxing, wrestling movement, grappling fundamentals), 15% practical self-defence scenarios & situational awareness, 15% leadership, mindset & resilience. Controlled partner technical drills with matched size/maturity; light technical sparring at Level 3+ requires protective equipment and parental consent.',
        ratio: '1:10 Coach Ratio (min. 2 adults)',
        curriculum: [
          'Structured functional strength progression (bodyweight → resistance bands → light external loads)',
          'Practical defensive positioning and tactical escape mechanics',
          'Full SHIELD Safety System™ — awareness, boundary setting, and threat de-escalation',
          'Junior Leader pathway — senior youth mentor and assist Junior classes under coach supervision',
          '12-Week BUILD → PROTECT → PERFORM cycle with benchmark assessments',
        ],
      },
      {
        name: 'National Shield Pro',
        badge: 'Ages 18+ & Super-Seniors',
        ages: 'Ages 18+ & Super-Seniors',
        format: '12 Weeks · 60 min · 1–3×/week',
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
      '12 weeks of certified coach-led sessions (Friday and/or Saturday evenings)',
      'SHIELD Safety System™ and BRAVE Anti-Bullying curriculum every cycle',
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
          'Every National Shield coach holds a Criminal Record Check plus Vulnerable Sector Check, Respect in Sport (Activity Leader), NCCP Safe Sport Training, Standard First Aid + CPR-C (AED), and concussion recognition certification. The Rule of Two is mandatory.',
      },
      {
        question: 'Is there a trial class?',
        answer:
          'Yes — we offer a trial class for new participants. Contact us to arrange your child\'s first session before committing to a full 12-week cycle.',
      },
    ],
  },
];

// ─── Coming Soon Programs (Full Detail Pages Available) ──────────────────────
// These programs have complete detail pages but are not yet running.
// They appear in the Coming Soon section with a 'View Full Program Details' link.
export const comingSoonPrograms: DetailedProgram[] = [
  {
    id: 'camps',
    slug: 'camps',
    order: 4,
    name: 'Camps & Clinics',
    navTitle: 'Camps & Clinics',
    shortName: 'Camps',
    badge: 'School Breaks, PD Days & Summer',
    subtitle: 'Multi-Sport Day Camps, Clinics & School Programming',
    tagline: 'Sport learning beyond the regular season — all ages, all breaks, all sports.',
    emoji: '🏕️',
    icon: '🏕️',
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
    order: 5,
    name: 'Tournaments',
    navTitle: 'Tournaments',
    shortName: 'Tournaments',
    badge: 'Competitive Fixtures & Showcases',
    subtitle: 'Seasonal Invitationals, Showcases & Multi-Sport Jamborees',
    tagline: 'High-energy, well-organized competition celebrating sportsmanship and athletic excellence in Regina.',
    emoji: '🏆',
    icon: '🏆',
    color: '#83161B',
    accentColor: '#DDAA40',
    bgColor: 'rgba(131,22,27,0.08)',
    description:
      'Turnkey competitive tournaments, seasonal invitationals, 3v3 basketball showdowns, volleyball invitationals, and multi-sport showcases with official refereeing, live TeamLinkt digital scoring, awards, and medals.',
    longDescription:
      'Competition is where training meets character. National Athletics Academy organizes premium, family-friendly tournament series across Regina sporting venues. With certified officials, transparent division seeding, real-time live digital brackets on TeamLinkt, and an uncompromising commitment to Respect in Sport, NAA tournaments set a new standard for youth athletics events in Saskatchewan.',
    ages: 'All Ages (Youth, Juniors & Community Divisions)',
    ratio: 'Official Staffing & Certified Referees',
    venue: 'Regina Athletic Fieldhouses, School Gymnasiums & Turf Facilities',
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

// ─── Coming Soon / Starting Next Season ──────────────────────────────────────
export const upcomingSports: UpcomingSport[] = [
  {
    name: 'Camps & Clinics',
    emoji: '🏕️',
    tag: 'Summer Day Camps, School Breaks, PD Days & In-School',
    description:
      'Full-week summer day camps, school-break programs, PD day camps, birthday parties and corporate sports days — multi-sport, certified coaches, all ages.',
    targetAges: 'Ages 4–17 & Adults',
    status: 'Coming Soon',
    detailPageUrl: '/programs/camps/',
    detailBadge: 'Full Program Details Available',
  },
  {
    name: 'Tournaments & Showcases',
    emoji: '🏆',
    tag: 'Seasonal Invitationals, 3v3 Showdowns & Multi-Sport Jamborees',
    description:
      'Turnkey competitive tournaments with live TeamLinkt brackets, certified referees, medals, MVP awards, and family-friendly showcase events across Regina.',
    targetAges: 'All Ages',
    status: 'Coming Soon',
    detailPageUrl: '/programs/tournaments/',
    detailBadge: 'Full Program Details Available',
  },
  {
    name: 'Athletics (Track & Field)',
    emoji: '🏃',
    tag: 'Sprint, Jump & Field Foundations',
    description:
      'Scientifically sequenced track & field foundations covering sprint mechanics, hurdle rhythm, long jump, throwing form, and relay handoffs for ages 6–16.',
    targetAges: 'Ages 6–16',
    status: 'Coming Soon',
  },
  {
    name: 'Soccer — Little Kids (U2–U5)',
    emoji: '⚽',
    tag: 'In Association with Wascana FC',
    description:
      'Early-childhood soccer and physical literacy for ages 2–5 featuring imaginative games, foot-eye coordination, and joyful small-sided play with Canada Soccer certified coaches.',
    targetAges: 'Ages 2–5',
    status: 'Coming Soon',
  },
  {
    name: 'Badminton Academy',
    emoji: '🏸',
    tag: 'Racket Mechanics & Court Agility',
    description:
      'Grip mechanics, 6-corner court footwork, clear/drop/smash execution, and tactical singles & doubles matchplay under certified coaches.',
    targetAges: 'Ages 7–16',
    status: 'Coming Soon',
  },
  {
    name: 'Flag Football & Ball Hockey',
    emoji: '🏈',
    tag: 'Multi-Sport Seasonal Leagues',
    description:
      'Non-contact team sports building route-running, stick handling, teamwork, and high-energy community game play.',
    targetAges: 'Ages 6–15',
    status: 'Coming Soon',
  },
  {
    name: 'Pickleball & Family Recreation',
    emoji: '🥒',
    tag: 'Community Net Sport',
    description:
      'Dinking mechanics, third-shot drops, court positioning, and fun multi-generational doubles leagues on indoor hardwood.',
    targetAges: 'Ages 10+ & Adult / Senior',
    status: 'Coming Soon',
  },
  {
    name: 'Table Tennis & Racket Sports',
    emoji: '🏓',
    tag: 'High-Speed Reflexes & Spin Control',
    description:
      'Fast-twitch hand-eye coordination, paddle spin mechanics, footwork agility, and structured singles/doubles ladder leagues.',
    targetAges: 'Ages 7–16 & Adult',
    status: 'Coming Soon',
  },
  {
    name: 'Mind Sports & Chess Academy',
    emoji: '♟️',
    tag: 'Cognitive Strategy & CFC Pathway',
    description:
      'Structured tactical calculation, opening repertoires, endgame mastery, and monthly CFC-rated tournaments for youth and adults.',
    targetAges: 'Ages 5–17 & Adult',
    status: 'Coming Soon',
  },
  {
    name: 'Strength & Conditioning / Physical Literacy',
    emoji: '💪',
    tag: 'Athletic Foundation & Speed Lab',
    description:
      'Scientifically sequenced LTAD youth strength, injury prevention, rotational power, and speed kinematics for all sports.',
    targetAges: 'Ages 8–17 & Adult',
    status: 'Coming Soon',
  },
];

// ─── Discount Policies ────────────────────────────────────────────────────────
export const discountPolicies = {
  multiChild: '10% discount applied to second and subsequent siblings enrolled in the same seasonal block',
  multiSport: '10% discount on secondary sport registrations within the same family account',
  paymentPlans: 'Split payments into 2 or 3 interest-free installments for seasonal blocks over $150',
  financialAid: 'Flexible payment plans, multi-child discounts, and subsidized community spaces available — no child is turned away for cost alone.',
};

// ─── Athlete Progress Report ──────────────────────────────────────────────────
export const athleteProgressReportDetails = {
  title: 'The NAA Athlete Progress Report',
  subtitle: 'Objective Skill & Character Milestone Tracking',
  tagline: 'Why NAA Stands Apart From Standard Rec Leagues',
  description:
    'Most recreational leagues in Regina offer participation without structured developmental feedback. At NAA, every athlete receives an official end-of-block Progress Report created by certified coaches, tracking specific technical, tactical, physical, and character benchmarks.',
  milestones: [
    {
      category: 'Technical Competency',
      icon: '🎯',
      description:
        'Sport-specific motor skills graded on an objective developmental rubric.',
    },
    {
      category: 'Physical Literacy & Athletic Base',
      icon: '⚡',
      description:
        'Agility, balance, sprint kinematics, rotational power, and spatial awareness evaluated against age-appropriate LTAD standards.',
    },
    {
      category: 'Tactical & Decision-Making IQ',
      icon: '🧠',
      description:
        'Court/field vision, defensive positioning, small-sided game decision speed, and strategic understanding.',
    },
    {
      category: 'Character, Effort & Leadership',
      icon: '🤝',
      description:
        'Coachability, sportsmanship, peer encouragement, resilience after errors, and adherence to Respect in Sport values.',
    },
  ],
};

// ─── LTAD Pathway Stages ──────────────────────────────────────────────────────
export const pathwayStages = [
  { stage: 'Active Start', ages: '2–5', programs: 'Little Kids Soccer (Coming Soon)', objective: 'Joyful movement exploration, balance, listening skills, and early motor confidence' },
  { stage: 'FUNdamentals', ages: '5–8', programs: 'National Shield Juniors, Discover Basketball', objective: 'Fundamental movement skills across core sports; multi-sport sampling priority' },
  { stage: 'Learn to Train', ages: '8–12', programs: 'Develop Basketball, Develop Volleyball, National Shield Juniors', objective: 'Technical skill acquisition, small-sided game IQ, sport sampling maintained' },
  { stage: 'Train to Train', ages: '12–16', programs: 'Advance Basketball, Advance Volleyball, National Shield Youth', objective: 'Sport-specific tactical development combined with progressive athletic strength base' },
  { stage: 'Train to Compete', ages: '14–18', programs: 'NAA Tournament Series, Competitive Invitationals, High School Prep', objective: 'High school / provincial competitive excellence, showcase tournaments, and leadership' },
  { stage: 'Active for Life', ages: 'All Ages', programs: 'National Shield Pro, Community Tournaments, Camps & Clinics', objective: 'Lifelong fitness, camaraderie, competitive recreation, and community belonging' },
];

// ─── Camps & Clinics Section (Programs Index display) ─────────────────────────
export const campsAndClinicsSection = {
  badge: 'CAMPS & CLINICS',
  title: 'Camps, Clinics & School Programs',
  subtitle: 'Sport learning beyond the regular season — summer camps, school-break programming, PD days, and in-school delivery.',
  items: [
    { id: 'summer-day-camps', name: 'Summer Day Camps', emoji: '🌞', ages: 'AGES 5–15', description: 'Full-week multi-sport day camps through July and August. Morning drop-off, end-of-week mini tournament.' },
    { id: 'school-break-camps', name: 'School-Break Camps', emoji: '❄️', ages: 'AGES 5–15', description: 'February break, spring break, and December break intensive programs. Multi-sport options.' },
    { id: 'pd-day-camps', name: 'PD-Day Camps', emoji: '📑', ages: 'AGES 5–15', description: 'Single-day programs aligned with Regina school PD days. Book individual days or full packages.' },
    { id: 'in-school-delivery', name: 'In-School Delivery', emoji: '🏫', ages: 'AGES K–12', description: 'NAA coaches deliver programming inside partner schools during the school day.' },
    { id: 'birthday-parties', name: 'Birthday Party Packages', emoji: '🎂', ages: 'AGES 4–12', description: 'Hosted sport birthday parties with NAA staff, equipment, and a customized activity lineup.' },
    { id: 'corporate-sports-days', name: 'Corporate Sports Days', emoji: '🏢', ages: 'ADULTS', description: 'Team-building events, leagues, and corporate tournaments with full NAA staff and equipment.' },
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
