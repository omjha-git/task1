import { StatCard } from "@/components/StatCard";

const stats = [
  { value: "30K+", label: "AI Papers" },
  { value: "6K+", label: "Benchmarks" },
  { value: "1.2K+", label: "Methods" },
  { value: "18K+", label: "Research Updates" },
];

export function StatsStrip() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 gap-3 rounded-[1.75rem] border border-atlas-line bg-white/80 p-3 shadow-card backdrop-blur md:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}
