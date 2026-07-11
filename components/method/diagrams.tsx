/**
 * Hand-drawn scientific line-art, matching the ÆTERNA method house style:
 * thin single-weight strokes, olive/brown ink, generous negative space, and
 * — like aeternamethod.com — continuous subtle motion (flowing dashes,
 * traveling/pulsing nodes, breathing, shimmer). All animation is CSS and
 * respects prefers-reduced-motion (see globals.css .dia-* classes).
 * Decorative only, aria-hidden.
 */

const S = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1,
  vectorEffect: "non-scaling-stroke" as const,
}

export function ReceptorDiagram({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 420 320" aria-hidden="true" className={className}>
      {/* ligand cluster (breathing) */}
      <g {...S} className="dia-breathe">
        <circle cx="205" cy="34" r="6" fill="currentColor" stroke="none" />
        <circle cx="223" cy="46" r="6" fill="currentColor" stroke="none" />
        <circle cx="196" cy="52" r="6" fill="currentColor" stroke="none" />
        <line x1="205" y1="34" x2="223" y2="46" />
        <line x1="205" y1="34" x2="196" y2="52" />
        <line x1="223" y1="46" x2="196" y2="52" />
      </g>
      {/* descent arrow (flowing) */}
      <line {...S} className="dia-flow" x1="210" y1="70" x2="210" y2="128" />
      <path {...S} d="M204 122 L210 132 L216 122" />
      {/* receptor pocket */}
      <path
        {...S}
        d="M170 150 Q170 138 182 138 L198 138 L205 148 L212 138 L228 138 Q240 138 240 150 L240 210 Q240 222 228 222 L182 222 Q170 222 170 210 Z"
      />
      {/* membrane dots left/right */}
      <g {...S}>
        {[0, 1, 2, 3, 4].map((i) => (
          <circle key={`l${i}`} cx={40 + i * 26} cy="180" r="5" />
        ))}
        {[0, 1, 2, 3, 4].map((i) => (
          <circle key={`r${i}`} cx={272 + i * 26} cy="180" r="5" />
        ))}
        {[0, 1, 2, 3, 4].map((i) => (
          <line key={`ll${i}`} x1={40 + i * 26} y1="185" x2={40 + i * 26} y2="205" />
        ))}
        {[0, 1, 2, 3, 4].map((i) => (
          <line key={`rl${i}`} x1={272 + i * 26} y1="185" x2={272 + i * 26} y2="205" />
        ))}
      </g>
      {/* downstream signal (flowing) */}
      <line {...S} className="dia-flow" x1="205" y1="222" x2="205" y2="266" />
      <path {...S} className="dia-flow" d="M205 266 Q250 300 320 288" />
      <circle {...S} cx="332" cy="286" r="9" />
      <circle className="dia-pulse" cx="332" cy="286" r="3" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function AmpkPathway({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 200" aria-hidden="true" className={className}>
      <rect {...S} x="30" y="40" width="240" height="110" rx="55" />
      {/* the AMPK signal line — energy flows through it */}
      <polyline {...S} className="dia-flow" points="60,120 100,70 140,120 180,70 220,120" />
      <circle className="dia-pulse" cx="60" cy="120" r="4" fill="currentColor" stroke="none" />
      <path {...S} className="dia-flow-slow" d="M70 165 Q150 145 250 168" />
    </svg>
  )
}

export function Neurogenesis({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 200" aria-hidden="true" className={className}>
      <path {...S} className="dia-flow" d="M40 60 Q90 40 120 80" />
      <circle {...S} className="dia-breathe" cx="130" cy="90" r="34" />
      <circle {...S} cx="120" cy="82" r="4" />
      <circle {...S} cx="140" cy="96" r="4" />
      {[0, 1, 2, 3].map((i) => (
        <circle
          key={i}
          className="dia-pulse"
          style={{ animationDelay: `${i * -0.5}s` }}
          cx={128 + i * 12}
          cy={130 + i * 8}
          r="4"
          fill="currentColor"
          stroke="none"
        />
      ))}
      <path {...S} className="dia-flow" d="M175 170 Q210 140 250 70" />
      {[0, 1, 2].map((i) => (
        <rect key={i} {...S} x={185 + i * 22} y={150 - i * 24} width="9" height="9" />
      ))}
    </svg>
  )
}

export function Angiogenesis({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 200" aria-hidden="true" className={className}>
      <ellipse {...S} cx="150" cy="90" rx="120" ry="42" />
      {[0, 1, 2, 3, 4].map((i) => (
        <path
          key={i}
          {...S}
          className="dia-flow-slow"
          style={{ animationDelay: `${i * -0.7}s` }}
          d={`M40 ${74 + i * 8} Q150 ${64 + i * 8} 260 ${74 + i * 8}`}
        />
      ))}
      <ellipse {...S} className="dia-breathe" cx="150" cy="90" rx="14" ry="40" />
      <line {...S} className="dia-flow" x1="150" y1="140" x2="150" y2="175" />
      <path {...S} d="M144 168 L150 178 L156 168" />
    </svg>
  )
}

export function CollagenHelix({ className = "" }: { className?: string }) {
  const wave = (phase: number) => {
    let d = "M40 100"
    for (let x = 40; x <= 260; x += 4) {
      const y = 100 + 30 * Math.sin((x - 40) / 14 + phase)
      d += ` L${x} ${y.toFixed(1)}`
    }
    return d
  }
  return (
    <svg viewBox="0 0 300 200" aria-hidden="true" className={className}>
      <path {...S} className="dia-shimmer" d={wave(0)} />
      <path {...S} className="dia-shimmer" style={{ animationDelay: "-2s" }} d={wave(2.1)} />
      <path {...S} className="dia-shimmer" style={{ animationDelay: "-4s" }} d={wave(4.2)} />
    </svg>
  )
}

export function CircadianRhythm({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 200" aria-hidden="true" className={className}>
      {/* translucent day/night panels behind the curve, as on Method */}
      <g fill="currentColor" opacity={0.05}>
        <rect x="40" y="40" width="80" height="130" />
        <rect x="200" y="40" width="80" height="130" />
      </g>
      <line {...S} opacity={0.4} x1="20" y1="100" x2="300" y2="100" />
      {/* circadian curve — flowing */}
      <path
        {...S}
        className="dia-flow-slow"
        d="M30 70 Q90 70 120 110 T210 130 Q250 130 290 70"
      />
      <circle className="dia-pulse" cx="205" cy="128" r="4" fill="currentColor" stroke="none" />
      {/* sun (breathing) */}
      <circle {...S} className="dia-breathe" cx="160" cy="52" r="12" />
      {/* moon (breathing) */}
      <path {...S} className="dia-breathe" d="M70 150 a12 12 0 1 0 10 18 a9 9 0 1 1 -10 -18Z" />
    </svg>
  )
}

export function PulsatileSecretion({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 200" aria-hidden="true" className={className}>
      <line {...S} opacity={0.4} x1="90" y1="160" x2="300" y2="160" />
      {[0, 1, 2, 3].map((i) => (
        <path
          key={i}
          {...S}
          className="dia-draw"
          style={{ animationDelay: `${i * -1}s` }}
          pathLength={1}
          d={`M${110 + i * 50} 160 Q${118 + i * 50} ${70 + i * 4} ${126 + i * 50} 160`}
        />
      ))}
      {/* H-P-G axis (flowing connectors) */}
      <g {...S}>
        <circle className="dia-breathe" cx="45" cy="55" r="13" />
        <circle className="dia-breathe" cx="45" cy="100" r="13" />
        <circle className="dia-breathe" cx="45" cy="145" r="13" />
        <line className="dia-flow" x1="45" y1="68" x2="45" y2="87" />
        <line className="dia-flow" x1="45" y1="113" x2="45" y2="132" />
      </g>
      <text x="45" y="59" textAnchor="middle" fontSize="11" fill="currentColor" fontFamily="serif">H</text>
      <text x="45" y="104" textAnchor="middle" fontSize="11" fill="currentColor" fontFamily="serif">P</text>
      <text x="45" y="149" textAnchor="middle" fontSize="11" fill="currentColor" fontFamily="serif">G</text>
    </svg>
  )
}
