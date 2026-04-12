import { useId } from 'react';

export function Logo({ size = 'md' }) {
  const sizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };
  const gradId = `logoGrad-${useId()}`;

  return (
    <svg
      viewBox="0 0 64 64"
      className={sizes[size]}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Document icon with gradient clip */}
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#7c71e8', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#ff9f43', stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      {/* Document */}
      <rect x="16" y="12" width="32" height="40" rx="2" stroke={`url(#${gradId})`} strokeWidth="2" />

      {/* Scissors/cut lines */}
      <path d="M20 24 L44 24" stroke={`url(#${gradId})`} strokeWidth="2" strokeLinecap="round" />
      <path d="M20 34 L44 34" stroke={`url(#${gradId})`} strokeWidth="2" strokeLinecap="round" />

      {/* Clip indicator */}
      <circle cx="50" cy="16" r="6" fill={`url(#${gradId})`} />
    </svg>
  );
}
