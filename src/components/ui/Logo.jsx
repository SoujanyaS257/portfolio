export default function Logo({ className = "h-9 w-9" }) {
  return (
    <svg viewBox="0 0 40 40" className={className} role="img" aria-label="Soujanya S logo">
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="10" fill="url(#logo-grad)" />
      <path
        d="M27 13c0-2.5-2.5-4-6-4s-6 1.5-6 3.5c0 2.2 2.3 3 6 3.8 3.9.8 6.3 1.8 6.3 4.4 0 2.3-2.6 3.8-6.3 3.8s-6.7-1.6-7-4.2"
        stroke="white"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="15" cy="12.5" r="1.6" fill="white" />
      <circle cx="27" cy="13" r="1.6" fill="white" />
      <circle cx="14" cy="24.3" r="1.6" fill="#A5B4FC" />
      <circle cx="27.3" cy="20.6" r="1.4" fill="white" opacity="0.85" />
    </svg>
  );
}