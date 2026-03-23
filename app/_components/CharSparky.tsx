/* "Sparky" — round yellow electric critter mascot, original character */
export default function CharSparky({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 130 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* ── LIGHTNING BOLT EARS ── */}
      {/* Left ear */}
      <path
        d="M 22 52 L 10 18 L 28 32 L 24 4 L 44 36 L 30 38 Z"
        fill="#FBBF24"
        stroke="#D97706"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Right ear */}
      <path
        d="M 108 52 L 120 18 L 102 32 L 106 4 L 86 36 L 100 38 Z"
        fill="#FBBF24"
        stroke="#D97706"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* ── BODY ── */}
      <ellipse cx="65" cy="78" rx="48" ry="46" fill="#FCD34D"/>
      <ellipse cx="65" cy="78" rx="48" ry="46" stroke="#D97706" strokeWidth="1.5" fill="none"/>

      {/* ── BELLY (lighter circle) ── */}
      <ellipse cx="65" cy="84" rx="28" ry="26" fill="#FEF3C7"/>

      {/* ── TAIL ── */}
      <path
        d="M 106 84 Q 122 72 126 84 Q 130 96 116 98 Q 128 94 122 108 Q 116 118 104 106 Z"
        fill="#FBBF24"
        stroke="#D97706"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* ── EYES ── */}
      {/* Left */}
      <ellipse cx="48" cy="68" rx="12" ry="14" fill="white"/>
      <circle cx="51" cy="70" r="8" fill="#1a1a2e"/>
      <circle cx="51" cy="70" r="4" fill="#080812"/>
      <circle cx="46" cy="65" r="3.5" fill="white"/>
      <circle cx="54" cy="74" r="2" fill="white" opacity="0.5"/>
      {/* Right */}
      <ellipse cx="82" cy="68" rx="12" ry="14" fill="white"/>
      <circle cx="79" cy="70" r="8" fill="#1a1a2e"/>
      <circle cx="79" cy="70" r="4" fill="#080812"/>
      <circle cx="74" cy="65" r="3.5" fill="white"/>
      <circle cx="82" cy="74" r="2" fill="white" opacity="0.5"/>

      {/* ── ROSY CHEEKS ── */}
      <ellipse cx="30" cy="80" rx="11" ry="7" fill="#F87171" opacity="0.55"/>
      <ellipse cx="100" cy="80" rx="11" ry="7" fill="#F87171" opacity="0.55"/>

      {/* ── SMILE ── */}
      <path d="M 48 90 Q 65 104 82 90" stroke="#D97706" strokeWidth="2.5" fill="none" strokeLinecap="round"/>

      {/* ── LIGHTNING BOLT BODY MARK ── */}
      <path
        d="M 62 72 L 56 82 L 64 82 L 58 94"
        stroke="#D97706"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* ── TINY FEET ── */}
      <ellipse cx="48" cy="120" rx="14" ry="8" fill="#FCD34D" stroke="#D97706" strokeWidth="1.2"/>
      <ellipse cx="82" cy="120" rx="14" ry="8" fill="#FCD34D" stroke="#D97706" strokeWidth="1.2"/>
    </svg>
  )
}
