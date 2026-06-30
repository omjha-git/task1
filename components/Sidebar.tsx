import { Bot, BookOpen, Brain, Clock3, Code2, Flame, Globe2, Monitor, Star, Trophy, Eye } from "lucide-react";
import { feedItems, taskItems } from "@/data/papers";

const iconMap = {
  flame: Flame,
  clock: Clock3,
  star: Star,
  bot: Bot,
  brain: Brain,
  eye: Eye,
  code: Code2,
  robot: Bot,
  book: BookOpen,
  monitor: Monitor,
  globe: Globe2,
  trophy: Trophy,
};

type SidebarItem = {
  label: string;
  icon: string;
  active?: boolean;
};

function Item({ item }: { item: SidebarItem }) {
  const Icon = iconMap[item.icon as keyof typeof iconMap] ?? Star;
  return (
    <button className={`flex h-10 w-full items-center gap-3 rounded-md px-3 text-left text-[13px] font-bold transition ${item.active ? "bg-[#fff0eb] text-atlas-orange" : "text-atlas-muted hover:bg-atlas-soft hover:text-atlas-ink"}`}>
      <Icon size={15} />
      <span>{item.label}</span>
    </button>
  );
}

export function Sidebar() {
  return (
    <aside className="rounded-lg border border-atlas-line bg-white/88 p-4 shadow-sm lg:sticky lg:top-[74px]">
      <section>
        <h2 className="mb-2 px-1 text-[11px] font-black uppercase tracking-[0.12em] text-atlas-muted">Feed</h2>
        <div className="space-y-1">
          {feedItems.map((item) => <Item key={item.label} item={item} />)}
        </div>
      </section>

      <section className="mt-7">
        <h2 className="mb-2 px-1 text-[11px] font-black uppercase tracking-[0.12em] text-atlas-muted">Tasks</h2>
        <div className="space-y-1">
          {taskItems.map((item) => <Item key={item.label} item={item} />)}
        </div>
      </section>
    </aside>
  );
}
