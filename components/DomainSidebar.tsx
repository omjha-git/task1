import { ArrowUpRight } from "lucide-react";
import { topDomains, trendingDomains } from "@/data/papers";

export function DomainSidebar() {
  return (
    <aside className="space-y-4 lg:sticky lg:top-20">
      <section className="rounded-lg border border-atlas-line bg-white/90 p-4 shadow-sm">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-sm font-black uppercase tracking-[0.12em] text-atlas-ink">Top Domains</h2>
          <ArrowUpRight size={14} className="text-atlas-orange" />
        </div>
        <div className="space-y-1">
          {topDomains.map((domain) => (
            <a key={domain.name} href="#" className="flex items-center justify-between rounded-md px-2 py-2 text-sm transition hover:bg-atlas-soft hover:text-atlas-orange">
              <span className="truncate font-semibold text-atlas-ink">{domain.name}</span>
              <span className="ml-3 text-xs font-bold text-atlas-muted">{domain.count}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="rounded-lg border border-atlas-line bg-white/90 p-4 shadow-sm">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-sm font-black uppercase tracking-[0.12em] text-atlas-ink">Trending Domains</h2>
          <span className="rounded bg-atlas-orange/10 px-2 py-1 text-[11px] font-black text-atlas-orange">7d</span>
        </div>
        <div className="space-y-1">
          {trendingDomains.map((domain) => (
            <a key={domain.name} href="#" className="flex items-center justify-between rounded-md px-2 py-2 text-sm transition hover:bg-atlas-soft hover:text-atlas-orange">
              <span className="truncate font-semibold text-atlas-ink">{domain.name}</span>
              <span className="ml-3 rounded bg-atlas-soft px-2 py-0.5 text-xs font-black text-atlas-orange">{domain.growth}</span>
            </a>
          ))}
        </div>
      </section>
    </aside>
  );
}
