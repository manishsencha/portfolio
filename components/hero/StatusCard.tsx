"use client";

import { useEffect, useState } from "react";
import { Code2, Layers, Rocket, Sprout, Sun } from "lucide-react";

const timeline = [
  { label: "2022", Icon: Sprout, place: "Coulomb" },
  { label: "2022", Icon: Layers, place: "ZignEx" },
  { label: "2023", Icon: Code2, place: "Tellect" },
  { label: "Now", Icon: Rocket, place: "Zenith" },
];

function formatIST(date: Date) {
  return new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);
}

/** Rendered client-side only, so the server never bakes in a stale time. */
function IstClock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setTime(formatIST(new Date()));
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  return <span className="tabular-nums">{time ?? "--:--"}</span>;
}

export default function StatusCard() {
  return (
    <div className="clay-ink rounded-[1.75rem] p-6 sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <Sun size={52} strokeWidth={1.75} className="shrink-0 text-[hsl(32_95%_60%)]" />
          <div>
            <p className="text-5xl font-bold leading-none">3+ yrs</p>
            <p className="mt-1.5 text-sm text-ink-foreground/70">Shipping to production</p>
          </div>
        </div>
        <div className="text-right text-xs text-ink-foreground/60">
          <p>Indore</p>
          <p className="font-mono text-sm text-ink-foreground">
            <IstClock /> IST
          </p>
        </div>
      </div>

      <div className="mt-7 grid grid-cols-4 gap-2 text-center">
        {timeline.map(({ label, Icon, place }) => (
          <div key={place} className="flex flex-col items-center gap-2">
            <span className="text-xs text-ink-foreground/60">{label}</span>
            <Icon size={26} strokeWidth={1.75} className="text-[hsl(32_95%_60%)]" />
            <span className="text-sm font-semibold">{place}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
