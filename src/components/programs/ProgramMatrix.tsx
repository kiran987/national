import React, { useState, useMemo } from 'react';
import { SportIcon } from '../icons/SportIcons';

export interface ProgramItem {
  id: string;
  name: string;
  sport: string;
  shortName: string;
  category: 'active' | 'starting-soon';
  slug: string;
  ageBracket: string[]; // ['U8', 'U12', 'U16']
  ageDisplay: string;
  location: string;
  schedule: string;
  coachRatio: string;
  statusBadge: string;
  statusType: 'urgent' | 'open' | 'soon';
  price: string;
  accentColor: string;
  description: string;
  logistics: string[];
  teamLinktUrl?: string;
  isFeatured?: boolean;
  image?: string;
}

const PROGRAMS_DATA: ProgramItem[] = [
  // 1. Badminton
  {
    id: 'badminton',
    name: 'National Smash — Badminton Academy',
    sport: 'Badminton',
    shortName: 'Badminton',
    category: 'active',
    slug: 'badminton',
    ageBracket: ['U8', 'U12', 'U16'],
    ageDisplay: 'Ages 6–16 (Juniors, Elite & Pro)',
    location: 'Green Gym, University of Regina (3737 Wascana Pkwy)',
    schedule: 'Jan 26 – Mar 11 · Tue & Thu · 6:00–7:30 PM',
    coachRatio: '1:8 to 1:12 Coach Ratio',
    statusBadge: 'Registration Opens Nov 1',
    statusType: 'soon',
    price: '$150 – $295 / block',
    accentColor: '#F59E0B',
    image: '/images/programs/badminton-action-1.webp',
    description: 'Racket mechanics, 6-corner court footwork, attacking clears, jump smashes, and singles/doubles game play at the University of Regina Green Gym.',
    logistics: [
      'Winter 2027: registration starts soon',
      'Jan 26 – Mar 11, 2027: 10 sessions · Tuesdays & Thursdays (Smash Pro 6:00–7:30 PM)',
      'Yonex shuttles provided; athletes bring their own racket'
    ],
    isFeatured: true
  },

  // 2. Volleyball
  {
    id: 'volleyball',
    name: 'National Spike — Volleyball Academy',
    sport: 'Volleyball',
    shortName: 'Volleyball',
    category: 'active',
    slug: 'volleyball',
    ageBracket: ['U12', 'U16'],
    ageDisplay: 'Ages 8–16 (Juniors & Elite)',
    location: 'Green Gym, University of Regina (3737 Wascana Pkwy)',
    schedule: 'Jan 26 – Mar 11 · Tue & Thu · Juniors 6:00–7:15 PM · Elite 6:00–7:30 PM',
    coachRatio: '1:10 to 1:14 Coach Ratio',
    statusBadge: 'Registration Opens Nov 1',
    statusType: 'soon',
    price: '$195 – $245 / block',
    accentColor: '#83161B',
    image: '/images/programs/volleyball-action-1.webp',
    description: 'Technical indoor volleyball: Forearm platform angles, overhead finger setting, overhand float serving, and 3-step spike approach footwork at the University of Regina Green Gym.',
    logistics: [
      'Winter 2027: registration starts soon',
      'Jan 26 – Mar 11, 2027: 10 sessions · Tuesdays & Thursdays',
      'Spike Juniors 6:00–7:15 PM (75 min) · Spike Elite 6:00–7:30 PM (90 min)'
    ],
    isFeatured: true
  },

  // 3. Martial Arts / National Shield
  {
    id: 'chess',
    name: 'National Smart Chess',
    sport: 'Chess',
    shortName: 'Chess',
    category: 'starting-soon',
    slug: 'chess',
    ageBracket: ['U8', 'U12', 'U16'],
    ageDisplay: 'Ages 6–17 (Beginner to Intermediate)',
    location: 'Venue to be announced',
    schedule: '8 weeks · 1 session per week · 75 min',
    coachRatio: 'Max 10 students per cohort',
    statusBadge: 'Coming Soon',
    statusType: 'soon',
    price: 'Pricing announced soon',
    accentColor: '#DDAA40',
    image: '/images/programs/chess-hero.webp',
    description: 'Strategic foresight, unshakable focus, masterful play. A small-cohort chess academy with an 8-week curriculum and a rapid chess showcase.',
    logistics: [
      'Registration has not opened yet',
      'Strictly capped at 10 students per cohort',
      'Ends with the NAA Rapid Chess Showcase'
    ],
    isFeatured: true
  },
  {
    id: 'table-tennis',
    name: 'National Spin Table Tennis',
    sport: 'Table Tennis',
    shortName: 'Table Tennis',
    category: 'starting-soon',
    slug: 'table-tennis',
    ageBracket: ['U8', 'U12', 'U16', 'Adult'],
    ageDisplay: 'Youth 7–15 · Open / Adult 16+',
    location: 'Venue to be announced',
    schedule: 'Launching Jan 2027 · 10 weeks · 90 min',
    coachRatio: '1:6 Coach Ratio · max 6 per table',
    statusBadge: 'Coming Soon',
    statusType: 'soon',
    price: 'Pricing announced soon',
    accentColor: '#ef4444',
    image: '/images/programs/tabletennis-hero.webp',
    description: 'Precision, reaction and high-velocity rallies. Spin, footwork, serve and third-ball attack, finishing with the National Spin Winter Cup.',
    logistics: [
      'Registration has not opened yet',
      'Youth and Open / Adult divisions',
      'Ends with the National Spin Winter Cup'
    ],
    isFeatured: true
  },
  {
    id: 'snowboarding',
    name: 'National Shred Snowboarding',
    sport: 'Snowboarding',
    shortName: 'Snowboarding',
    category: 'starting-soon',
    slug: 'snowboarding',
    ageBracket: ['U8', 'U12', 'U16', 'Adult'],
    ageDisplay: 'Groms 6–11 · Teens 12–16 · Adults 17+',
    location: 'Local hill / winter park (details soon)',
    schedule: '8 weeks · 1 session per week · 2.5 hours',
    coachRatio: '5–8 riders (youth) · 6–10 (adult) per batch',
    statusBadge: 'Coming Soon',
    statusType: 'soon',
    price: 'Pricing announced soon',
    accentColor: '#38bdf8',
    image: '/images/programs/snowboard-hero.webp',
    description: 'From first turns to total mountain control. Small age-matched batches with coach feedback every session.',
    logistics: [
      'Registration has not opened yet',
      'Strict age batches: Groms, Teens, Adults',
      '100 minutes of on-snow coaching per session'
    ],
    isFeatured: true
  },
  {
    id: 'national-shield',
    name: 'National Shield — Fitness & Self-Defence',
    sport: 'Martial Arts',
    shortName: 'National Shield',
    category: 'starting-soon',
    slug: 'national-shield',
    ageBracket: ['U8', 'U12', 'U16', 'Adult'],
    ageDisplay: 'Ages 5–17 & Adults (3 streams)',
    location: 'Regina Facility TBA',
    schedule: 'Season schedule announced ahead of launch · Pre-registration open',
    coachRatio: '1:8 Coach Ratio (min. 2 adults)',
    statusBadge: 'Starting Soon',
    statusType: 'soon',
    price: '$75 – $100 / 12-wk cycle',
    accentColor: '#1E293B',
    image: '/images/programs/martialarts-action-1.webp',
    description: 'Fitness-first personal development: Conditioning, coach-held pad work, the SHIELD Safety System, and BRAVE anti-bullying de-escalation.',
    logistics: [
      'Strict zero child-to-child contact (pads and shields only)',
      'Rule of Two enforced: 2 screened adults in open room',
      '5-level achievement system with patches and certificates',
      'Includes adult & super-senior joint longevity streams'
    ],
    teamLinktUrl: 'https://app.teamlinkt.com/register/go/nationalathleticsacademy/201750',
    isFeatured: true
  }
];

export const ProgramMatrix: React.FC = () => {
  const [activeAgeFilter, setActiveAgeFilter] = useState<string>('All');
  const [activeSportFilter, setActiveSportFilter] = useState<string>('All');

  const ageFilters = [
    { label: 'All Ages', value: 'All' },
    { label: 'U8 (Ages 5–8)', value: 'U8' },
    { label: 'U12 (Ages 8–12)', value: 'U12' },
    { label: 'U16 (Ages 13–16)', value: 'U16' },
    { label: 'Adult / Seniors', value: 'Adult' }
  ];

  const sportFilters = ['All', 'Badminton', 'Volleyball', 'Chess', 'Table Tennis', 'Snowboarding', 'Martial Arts'];

  const filteredPrograms = useMemo(() => {
    return PROGRAMS_DATA.filter((prog) => {
      const matchAge = activeAgeFilter === 'All' || prog.ageBracket.includes(activeAgeFilter);
      const matchSport = activeSportFilter === 'All' || prog.sport === activeSportFilter;
      return matchAge && matchSport;
    });
  }, [activeAgeFilter, activeSportFilter]);

  return (
    <section id="programs-matrix" aria-labelledby="matrix-title" className="py-20 bg-slate-50 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0B192C]/10 text-[#0B192C] border border-[#0B192C]/20 mb-3">
            Parent Logistics &amp; Program Finder
          </span>
          <h2 id="matrix-title" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Regina Athletic Programs
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Filter by your child's age bracket and sport to see exact gym facilities, session times, coach ratios, and transparent fees.
          </p>
        </div>

        {/* Dual Filter Controls Bar */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-6 mb-10 shadow-xs space-y-4">
          
          {/* Age Bracket Pills */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 w-28 shrink-0">
              Age Bracket:
            </span>
            <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Filter programs by age bracket">
              {ageFilters.map((f) => {
                const isSelected = activeAgeFilter === f.value;
                return (
                  <button
                    key={f.value}
                    type="button"
                    onClick={() => setActiveAgeFilter(f.value)}
                    role="tab"
                    aria-selected={isSelected}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#0B192C] text-white shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                    }`}
                  >
                    {f.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Sport Filter Pills */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 pt-2 border-t border-slate-100">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 w-28 shrink-0">
              Sport:
            </span>
            <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Filter programs by sport">
              {sportFilters.map((sp) => {
                const isSelected = activeSportFilter === sp;
                return (
                  <button
                    key={sp}
                    type="button"
                    onClick={() => setActiveSportFilter(sp)}
                    role="tab"
                    aria-selected={isSelected}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-amber-500 text-slate-950 font-bold shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                    }`}
                  >
                    {sp !== 'All' && <SportIcon sport={sp} size={14} />}
                    <span>{sp}</span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.length === 0 ? (
            <div className="col-span-full py-12 px-4 text-center bg-white rounded-2xl border border-slate-200">
              <p className="text-sm font-semibold text-slate-600">No programs found matching the selected filters.</p>
              <button
                type="button"
                onClick={() => {
                  setActiveAgeFilter('All');
                  setActiveSportFilter('All');
                }}
                className="mt-3 px-4 py-2 rounded-lg text-xs font-bold bg-[#0B192C] text-white hover:bg-amber-500 hover:text-slate-950 transition-colors cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            filteredPrograms.map((prog, index) => {
              const isPriority = index < 2; // Asymmetric emphasis on top cards
              return (
              <article
                key={prog.id}
                className={`flex flex-col bg-white rounded-2xl border transition-all duration-200 hover:shadow-md overflow-hidden ${
                  prog.category === 'active'
                    ? 'border-slate-300/80 shadow-xs'
                    : 'border-slate-200/60 bg-slate-50/50'
                } ${isPriority ? 'lg:col-span-1 ring-1 ring-slate-900/5' : ''}`}
              >
                {/* Visual Image Banner (if available) */}
                {prog.image ? (
                  <div className="relative h-44 overflow-hidden bg-slate-900">
                    <img
                      src={prog.image}
                      alt={prog.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wide backdrop-blur-md shadow-xs ${
                          prog.statusType === 'urgent'
                            ? 'bg-amber-400 text-slate-950'
                            : prog.statusType === 'open'
                            ? 'bg-emerald-500 text-white'
                            : 'bg-slate-900/90 text-amber-300'
                        }`}
                      >
                        {prog.statusType === 'urgent' && (
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-950 animate-ping"></span>
                        )}
                        <span>{prog.statusBadge}</span>
                      </span>
                      <span className="text-[11px] font-bold text-white bg-slate-950/70 px-2 py-0.5 rounded backdrop-blur-sm font-mono">
                        {prog.ageDisplay}
                      </span>
                    </div>
                  </div>
                ) : null}

                {/* Top Header Strip */}
                <div className="p-6 pb-4 border-b border-slate-100">
                  {!prog.image && (
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wide ${
                          prog.statusType === 'urgent'
                            ? 'bg-amber-50 text-amber-800 border border-amber-200'
                            : prog.statusType === 'open'
                            ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                            : 'bg-slate-100 text-slate-600 border border-slate-200'
                        }`}
                      >
                        {prog.statusType === 'urgent' && (
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping"></span>
                        )}
                        {prog.statusBadge}
                      </span>

                      <span className="text-xs font-semibold text-slate-500 font-mono">
                        {prog.ageDisplay}
                      </span>
                    </div>
                  )}

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 text-[#0B192C] flex items-center justify-center shrink-0 border border-slate-200 mt-0.5">
                      <SportIcon sport={prog.sport} size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 leading-snug">
                        {prog.name}
                      </h3>
                      <div className="text-xs font-semibold text-amber-600 mt-0.5">
                        {prog.price}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Practical Logistics Strip */}
                <div className="px-6 py-4 bg-slate-50/70 border-b border-slate-100 text-xs space-y-2">
                  <div className="flex items-start gap-2 text-slate-700">
                    <svg className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="font-medium">{prog.location}</span>
                  </div>

                  <div className="flex items-start gap-2 text-slate-700">
                    <svg className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{prog.schedule}</span>
                  </div>

                  <div className="flex items-start gap-2 text-slate-600">
                    <svg className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="font-semibold text-slate-800">{prog.coachRatio}</span>
                  </div>
                </div>

                {/* Highlights List */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                      {prog.description}
                    </p>

                    <ul className="space-y-1.5 text-xs text-slate-700 mb-5">
                      {prog.logistics.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-amber-500 font-bold shrink-0">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 pt-3 border-t border-slate-100">
                    <a
                      href={`/programs/${prog.slug}/`}
                      className="flex-1 text-center py-2 px-3 rounded-lg text-xs font-bold bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors"
                    >
                      Program Details
                    </a>

                    {prog.teamLinktUrl ? (
                      <a
                        href={prog.teamLinktUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center py-2 px-3 rounded-lg text-xs font-bold bg-[#0B192C] text-white hover:bg-amber-500 hover:text-slate-950 transition-colors shadow-xs"
                      >
                        Register Now &rarr;
                      </a>
                    ) : (
                      <a
                        href="/programs/enquiry/"
                        className="flex-1 text-center py-2 px-3 rounded-lg text-xs font-bold bg-amber-500 text-slate-950 hover:bg-amber-400 transition-colors"
                      >
                        Enquire / Waitlist
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          }))}
        </div>

        {/* Footnote */}
        <div className="mt-8 text-center">
          <p className="text-xs text-slate-500">
            Have questions about group placements or skill prerequisites?{' '}
            <a href="/contact/" className="text-[#0B192C] font-bold underline underline-offset-2">
              Speak with an NAA coach directly
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};
