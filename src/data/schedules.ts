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



  // ══════════════════════════════════════════════════════════════
  // 2. WINTER 2027 (Registration Registration open)
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
    status: 'Open',
    price: '$150 CAD',
    registerUrl: 'https://app.teamlinkt.com/register/find/nationalathleticsacademy?cid=81569',
    notes: 'Registration is open. 40–45 min of on-court coaching per session. Dates: Jan 26, 28, Feb 2, 4, 23, 25, Mar 2, 4, 9, 11. Yonex nylon shuttles provided; athletes bring their own racket. Open, mixed-level class. Mandatory $30 Training Kit fee, paid in full (no installments). Tuition can be split into 3 installments.'
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
    status: 'Open',
    price: '$175 CAD',
    registerUrl: 'https://app.teamlinkt.com/register/find/nationalathleticsacademy?cid=81569',
    notes: 'Registration is open. 40–45 min of on-court coaching per session. Dates: Jan 26, 28, Feb 2, 4, 23, 25, Mar 2, 4, 9, 11. Footwork ladders, clears & smash tactics. Open, mixed-level class. Mandatory $30 Training Kit fee, paid in full (no installments). Tuition can be split into 3 installments.'
  },
  {
    id: 'volleyball-2027-juniors',
    sport: 'Volleyball',
    season: 'Winter 2027',
    tier: 'Spike Juniors',
    ageGroup: 'Ages 8–12',
    facility: 'Green Gym, CKHS (University of Regina)',
    address: '3737 Wascana Parkway, Regina, SK S4S 0A2',
    day: 'Tuesday & Thursday',
    timeSlot: '6:00 PM – 7:15 PM (75 mins)',
    dates: 'Jan 26 – Mar 11, 2027 (10 Sessions · no sessions Feb 9–18)',
    coachRatio: '1:10 Ratio',
    status: 'Open',
    price: '$195 CAD',
    registerUrl: 'https://app.teamlinkt.com/register/find/nationalathleticsacademy?cid=81602',
    notes: 'Registration is open. Low-impact Mikasa trainer balls & adjusted net heights. Dates: Jan 26, 28, Feb 2, 4, 23, 25, Mar 2, 4, 9, 11. Mandatory $30 Training Kit fee, paid in full (no installments). Tuition can be split into 3 installments.'
  },
  {
    id: 'volleyball-2027-elite',
    sport: 'Volleyball',
    season: 'Winter 2027',
    tier: 'Spike Elite',
    ageGroup: 'Ages 13–16',
    facility: 'Green Gym, CKHS (University of Regina)',
    address: '3737 Wascana Parkway, Regina, SK S4S 0A2',
    day: 'Tuesday & Thursday',
    timeSlot: '6:00 PM – 7:30 PM (90 mins)',
    dates: 'Jan 26 – Mar 11, 2027 (10 Sessions · no sessions Feb 9–18)',
    coachRatio: '1:12 Ratio',
    status: 'Open',
    price: '$245 CAD',
    registerUrl: 'https://app.teamlinkt.com/register/find/nationalathleticsacademy?cid=81602',
    notes: 'Registration is open. Float serves, spike approach footwork & 6v6 play. Dates: Jan 26, 28, Feb 2, 4, 23, 25, Mar 2, 4, 9, 11. Mandatory $30 Training Kit fee, paid in full (no installments). Tuition can be split into 3 installments.'
  },

  // ── Winter 2027 · Smash Pro (6:00 PM – 7:30 PM · Tue & Thu) ──
  {
    id: 'badminton-2027-pro',
    sport: 'Badminton',
    season: 'Winter 2027',
    tier: 'Smash Pro (Intensive)',
    ageGroup: 'Ages 10–16',
    facility: 'Green Gym, CKHS (University of Regina)',
    address: '3737 Wascana Parkway, Regina, SK S4S 0A2',
    day: 'Tuesday & Thursday',
    timeSlot: '6:00 PM – 7:30 PM (90 mins)',
    dates: 'Jan 26 – Mar 11, 2027 (10 Sessions · no sessions Feb 9–18)',
    coachRatio: '1:8 to 1:12 Ratio',
    status: 'Open',
    price: '$295 CAD',
    registerUrl: 'https://app.teamlinkt.com/register/find/nationalathleticsacademy?cid=81569',
    notes: 'Registration is open. Intensive tactical training & matchplay. Dates: Jan 26, 28, Feb 2, 4, 23, 25, Mar 2, 4, 9, 11. Mandatory $30 Training Kit fee, paid in full (no installments). Tuition can be split into 3 installments.'
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
    status: 'Open',
    price: '$150 CAD',
    registerUrl: 'https://app.teamlinkt.com/register/find/nationalathleticsacademy?cid=81569',
    notes: 'Registration is open. 40–45 min of on-court coaching per session. Dates: Jan 26, 28, Feb 2, 4, 23, 25, Mar 2, 4, 9, 11. Yonex nylon shuttles provided; athletes bring their own racket. Open, mixed-level class. Mandatory $30 Training Kit fee, paid in full (no installments). Tuition can be split into 3 installments.'
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
    status: 'Open',
    price: '$175 CAD',
    registerUrl: 'https://app.teamlinkt.com/register/find/nationalathleticsacademy?cid=81569',
    notes: 'Registration is open. 40–45 min of on-court coaching per session. Dates: Jan 26, 28, Feb 2, 4, 23, 25, Mar 2, 4, 9, 11. Footwork ladders, clears & smash tactics. Open, mixed-level class. Mandatory $30 Training Kit fee, paid in full (no installments). Tuition can be split into 3 installments.'
  },
];

export const sportsData = SCHEDULE_DATA;
