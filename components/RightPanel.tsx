import { ArrowUpRight, Github, MessageSquareText, Radio, Twitter } from "lucide-react";
import { NewsItem } from "@/components/NewsItem";
import { happenings, methodGroups } from "@/data/papers";

const newsIcons = [Twitter, Github, MessageSquareText];

export function RightPanel() {
  return (
    <aside className="space-y-5 lg:sticky lg:top-24">
      <section className="rounded-[1.75rem] border border-atlas-line bg-white/90 p-5 shadow-card backdrop-blur">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-black text-atlas-ink">What&apos;s happening</h2>
          <Radio size={18} className="text-atlas-orange" />
        </div>
        <div className="space-y-3">
          {happenings.map((item, index) => (
            <NewsItem key={item.text} icon={newsIcons[index] ?? MessageSquareText} {...item} />
          ))}
        </div>
      </section>

      <section className="rounded-[1.75rem] border border-atlas-line bg-white/90 p-5 shadow-card backdrop-blur" id="methods">
        <div className="mb-4 flex items-center justify-between gap-4">
          <h2 className="text-lg font-black text-atlas-ink">Methods library</h2>
          <button className="inline-flex shrink-0 items-center gap-1 text-xs font-black text-atlas-orange transition hover:text-atlas-ink">
            View all <ArrowUpRight size={14} />
          </button>
        </div>
        <div className="space-y-4">
          {methodGroups.map((group) => (
            <div key={group.label}>
              <h3 className="mb-2 text-xs font-black uppercase tracking-[0.16em] text-atlas-muted">{group.label}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full border border-atlas-line bg-atlas-soft px-3 py-1 text-xs font-bold text-atlas-muted">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </aside>
  );
}
