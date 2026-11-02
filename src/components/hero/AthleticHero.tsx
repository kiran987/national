import React, { useState } from 'react';
import { SportIcon } from '../icons/SportIcons';

export const AthleticHero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'badminton' | 'volleyball' | 'basketball' | 'national-shield'>('badminton');

  const slides = {
    badminton: {
      sport: 'Badminton',
      title: 'National Smash Badminton',
      slug: 'badminton',
      image: '/images/programs/badminton-action-1.webp',
      subImage: '/images/programs/badminton-action-2.webp',
      badge: 'Winter 2027 · Registration Open',
      schedule: 'Jan 26 – Mar 11 · Tue & Thu · 6:00–7:30 PM',
      venue: 'Green Gym, University of Regina (3737 Wascana Pkwy)',
      highlights: '10 sessions · Juniors & Elite 45-min batches · Smash Pro 90 min · tuition in 3 installments',
      price: '$150 – $295 CAD',
      link: '/programs/badminton/'
    },
    volleyball: {
      sport: 'Volleyball',
      title: 'National Spike Volleyball',
      slug: 'volleyball',
      image: '/images/programs/volleyball-action-1.webp',
      subImage: '/images/programs/volleyball-portrait-1.webp',
      badge: 'Winter 2027 · Registration Open',
      schedule: 'Jan 26 – Mar 11 · Tue & Thu · 6:00–7:30 PM',
      venue: 'Green Gym, University of Regina (3737 Wascana Pkwy)',
      highlights: '10 sessions · Two 45-min batches (6:00–6:45 or 6:45–7:30 PM) · tuition in 3 installments',
      price: '$195 – $245 CAD',
      link: '/programs/volleyball/'
    },
    basketball: {
      sport: 'Basketball',
      title: 'National Hoops Basketball',
      slug: 'basketball',
      image: '/images/programs/basketball-action-1.webp',
      subImage: '/images/programs/basketball-portrait-1.webp',
      badge: 'Junior & Youth Hoops · 16 Classes',
      schedule: 'Tue & Thu (6:00–7:30 PM)',
      venue: 'Balfour Collegiate & Knox-Met Hardwood Gyms',
      highlights: 'Official jersey included · 3v3 small-sided decision making',
      price: '$205 – $225 CAD',
      link: '/programs/basketball/'
    },
    'national-shield': {
      sport: 'Martial Arts',
      title: 'National Shield Fitness & Self-Defence',
      slug: 'national-shield',
      image: '/images/programs/martialarts-action-1.webp',
      subImage: '/images/programs/martialarts-portrait-1.webp',
      badge: 'Ages 5–17 & Adults · 12-Wk Cycle',
      schedule: 'Starting soon · Schedule & timings finalizing',
      venue: 'Regina Facility TBA',
      highlights: 'Coach-held pad drills · SHIELD Safety & Anti-Bullying System',
      price: '$75 – $100 CAD',
      link: '/programs/national-shield/'
    }
  };

  const current = slides[activeTab];

  const partners = [
    { name: 'Respect in Sport SK', label: 'Certified Staff' },
    { name: 'Sask Sport Inc.', label: 'Safe Sport Aligned' },
    { name: 'Regina Police Service', label: 'CRC-VSS Screened' },
    { name: 'Coaching Assoc. of Canada', label: 'NCCP Aligned' },
    { name: 'CAC Rule of Two', label: 'Safe Environment' }
  ];

  return (
    <section aria-labelledby="hero-title" className="relative bg-[#0B192C] text-white overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-20">
      {/* Background Subtle Athletic Texture */}
      <div className="absolute inset-0 opacity-15 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-[650px] h-[650px] rounded-full bg-gradient-to-br from-amber-400/20 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-[#83161B]/30 to-transparent blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left 7 Columns: Athletic Value Prop & Logistics */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top National Academy Crest Badge */}
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-400 text-xs font-bold tracking-wide uppercase">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                <span>National Athletics Academy &bull; Canada</span>
              </div>
            </div>

            {/* Editorial Heading */}
            <h1 id="hero-title" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
              Youth Sports in Regina That Put Skill and Fun First.
            </h1>

            {/* Refined Body Copy */}
            <p className="text-slate-200 text-base sm:text-lg max-w-2xl leading-relaxed">
              Coached by certified local instructors at the U of R and Knox-Met gyms. We focus on real skill progression, friendly group environments, and manageable schedules for Regina families.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="/registration/"
                id="hero-register-btn"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-extrabold text-sm bg-amber-400 text-slate-950 hover:bg-amber-300 transition-all shadow-lg hover:shadow-amber-400/25 focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                <span>Register for Winter 2027</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              <a
                href="#gym-schedules"
                id="hero-schedules-btn"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-slate-800/90 text-white hover:bg-slate-700 transition-all border border-slate-700 shadow-xs focus-visible:ring-2 focus-visible:ring-slate-400"
              >
                <span>View Gym Schedules &amp; Times</span>
                <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

            {/* Micro Trust Bar Below CTAs */}
            <div className="pt-1 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold text-slate-300">
              <span className="inline-flex items-center gap-1.5 text-slate-200">
                <span className="text-amber-400 font-extrabold text-sm">✓</span>
                <span>RPS CRC-VSS Screened</span>
              </span>
              <span className="text-slate-600 hidden sm:inline">&bull;</span>
              <span className="inline-flex items-center gap-1.5 text-slate-200">
                <span className="text-amber-400 font-extrabold text-sm">✓</span>
                <span>Safe Sport Certified</span>
              </span>
              <span className="text-slate-600 hidden sm:inline">&bull;</span>
              <span className="inline-flex items-center gap-1.5 text-slate-200">
                <span className="text-amber-400 font-extrabold text-sm">✓</span>
                <span>Flexible Installments &amp; Sibling Discounts</span>
              </span>
            </div>

            {/* Interactive Sport Selector Tabs (Desktop: lg and up) */}
            <div className="hidden lg:block pt-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center justify-between">
                <span>Select a Sport to Preview Action &amp; Gym Logistics:</span>
                <span className="inline-flex items-center gap-1.5 text-amber-400/90 text-[10px] font-bold tracking-wider uppercase font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping"></span>
                  Preview Program Details &rarr;
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2" role="tablist" aria-label="Select active sport">
                {(['badminton', 'volleyball', 'basketball', 'national-shield'] as const).map((key) => {
                  const item = slides[key];
                  const isSelected = activeTab === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setActiveTab(key)}
                      role="tab"
                      aria-selected={isSelected}
                      className={`flex items-center gap-2.5 p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-amber-400/15 border-amber-400 text-white shadow-md ring-1 ring-amber-400'
                          : 'bg-slate-800/60 border-slate-700/80 text-slate-300 hover:border-slate-600 hover:bg-slate-800'
                      }`}
                    >
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                        isSelected ? 'bg-amber-400 text-slate-950 font-bold' : 'bg-slate-700/60 text-slate-300'
                      }`}>
                        <SportIcon sport={item.sport} size={15} />
                      </div>
                      <div className="truncate">
                        <div className={`text-xs font-bold leading-tight truncate ${isSelected ? 'text-amber-300' : 'text-white'}`}>
                          {item.sport}
                        </div>
                        <div className="text-[10px] text-slate-400 truncate">
                          {item.price}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right 5 Columns: Dynamic Authentic Action Photography Card & Official Emblem */}
          <div className="lg:col-span-5 relative flex flex-col items-center">
            
            {/* Animated National Athletics Academy Big Round Crest Emblem */}
            <div className="hero-animated-logo-wrap relative z-20 mb-5 sm:mb-6 flex items-center justify-center">
              {/* Subtle gold / red ambient glow */}
              <div className="hero-animated-logo-ring absolute -inset-4 rounded-full bg-gradient-to-r from-amber-400/50 via-amber-200/40 to-[#83161B]/40 blur-xl pointer-events-none" />
              
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full p-2 bg-[#021F47] border-[4px] border-[#DDAA40] shadow-[0_16px_50px_rgba(0,0,0,0.8)] flex items-center justify-center">
                <img
                  src="/images/naa-logo-md.webp"
                  alt="National Athletics Academy Official Crest"
                  width={150}
                  height={150}
                  className="w-full h-full rounded-full object-contain ring-1 ring-white/30"
                  loading="eager"
                />
              </div>
            </div>

            {/* Real Athlete Photography Container */}
            <div className="w-full relative rounded-3xl overflow-hidden border-2 border-slate-700/80 shadow-2xl bg-slate-900 group">
              <img
                src={current.image}
                alt={`${current.title} athletes training on court in Regina`}
                width={700}
                height={525}
                className="w-full h-[380px] sm:h-[430px] object-cover object-center transition-all duration-500 group-hover:scale-105"
                loading="eager"
              />

              {/* Gradient Scrim for Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent pointer-events-none" />

              {/* Floating Top Header */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#0B192C]/90 text-white backdrop-blur-md border border-slate-700 flex items-center gap-1.5 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>{current.badge}</span>
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-400 text-slate-950 shadow-md">
                  {current.price}
                </span>
              </div>

              {/* Bottom Card Content with Logistics */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80">
                <div className="flex items-center justify-between text-xs font-bold text-amber-400 mb-1">
                  <span>{current.title.toUpperCase()}</span>
                  <span className="text-slate-300 font-mono text-[11px]">HARDWOOD GYM</span>
                </div>
                <div className="text-sm font-extrabold text-white leading-snug">
                  {current.venue}
                </div>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  {current.highlights}
                </p>
                <div className="mt-2.5 pt-2 border-t border-slate-700/80 flex items-center justify-between text-xs">
                  <span className="text-slate-400">{current.schedule}</span>
                  <a href={current.link} className="text-amber-400 hover:underline font-bold inline-flex items-center gap-1">
                    <span>Full Details</span>
                    <span>&rarr;</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Mobile Sport Selector Pills (rendered under the photo card on < lg) */}
            <div className="block lg:hidden mt-4">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center justify-between">
                <span>Tap Sport to Preview Logistics:</span>
                <span className="inline-flex items-center gap-1 text-amber-400 text-[10px] font-bold uppercase font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping"></span>
                  Preview Details
                </span>
              </div>
              <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none" role="tablist" aria-label="Select active sport (mobile)">
                {(['badminton', 'volleyball', 'basketball', 'national-shield'] as const).map((key) => {
                  const item = slides[key];
                  const isSelected = activeTab === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setActiveTab(key)}
                      role="tab"
                      aria-selected={isSelected}
                      className={`shrink-0 flex items-center gap-2 p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-amber-400/15 border-amber-400 text-white shadow-md ring-1 ring-amber-400'
                          : 'bg-slate-800/80 border-slate-700/80 text-slate-300 hover:border-slate-600 hover:bg-slate-800'
                      }`}
                    >
                      <div className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                        isSelected ? 'bg-amber-400 text-slate-950 font-bold' : 'bg-slate-700/60 text-slate-300'
                      }`}>
                        <SportIcon sport={item.sport} size={14} />
                      </div>
                      <div>
                        <div className={`text-xs font-bold leading-tight whitespace-nowrap ${isSelected ? 'text-amber-300' : 'text-white'}`}>
                          {item.sport}
                        </div>
                        <div className="text-[10px] text-slate-400 whitespace-nowrap">
                          {item.price}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

        {/* Trusted Saskatchewan Partners Ribbon */}
        <div className="mt-14 pt-8 border-t border-slate-800">
          <p className="text-center text-xs font-bold uppercase tracking-wider text-slate-400 mb-5">
            Trusted Saskatchewan Safe Sport &amp; Community Standards
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {partners.map((p, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-800/40 border border-slate-800 hover:border-slate-700 transition-colors text-center"
              >
                <span className="text-xs font-extrabold text-white leading-tight">{p.name}</span>
                <span className="text-[11px] text-amber-400/90 font-medium mt-0.5">{p.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
