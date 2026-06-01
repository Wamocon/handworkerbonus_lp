export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      role="img"
      aria-label="HandwerkerBonus"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="hb-coin" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#14b8a6" />
          <stop offset="1" stopColor="#0f766e" />
        </linearGradient>
      </defs>

      <g>
        <rect x="2" y="2" width="60" height="60" rx="14" fill="url(#hb-coin)" />

        <text
          x="32"
          y="46"
          textAnchor="middle"
          fontFamily="ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Inter, Roboto, sans-serif"
          fontWeight="900"
          fontSize="42"
          fill="#ffffff"
        >
          €
        </text>

        <circle cx="50" cy="14" r="9" fill="#f5c84b" />
        <path
          d="M45.5 14.3 L49 17.5 L54.5 11.5"
          stroke="#ffffff"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>
    </svg>
  );
}
