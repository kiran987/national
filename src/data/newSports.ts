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
  statusText?: string;
  planTitle: string;
  planSubtitle: string;
  plan: NewSportStep[];
  community?: { kicker: string; title: string; text: string; formatsTitle: string; formats: { name: string; text: string }[]; closing: string };
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
      'National Smart Chess is a small-cohort academy that turns curious beginners into confident, composed thinkers. Over eight focused weeks, children build critical thinking, comprehension, analytical skills, problem-solving, strategic thinking and decision-making while learning essential chess strategies and techniques, one move at a time. It is also a place to socialize, build confidence, make friends and enjoy healthy competition in a fun, supportive learning environment.',
    statusText: 'Dates and venue will be announced soon. The fee is $32 per student per session. Join the notify list and you will hear first.',
    facts: [
      { label: 'Ages', value: '6–16', note: 'Beginner to Intermediate' },
      { label: 'Cohort Size', value: 'Max 10', note: 'Strictly capped per batch' },
      { label: 'Program Length', value: '8 Weeks', note: '1 session per week' },
      { label: 'Session', value: '75 min', note: 'Instruction + guided play' },
      { label: 'Fee', value: '$32', note: 'Per student, per session' },
    ],
    benefitsTitle: 'What Chess Builds Beyond the Board',
    benefits: [
      {
        icon: 'brain',
        title: 'Critical Thinking & Analysis',
        text: 'Children learn to read a position, weigh the options and analyze why a move works or fails.',
      },
      {
        icon: 'target',
        title: 'Problem-Solving & Strategy',
        text: 'Every position is a puzzle. Players build strategic thinking by planning ahead and adapting to what the opponent does.',
      },
      {
        icon: 'scale',
        title: 'Decision-Making',
        text: 'Young thinkers learn to assess risk versus reward, manage the clock and take responsibility for every choice.',
      },
      {
        icon: 'grid',
        title: 'Comprehension & Spatial Reasoning',
        text: 'Players follow instructions, understand ideas in context and visualize board states several moves ahead.',
      },
      {
        icon: 'focus',
        title: 'Focus & Emotional Composure',
        text: 'Screen-free concentration, gracious winning, objective loss analysis and constructive post-game review.',
      },
      {
        icon: 'users',
        title: 'Friendships, Confidence & Healthy Competition',
        text: 'Chess is social. Students meet new friends, grow in confidence and enjoy friendly competition in a supportive environment.',
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
    community: {
      kicker: 'After the Course',
      title: 'A Chess Community That Keeps Growing',
      text: 'Our goal is a welcoming and engaging chess community where students keep improving their skills, competing, socializing and enjoying chess long after the course ends. Graduates will have the opportunity to take part in our future chess events and tournaments.',
      formatsTitle: 'Planned event formats',
      formats: [
        { name: 'Traditional Chess', text: 'Classic, full-length games' },
        { name: 'Speed Chess', text: 'Faster games that reward quick, clear thinking' },
        { name: '3-Minute Blitz', text: 'Three minutes on the clock' },
        { name: '1-Minute Bullet', text: 'One minute on the clock' },
      ],
      closing: 'Event dates and details will be announced as they are confirmed.',
    },
    gallery: [
      { src: '/images/programs/chess-2.webp', alt: 'Wooden chess pieces on a board', caption: 'Strategy, one move at a time' },
      { src: '/images/programs/chess-3.webp', alt: 'Close-up of chess pieces', caption: 'Piece activity & tactics' },
      { src: '/images/programs/chess-4.webp', alt: 'Overhead view of a chessboard', caption: 'Board vision' },
    ],
    faqs: [
      { question: 'What ages and levels is National Smart Chess for?', answer: 'Players aged 6 to 16, from complete beginners to intermediate players. Coaches adapt the pace and positions to each player in the cohort.' },
      { question: 'How big are the groups?', answer: 'Each cohort is strictly capped at 10 students so every player gets real coaching attention and playing time.' },
      { question: 'How long is the program?', answer: 'Eight weeks, one 75-minute session per week, finishing with the NAA Rapid Chess Showcase mini-tournament.' },
      { question: 'When does registration open and what does it cost?', answer: 'Each 75-minute session is $32 per student. Registration has not opened yet, and dates and venue will be announced soon. Use the notify button and we will email you the moment seats are released.' },
      { question: 'Does my child need to know how to play already?', answer: 'No. Week 1 starts with the board, the pieces and notation, so complete beginners are welcome.' },
      { question: 'What happens after the course?', answer: 'Graduates will have the opportunity to take part in our future chess events and tournaments, including traditional chess, speed chess, 3-minute blitz and 1-minute bullet. Dates will be announced as they are confirmed.' },
    ],
    metaTitle: 'National Smart Chess | Youth Chess Academy in Regina, SK | NAA',
    metaDescription:
      'National Smart Chess: an 8-week youth chess academy for ages 6–16 in Regina, SK. Cohorts capped at 10 students. Starting soon.',
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
      'National Spin Table Tennis is built around speed, spin and smart footwork. Four to five foldable tables, two players per table and an eight-week progression take players from clean flat drives to serve-plus-third-ball attacks and real match play. Graduates join our Table Tennis Club for tournaments, social events and after-hours play.',
    statusText: 'Dates and venue will be announced soon. The fee is $32 per student per 75-minute session ($256 for the full 8 weeks). Join the notify list and you will hear first.',
    facts: [
      { label: 'Launch', value: 'Jan 2027', note: 'Winter season' },
      { label: 'Program Length', value: '8 Weeks', note: '1 session per week' },
      { label: 'Session', value: '75 min', note: 'Drills, footwork, match play' },
      { label: 'Group Size', value: '8–10', note: '4–5 tables · 2 players per table' },
      { label: 'Fee', value: '$32', note: 'Per student, per session · $256 for 8 weeks' },
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
      { name: 'Youth Division', ages: 'Ages 7–15', size: '8–10 players · 2 per table', text: 'Movement fundamentals, hand-eye coordination and consistent rallies.' },
      { name: 'Open / Adult Division', ages: 'Ages 16+', size: '8–10 players · 2 per table', text: 'Match tactics, aggressive spin generation and footwork conditioning.' },
    ],
    planTitle: '8-Week Training Structure',
    planSubtitle: 'Five blocks that build from stance to a tournament.',
    plan: [
      { label: 'Weeks 1–2', title: 'Stance & Ball Mechanics', text: 'Neutral athletic ready position, shakehand and penhold grip adjustment, ball-bounce tracking, forehand and backhand flat drives.' },
      { label: 'Weeks 3–4', title: 'Spin Dynamics & Active Footwork', text: 'Introduction to topspin and brush contact, side-to-side shuffle steps and transition footwork between forehand and backhand zones.' },
      { label: 'Week 5', title: 'Underspin & Push Rallies', text: 'Short pushes, backspin control, reading incoming spin off opponent paddles and table placement discipline.' },
      { label: 'Weeks 6–7', title: 'The Serve & Third-Ball Attack', text: 'Legal serve mechanics, spin variation serves (backspin, sidespin, ghost serve) and immediate third-ball offensive counters.' },
      { label: 'Week 8', title: 'Match Play & Tactical Tournament', text: 'In-game strategy, serve-receive positioning, point construction and the National Spin Winter Cup intra-academy tournament.' },
    ],
    community: {
      kicker: 'After the Program',
      title: 'Join Our Table Tennis Club',
      text: 'When you complete the program, you become a member of our Table Tennis Club, where you can keep playing, competing and making friends together.',
      formatsTitle: 'What club members can enjoy',
      formats: [
        { name: 'Group Tournaments', text: 'Future group tournaments for club members' },
        { name: 'Friendly Competitions', text: 'Relaxed matches against club friends' },
        { name: 'Social Events', text: 'Get together off the table too' },
        { name: 'After-Hours Recreational Play', text: 'Play together for fun after hours' },
      ],
      closing: 'Club event dates and details will be announced as they are confirmed.',
    },
    gallery: [
      { src: '/images/programs/tabletennis-2.webp', alt: 'Table tennis paddles and a ball', caption: 'Spin, speed & control' },
    ],
    faqs: [
      { question: 'When does National Spin Table Tennis start?', answer: 'The program launches in the Winter season, January 2027. Exact dates and venue will be announced before registration opens.' },
      { question: 'What are the age divisions?', answer: 'A Youth Division for ages 7–15 and an Open / Adult Division for ages 16+, with 8–10 players per session and two players per table.' },
      { question: 'How long is each session?', answer: 'Eight weekly sessions of 75 minutes, ending with the National Spin Winter Cup.' },
      { question: 'How much does it cost?', answer: 'The fee is $32 per student per 75-minute session, which comes to $256 for the full 8-week program.' },
      { question: 'How many players are in each session?', answer: 'We plan 4–5 foldable tables with two players per table, so 8–10 participants per session. The setup may be adjusted to the space and equipment available.' },
      { question: 'What happens after the program?', answer: 'Participants who complete the program become members of our Table Tennis Club, with future group tournaments, friendly competitions, social events and after-hours recreational play.' },
      { question: 'How do I register?', answer: 'Registration has not opened yet. Use the notify button and we will email you as soon as it does.' },
    ],
    metaTitle: 'National Spin Table Tennis | Youth & Adult Table Tennis in Regina, SK | NAA',
    metaDescription:
      'National Spin Table Tennis: an 8-week program for youth (7–15) and adults (16+) in Regina, SK. 8–10 players per session, two per table. Launching January 2027.',
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
    name: 'National Smart Chess',
    navTitle: 'Chess',
    shortName: 'Chess',
    badge: 'Coming Soon · Ages 6–16',
    subtitle: 'Strategic Foresight, Unshakable Focus, Masterful Play',
    tagline: 'Strategic Foresight, Unshakable Focus, Masterful Play',
    icon: 'chess',
    color: '#0b1a33',
    bgColor: 'rgba(11,26,51,0.08)',
    image: '/images/programs/chess-hero.webp',
    description:
      'An 8-week small-cohort chess academy for ages 6–16, from beginner to intermediate. Cohorts are strictly capped at 10 students.',
    longDescription: newSportPages.chess.intro,
    ages: 'Ages 6–16 (Beginner to Intermediate)',
    ratio: 'Max 10 students per cohort',
    venue: 'Venue to be announced',
    seasonDuration: '8 Weeks · 1 session per week',
    sessionsPerWeek: '1× / week · 75 min',
    blockWeeks: 8,
    highlights: [
      'Strictly capped at 10 students per cohort',
      '8 weeks · one 75-minute session per week · $32 per student per session',
      'Finishes with the NAA Rapid Chess Showcase mini-tournament',
      'Graduates can join future NAA chess events: traditional, speed, 3-minute blitz and 1-minute bullet',
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
      'An 8-week table tennis program launching January 2027 for youth (7–15) and open / adult (16+) divisions, with 8–10 players per session and two per table.',
    longDescription: newSportPages['table-tennis'].intro,
    ages: 'Youth 7–15 · Open / Adult 16+',
    ratio: '8–10 players per session · 4–5 tables, 2 per table',
    venue: 'Venue to be announced',
    seasonDuration: '8 Weeks · 1 session per week',
    sessionsPerWeek: '1× / week · 75 min',
    blockWeeks: 8,
    highlights: [
      'Launching Winter, January 2027',
      '8–10 players per session · 4–5 tables, two players per table',
      '$32 per student per 75-minute session ($256 for 8 weeks)',
      'Graduates join our Table Tennis Club: tournaments, social events, after-hours play',
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
