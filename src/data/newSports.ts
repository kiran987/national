import type { DetailedProgram } from './programs';

export interface NewSportFact {
  label: string;
  value: string;
  note?: string;
}

export interface NewSportBenefit {
  icon: string;
  title: string;
  text: string;
}

export interface NewSportStep {
  label: string;
  title: string;
  text: string;
}

export interface NewSportGroup {
  name: string;
  ages: string;
  size: string;
  text: string;
}

export interface NewSportPage {
  slug: string;
  eyebrow: string;
  statusChip: string;
  accent: string;
  accentDeep: string;
  heroImage: string;
  heroPosition: string;
  intro: string;
  facts: NewSportFact[];
  benefitsTitle: string;
  benefits: NewSportBenefit[];
  groupsTitle?: string;
  groups?: NewSportGroup[];
  includedTitle?: string;
  included?: { name: string; items: string[] }[];
  planTitle: string;
  planSubtitle: string;
  plan: NewSportStep[];
  flowTitle?: string;
  flow?: NewSportStep[];
  gallery: { src: string; alt: string; caption: string }[];
  faqs: { question: string; answer: string }[];
  metaTitle: string;
  metaDescription: string;
}

export const newSportPages: Record<string, NewSportPage> = {
  chess: {
    slug: 'chess',
    eyebrow: 'Mind Sports Academy',
    statusChip: 'Starting Soon · Limited Seats',
    accent: '#DDAA40',
    accentDeep: '#0b1a33',
    heroImage: '/images/programs/chess-hero.webp',
    heroPosition: 'center 40%',
    intro:
      'National Strike Chess is a small-cohort academy that turns curious beginners into confident, composed thinkers. Over eight focused weeks, young players learn how to plan ahead, weigh risk against reward and own every decision they make, one move at a time.',
    facts: [
      { label: 'Ages', value: '6–17', note: 'Beginner to Intermediate' },
      { label: 'Cohort Size', value: 'Max 10', note: 'Strictly capped per batch' },
      { label: 'Program Length', value: '8 Weeks', note: '1 session per week' },
      { label: 'Session', value: '75 min', note: 'Instruction + guided play' },
    ],
    benefitsTitle: 'What Chess Builds Beyond the Board',
    benefits: [
      {
        icon: 'grid',
        title: 'Spatial Reasoning & Math Aptitude',
        text: 'Players calculate sequential branching paths and visualize board states several moves ahead.',
      },
      {
        icon: 'focus',
        title: 'Sustained Attention Span',
        text: 'Deep, screen-free immersion that trains patience and quiet, focused discipline.',
      },
      {
        icon: 'scale',
        title: 'Calculated Decision-Making',
        text: 'Young thinkers learn to assess risk versus reward, manage the clock and take responsibility for every choice.',
      },
      {
        icon: 'heart',
        title: 'Emotional Composure',
        text: 'Resilience through gracious victory, objective loss analysis and constructive post-game review.',
      },
    ],
    planTitle: '8-Week Curriculum Blueprint',
    planSubtitle: 'A structured path from the first move to the first tournament.',
    plan: [
      { label: 'Week 1', title: 'The Board & First Checkmates', text: 'Board geography, piece values, algebraic notation and basic checkmate concepts, including defending against Fool’s Mate and Scholar’s Mate.' },
      { label: 'Week 2', title: 'Opening Fundamentals', text: 'The golden rules: control the center, develop minor pieces, castle early and avoid unnecessary pawn moves.' },
      { label: 'Week 3', title: 'Tactical Weapons I', text: 'Forks, pins and skewers. Recognizing vulnerabilities on opponent squares.' },
      { label: 'Week 4', title: 'Tactical Weapons II', text: 'Discovered attacks, double checks, deflections and back-rank vulnerabilities.' },
      { label: 'Week 5', title: 'Middle-Game Strategy', text: 'Outposts, open files, piece activity and pawn structure fundamentals.' },
      { label: 'Week 6', title: 'Essential Endgames', text: 'King and Queen vs. King, King and Rook vs. King, and the Rule of the Square for pawn promotion.' },
      { label: 'Week 7', title: 'Clock Management & Match Protocol', text: 'Touch-move rule, handling time scrambles and psychological composure.' },
      { label: 'Week 8', title: 'NAA Rapid Chess Showcase', text: 'Internal round-robin mini-tournament, individual performance analysis and certificates.' },
    ],
    gallery: [
      { src: '/images/programs/chess-2.webp', alt: 'Wooden chess pieces on a board', caption: 'Strategy, one move at a time' },
      { src: '/images/programs/chess-3.webp', alt: 'Close-up of chess pieces', caption: 'Piece activity & tactics' },
      { src: '/images/programs/chess-4.webp', alt: 'Overhead view of a chessboard', caption: 'Board vision' },
    ],
    faqs: [
      { question: 'What ages and levels is National Strike Chess for?', answer: 'Players aged 6 to 17, from complete beginners to intermediate players. Coaches adapt the pace and positions to each player in the cohort.' },
      { question: 'How big are the groups?', answer: 'Each cohort is strictly capped at 10 students so every player gets real coaching attention and playing time.' },
      { question: 'How long is the program?', answer: 'Eight weeks, one 75-minute session per week, finishing with the NAA Rapid Chess Showcase mini-tournament.' },
      { question: 'When does registration open and what does it cost?', answer: 'Registration has not opened yet. Dates, venue and pricing will be announced soon. Use the notify button and we will email you the moment seats are released.' },
      { question: 'Does my child need to know how to play already?', answer: 'No. Week 1 starts with the board, the pieces and notation, so complete beginners are welcome.' },
    ],
    metaTitle: 'National Strike Chess | Youth Chess Academy in Regina, SK | NAA',
    metaDescription:
      'National Strike Chess: an 8-week youth chess academy for ages 6–17 in Regina, SK. Cohorts capped at 10 students. Starting soon.',
  },

  'table-tennis': {
    slug: 'table-tennis',
    eyebrow: 'Racket Sports Academy',
    statusChip: 'Winter · January 2027',
    accent: '#ef4444',
    accentDeep: '#0b2a22',
    heroImage: '/images/programs/tabletennis-hero.webp',
    heroPosition: 'center 55%',
    intro:
      'National Spin Table Tennis is built around speed, spin and smart footwork. Small stations, a 1:6 coach ratio and a ten-week progression take players from clean flat drives to serve-plus-third-ball attacks and real match play.',
    facts: [
      { label: 'Launch', value: 'Jan 2027', note: 'Winter season' },
      { label: 'Program Length', value: '10 Weeks', note: '1 session per week' },
      { label: 'Session', value: '90 min', note: 'Drills, footwork, match play' },
      { label: 'Station Size', value: 'Max 6', note: 'Coach ratio 1:6 per table' },
    ],
    benefitsTitle: 'Why Table Tennis',
    benefits: [
      { icon: 'zap', title: 'Reaction Speed', text: 'Rapid exchanges at close range sharpen reflexes and decision speed.' },
      { icon: 'target', title: 'Hand-Eye Coordination', text: 'Tracking spin and ball bounce builds precise paddle control.' },
      { icon: 'activity', title: 'Footwork & Conditioning', text: 'Shuffle steps and transitions between forehand and backhand zones build agility and stamina.' },
      { icon: 'brain', title: 'Tactical Thinking', text: 'Serve placement, spin variation and point construction turn rallies into strategy.' },
    ],
    groupsTitle: 'Recommended Cohort Split',
    groups: [
      { name: 'Youth Division', ages: 'Ages 7–15', size: 'Max 6 per table station', text: 'Movement fundamentals, hand-eye coordination and consistent rallies.' },
      { name: 'Open / Adult Division', ages: 'Ages 16+', size: 'Max 6 per table station', text: 'Match tactics, aggressive spin generation and footwork conditioning.' },
    ],
    planTitle: '10-Week Training Structure',
    planSubtitle: 'Five two-week blocks that build from stance to a tournament.',
    plan: [
      { label: 'Weeks 1–2', title: 'Stance & Ball Mechanics', text: 'Neutral athletic ready position, shakehand and penhold grip adjustment, ball-bounce tracking, forehand and backhand flat drives.' },
      { label: 'Weeks 3–4', title: 'Spin Dynamics & Active Footwork', text: 'Introduction to topspin and brush contact, side-to-side shuffle steps and transition footwork between forehand and backhand zones.' },
      { label: 'Weeks 5–6', title: 'Underspin & Push Rallies', text: 'Short pushes, backspin control, reading incoming spin off opponent paddles and table placement discipline.' },
      { label: 'Weeks 7–8', title: 'The Serve & Third-Ball Attack', text: 'Legal serve mechanics, spin variation serves (backspin, sidespin, ghost serve) and immediate third-ball offensive counters.' },
      { label: 'Weeks 9–10', title: 'Match Play & Tactical Tournament', text: 'In-game strategy, serve-receive positioning, point construction and the National Spin Winter Cup intra-academy tournament.' },
    ],
    gallery: [
      { src: '/images/programs/tabletennis-2.webp', alt: 'Table tennis paddles and a ball', caption: 'Spin, speed & control' },
    ],
    faqs: [
      { question: 'When does National Spin Table Tennis start?', answer: 'The program launches in the Winter season, January 2027. Exact dates and venue will be announced before registration opens.' },
      { question: 'What are the age divisions?', answer: 'A Youth Division for ages 7–15 and an Open / Adult Division for ages 16+, each with a maximum of 6 players per table station.' },
      { question: 'How long is each session?', answer: 'Ten weekly sessions of 90 minutes, ending with the National Spin Winter Cup.' },
      { question: 'How do I register?', answer: 'Registration has not opened yet. Use the notify button and we will email you as soon as it does. Pricing will be shared at launch.' },
    ],
    metaTitle: 'National Spin Table Tennis | Youth & Adult Table Tennis in Regina, SK | NAA',
    metaDescription:
      'National Spin Table Tennis: a 10-week program for youth (7–15) and adults (16+) in Regina, SK. 1:6 coach ratio. Launching January 2027.',
  },

  snowboarding: {
    slug: 'snowboarding',
    eyebrow: 'Winter Sports Academy',
    statusChip: 'Starting Soon · Winter',
    accent: '#38bdf8',
    accentDeep: '#0a2540',
    heroImage: '/images/programs/snowboard-hero.webp',
    heroPosition: 'center 40%',
    intro:
      'National Shred Snowboarding takes riders from their first glide to confident all-mountain control. Small age-matched batches, a clear eight-week progression and 100 minutes of real on-snow coaching every session keep learning safe, fast and fun.',
    facts: [
      { label: 'Program Length', value: '8 Weeks', note: '1 session per week' },
      { label: 'Session', value: '2.5 hrs', note: '100 min of on-snow coaching' },
      { label: 'Age Batches', value: '3', note: 'Groms · Teens · Adults' },
      { label: 'Location', value: 'Local Hill', note: 'Winter park, details soon' },
    ],
    benefitsTitle: 'Built for Safe, Fast Progress',
    benefits: [
      { icon: 'users', title: 'Strict Age Batches', text: 'Riders train with their own age group so coaching, pace and terrain always fit.' },
      { icon: 'shield', title: 'Safety First', text: 'Gear and binding checks, safe falling mechanics and lift safety are taught from the first lesson.' },
      { icon: 'target', title: 'Personal Goals Every Week', text: 'Every session ends with coach feedback on body position and a clear goal for the next session.' },
      { icon: 'mountain', title: 'Real Mountain Skills', text: 'From the magic carpet to blue terrain, riders learn the control needed for the whole mountain.' },
    ],
    groupsTitle: 'Strict Age Batches',
    groups: [
      { name: 'Groms', ages: 'Ages 6–11', size: '5 to 8 riders per batch', text: 'Playful, safety-focused first turns for younger riders.' },
      { name: 'Teens', ages: 'Ages 12–16', size: '5 to 8 riders per batch', text: 'Faster progression and confident terrain choices.' },
      { name: 'Adults', ages: 'Ages 17+', size: '6 to 10 riders per batch', text: 'Technique-first coaching for beginners and returning riders.' },
    ],
    planTitle: '8-Week Progression Plan',
    planSubtitle: 'Four two-week blocks, from board basics to carving the whole mountain.',
    plan: [
      { label: 'Weeks 1–2', title: 'Board Basics & Edge Initiation', text: 'Stance determination (Regular vs. Goofy), one-foot skating, straight glides, heel-side and toe-side slipping and safe falling mechanics.' },
      { label: 'Weeks 3–4', title: 'Directional Control & Lift Safety', text: 'The “Floating Leaf” exercise (side-to-side traverse), basic independent steering and safe use of the magic carpet and chairlift.' },
      { label: 'Weeks 5–6', title: 'Linked S-Turns & Speed Control', text: 'Fluid weight transitions from toe-edge to heel-edge, upper and lower body separation and speed control on green slopes.' },
      { label: 'Weeks 7–8', title: 'All-Mountain Carving & Progression', text: 'Dynamic carving, riding steeper blue terrain, managing variable snow conditions, small terrain rollers and the graduation lap.' },
    ],
    flowTitle: 'Inside a 2.5-Hour Session',
    flow: [
      { label: '0:00 – 0:20', title: 'Pre-Hill Check', text: 'Gear, boot and binding fit inspection, safety check, on-snow warm-up and the daily objective briefing.' },
      { label: '0:20 – 2:00', title: 'Slope Instruction & Progression', text: '100 minutes of active on-snow coaching, drill demonstrations, edge refinement and guided hill runs.' },
      { label: '2:00 – 2:30', title: 'Debrief & Goal Setting', text: 'Coach feedback on body position, cool-down, equipment check-in and personal training goals for the next session.' },
    ],
    gallery: [
      { src: '/images/programs/snowboard-2.webp', alt: 'Snowboarder on a groomed slope', caption: 'First turns on the hill' },
      { src: '/images/programs/snowboard-3.webp', alt: 'Two snowboarders riding down a slope', caption: 'Riding together' },
      { src: '/images/programs/snowboard-4.webp', alt: 'Close-up of a snowboard and boot in the snow', caption: 'Edge control' },
    ],
    faqs: [
      { question: 'Where and when will lessons run?', answer: 'Training takes place at a local hill or winter park. Exact dates will be scheduled around resort and gear-rental availability and announced before registration opens.' },
      { question: 'What are the age groups?', answer: 'Groms (ages 6–11) and Teens (ages 12–16) ride in batches of 5 to 8, and Adults (ages 17+) in batches of 6 to 10.' },
      { question: 'How long is each session?', answer: 'Each weekly session is 2.5 hours: a 20-minute pre-hill check, 100 minutes of on-snow coaching and a 30-minute debrief with coach feedback and goal setting.' },
      { question: 'Do riders need experience?', answer: 'No. Weeks 1–2 cover stance, gliding and safe falling, so true beginners are welcome.' },
      { question: 'How do I register?', answer: 'Registration has not opened yet. Use the notify button and we will email you as soon as dates, pricing and gear details are confirmed.' },
    ],
    metaTitle: 'National Shred Snowboarding | Snowboard Lessons in Regina, SK | NAA',
    metaDescription:
      'National Shred Snowboarding: an 8-week program for Groms (6–11), Teens (12–16) and Adults (17+) in small batches. Starting soon.',
  },
};

const common = {
  hourlyRate: 0,
  paymentPlan: true,
  blockPrice: 0,
  tiers: [],
  accentColor: '#DDAA40',
  emoji: '',
};

export const newSportPrograms: DetailedProgram[] = [
  {
    ...common,
    id: 'chess',
    slug: 'chess',
    order: 3,
    status: 'coming-soon',
    name: 'National Strike Chess',
    navTitle: 'Chess',
    shortName: 'Chess',
    badge: 'Coming Soon · Ages 6–17',
    subtitle: 'Strategic Foresight, Unshakable Focus, Masterful Play',
    tagline: 'Strategic Foresight, Unshakable Focus, Masterful Play',
    icon: 'chess',
    color: '#0b1a33',
    bgColor: 'rgba(11,26,51,0.08)',
    image: '/images/programs/chess-hero.webp',
    description:
      'An 8-week small-cohort chess academy for ages 6–17, from beginner to intermediate. Cohorts are strictly capped at 10 students.',
    longDescription: newSportPages.chess.intro,
    ages: 'Ages 6–17 (Beginner to Intermediate)',
    ratio: 'Max 10 students per cohort',
    venue: 'Venue to be announced',
    seasonDuration: '8 Weeks · 1 session per week',
    sessionsPerWeek: '1× / week · 75 min',
    blockWeeks: 8,
    highlights: [
      'Strictly capped at 10 students per cohort',
      '8 weeks · one 75-minute session per week',
      'Finishes with the NAA Rapid Chess Showcase mini-tournament',
    ],
    skillsFocus: ['Openings & tactics', 'Middle-game strategy', 'Endgames', 'Clock management'],
    whatsIncluded: [],
    faqs: newSportPages.chess.faqs,
  },
  {
    ...common,
    id: 'table-tennis',
    slug: 'table-tennis',
    order: 4,
    status: 'coming-soon',
    name: 'National Spin Table Tennis',
    navTitle: 'Table Tennis',
    shortName: 'Table Tennis',
    badge: 'Coming Soon · Winter 2027',
    subtitle: 'Precision, Reaction, and High-Velocity Rallies',
    tagline: 'Precision, Reaction, and High-Velocity Rallies',
    icon: 'tabletennis',
    color: '#7f1d1d',
    bgColor: 'rgba(127,29,29,0.08)',
    image: '/images/programs/tabletennis-hero.webp',
    description:
      'A 10-week table tennis program launching January 2027 for youth (7–15) and open / adult (16+) divisions, with a 1:6 coach ratio.',
    longDescription: newSportPages['table-tennis'].intro,
    ages: 'Youth 7–15 · Open / Adult 16+',
    ratio: '1:6 Coach Ratio · max 6 per table',
    venue: 'Venue to be announced',
    seasonDuration: '10 Weeks · 1 session per week',
    sessionsPerWeek: '1× / week · 90 min',
    blockWeeks: 10,
    highlights: [
      'Launching Winter, January 2027',
      'Max 6 players per table station',
      'Ends with the National Spin Winter Cup',
    ],
    skillsFocus: ['Grip & stance', 'Topspin & underspin', 'Serve & third-ball attack', 'Match tactics'],
    whatsIncluded: [],
    faqs: newSportPages['table-tennis'].faqs,
  },
  {
    ...common,
    id: 'snowboarding',
    slug: 'snowboarding',
    order: 5,
    status: 'coming-soon',
    name: 'National Shred Snowboarding',
    navTitle: 'Snowboarding',
    shortName: 'Snowboarding',
    badge: 'Coming Soon · Groms, Teens & Adults',
    subtitle: 'From First Turns to Total Mountain Control',
    tagline: 'From First Turns to Total Mountain Control',
    icon: 'snowboard',
    color: '#0a2540',
    bgColor: 'rgba(10,37,64,0.08)',
    image: '/images/programs/snowboard-hero.webp',
    description:
      'An 8-week on-snow program for Groms (6–11), Teens (12–16) and Adults (17+) in small age-matched batches at a local hill.',
    longDescription: newSportPages.snowboarding.intro,
    ages: 'Groms 6–11 · Teens 12–16 · Adults 17+',
    ratio: '5–8 riders (youth) · 6–10 riders (adult) per batch',
    venue: 'Local hill / winter park (details to be announced)',
    seasonDuration: '8 Weeks · 1 session per week',
    sessionsPerWeek: '1× / week · 2.5 hours',
    blockWeeks: 8,
    highlights: [
      'Strict age batches: Groms, Teens and Adults',
      '2.5-hour sessions with 100 minutes of on-snow coaching',
      'Coach feedback and personal goals every week',
    ],
    skillsFocus: ['Edge control', 'Lift safety', 'Linked turns', 'All-mountain carving'],
    whatsIncluded: [
      '8 weekly sessions of 2.5 hours with 100 minutes of on-snow coaching',
      'Small, strictly age-matched batches',
    ],
    faqs: newSportPages.snowboarding.faqs,
  },
];
