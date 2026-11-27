import { ArrowUpRight, Bot, CloudCog, FileSearch } from "lucide-react";

const items = [
  { name: "Zenith AI", meta: "AEO platform · Agents", Icon: Bot, tint: "from-[hsl(24_70%_62%)] to-[hsl(14_60%_42%)]" },
  { name: "Promethean Energy", meta: "−80% AWS spend", Icon: CloudCog, tint: "from-[hsl(200_30%_60%)] to-[hsl(210_25%_38%)]" },
  { name: "Fulkrum AI", meta: "RAG financial analyst", Icon: FileSearch, tint: "from-[hsl(36_60%_62%)] to-[hsl(24_45%_40%)]" },
];

export default function FeaturedWork() {
  return (
    <div className="clay rounded-[1.75rem] p-5 sm:p-6">
      <div className="mb-4 flex items-baseline justify-between">
        <h3 className="text-lg font-bold">Featured Work</h3>
        <a href="#experience" className="text-sm font-semibold text-primary hover:underline">
          View all
        </a>
      </div>
      <ul className="space-y-3">
        {items.map(({ name, meta, Icon, tint }) => (
          <li key={name}>
            <a href="#experience" className="group flex items-center gap-4 rounded-2xl p-1.5 transition-colors hover:bg-secondary/60">
              <span
                className={`flex size-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-[inset_0_2px_1px_hsl(0_0%_100%/0.35),0_6px_12px_-6px_hsl(20_40%_20%/0.5)] ${tint}`}
              >
                <Icon size={26} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate font-semibold">{name}</span>
                <span className="block truncate text-sm text-muted-foreground">{meta}</span>
              </span>
              <ArrowUpRight size={18} className="shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
