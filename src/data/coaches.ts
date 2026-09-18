export interface Coach {
  id: string;
  name: string;
  role: string;
  sports: string[];
  certifications: string[];
  bio: string;
  emoji: string;
}

export const coaches: Coach[] = [
  {
    id: 'kiran-nair',
    name: 'Kiran Nair Raveendran',
    role: 'Founder & Director of Operations',
    sports: ['Multi-Sport', 'Administration', 'Operations'],
    certifications: ['Sport Administration', 'Youth Sport Leadership', 'Respect in Sport'],
    bio: 'Founder of National Athletics Academy Inc. with direct operating experience building a registered youth sport organization in Regina from incorporation through provincial sanctioning, bylaws, registration systems, and coach contracting. Kiran brings proven expertise in multi-sport program delivery, administration, and community development.',
    emoji: '🏅',
  },
  {
    id: 'head-basketball',
    name: 'Basketball Academy Lead Coach',
    role: 'Head Basketball Coach',
    sports: ['Basketball', 'Tournaments'],
    certifications: ['Basketball Canada Certified', 'Respect in Sport', 'First Aid / CPR'],
    bio: 'Basketball Canada certified coach with competitive playing and coaching background. Focuses on dribbling mechanics, shooting form, spacing IQ, and structured small-sided game progression for youth.',
    emoji: '🏀',
  },
  {
    id: 'head-volleyball',
    name: 'Volleyball Academy Lead Coach',
    role: 'Head Volleyball Coach',
    sports: ['Volleyball', 'Tournaments'],
    certifications: ['Volleyball Canada Certified', 'Respect in Sport', 'First Aid / CPR'],
    bio: 'Volleyball Canada certified coach specializing in platform passing mechanics, setting precision, overhand serve development, and team court rotation with age-adjusted net heights.',
    emoji: '🏐',
  },
  {
    id: 'head-badminton',
    name: 'Badminton Academy Specialist',
    role: 'Head Badminton Coach',
    sports: ['Badminton', 'Tournaments'],
    certifications: ['Badminton Canada Certified', 'Respect in Sport', 'First Aid / CPR'],
    bio: 'Specialist in racket mechanics and 6-corner court footwork. Brings technical clear/drop/smash execution and tactical singles & doubles strategy to youth of all skill levels.',
    emoji: '🏸',
  },
  {
    id: 'head-soccer-wascana',
    name: 'Little Kids Soccer Lead (with Wascana FC)',
    role: 'Early Childhood Soccer Director',
    sports: ['Soccer (U2–U5)', 'Physical Literacy'],
    certifications: ['Canada Soccer License', 'Respect in Sport', 'First Aid / CPR'],
    bio: 'Delivered in proud association with Wascana FC. Canada Soccer licensed coach specialized in early childhood physical literacy, joyful ball mastery, and fun movement games for toddlers and little kids aged 2 to 5.',
    emoji: '⚽',
  },
  {
    id: 'head-athletics',
    name: 'Athletics & Track Lead Coach',
    role: 'Head Athletics Coach',
    sports: ['Athletics (Track & Field)', 'Tournaments'],
    certifications: ['Athletics Canada Certified', 'Respect in Sport', 'First Aid / CPR'],
    bio: 'Experienced track and field coach focusing on sprint acceleration kinematics, high knee drive, hurdle rhythm, takeoff power, and electronic speed timing benchmarks.',
    emoji: '🏃',
  },
  {
    id: 'tournament-director',
    name: 'Tournaments & Fixtures Coordinator',
    role: 'Competitions & Events Lead',
    sports: ['Tournaments', 'Showcases', 'Multi-Sport Fixtures'],
    certifications: ['Officiating Certified', 'Respect in Sport', 'First Aid / CPR'],
    bio: 'Oversees tournament brackets, certified referee assignments, live TeamLinkt scoring sync, and family-friendly event operations across all NAA competition series.',
    emoji: '🏆',
  },
];
