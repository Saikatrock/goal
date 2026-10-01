interface ProgressProps {
  current: number; // dollars earned so far
  goal: number; // dollar goal
}

export default function Progress({ current, goal }: ProgressProps) {
  // Percentage is clamped between 0 and 100 so the bar never overflows
  const percent = Math.min(100, Math.max(0, (current / goal) * 100));
  const rounded = Math.round(percent);

  return (
    <section aria-labelledby="progress-title" className="glass p-6 sm:p-8">
      <div className="flex items-end justify-between gap-4">
        <h2 id="progress-title" className="text-2xl font-bold sm:text-3xl">
          ${current.toLocaleString()} / ${goal.toLocaleString()}
        </h2>
        <span className="text-sm text-white/60">{rounded}% completed</span>
      </div>

      <div
        className="mt-5 h-3 w-full overflow-hidden rounded-full bg-white/10"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={rounded}
        aria-label="Earnings progress"
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-emerald-300 transition-[width] duration-1000 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>
    </section>
  );
}
