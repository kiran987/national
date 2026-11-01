import React, { useState } from 'react';

export interface StageInfo {
  number: number;
  stage: string;
  ages: string;
  focus: string;
  parentTakeaway: string;
  milestones: string[];
  activePrograms: string[];
}

const STAGES: StageInfo[] = [
  {
    number: 1,
    stage: 'Active Start',
    ages: 'Ages 2–5',
    focus: 'Joyful movement exploration, basic balance, spatial awareness, and listening habits.',
    parentTakeaway: 'At this stage, sport is about falling in love with movement. Zero rigid drills; 100% active games and parent encouragement.',
    milestones: [
      'Two-foot jump & soft landing mechanics',
      'Basic rolling, tracking, and catching soft spheres',
      'Following multi-step coach cues in a group',
      'Body balance and spatial boundary awareness'
    ],
    activePrograms: ['Active Movement & Agility Games (Ages 3–5)']
  },
  {
    number: 2,
    stage: 'FUNdamentals',
    ages: 'Ages 5–8',
    focus: 'Multi-sport sampling, physical literacy, eye-hand reactivity, and coachable sportsmanship.',
    parentTakeaway: 'Avoid early single-sport specialization. Children who sample multiple sports develop superior motor IQ and suffer fewer repetitive injuries later.',
    milestones: [
      'Neutral racket grip habits & underhand target control',
      'Dribbling with finger pads at waist height',
      'Personal safety boundaries (STOP -> MOVE AWAY -> GET HELP)',
      'Positive sportsmanship and peer high-fives'
    ],
    activePrograms: ['Smash Juniors Badminton', 'Junior Hoops Basketball', 'National Shield Juniors']
  },
  {
    number: 3,
    stage: 'Learn to Train',
    ages: 'Ages 8–12',
    focus: 'Sport-specific technical mechanics, platform passing, small-sided game decision making.',
    parentTakeaway: 'The golden age of motor skill acquisition. Athletes rapidly absorb correct biomechanics when coaches break skills down logically.',
    milestones: [
      'Forearm volleyball platform angle & overhead setting touch',
      'Badminton 6-corner split-step footwork cadence',
      'Triple-threat separation & jump stop balance',
      'Resilience after missed shots or errors'
    ],
    activePrograms: ['Smash Juniors Badminton', 'Spike Foundations Volleyball', 'Junior Hoops Basketball', 'National Shield Juniors']
  },
  {
    number: 4,
    stage: 'Train to Train',
    ages: 'Ages 12–16',
    focus: 'Tactical execution, court agility, conditioning base, and competitive team schemes.',
    parentTakeaway: 'Prepares athletes for Regina high school team tryouts and club club circuits with game-speed decision making.',
    milestones: [
      'Jump smash mechanics & disguised slice drops',
      'Overhand float serving & 6v6 rotational defense',
      'Pick-and-roll reads and full-court spacing',
      'Leadership communication and teammate support under pressure'
    ],
    activePrograms: ['Smash Elite Badminton', 'Spike Elite Volleyball', 'Youth Hoops Basketball', 'National Shield Youth']
  },
  {
    number: 5,
    stage: 'Train to Compete',
    ages: 'Ages 14–18',
    focus: 'Tournament fixtures, high-pressure execution, sportsmanship, and mental toughness.',
    parentTakeaway: 'Testing skills under referee whistle in supportive weekend invitationals and multi-sport showcases.',
    milestones: [
      'High-pressure clock & score management',
      'Scouting opponent tactical sets and adapting',
      'Official game etiquette & Respect in Sport respect for referees',
      'Pre-game preparation & post-game cool-down routines'
    ],
    activePrograms: ['Prairie Hoops Classic', 'NAA Invitational Tournaments', 'High School Prep Clinics']
  },
  {
    number: 6,
    stage: 'Active for Life',
    ages: 'Adults & Seniors',
    focus: 'Lifelong fitness, joint mobility, stress reduction, and inclusive community recreation.',
    parentTakeaway: 'Athletics does not stop after school. NAA offers accessible adult coaching and senior functional joint preservation.',
    milestones: [
      'Joint-friendly functional mobility and fall prevention',
      'Community camaraderie through structured sports',
      'Self-defence de-escalation and situational awareness',
      'Active physical wellness at every age'
    ],
    activePrograms: ['National Shield Pro', 'Adult Badminton Drop-In', 'Parent-Coach Volunteering']
  }
];

export const AthletePathwayRail: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState<number>(2); // Start on Learn to Train (index 2)

  const active = STAGES[selectedStage];

  return (
    <section aria-labelledby="pathway-rail-title" className="py-20 bg-white text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300 mb-3">
            Long-Term Athlete Development (LTAD)
          </span>
          <h2 id="pathway-rail-title" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            The NAA Athlete Pathway
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            A clear roadmap from first playground steps at age 2 to high school competition and active adulthood. Click any stage to explore developmental benchmarks.
          </p>
        </div>

        {/* Progress Rail Stepper */}
        <div className="relative mb-12">
          {/* Connecting Track Line */}
          <div className="hidden lg:block absolute top-6 left-12 right-12 h-1 bg-slate-200 z-0">
            <div
              className="h-1 bg-amber-500 transition-all duration-300"
              style={{ width: `${(selectedStage / (STAGES.length - 1)) * 100}%` }}
            />
          </div>

          {/* Stepper Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 relative z-10" role="tablist">
            {STAGES.map((s, idx) => {
              const isSelected = selectedStage === idx;
              const isPast = idx < selectedStage;
              return (
                <button
                  key={s.number}
                  type="button"
                  onClick={() => setSelectedStage(idx)}
                  role="tab"
                  aria-selected={isSelected}
                  className={`flex flex-col items-center p-3 rounded-2xl transition-all cursor-pointer text-center ${
                    isSelected
                      ? 'bg-[#0B192C] text-white shadow-md ring-2 ring-amber-400'
                      : isPast
                      ? 'bg-slate-50 text-slate-800 hover:bg-slate-100 border border-slate-200'
                      : 'bg-white text-slate-500 hover:bg-slate-50 border border-slate-200'
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs mb-2 transition-colors ${
                      isSelected
                        ? 'bg-amber-400 text-slate-950 shadow-xs'
                        : isPast
                        ? 'bg-slate-200 text-slate-700'
                        : 'bg-slate-100 text-slate-400'
                    }`}
                  >
                    0{s.number}
                  </div>
                  <div className={`font-bold text-xs sm:text-sm leading-tight ${isSelected ? 'text-white' : 'text-slate-800'}`}>
                    {s.stage}
                  </div>
                  <div className={`text-[11px] font-mono mt-0.5 ${isSelected ? 'text-amber-300' : 'text-slate-500'}`}>
                    {s.ages}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Stage Detail Panel */}
        <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 7 Columns: Focus & Milestones */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-[#0B192C] text-white">
                  Stage 0{active.number} Milestone Focus
                </span>
                <span className="text-sm font-bold text-amber-700 font-mono">
                  {active.ages}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                {active.stage}: <span className="text-slate-600 font-semibold text-lg sm:text-xl block sm:inline">{active.focus}</span>
              </h3>

              <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <strong className="text-slate-900 font-bold block mb-1">Parent Takeaway:</strong>
                {active.parentTakeaway}
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Key Developmental Benchmarks Evaluated in NAA Progress Reports:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {active.milestones.map((m, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-800 bg-white p-3 rounded-lg border border-slate-200/80">
                      <span className="text-amber-500 font-bold shrink-0">✓</span>
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Matching NAA Academy Programs */}
            <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Recommended NAA Academy Streams:
              </h4>

              <div className="space-y-2.5">
                {active.activePrograms.map((p, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800">
                    <span>{p}</span>
                    <a
                      href="/programs/"
                      className="text-amber-600 hover:text-amber-700 font-bold underline underline-offset-2 shrink-0 ml-2"
                    >
                      View &rarr;
                    </a>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-100">
                <a
                  href="/registration/"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs bg-[#0B192C] text-white hover:bg-amber-500 hover:text-slate-950 transition-all shadow-xs"
                >
                  <span>Register Athlete for this Stage</span>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
