import React from 'react';

export interface IconProps {
  className?: string;
  size?: number | string;
  color?: string;
  strokeWidth?: number;
}

// ── Badminton Shuttlecock & Racket Icon ──────────────────────
export const BadmintonIcon: React.FC<IconProps> = ({ size = 24, className = '', color = 'currentColor', strokeWidth = 2 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M9 17.5a3 3 0 0 0 6 0v-2H9v2z" fill={color} fillOpacity="0.25" />
    <path d="M9 15.5L4.5 4.5h15l-4.5 11" />
    <path d="M8 4.5l2 11" />
    <path d="M12 4.5v11" />
    <path d="M16 4.5l-2 11" />
    <path d="M6 8h12" />
    <path d="M7.5 12h9" />
  </svg>
);

// ── Volleyball Icon ──────────────────────────────────────────
export const VolleyballIcon: React.FC<IconProps> = ({ size = 24, className = '', color = 'currentColor', strokeWidth = 2 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 12a10 10 0 0 0 8.66-5" />
    <path d="M12 12a10 10 0 0 0-8.66-5" />
    <path d="M12 12a10 10 0 0 0 0 10" />
    <path d="M6.5 3.5a10 10 0 0 0 11 0" />
    <path d="M2.5 14a10 10 0 0 0 5.5 8" />
    <path d="M21.5 14a10 10 0 0 1-5.5 8" />
  </svg>
);

// ── Basketball Icon ──────────────────────────────────────────
export const BasketballIcon: React.FC<IconProps> = ({ size = 24, className = '', color = 'currentColor', strokeWidth = 2 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M2.1 10.5a14 14 0 0 1 19.8 0" />
    <path d="M2.1 13.5a14 14 0 0 0 19.8 0" />
    <line x1="12" y1="2" x2="12" y2="22" />
    <line x1="2" y1="12" x2="22" y2="12" />
  </svg>
);

// ── Martial Arts / National Shield Icon ──────────────────────
export const ShieldIcon: React.FC<IconProps> = ({ size = 24, className = '', color = 'currentColor', strokeWidth = 2 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M12 6v12" />
    <path d="M8 10h8" />
  </svg>
);

// ── Soccer / First Kicks Icon ────────────────────────────────
export const SoccerIcon: React.FC<IconProps> = ({ size = 24, className = '', color = 'currentColor', strokeWidth = 2 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <polygon points="12 7 15 10 14 14 10 14 9 10" />
    <path d="M12 7V2" />
    <path d="M15 10l5-2" />
    <path d="M14 14l3.5 4" />
    <path d="M10 14l-3.5 4" />
    <path d="M9 10l-5-2" />
  </svg>
);

// ── Camps & Clinics Icon (Whistle / Clipboard) ───────────────
export const CampsIcon: React.FC<IconProps> = ({ size = 24, className = '', color = 'currentColor', strokeWidth = 2 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M3 11l19-9-9 19-2-8-8-2z" />
  </svg>
);

// ── Tournament Trophy Icon ───────────────────────────────────
export const TrophyIcon: React.FC<IconProps> = ({ size = 24, className = '', color = 'currentColor', strokeWidth = 2 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M6 9H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2" />
    <path d="M18 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2" />
    <path d="M4 3h16v6a7 7 0 0 1-14 0V3z" />
    <path d="M12 16v4" />
    <path d="M8 20h8" />
  </svg>
);

// ── Athletics Track & Field Icon ─────────────────────────────
export const AthleticsIcon: React.FC<IconProps> = ({ size = 24, className = '', color = 'currentColor', strokeWidth = 2 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M4 17l6-6-4-4 6-4 4 6 4-2" />
    <circle cx="17" cy="4" r="2" />
    <path d="M8 21l3-5 5 2 4-5" />
  </svg>
);

// ── Generic Sport Dispatcher ─────────────────────────────────
export const SportIcon: React.FC<{ sport: string; size?: number | string; className?: string; color?: string }> = ({
  sport,
  size = 20,
  className = '',
  color = 'currentColor',
}) => {
  const s = (sport || '').toLowerCase();
  if (s.includes('badminton') || s.includes('smash')) return <BadmintonIcon size={size} className={className} color={color} />;
  if (s.includes('volleyball') || s.includes('spike')) return <VolleyballIcon size={size} className={className} color={color} />;
  if (s.includes('basketball') || s.includes('hoops')) return <BasketballIcon size={size} className={className} color={color} />;
  if (s.includes('shield') || s.includes('martial') || s.includes('defense') || s.includes('defence'))
    return <ShieldIcon size={size} className={className} color={color} />;
  if (s.includes('soccer') || s.includes('kicks')) return <SoccerIcon size={size} className={className} color={color} />;
  if (s.includes('camp') || s.includes('clinic')) return <CampsIcon size={size} className={className} color={color} />;
  if (s.includes('tournament') || s.includes('trophy')) return <TrophyIcon size={size} className={className} color={color} />;
  if (s.includes('athletic') || s.includes('track') || s.includes('running')) return <AthleticsIcon size={size} className={className} color={color} />;
  return <ShieldIcon size={size} className={className} color={color} />;
};
