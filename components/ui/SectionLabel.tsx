export function SectionLabel({ label }: { label: string }) {
  return (
    <p className="mb-3 text-center text-[11px] font-medium uppercase tracking-[0.1em] text-text-muted">
      — {label} —
    </p>
  );
}
