/* "Ignis" — friendly cartoon dragon mascot, original character */
export default function HeroDragon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 320 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* ── WINGS (behind body) ── */}
      {/* Left wing */}
      <path
        d="M 105 255 C 55 190 10 120 32 52 C 44 18 80 8 96 38 C 108 60 100 108 100 158 C 100 195 104 228 106 252 Z"
        fill="#D97706"
      />
      <path
        d="M 106 252 C 60 220 42 178 48 140 C 54 108 72 94 84 114 C 92 130 96 162 100 195 C 102 218 104 238 106 252 Z"
        fill="#F59E0B"
        opacity="0.55"
      />
      {/* Wing veins left */}
      <path d="M 106 250 C 66 216 50 172 56 134" stroke="#B45309" strokeWidth="1.2" fill="none"/>
      <path d="M 106 250 C 78 228 68 200 72 168" stroke="#B45309" strokeWidth="1.2" fill="none"/>

      {/* Right wing */}
      <path
        d="M 215 255 C 265 190 310 120 288 52 C 276 18 240 8 224 38 C 212 60 220 108 220 158 C 220 195 216 228 214 252 Z"
        fill="#D97706"
      />
      <path
        d="M 214 252 C 260 220 278 178 272 140 C 266 108 248 94 236 114 C 228 130 224 162 220 195 C 218 218 216 238 214 252 Z"
        fill="#F59E0B"
        opacity="0.55"
      />
      {/* Wing veins right */}
      <path d="M 214 250 C 254 216 270 172 264 134" stroke="#B45309" strokeWidth="1.2" fill="none"/>
      <path d="M 214 250 C 242 228 252 200 248 168" stroke="#B45309" strokeWidth="1.2" fill="none"/>

      {/* ── TAIL ── */}
      <path
        d="M 168 410 C 192 428 236 440 256 426 C 274 414 276 396 260 386 C 246 378 228 386 214 380 C 204 376 196 364 180 358 Z"
        fill="#D97706"
      />
      {/* Flame at tail tip */}
      <path
        d="M 260 386 C 278 374 292 356 280 340 C 272 330 260 336 260 348 C 263 334 272 318 260 310 C 252 304 244 312 246 324 C 248 311 255 296 244 290 C 236 285 228 294 232 307 C 226 296 228 282 218 280 C 210 278 206 289 210 302 Z"
        fill="#FBBF24"
      />
      <path
        d="M 260 386 C 270 372 276 357 268 343 C 262 333 254 340 255 352 C 257 340 263 326 254 320 C 248 315 242 323 244 334 Z"
        fill="#FDE68A"
        opacity="0.85"
      />

      {/* ── BODY ── */}
      <ellipse cx="160" cy="308" rx="88" ry="96" fill="#F59E0B"/>

      {/* ── BELLY ── */}
      <ellipse cx="163" cy="316" rx="56" ry="70" fill="#FEF3C7"/>
      {/* Belly horizontal scale lines */}
      <path d="M 127 282 C 145 277 163 276 181 282" stroke="#FCD34D" strokeWidth="1.5" fill="none"/>
      <path d="M 122 302 C 142 296 163 295 184 302" stroke="#FCD34D" strokeWidth="1.5" fill="none"/>
      <path d="M 120 322 C 142 315 163 314 186 322" stroke="#FCD34D" strokeWidth="1.5" fill="none"/>
      <path d="M 122 342 C 143 335 163 334 184 342" stroke="#FCD34D" strokeWidth="1.5" fill="none"/>
      <path d="M 126 362 C 145 355 163 354 181 362" stroke="#FCD34D" strokeWidth="1.5" fill="none"/>

      {/* ── NECK ── */}
      <path
        d="M 132 232 C 126 252 128 278 132 295 C 152 288 170 288 190 295 C 194 278 196 252 190 232 C 178 220 144 220 132 232 Z"
        fill="#F59E0B"
      />

      {/* ── HEAD ── */}
      <ellipse cx="161" cy="178" rx="64" ry="60" fill="#F59E0B"/>
      {/* Forehead highlight */}
      <ellipse cx="148" cy="160" rx="30" ry="20" fill="#FCD34D" opacity="0.30"/>

      {/* ── HORNS ── */}
      <path d="M 118 136 C 104 112 108 86 120 76 C 130 68 138 80 132 106 Z" fill="#B45309"/>
      <path d="M 120 135 C 108 113 110 92 120 80" stroke="#D97706" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M 198 132 C 212 108 208 82 196 74 C 186 66 178 78 184 104 Z" fill="#B45309"/>
      <path d="M 196 130 C 208 110 206 88 196 76" stroke="#D97706" strokeWidth="2" fill="none" strokeLinecap="round"/>

      {/* ── EYES ── */}
      {/* Left */}
      <ellipse cx="132" cy="175" rx="19" ry="21" fill="white"/>
      <circle cx="135" cy="177" r="13" fill="#1a2e42"/>
      <circle cx="135" cy="177" r="7" fill="#080e18"/>
      <circle cx="128" cy="170" r="5.5" fill="white"/>
      <circle cx="139" cy="182" r="2.5" fill="white" opacity="0.5"/>
      <path d="M 116 159 C 127 152 142 153 150 160" stroke="#D97706" strokeWidth="3" fill="none" strokeLinecap="round"/>
      {/* Right */}
      <ellipse cx="188" cy="173" rx="19" ry="21" fill="white"/>
      <circle cx="191" cy="175" r="13" fill="#1a2e42"/>
      <circle cx="191" cy="175" r="7" fill="#080e18"/>
      <circle cx="184" cy="168" r="5.5" fill="white"/>
      <circle cx="195" cy="180" r="2.5" fill="white" opacity="0.5"/>
      <path d="M 174 157 C 184 150 200 151 208 158" stroke="#D97706" strokeWidth="3" fill="none" strokeLinecap="round"/>

      {/* ── NOSE ── */}
      <ellipse cx="152" cy="203" rx="6" ry="5" fill="#D97706" transform="rotate(-12 152 203)"/>
      <ellipse cx="170" cy="201" rx="6" ry="5" fill="#D97706" transform="rotate(12 170 201)"/>

      {/* ── MOUTH / SMILE ── */}
      <path d="M 130 215 C 148 232 178 232 192 215" stroke="#B45309" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
      {/* Teeth */}
      <path d="M 141 217 L 137 229 L 148 229 Z" fill="white"/>
      <path d="M 157 220 L 153 230 L 164 230 Z" fill="white"/>
      <path d="M 173 217 L 169 229 L 180 229 Z" fill="white"/>

      {/* ── LEFT ARM ── */}
      <path
        d="M 80 285 C 50 270 32 278 28 298 C 24 318 40 334 62 328 C 78 324 84 304 80 285 Z"
        fill="#F59E0B"
      />
      {/* Left claws */}
      <path d="M 28 298 C 13 290 7 274 19 268 C 26 264 30 274 28 286 Z" fill="#D97706"/>
      <path d="M 28 308 C 11 305 8 290 18 286 C 24 284 28 294 28 308 Z" fill="#D97706"/>
      <path d="M 31 320 C 15 321 12 306 22 302 C 28 300 31 310 31 320 Z" fill="#D97706"/>

      {/* ── RIGHT ARM ── */}
      <path
        d="M 238 282 C 265 268 280 272 284 292 C 288 312 274 330 254 326 C 238 322 232 300 238 282 Z"
        fill="#F59E0B"
      />
      {/* Right claws (behind card) */}
      <path d="M 284 295 C 297 288 302 272 290 266 C 283 262 278 272 280 284 Z" fill="#D97706"/>
      <path d="M 283 306 C 298 303 300 287 288 284 C 282 282 280 292 283 306 Z" fill="#D97706"/>

      {/* ── TRADING CARD (right hand) ── */}
      <rect x="268" y="258" width="48" height="68" rx="5" fill="white" stroke="#E2E8F0" strokeWidth="2"/>
      <rect x="274" y="264" width="36" height="30" rx="3" fill="#0033A0"/>
      {/* Star on card face */}
      <polygon
        points="292,268 295,276 304,276 297,281 300,289 292,284 284,289 287,281 280,276 289,276"
        fill="#FCD34D"
      />
      <rect x="274" y="298" width="36" height="5" rx="2" fill="#0033A0" opacity="0.25"/>
      <line x1="274" y1="308" x2="312" y2="308" stroke="#CBD5E1" strokeWidth="2"/>
      <line x1="274" y1="315" x2="308" y2="315" stroke="#CBD5E1" strokeWidth="2"/>
      <line x1="274" y1="322" x2="310" y2="322" stroke="#CBD5E1" strokeWidth="2"/>

      {/* ── LEGS / FEET ── */}
      {/* Left */}
      <ellipse cx="122" cy="398" rx="28" ry="14" fill="#F59E0B"/>
      <path
        d="M 115 400 C 108 422 100 440 90 447 C 80 454 68 452 72 440 C 76 430 96 424 106 412 Z"
        fill="#D97706"
      />
      <ellipse cx="86" cy="447" rx="26" ry="12" fill="#D97706"/>
      <path d="M 66 443 C 53 440 48 430 58 426 C 64 424 68 432 68 443 Z" fill="#B45309"/>
      <path d="M 80 450 C 67 452 63 442 72 438 C 78 436 80 444 80 450 Z" fill="#B45309"/>
      <path d="M 96 452 C 84 455 80 446 88 442 C 93 440 96 447 96 452 Z" fill="#B45309"/>

      {/* Right */}
      <ellipse cx="198" cy="396" rx="28" ry="14" fill="#F59E0B"/>
      <path
        d="M 205 398 C 212 420 220 438 230 445 C 240 452 252 450 248 438 C 244 428 224 422 214 410 Z"
        fill="#D97706"
      />
      <ellipse cx="234" cy="445" rx="26" ry="12" fill="#D97706"/>
      <path d="M 254 441 C 267 438 272 428 262 424 C 256 422 252 430 252 441 Z" fill="#B45309"/>
      <path d="M 240 448 C 253 450 257 440 248 436 C 242 434 240 442 240 448 Z" fill="#B45309"/>
      <path d="M 224 450 C 236 453 240 444 232 440 C 227 438 224 445 224 450 Z" fill="#B45309"/>
    </svg>
  )
}
