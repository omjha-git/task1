type TagChipProps = {
  label: string;
};

export function TagChip({ label }: TagChipProps) {
  return (
    <span className="inline-flex rounded border border-atlas-line bg-atlas-soft px-2 py-1 text-[11px] font-semibold text-atlas-muted transition group-hover:border-atlas-orange/30 group-hover:text-atlas-ink">
      {label}
    </span>
  );
}
