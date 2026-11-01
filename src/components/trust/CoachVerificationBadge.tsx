import React from 'react';

export interface TrustBadgeProps {
  variant?: 'banner' | 'grid' | 'compact';
}

export const CoachVerificationBadge: React.FC<TrustBadgeProps> = ({ variant = 'grid' }) => {
  const credentials = [
    {
      title: 'Regina Police Service (RPS) Screened',
      desc: 'Criminal Record Checks with Vulnerable Sector Screening (CRC-VSS) for all coaches & staff.',
      badge: 'Mandatory Screening',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      )
    },
    {
      title: 'Sask Sport & Respect in Sport Certified',
      desc: '100% compliance with Saskatchewan safe sport guidelines, anti-bullying protocols, and athlete welfare.',
      badge: 'Provincial Standard',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
          <path d="M12 18V6" />
        </svg>
      )
    },
    {
      title: 'CAC Rule of Two Enforced',
      desc: 'Training strictly in open, observable facilities with two screened adults present. Zero isolated 1-on-1 contact.',
      badge: 'CAC Safe Sport',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    {
      title: 'First Aid & CPR-C on Every Court',
      desc: 'Immediate emergency preparedness, concussion protocol awareness, and certified on-site response.',
      badge: 'Active Preparedness',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      )
    }
  ];

  if (variant === 'compact') {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 py-4 border-t border-slate-700/60">
        {credentials.map((c, i) => (
          <div key={i} className="flex items-center gap-2.5 text-xs text-slate-200">
            <span className="text-amber-400 shrink-0">{c.icon}</span>
            <span className="font-medium">{c.title}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <section aria-labelledby="trust-section-title" className="py-12 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-400/10 text-amber-400 border border-amber-400/30 mb-2">
              Saskatchewan Safe Sport Governance
            </span>
            <h2 id="trust-section-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Regina Parent Peace of Mind
            </h2>
          </div>
          <p className="text-sm text-slate-300 max-w-xl">
            Every coach on the floor has been independently vetted by the Regina Police Service and certified through Coaching Association of Canada (CAC) standards before ever leading a drill.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {credentials.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-800/80 border border-slate-700 rounded-xl p-5 hover:border-amber-400/40 transition-colors shadow-sm"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center">
                  {item.icon}
                </div>
                <span className="text-[11px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded bg-slate-700/80 text-amber-300">
                  {item.badge}
                </span>
              </div>
              <h3 className="text-base font-bold text-white mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
