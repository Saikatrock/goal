interface StatsProps {
  daysElapsed: number;
  daysRemaining: number;
  progressPercent: number;
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="glass p-6 text-center">
      <p className="text-4xl font-black tabular-nums sm:text-5xl">{value}</p>
      <p className="mt-2 text-xs font-medium tracking-widest text-white/50">{label}</p>
    </div>
  );
}

export default function Stats({ daysElapsed, daysRemaining, progressPercent }: StatsProps) {
  return (
    <section aria-label="Accountability stats" className="grid gap-3 sm:grid-cols-3 sm:gap-4">
      <Stat value={String(daysElapsed)} label="DAYS ELAPSED" />
      <Stat value={String(daysRemaining)} label="DAYS REMAINING" />
      <Stat value={`${progressPercent}%`} label="GOAL PROGRESS" />
    </section>
  );
}
