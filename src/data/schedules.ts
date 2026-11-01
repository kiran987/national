export interface ScheduleItem {
  id: string;
  sport: 'Badminton' | 'Volleyball';
  season: 'Fall 2026' | 'Winter 2027';
  tier: string;
  ageGroup: string;
  facility: string;
  address: string;
  day: string;
  timeSlot: string;
  dates: string;
  coachRatio: string;
  status: 'Open' | 'Filling Fast' | 'Few Spots Left' | 'Starting Soon' | 'In Session';
  price: string;
  registerUrl?: string;
  notes?: string;
}

export const SCHEDULE_DATA: ScheduleItem[] = [
  // ══════════════════════════════════════════════════════════════
  // 1. FALL 2026 (Currently In-Session at Knox-Met Church)
  // Location: Knox-Met Fellowship Hall Gym (2340 Victoria Ave)
  // Dates: October 22 – December 10, 2026
  // Registration started for Fall program
  // ══════════════════════════════════════════════════════════════


  // ── Volleyball: Fall 2026 (Oct 22 – Dec 10 · 16 Classes) ──
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
  },

  // ══════════════════════════════════════════════════════════════
  // 2. WINTER 2027 (Registration Opens Nov 1, 2026 · NO LINKS NOW)
  // Location: Green Gym, CKHS, University of Regina
  // Dates: Jan 26 – Mar 11, 2027 (10 Sessions on Tue & Thu)
  // ══════════════════════════════════════════════════════════════

  // ── Winter 2027 · Slot 1 (6:00 PM – 6:45 PM · Tue & Thu) ──
  {
    id: 'badminton-2027-juniors-slot1',
    sport: 'Badminton',
    season: 'Winter 2027',
    tier: 'Smash Juniors (Slot 1)',
    ageGroup: 'Ages 6–10',
    facility: 'Green Gym, CKHS (University of Regina)',
    address: '3737 Wascana Parkway, Regina, SK S4S 0A2',
    day: 'Tuesday & Thursday',
    timeSlot: '6:00 PM – 6:45 PM (45 mins)',
    dates: 'Jan 26 – Mar 11, 2027 (10 Sessions · no sessions Feb 9–18)',
    coachRatio: '1:8 to 1:10 Ratio',
    status: 'Starting Soon',
    price: '$150 CAD',
    notes: 'Registration starts Nov 1, 2026. 40–45 min of on-court coaching per session. Dates: Jan 26, 28, Feb 2, 4, 23, 25, Mar 2, 4, 9, 11. Yonex nylon shuttles provided; athletes bring their own racket. Open, mixed-level class. Mandatory $30 Training Kit fee, paid in full (no installments). Tuition can be split into 3 installments.'
  },
  {
    id: 'badminton-2027-elite-slot1',
    sport: 'Badminton',
    season: 'Winter 2027',
    tier: 'Smash Elite (Slot 1)',
    ageGroup: 'Ages 11–16',
    facility: 'Green Gym, CKHS (University of Regina)',
    address: '3737 Wascana Parkway, Regina, SK S4S 0A2',
    day: 'Tuesday & Thursday',
    timeSlot: '6:00 PM – 6:45 PM (45 mins)',
    dates: 'Jan 26 – Mar 11, 2027 (10 Sessions · no sessions Feb 9–18)',
    coachRatio: '1:12 to 1:14 Ratio',
    status: 'Starting Soon',
    price: '$175 CAD',
    notes: 'Registration starts Nov 1, 2026. 40–45 min of on-court coaching per session. Dates: Jan 26, 28, Feb 2, 4, 23, 25, Mar 2, 4, 9, 11. Footwork ladders, clears & smash tactics. Open, mixed-level class. Mandatory $30 Training Kit fee, paid in full (no installments). Tuition can be split into 3 installments.'
  },
  {
    id: 'volleyball-2027-foundation-slot1',
    sport: 'Volleyball',
    season: 'Winter 2027',
    tier: 'Spike Foundation (Slot 1)',
    ageGroup: 'Ages 8–12',
    facility: 'Green Gym, CKHS (University of Regina)',
    address: '3737 Wascana Parkway, Regina, SK S4S 0A2',
    day: 'Tuesday & Thursday',
    timeSlot: '6:00 PM – 6:45 PM (45 mins)',
    dates: 'Jan 26 – Mar 11, 2027 (10 Sessions · no sessions Feb 9–18)',
    coachRatio: '1:10 Ratio',
    status: 'Starting Soon',
    price: '$205 CAD',
    notes: 'Registration starts Nov 1, 2026. Low-impact Mikasa trainer balls & adjusted net heights.'
  },
  {
    id: 'volleyball-2027-elite-slot1',
    sport: 'Volleyball',
    season: 'Winter 2027',
    tier: 'Spike Elite (Slot 1)',
    ageGroup: 'Ages 13–16',
    facility: 'Green Gym, CKHS (University of Regina)',
    address: '3737 Wascana Parkway, Regina, SK S4S 0A2',
    day: 'Tuesday & Thursday',
    timeSlot: '6:00 PM – 6:45 PM (45 mins)',
    dates: 'Jan 26 – Mar 11, 2027 (10 Sessions · no sessions Feb 9–18)',
    coachRatio: '1:12 Ratio',
    status: 'Starting Soon',
    price: '$225 CAD',
    notes: 'Registration starts Nov 1, 2026. Float serves, spike approach footwork & 6v6 play.'
  },

  // ── Winter 2027 · Smash Pro (6:00 PM – 7:30 PM · Tue & Thu) ──
  {
    id: 'badminton-2027-pro',
    sport: 'Badminton',
    season: 'Winter 2027',
    tier: 'Smash Pro (Intensive)',
    ageGroup: 'Ages 11–16',
    facility: 'Green Gym, CKHS (University of Regina)',
    address: '3737 Wascana Parkway, Regina, SK S4S 0A2',
    day: 'Tuesday & Thursday',
    timeSlot: '6:00 PM – 7:30 PM (90 mins)',
    dates: 'Jan 26 – Mar 11, 2027 (10 Sessions · no sessions Feb 9–18)',
    coachRatio: '1:8 to 1:12 Ratio',
    status: 'Starting Soon',
    price: '$295 CAD',
    notes: 'Registration starts Nov 1, 2026. Intensive tactical training & matchplay. Dates: Jan 26, 28, Feb 2, 4, 23, 25, Mar 2, 4, 9, 11. Mandatory $30 Training Kit fee, paid in full (no installments). Tuition can be split into 3 installments.'
  },
  // ── Winter 2027 · Slot 2 (6:45 PM – 7:30 PM · Tue & Thu) ──
  {
    id: 'badminton-2027-juniors-slot2',
    sport: 'Badminton',
    season: 'Winter 2027',
    tier: 'Smash Juniors (Slot 2)',
    ageGroup: 'Ages 6–10',
    facility: 'Green Gym, CKHS (University of Regina)',
    address: '3737 Wascana Parkway, Regina, SK S4S 0A2',
    day: 'Tuesday & Thursday',
    timeSlot: '6:45 PM – 7:30 PM (45 mins)',
    dates: 'Jan 26 – Mar 11, 2027 (10 Sessions · no sessions Feb 9–18)',
    coachRatio: '1:8 to 1:10 Ratio',
    status: 'Starting Soon',
    price: '$150 CAD',
    notes: 'Registration starts Nov 1, 2026. 40–45 min of on-court coaching per session. Dates: Jan 26, 28, Feb 2, 4, 23, 25, Mar 2, 4, 9, 11. Yonex nylon shuttles provided; athletes bring their own racket. Open, mixed-level class. Mandatory $30 Training Kit fee, paid in full (no installments). Tuition can be split into 3 installments.'
  },
  {
    id: 'badminton-2027-elite-slot2',
    sport: 'Badminton',
    season: 'Winter 2027',
    tier: 'Smash Elite (Slot 2)',
    ageGroup: 'Ages 11–16',
    facility: 'Green Gym, CKHS (University of Regina)',
    address: '3737 Wascana Parkway, Regina, SK S4S 0A2',
    day: 'Tuesday & Thursday',
    timeSlot: '6:45 PM – 7:30 PM (45 mins)',
    dates: 'Jan 26 – Mar 11, 2027 (10 Sessions · no sessions Feb 9–18)',
    coachRatio: '1:12 to 1:14 Ratio',
    status: 'Starting Soon',
    price: '$175 CAD',
    notes: 'Registration starts Nov 1, 2026. 40–45 min of on-court coaching per session. Dates: Jan 26, 28, Feb 2, 4, 23, 25, Mar 2, 4, 9, 11. Footwork ladders, clears & smash tactics. Open, mixed-level class. Mandatory $30 Training Kit fee, paid in full (no installments). Tuition can be split into 3 installments.'
  },
  {
    id: 'volleyball-2027-foundation-slot2',
    sport: 'Volleyball',
    season: 'Winter 2027',
    tier: 'Spike Foundation (Slot 2)',
    ageGroup: 'Ages 8–12',
    facility: 'Green Gym, CKHS (University of Regina)',
    address: '3737 Wascana Parkway, Regina, SK S4S 0A2',
    day: 'Tuesday & Thursday',
    timeSlot: '6:45 PM – 7:30 PM (45 mins)',
    dates: 'Jan 26 – Mar 11, 2027 (10 Sessions · no sessions Feb 9–18)',
    coachRatio: '1:10 Ratio',
    status: 'Starting Soon',
    price: '$205 CAD',
    notes: 'Registration starts Nov 1, 2026. Low-impact Mikasa trainer balls & adjusted net heights.'
  },
  {
    id: 'volleyball-2027-elite-slot2',
    sport: 'Volleyball',
    season: 'Winter 2027',
    tier: 'Spike Elite (Slot 2)',
    ageGroup: 'Ages 13–16',
    facility: 'Green Gym, CKHS (University of Regina)',
    address: '3737 Wascana Parkway, Regina, SK S4S 0A2',
    day: 'Tuesday & Thursday',
    timeSlot: '6:45 PM – 7:30 PM (45 mins)',
    dates: 'Jan 26 – Mar 11, 2027 (10 Sessions · no sessions Feb 9–18)',
    coachRatio: '1:12 Ratio',
    status: 'Starting Soon',
    price: '$225 CAD',
    notes: 'Registration starts Nov 1, 2026. Float serves, spike approach footwork & 6v6 play.'
  }
];

export const sportsData = SCHEDULE_DATA;
