import React, { useState, useMemo } from 'react';
import { SportIcon } from '../icons/SportIcons';
import { type ScheduleItem, SCHEDULE_DATA } from '../../data/schedules';
export type { ScheduleItem };

export const GymScheduleTable: React.FC = () => {
  const [seasonFilter, setSeasonFilter] = useState<string>('Winter 2027');
  const [sportFilter, setSportFilter] = useState<string>('All');
  const [dayFilter, setDayFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const seasons = [
    { label: 'Winter 2027 (U of R Green Gym · Starts Jan 2027)', value: 'Winter 2027' }
  ];
  const sports = ['All', 'Badminton', 'Volleyball'];
  const days = ['All', 'Thursday', 'Friday & Tuesday', 'Thursday & Friday', 'Tuesday & Thursday'];

  const filteredItems = useMemo(() => {
    return SCHEDULE_DATA.filter((item) => {
      const matchSeason = seasonFilter === 'All' || item.season === seasonFilter;
      const matchSport = sportFilter === 'All' || item.sport === sportFilter;
      const matchDay = dayFilter === 'All' || item.day.toLowerCase().includes(dayFilter.toLowerCase());
      const matchQuery =
        !searchQuery ||
        item.tier.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.facility.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.season.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.ageGroup.toLowerCase().includes(searchQuery.toLowerCase());
      return matchSeason && matchSport && matchDay && matchQuery;
    });
  }, [seasonFilter, sportFilter, dayFilter, searchQuery]);

  return (
    <section id="gym-schedules" aria-labelledby="gym-schedule-heading" className="py-16 bg-white text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-300 mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Live Facility Allocations
            </div>
            <h2 id="gym-schedule-heading" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Gym Locations &amp; Session Times
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">
              Winter 2027 programs at the University of Regina Green Gym. Registration opens November 1, 2026.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-500 font-medium">Need schedule assistance?</span>
            <a
              href="tel:3063309559"
              className="text-xs font-bold text-amber-600 hover:text-amber-700 underline underline-offset-4"
            >
              Call Coach Desk (306) 330-9559 &rarr;
            </a>
          </div>
        </div>

        {/* Season Selector Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-4" role="tablist" aria-label="Filter schedule by season">
          <span className="text-xs font-bold uppercase text-slate-500 mr-2 tracking-wider">Season:</span>
          {seasons.map((s) => {
            const isActive = seasonFilter === s.value;
            return (
              <button
                key={s.value}
                type="button"
                onClick={() => setSeasonFilter(s.value)}
                role="tab"
                aria-selected={isActive}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#0B192C] text-white shadow-sm ring-2 ring-[#0B192C]/20'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-300'
                }`}
              >
                {s.label}
              </button>
            );
          })}
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 mb-6 shadow-xs">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            
            {/* Sport Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5" role="tablist" aria-label="Filter schedule by sport">
              <span className="text-xs font-bold uppercase text-slate-400 mr-2 tracking-wider hidden sm:inline">Sport:</span>
              {sports.map((sp) => {
                const isActive = sportFilter === sp;
                return (
                  <button
                    key={sp}
                    type="button"
                    onClick={() => setSportFilter(sp)}
                    role="tab"
                    aria-selected={isActive}
                    className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                        : 'bg-white text-slate-700 hover:bg-slate-200/70 border border-slate-200'
                    }`}
                  >
                    {sp !== 'All' && <SportIcon sport={sp} size={14} className="shrink-0" />}
                    <span>{sp}</span>
                  </button>
                );
              })}
            </div>

            {/* Day Filter & Search */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1">
                <span className="text-xs font-bold uppercase text-slate-400 mr-1 tracking-wider">Day:</span>
                <select
                  value={dayFilter}
                  onChange={(e) => setDayFilter(e.target.value)}
                  className="bg-white border border-slate-300 text-xs font-semibold rounded-lg px-2.5 py-1.5 text-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer"
                  aria-label="Filter schedule by day of week"
                >
                  {days.map((d) => (
                    <option key={d} value={d}>
                      {d === 'All' ? 'All Days' : d}
                    </option>
                  ))}
                </select>
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Search gym, tier, season..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-white border border-slate-300 rounded-lg text-xs px-3 py-1.5 pl-8 text-slate-800 placeholder-slate-400 w-44 sm:w-56 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  aria-label="Search schedule"
                />
                <svg
                  className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5 pointer-events-none"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>
            </div>

          </div>
        </div>

        {/* Schedule Table (Desktop) / Cards (Mobile) */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 text-left text-xs sm:text-sm">
              <thead className="bg-[#0B192C] text-white font-bold uppercase tracking-wider text-[11px]">
                <tr>
                  <th scope="col" className="py-3.5 px-4 sm:px-6">Season &amp; Program</th>
                  <th scope="col" className="py-3.5 px-3">Age Bracket</th>
                  <th scope="col" className="py-3.5 px-4">Regina Facility</th>
                  <th scope="col" className="py-3.5 px-3">Day &amp; Time</th>
                  <th scope="col" className="py-3.5 px-3">Cost &amp; Ratio</th>
                  <th scope="col" className="py-3.5 px-3">Status</th>
                  <th scope="col" className="py-3.5 px-4 sm:px-6 text-right">Register</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white font-medium text-slate-700">
                {filteredItems.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="text-center py-12 text-slate-400 font-medium">
                      No sessions match your filter criteria. Try selecting "All Sports".
                    </td>
                  </tr>
                ) : (
                  filteredItems.map((item) => {
                    const isUrgent = item.status === 'Few Spots Left' || item.status === 'Filling Fast';
                    return (
                      <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                        
                        {/* Sport & Program */}
                        <td className="py-4 px-4 sm:px-6">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-slate-100 text-[#0B192C] flex items-center justify-center shrink-0 border border-slate-200">
                              <SportIcon sport={item.sport} size={16} />
                            </div>
                            <div>
                              <div className="flex items-center gap-1.5 mb-0.5">
                                <span
                                  className={`px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                                    item.season === 'Winter 2027'
                                      ? 'bg-blue-100 text-blue-800 border border-blue-200'
                                      : 'bg-amber-100 text-amber-900 border border-amber-300'
                                  }`}
                                >
                                  {item.season}
                                </span>
                              </div>
                              <div className="font-bold text-slate-900 leading-snug">{item.tier}</div>
                              {item.notes && (
                                <div className="text-[11px] text-amber-700 mt-0.5">{item.notes}</div>
                              )}
                            </div>
                          </div>
                        </td>

                        {/* Age Bracket */}
                        <td className="py-4 px-3 whitespace-nowrap">
                          <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200">
                            {item.ageGroup}
                          </span>
                        </td>

                        {/* Facility & Address */}
                        <td className="py-4 px-4">
                          <div className="font-semibold text-slate-900">{item.facility}</div>
                          <div className="text-xs text-slate-500 mt-0.5 flex items-center gap-1">
                            <svg className="w-3 h-3 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>{item.address}</span>
                          </div>
                        </td>

                        {/* Day & Time */}
                        <td className="py-4 px-3">
                          <div className="font-bold text-slate-900">{item.day}</div>
                          <div className="text-xs text-slate-600 font-mono mt-0.5">{item.timeSlot}</div>
                          <div className="text-[11px] text-slate-400 mt-0.5">{item.dates}</div>
                        </td>

                        {/* Cost & Ratio */}
                        <td className="py-4 px-3 whitespace-nowrap">
                          <div className="font-extrabold text-[#0B192C]">{item.price}</div>
                          <div className="text-[11px] text-slate-500">{item.coachRatio}</div>
                        </td>

                        {/* Status Badge */}
                        <td className="py-4 px-3 whitespace-nowrap">
                          <span
                            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wide uppercase ${
                              item.status === 'Few Spots Left'
                                ? 'bg-rose-50 text-rose-700 border border-rose-200'
                                : item.status === 'Filling Fast'
                                ? 'bg-amber-50 text-amber-800 border border-amber-200'
                                : item.status === 'Open'
                                ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                                : item.status === 'Starting Soon'
                                ? 'bg-amber-100 text-amber-900 border border-amber-300 font-bold'
                                : item.status === 'In Session'
                                ? 'bg-emerald-100 text-emerald-900 border border-emerald-300 font-bold'
                                : 'bg-slate-100 text-slate-700 border border-slate-200'
                            }`}
                          >
                            {isUrgent && <span className="w-1.5 h-1.5 rounded-full bg-current animate-ping"></span>}
                            {item.status}
                          </span>
                        </td>

                        {/* Register Button */}
                        <td className="py-4 px-4 sm:px-6 text-right whitespace-nowrap">
                          {item.season === 'Winter 2027' || !item.registerUrl ? (
                            <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 text-slate-500 border border-slate-200">
                              Opens Nov 1
                            </span>
                          ) : (
                            <a
                              href={item.registerUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg text-xs font-bold bg-[#0B192C] text-white hover:bg-amber-500 hover:text-slate-950 transition-all shadow-xs focus-visible:ring-2 focus-visible:ring-amber-500"
                            >
                              <span>Register (Fall)</span>
                              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                              </svg>
                            </a>
                          )}
                        </td>

                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer Facility Notice */}
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
          <p>
            * Facility assignments are locked in the TeamLinkt parent mobile portal upon registration.
          </p>
          <p className="font-semibold text-slate-700">
            Basketball &amp; Martial Arts session schedules will be published prior to seasonal kickoff.
          </p>
        </div>

      </div>
    </section>
  );
};
