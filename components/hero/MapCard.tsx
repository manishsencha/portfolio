import { Briefcase, GraduationCap, House, MapPin, Navigation } from "lucide-react";

const pins = [
  { Icon: House, label: "Barwaha", className: "left-[10%] top-[60%]" },
  { Icon: GraduationCap, label: "SGSITS, Indore", className: "left-[18%] top-[14%]" },
  { Icon: Briefcase, label: "Remote", className: "right-[8%] top-[42%]" },
];

function Terrain() {
  return (
    <svg viewBox="0 0 320 240" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden>
      <defs>
        <linearGradient id="terrain" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="hsl(24 62% 72%)" />
          <stop offset="1" stopColor="hsl(18 58% 60%)" />
        </linearGradient>
      </defs>
      <rect width="320" height="240" fill="url(#terrain)" />
      {/* Dry-earth cracks */}
      <g stroke="hsl(16 45% 50% / 0.35)" strokeWidth="1" fill="none">
        <path d="M0 40 L40 52 L70 30 L110 46 L150 20 L190 38 L240 12 L320 30" />
        <path d="M0 120 L30 104 L66 128 L104 110 L140 134 L180 116 L230 140 L270 118 L320 132" />
        <path d="M0 196 L44 184 L80 206 L130 186 L170 210 L220 190 L262 214 L320 200" />
        <path d="M40 52 L30 104 M110 46 L104 110 M190 38 L180 116 M270 118 L262 214 M130 186 L140 134 M66 128 L80 206" />
      </g>
      {/* Routes between pins */}
      <g stroke="hsl(34 60% 96%)" strokeWidth="2.5" strokeDasharray="7 7" strokeLinecap="round" fill="none">
        <path d="M58 162 C 90 150, 120 140, 160 120" />
        <path d="M80 54 C 110 80, 140 100, 160 120" />
        <path d="M160 120 C 200 110, 240 112, 276 112" />
        <path d="M160 120 C 175 160, 200 200, 220 240" />
      </g>
    </svg>
  );
}

export default function MapCard() {
  return (
    <div className="clay rounded-[1.75rem] p-4 sm:p-5">
      <div className="mb-4 flex items-center justify-between px-1">
        <div>
          <h3 className="font-bold">Madhya Pradesh, India</h3>
          <p className="text-xs text-muted-foreground">Open to remote roles worldwide</p>
        </div>
        <MapPin size={18} className="text-primary" />
      </div>

      <div className="relative h-60 overflow-hidden rounded-[1.25rem] shadow-[inset_0_2px_6px_hsl(16_50%_30%/0.25)]">
        <Terrain />
        {pins.map(({ Icon, label, className }) => (
          <div key={label} className={`group absolute ${className}`}>
            <span className="clay-sm flex size-11 items-center justify-center rounded-full text-primary">
              <Icon size={18} />
            </span>
            <span className="absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap rounded-full bg-card/90 px-2 py-0.5 text-[10px] font-semibold opacity-0 transition-opacity group-hover:opacity-100">
              {label}
            </span>
          </div>
        ))}
        {/* Center marker */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full">
          <svg width="34" height="44" viewBox="0 0 34 44" aria-hidden className="drop-shadow-md">
            <path d="M17 43 C 17 43, 2 26, 2 16 A 15 15 0 0 1 32 16 C 32 26, 17 43, 17 43Z" fill="hsl(14 62% 44%)" />
            <circle cx="17" cy="16" r="6" fill="hsl(34 60% 97%)" />
          </svg>
        </div>

        <a
          href="#contact"
          className="clay-ink clay-press absolute bottom-3 right-3 flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold"
        >
          Say hello <Navigation size={15} />
        </a>
      </div>
    </div>
  );
}
