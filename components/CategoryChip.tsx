type CategoryChipProps = {
  label: string;
};

export function CategoryChip({ label }: CategoryChipProps) {
  return (
    <button className="rounded-full border border-atlas-line/90 bg-white/85 px-4 py-2 text-xs font-bold text-atlas-muted shadow-sm transition hover:-translate-y-0.5 hover:border-atlas-orange/70 hover:bg-white hover:text-atlas-orange hover:shadow-card">
      {label}
    </button>
  );
}
