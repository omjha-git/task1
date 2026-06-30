type TagChipProps = {
  label: string;
  active?: boolean;
};

export function TagChip({ label, active = false }: TagChipProps) {
  return (
    <span className={`inline-flex h-7 items-center rounded-md border px-2.5 text-[11px] font-bold ${active ? "border-[#bfe6c9] bg-[#e9f8ed] text-[#278a44]" : "border-atlas-line bg-atlas-soft text-atlas-ink"}`}>
      {label}
    </span>
  );
}
