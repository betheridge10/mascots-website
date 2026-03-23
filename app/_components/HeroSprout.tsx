/* "Sprout" — mushroom-cap character in sports jersey, original character */
export default function HeroSprout({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 220 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* ── SHADOW ── */}
      <ellipse cx="110" cy="373" rx="62" ry="7" fill="rgba(0,0,0,0.18)"/>

      {/* ── SHOES ── */}
      <ellipse cx="82" cy="340" rx="28" ry="14" fill="#F8FAFC"/>
      <ellipse cx="82" cy="340" rx="28" ry="14" stroke="#CBD5E1" strokeWidth="1.5" fill="none"/>
      <path d="M 58 336 C 66 331 78 330 88 335" stroke="#0033A0" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <ellipse cx="140" cy="340" rx="28" ry="14" fill="#F8FAFC"/>
      <ellipse cx="140" cy="340" rx="28" ry="14" stroke="#CBD5E1" strokeWidth="1.5" fill="none"/>
      <path d="M 116 336 C 124 331 136 330 146 335" stroke="#0033A0" strokeWidth="2.5" fill="none" strokeLinecap="round"/>

      {/* ── LEGS ── */}
      <rect x="84" y="278" width="22" height="60" rx="11" fill="#FEF9EE"/>
      <rect x="114" y="278" width="22" height="60" rx="11" fill="#FEF9EE"/>

      {/* ── JERSEY / BODY ── */}
      <rect x="60" y="208" width="100" height="76" rx="20" fill="#0033A0"/>
      {/* Jersey side stripes */}
      <rect x="60" y="210" width="14" height="72" rx="7" fill="#0033A0" opacity="0.6"/>
      <rect x="146" y="210" width="14" height="72" rx="7" fill="#0033A0" opacity="0.6"/>
      {/* Collar */}
      <path d="M 88 211 Q 110 205 132 211" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round"/>
      {/* Jersey number */}
      <text
        x="110"
        y="258"
        fontFamily="Arial Black, Impact, sans-serif"
        fontSize="38"
        fontWeight="900"
        fill="white"
        textAnchor="middle"
        dominantBaseline="middle"
      >1</text>

      {/* ── ARMS ── */}
      {/* Left arm */}
      <path d="M 60 218 C 32 224 18 240 22 260 C 26 278 46 284 62 274 C 72 268 72 248 68 232 Z" fill="#FEF9EE"/>
      <circle cx="24" cy="260" r="14" fill="#FEF9EE"/>
      <path d="M 15 254 Q 25 264 35 256" stroke="#E8D5B7" strokeWidth="1.5" fill="none"/>
      {/* Right arm */}
      <path d="M 160 218 C 188 224 202 240 198 260 C 194 278 174 284 158 274 C 148 268 148 248 152 232 Z" fill="#FEF9EE"/>
      <circle cx="196" cy="260" r="14" fill="#FEF9EE"/>
      <path d="M 185 254 Q 195 264 205 256" stroke="#E8D5B7" strokeWidth="1.5" fill="none"/>

      {/* ── NECK ── */}
      <rect x="96" y="192" width="28" height="20" rx="10" fill="#FEF9EE"/>

      {/* ── FACE ── */}
      <ellipse cx="110" cy="164" rx="54" ry="52" fill="#FEF9EE"/>

      {/* ── EYES ── */}
      {/* Left */}
      <ellipse cx="90" cy="160" rx="14" ry="16" fill="white" stroke="#E8D5B7" strokeWidth="1"/>
      <circle cx="93" cy="162" r="9" fill="#1a1a2e"/>
      <circle cx="93" cy="162" r="5" fill="#0a0a18"/>
      <circle cx="88" cy="157" r="4" fill="white"/>
      <circle cx="96" cy="166" r="2" fill="white" opacity="0.55"/>
      {/* Right */}
      <ellipse cx="130" cy="160" rx="14" ry="16" fill="white" stroke="#E8D5B7" strokeWidth="1"/>
      <circle cx="127" cy="162" r="9" fill="#1a1a2e"/>
      <circle cx="127" cy="162" r="5" fill="#0a0a18"/>
      <circle cx="122" cy="157" r="4" fill="white"/>
      <circle cx="130" cy="166" r="2" fill="white" opacity="0.55"/>
      {/* Eyebrows */}
      <path d="M 78 145 C 88 139 100 140 108 146" stroke="#C4A882" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M 112 146 C 120 140 132 139 142 145" stroke="#C4A882" strokeWidth="2.5" fill="none" strokeLinecap="round"/>

      {/* ── ROSY CHEEKS ── */}
      <ellipse cx="72" cy="174" rx="12" ry="8" fill="#F87171" opacity="0.50"/>
      <ellipse cx="148" cy="174" rx="12" ry="8" fill="#F87171" opacity="0.50"/>

      {/* ── SMILE ── */}
      <path d="M 84 180 Q 110 200 136 180" stroke="#C4A882" strokeWidth="3" fill="none" strokeLinecap="round"/>
      {/* Teeth */}
      <path d="M 92 181 Q 110 195 128 181 L 128 188 Q 110 200 92 188 Z" fill="white"/>

      {/* ── MUSHROOM CAP ── */}
      {/* Cap underside rim */}
      <ellipse cx="110" cy="116" rx="78" ry="20" fill="#B91C1C"/>
      {/* Main cap dome */}
      <path d="M 32 116 Q 28 58 110 30 Q 192 58 188 116 Z" fill="#DC2626"/>
      {/* Cap highlight sheen */}
      <path
        d="M 60 78 Q 82 44 110 36 Q 138 44 148 62 Q 120 48 110 46 Q 86 50 60 78 Z"
        fill="#EF4444"
        opacity="0.45"
      />
      {/* White polka dots */}
      <circle cx="110" cy="56" r="13" fill="white"/>
      <circle cx="68" cy="78" r="11" fill="white"/>
      <circle cx="152" cy="78" r="11" fill="white"/>
      <circle cx="83" cy="96" r="7" fill="white"/>
      <circle cx="137" cy="96" r="7" fill="white"/>
      <circle cx="110" cy="100" r="6" fill="white"/>
      {/* Dot shading */}
      <circle cx="110" cy="56" r="13" fill="#DC2626" opacity="0.08"/>
      <circle cx="68" cy="78" r="11" fill="#DC2626" opacity="0.08"/>
      <circle cx="152" cy="78" r="11" fill="#DC2626" opacity="0.08"/>
    </svg>
  )
}
