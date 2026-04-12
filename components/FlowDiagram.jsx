import { Logo } from './Logo';

const sources = [
  { label: 'Article Title', color: '#7c71e8', y: 70 },
  { label: 'Body Text', color: '#7c71e8', y: 150 },
  { label: 'Nav / Ads', color: '#5a5754', y: 230 },
  { label: 'Comments', color: '#5a5754', y: 310 },
];

const destinations = [
  { label: 'Clipboard', color: '#7c71e8', y: 90 },
  { label: 'article.md', color: '#ff9f43', y: 190 },
  { label: 'Claude Chat', color: '#7c71e8', y: 290 },
];

export function FlowDiagram() {
  return (
    <div className="relative w-full px-6 py-12">
      <svg viewBox="0 0 900 380" className="w-full h-auto" fill="none" preserveAspectRatio="xMidYMid meet">
        {sources.map((s, i) => {
          const dashed = s.color === '#5a5754';
          return (
            <path
              key={`src-line-${i}`}
              d={`M 170 ${s.y} C 320 ${s.y}, 320 190, 450 190`}
              stroke={s.color}
              strokeWidth="1.5"
              strokeDasharray={dashed ? '4 5' : '0'}
              className={dashed ? '' : 'flow-line'}
            />
          );
        })}

        {destinations.map((d, i) => (
          <path
            key={`dst-line-${i}`}
            d={`M 470 190 C 600 190, 600 ${d.y}, 730 ${d.y}`}
            stroke={d.color}
            strokeWidth="1.5"
            className="flow-line"
            style={{ animationDelay: `${i * 0.3}s` }}
          />
        ))}

        {/* Hub */}
        <circle cx="460" cy="190" r="34" fill="#0f0f0f" stroke="#7c71e8" strokeWidth="2" className="animate-pulse-slow-svg" />

        {/* Source labels */}
        {sources.map((s, i) => (
          <g key={`src-${i}`}>
            <rect x="10" y={s.y - 16} width="150" height="32" rx="16" fill="#0f0f0f" stroke={s.color} strokeWidth="1.2" />
            <text x="85" y={s.y + 4} textAnchor="middle" fill={s.color} fontSize="12" fontFamily="monospace">{s.label}</text>
          </g>
        ))}

        {/* Destination labels */}
        {destinations.map((d, i) => (
          <g key={`dst-${i}`}>
            <rect x="740" y={d.y - 16} width="150" height="32" rx="16" fill="#0f0f0f" stroke={d.color} strokeWidth="1.2" />
            <text x="815" y={d.y + 4} textAnchor="middle" fill={d.color} fontSize="12" fontFamily="monospace">{d.label}</text>
          </g>
        ))}
      </svg>

      {/* Hub logo overlay */}
      <div
        className="absolute flex items-center justify-center pointer-events-none"
        style={{ left: '51%', top: '50%', transform: 'translate(-51%, -50%)' }}
      >
        <Logo size="sm" />
      </div>
    </div>
  );
}
