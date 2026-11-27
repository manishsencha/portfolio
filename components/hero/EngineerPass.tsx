import { CalendarDays, Cloud, Sparkles } from "lucide-react";

const stats = [
  { Icon: CalendarDays, value: "3+ Years", label: "Experience" },
  { Icon: Cloud, value: "−80% AWS", label: "Cost cut" },
  { Icon: Sparkles, value: "GenAI", label: "RAG & Agents" },
];

// Deterministic bar widths so server and client render the same barcode.
const bars = [3, 1, 2, 1, 3, 2, 1, 1, 3, 1, 2, 3, 1, 2, 1, 3, 1, 1, 2, 3, 1, 2, 1, 3, 2, 1];

function StubArt() {
  return (
    <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden>
      <circle cx="78" cy="34" r="14" fill="hsl(36 90% 78%)" />
      <path d="M0 92 Q30 70 60 84 T120 78 V120 H0Z" fill="hsl(18 60% 44%)" />
      <path d="M0 104 Q40 88 80 100 T120 96 V120 H0Z" fill="hsl(14 58% 36%)" />
      <g stroke="hsl(20 30% 16%)" strokeLinecap="round" fill="none">
        <path d="M52 98 V60" strokeWidth="3.5" />
        <path d="M52 76 L40 62 M40 62 L36 54 M40 62 L32 63" strokeWidth="2.2" />
        <path d="M52 70 L64 56 M64 56 L70 50 M64 56 L72 58" strokeWidth="2.2" />
        <path d="M52 62 L48 50" strokeWidth="2" />
      </g>
    </svg>
  );
}

export default function EngineerPass() {
  return (
    <div className="relative flex">
      <div className="clay min-w-0 flex-1 rounded-l-[1.75rem] rounded-r-xl p-5 sm:p-7">
        <p className="eyebrow">Engineer Pass</p>
        <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Manish Sencha</h2>
        <p className="mt-1.5 text-muted-foreground sm:text-lg">Full-Stack Engineer · Indore, IN</p>
        <div className="mt-6 grid grid-cols-3 gap-3">
          {stats.map(({ Icon, value, label }) => (
            <div key={label} className="min-w-0">
              <div className="flex items-start gap-1.5 text-primary">
                <Icon size={16} className="mt-px hidden shrink-0 min-[380px]:block" />
                <span className="text-xs font-bold leading-tight text-foreground sm:text-sm">{value}</span>
              </div>
              <p className="mt-0.5 text-[10px] leading-tight text-muted-foreground min-[380px]:text-[11px] sm:text-xs">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Perforation notch between ticket and stub */}
      <div className="pointer-events-none absolute right-[4.5rem] top-1/2 z-10 size-5 -translate-y-1/2 translate-x-1/2 rounded-full bg-background shadow-[inset_0_2px_4px_hsl(24_30%_30%/0.2)] min-[380px]:right-[5.5rem] sm:right-[9rem]" />

      <div className="clay-primary flex w-[4.5rem] shrink-0 flex-col overflow-hidden rounded-l-xl rounded-r-[1.75rem] min-[380px]:w-[5.5rem] sm:w-36">
        <div className="flex-1">
          <StubArt />
        </div>
        <div className="flex h-10 items-end justify-center gap-[2px] overflow-hidden bg-[hsl(14_58%_36%)] px-2.5 pb-3">
          {bars.map((w, i) => (
            <span key={i} className="h-full shrink-0 rounded-[1px] bg-[hsl(20_30%_14%)]" style={{ width: w }} />
          ))}
        </div>
      </div>
    </div>
  );
}
