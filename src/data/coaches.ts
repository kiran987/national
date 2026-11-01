export interface Director {
  name: string;
  role: string;
}

export interface LeadershipMember {
  name: string;
  role: string;
}

export interface Coach {
  id: string;
  name: string;
  role: string;
  sports: string[];
  certifications: string[];
  bio: string;
  emoji: string;
  photo?: string;
  portrait?: string;
}

export const directors: Director[] = [
  {
    name: 'Lijas Hamza',
    role: 'Director',
  },
  {
    name: 'Akash Pillai',
    role: 'Director',
  },
];

export const leadership: LeadershipMember[] = [
  {
    name: 'Kiran Nair Raveendran',
    role: 'Director of Operations',
  },
  {
    name: 'Shyam Krishnan (SK)',
    role: 'Technical Director & Martial Arts Trainer',
  },
];

export const coaches: Coach[] = [
  {
    id: 'kyran-zimmerman',
    name: 'Kyran J. Zimmerman',
    role: 'Head Coach – Basketball & Volleyball',
    sports: ['Basketball', 'Volleyball', 'Tournaments'],
    certifications: ['NCCP Registered (EAP)', 'Respect in Sport (Activity Leader)', 'RPS CRC-VSS Screened'],
    bio: 'Kyran J. Zimmerman is a passionate basketball and volleyball coach with experience as both a competitive athlete and coach. He played both sports throughout high school and continued his volleyball career at the club level, playing with RVC from 2021–2023 and Golden Ticket from 2023–2024.\n\nKyran began his coaching journey as an Assistant Basketball Coach with YAS Basketball Academy in 2019 and has spent the past two years working as a Sport Instructor with the City of Regina at the Sportsplex, gaining valuable experience working with athletes of different ages and skill levels.\n\nAs a fitness enthusiast, Kyran is passionate about helping athletes develop their skills, improve their confidence, and reach their individual goals. His coaching approach focuses on creating a positive, energetic, and supportive environment where athletes can learn, stay active, and enjoy the game.',
    emoji: '🏀',
    photo: '/images/team/kyran-zimmerman.webp',
    portrait: '/images/team/kyran-zimmerman-portrait.webp',
  },
];
