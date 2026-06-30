import { Activity, Database, Radio, Sparkles } from "lucide-react";
import { methodGroups, updates } from "@/data/papers";

export function MetricPanel() {
  return (
    <aside className="space-y-4 lg:sticky lg:top-20">
      <section className="rounded-lg border border-atlas-line bg-white/90 p-4 shadow-sm">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-sm font-black uppercase tracking-[0.12em] text-atlas-ink">Atlas Metrics</h2>
          <Activity size={15} className="text-atlas-orange" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          {[
            ["30K+", "papers"],
            ["6K+", "benchmarks"],
            ["1.2K+", "methods"],
            ["18K+", "updates"],
          ].map(([value, label]) => (
            <div key={label} className="rounded-md border border-atlas-line bg-atlas-soft p-3">
              <div className="text-lg font-black text-atlas-orange">{value}</div>
              <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-atlas-muted">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-lg border border-atlas-line bg-white/90 p-4 shadow-sm">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-sm font-black uppercase tracking-[0.12em] text-atlas-ink">What&apos;s happening</h2>
          <Radio size={15} className="text-atlas-orange" />
        </div>
        <div className="space-y-3">
          {updates.map((item) => (
            <article key={item.text} className="border-b border-atlas-line pb-3 last:border-0 last:pb-0">
              <div className="mb-1 flex items-center justify-between gap-3">
                <span className="text-xs font-black text-atlas-orange">{item.label}</span>
                <span className="text-xs font-bold text-atlas-muted">{item.meta}</span>
              </div>
              <p className="text-sm font-medium leading-5 text-atlas-ink">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-lg border border-atlas-line bg-white/90 p-4 shadow-sm" id="methods">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-sm font-black uppercase tracking-[0.12em] text-atlas-ink">Methods</h2>
          <Sparkles size={15} className="text-atlas-orange" />
        </div>
        <div className="space-y-3">
          {methodGroups.map((group) => (
            <div key={group.label}>
              <div className="mb-2 flex items-center gap-2 text-xs font-black text-atlas-muted">
                <Database size={13} /> {group.label}
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded border border-atlas-line bg-atlas-soft px-2 py-1 text-[11px] font-bold text-atlas-muted">
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
