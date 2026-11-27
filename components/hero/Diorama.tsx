/**
 * Isometric clay slab: dunes, dead trees, a wooden name sign and a laptop.
 * Pure SVG so it stays crisp and costs no image download.
 */

const TOP = "300,30 580,170 300,310 20,170";
const LEFT = "20,170 300,310 300,354 20,214";
const RIGHT = "300,310 580,170 580,214 300,354";

function Tree({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} stroke="hsl(20 30% 18%)" strokeLinecap="round" fill="none">
      <ellipse cx="6" cy="2" rx="16" ry="5" fill="hsl(16 50% 40% / 0.35)" stroke="none" />
      <path d="M0 0 C -2 -20, 3 -34, 0 -52" strokeWidth="5" />
      <path d="M0 -26 C -10 -32, -16 -40, -22 -54 M-14 -38 L-24 -40" strokeWidth="3" />
      <path d="M1 -34 C 10 -40, 16 -48, 20 -62 M14 -46 L24 -48" strokeWidth="3" />
      <path d="M0 -52 L -4 -64 M0 -52 L 6 -66" strokeWidth="2.4" />
    </g>
  );
}

function Rock({ x, y, r = 10 }: { x: number; y: number; r?: number }) {
  return (
    <g>
      <ellipse cx={x + 2} cy={y + r * 0.4} rx={r * 1.1} ry={r * 0.4} fill="hsl(16 50% 38% / 0.35)" />
      <ellipse cx={x} cy={y} rx={r} ry={r * 0.7} fill="hsl(20 12% 46%)" />
      <ellipse cx={x - r * 0.3} cy={y - r * 0.25} rx={r * 0.5} ry={r * 0.3} fill="hsl(20 12% 60%)" />
    </g>
  );
}

function Shrub({ x, y }: { x: number; y: number }) {
  return (
    <path
      d={`M${x} ${y} l-5 -8 M${x} ${y} l0 -10 M${x} ${y} l5 -8 M${x} ${y} l-8 -4 M${x} ${y} l8 -4`}
      stroke="hsl(60 20% 38%)"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  );
}

function Laptop() {
  return (
    <g>
      <ellipse cx="364" cy="232" rx="58" ry="16" fill="hsl(16 50% 36% / 0.35)" />
      {/* base */}
      <polygon points="310,210 360,235 360,241 310,216" fill="hsl(20 6% 26%)" />
      <polygon points="360,235 410,210 410,216 360,241" fill="hsl(20 6% 18%)" />
      <polygon points="360,235 410,210 360,185 310,210" fill="hsl(30 10% 78%)" />
      <polygon points="352,224 390,205 362,191 324,210" fill="hsl(30 8% 66%)" />
      {/* screen */}
      <polygon points="310,210 360,185 360,125 310,150" fill="hsl(20 6% 16%)" />
      <polygon points="315,203 355,183 355,132 315,152" fill="hsl(20 8% 22%)" />
      <g strokeWidth="3" strokeLinecap="round">
        <path d="M320 164 l14 -7" stroke="hsl(32 95% 60%)" />
        <path d="M338 155 l10 -5" stroke="hsl(34 40% 88%)" />
        <path d="M324 172 l22 -11" stroke="hsl(34 40% 88%)" />
        <path d="M324 180 l10 -5" stroke="hsl(18 70% 58%)" />
        <path d="M338 173 l12 -6" stroke="hsl(34 40% 88%)" />
        <path d="M320 190 l18 -9" stroke="hsl(32 95% 60%)" />
      </g>
    </g>
  );
}

function Sign() {
  return (
    <g>
      <path d="M92 266 V196 M178 309 V238" stroke="hsl(25 35% 22%)" strokeWidth="7" strokeLinecap="round" />
      <polygon points="78,188 192,245 192,287 78,230" fill="hsl(25 35% 30%)" stroke="hsl(25 35% 20%)" strokeWidth="3" strokeLinejoin="round" />
      <g transform="matrix(1 0.5 0 1 0 0)" fill="hsl(34 50% 90%)" fontFamily="var(--font-display)">
        <text x="88" y="164" fontSize="13" fontWeight="800" textLength="94" lengthAdjust="spacingAndGlyphs">
          MANISH SENCHA
        </text>
        <text x="88" y="180" fontSize="7.5" fontWeight="700" textLength="94" lengthAdjust="spacingAndGlyphs" opacity="0.8">
          FULL-STACK ENGINEER
        </text>
      </g>
    </g>
  );
}

export default function Diorama() {
  return (
    <svg viewBox="0 0 600 400" className="h-auto w-full" role="img" aria-label="Clay desert diorama with a laptop and a sign reading Manish Sencha">
      <defs>
        <linearGradient id="slab-top" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="hsl(24 68% 66%)" />
          <stop offset="1" stopColor="hsl(18 60% 54%)" />
        </linearGradient>
        <linearGradient id="dune" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="hsl(26 78% 70%)" />
          <stop offset="1" stopColor="hsl(20 66% 60%)" />
        </linearGradient>
        <clipPath id="slab-clip">
          <polygon points={TOP} />
        </clipPath>
      </defs>

      <ellipse cx="300" cy="372" rx="270" ry="24" fill="hsl(24 40% 30% / 0.18)" />

      <g strokeLinejoin="round" strokeWidth="36">
        <polygon points={RIGHT} fill="hsl(14 54% 34%)" stroke="hsl(14 54% 34%)" />
        <polygon points={LEFT} fill="hsl(16 54% 42%)" stroke="hsl(16 54% 42%)" />
        <polygon points={TOP} fill="url(#slab-top)" stroke="url(#slab-top)" />
      </g>

      <g clipPath="url(#slab-clip)">
        {/* back dunes */}
        <path d="M80 160 C 160 110, 230 40, 300 34 C 370 50, 440 110, 500 148 C 420 160, 340 168, 260 172 C 180 176, 120 172, 80 160Z" fill="url(#dune)" />
        <path d="M300 34 C 370 50, 440 110, 500 148 C 430 154, 370 160, 300 164 C 292 120, 296 76, 300 34Z" fill="hsl(18 58% 52%)" />
        <path d="M300 34 C 288 90, 250 135, 210 172" stroke="hsl(30 85% 78%)" strokeWidth="3" fill="none" />
        {/* tyre tracks */}
        <g stroke="hsl(18 50% 46%)" strokeWidth="2" strokeDasharray="3 5" fill="none">
          <path d="M270 312 C 230 280, 330 250, 300 210" />
          <path d="M284 316 C 244 284, 344 254, 314 214" />
        </g>
      </g>

      <Tree x={160} y={176} s={1.1} />
      <Tree x={470} y={186} s={0.8} />
      <Tree x={250} y={250} s={0.7} />
      <Rock x={440} y={250} r={14} />
      <Rock x={470} y={242} r={8} />
      <Rock x={220} y={200} r={9} />
      <Rock x={300} y={282} r={7} />
      <Shrub x={410} y={276} />
      <Shrub x={260} y={176} />
      <Shrub x={520} y={196} />
      <Laptop />
      <Sign />
    </svg>
  );
}
