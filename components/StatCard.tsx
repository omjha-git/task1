type StatCardProps = {
  value: string;
  label: string;
};

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="rounded-2xl border border-atlas-line/80 bg-white px-4 py-5 text-center shadow-sm transition hover:-translate-y-0.5 hover:border-atlas-orange/50 hover:shadow-card">
      <div className="text-2xl font-black tracking-tight text-atlas-orange sm:text-3xl">{value}</div>
      <div className="mt-1 text-xs font-black uppercase tracking-[0.14em] text-atlas-muted">{label}</div>
    </div>
  );
}
