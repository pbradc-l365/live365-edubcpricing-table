export function GreenCheckIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg
      className={`${className} inline-block flex-shrink-0`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Included"
    >
      <circle cx="12" cy="12" r="10" fill="#60be34" />
      <path
        d="M8 12.2L10.7 15L16 9.5"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GrayCrossIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg
      className={`${className} inline-block flex-shrink-0 text-slate-400`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-label="Not included"
    >
      <line x1="16" y1="8" x2="8" y2="16" />
      <line x1="8" y1="8" x2="16" y2="16" />
    </svg>
  );
}
