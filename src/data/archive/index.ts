import type { DetailedProgram } from '../programs';
import { badmintonFall2026, badmintonFall2026Schedule } from './badminton-fall-2026';
import { volleyballFall2026, volleyballFall2026Schedule } from './volleyball-fall-2026';

export interface ArchivedProgram {
  slug: string;
  sport: string;
  season: string;
  dates: string;
  archivedOn: string;
  program: DetailedProgram;
  schedule: Record<string, any>[];
  currentUrl: string;
  currentLabel: string;
}

// To archive a program: snapshot its DetailedProgram into src/data/archive/<name>.ts,
// add an entry here, and it appears automatically under /programs/archive/.
export const archivedPrograms: ArchivedProgram[] = [
  {
    slug: 'badminton-fall-2026',
    sport: 'Badminton',
    season: 'Fall 2026',
    dates: 'Oct 22 – Dec 10, 2026',
    archivedOn: 'November 2026',
    program: badmintonFall2026,
    schedule: badmintonFall2026Schedule as Record<string, any>[],
    currentUrl: '/programs/badminton/',
    currentLabel: 'See the current badminton program',
  },
  {
    slug: 'volleyball-fall-2026',
    sport: 'Volleyball',
    season: 'Fall 2026',
    dates: 'Oct 22 – Dec 10, 2026',
    archivedOn: 'November 2026',
    program: volleyballFall2026,
    schedule: volleyballFall2026Schedule as Record<string, any>[],
    currentUrl: '/programs/volleyball/',
    currentLabel: 'See the current volleyball program',
  },
];
