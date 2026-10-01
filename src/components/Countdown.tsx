import { getTimeLeft, pad } from "../lib/time";

interface CountdownProps {
  now: number; // current time in ms, ticked every second by App
}

interface UnitProps {
  value: number;
  label: string;
}

// One glass card showing a single unit of time
function Unit({ value, label }: UnitProps) {
  return (
    <div className="glass flex flex-col items-center justify-center px-2 py-6 sm:py-10">
      <span className="text-5xl font-black tabular-nums tracking-tight sm:text-7xl">
        {pad(value)}
      </span>
      <span className="mt-2 text-xs font-medium tracking-widest text-white/50 sm:text-sm">
        {label}
      </span>
    </div>
  );
}

export default function Countdown({ now }: CountdownProps) {
  const t = getTimeLeft(now);

  return (
    <section aria-label="Countdown timer" className="w-full">
      <p className="mb-4 text-center text-sm text-white/60 sm:text-base">
        Goal: $1,000 · Time Remaining:{" "}
        <span className="font-semibold text-white">
          {pad(t.days)} Days {pad(t.hours)} Hours {pad(t.minutes)} Minutes {pad(t.seconds)} Seconds
        </span>
      </p>

      {/* Only announce the final state to screen readers; ticking every second would be noisy */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4" role="timer">
        <Unit value={t.days} label="DAYS" />
        <Unit value={t.hours} label="HOURS" />
        <Unit value={t.minutes} label="MINUTES" />
        <Unit value={t.seconds} label="SECONDS" />
      </div>

      {t.finished && (
        <p className="mt-4 text-center font-semibold text-emerald-400" role="status">
          Time's up. The 30 days are over.
        </p>
      )}
    </section>
  );
}
