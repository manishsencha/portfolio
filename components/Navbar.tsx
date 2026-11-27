"use client";

import { useEffect, useState } from "react";
import { BriefcaseBusiness, FolderKanban, MessageCircle, Send, Sparkles, UserRound } from "lucide-react";
import { socials } from "@/lib/site";
import { cn } from "@/lib/utils";

const dockLeft = [
  { label: "About", href: "#about", Icon: UserRound },
  { label: "Skills", href: "#skills", Icon: Sparkles },
];
const dockRight = [
  { label: "Work", href: "#experience", Icon: BriefcaseBusiness },
  { label: "Projects", href: "#projects", Icon: FolderKanban },
];
const sectionIds = ["about", "skills", "experience", "projects", "contact"];

function useActiveSection() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    // Active = last section whose top has crossed the middle of the viewport; none while on the hero.
    const update = () => {
      const mid = window.innerHeight / 2;
      const current = sectionIds.filter((id) => {
        const el = document.getElementById(id);
        return el && el.getBoundingClientRect().top <= mid;
      });
      setActive(current.at(-1) ?? null);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return active;
}

/** Left column of clay tiles (desktop only): logo, socials, and a "say hi" tile. */
function SideRail() {
  return (
    <aside className="fixed left-6 top-6 bottom-6 z-40 hidden w-[76px] flex-col items-center justify-between lg:flex">
      <div className="flex flex-col items-center gap-4">
        <a
          href="#top"
          aria-label="Back to top"
          className="clay-primary clay-press flex size-[72px] items-center justify-center rounded-[1.4rem] font-display text-xl font-extrabold tracking-tight"
        >
          MS
        </a>
        <div className="h-2" />
        {socials.map(({ label, short, href, Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            aria-label={label}
            className="clay-sm clay-press group flex size-[72px] flex-col items-center justify-center gap-1.5 rounded-[1.4rem] text-primary"
          >
            <Icon size={22} />
            <span className="text-[11px] font-medium text-foreground/80">{short}</span>
          </a>
        ))}
      </div>
      <a
        href="#contact"
        className="clay-ink clay-press flex size-[72px] flex-col items-center justify-center gap-1.5 rounded-[1.4rem]"
      >
        <MessageCircle size={22} />
        <span className="text-[11px] font-medium">Say hi</span>
      </a>
    </aside>
  );
}

function DockItem({ label, href, Icon, active }: { label: string; href: string; Icon: typeof UserRound; active: boolean }) {
  return (
    <a
      href={href}
      className={cn(
        "flex min-w-0 flex-1 flex-col items-center gap-1 py-1 text-[10px] font-semibold transition-colors min-[380px]:text-[11px] sm:text-xs",
        active ? "text-primary" : "text-muted-foreground hover:text-foreground",
      )}
    >
      <span
        className={cn(
          "flex size-9 items-center justify-center rounded-full transition-all",
          active && "clay-primary",
        )}
      >
        <Icon size={18} />
      </span>
      {label}
    </a>
  );
}

/** Floating bottom dock with a raised round contact button in the middle. */
function Dock() {
  const active = useActiveSection();

  return (
    <nav className="fixed inset-x-0 bottom-4 z-50 flex justify-center px-4 lg:pl-28">
      <div className="clay flex w-full max-w-xl items-center rounded-[2rem] px-1 py-2.5 sm:px-4">
        {dockLeft.map((item) => (
          <DockItem key={item.href} {...item} active={active === item.href.slice(1)} />
        ))}
        <a
          href="#contact"
          aria-label="Contact"
          className="clay-primary clay-press mx-0.5 -my-6 flex size-14 shrink-0 items-center justify-center rounded-full ring-[6px] ring-background min-[380px]:size-16 sm:size-[72px]"
        >
          <Send size={24} className={cn("-rotate-12 transition-transform", active === "contact" && "rotate-0")} />
        </a>
        {dockRight.map((item) => (
          <DockItem key={item.href} {...item} active={active === item.href.slice(1)} />
        ))}
      </div>
    </nav>
  );
}

const Navbar = () => (
  <>
    <SideRail />
    <Dock />
  </>
);

export default Navbar;
