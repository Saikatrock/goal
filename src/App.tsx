import { useEffect, useState } from "react";
import Countdown from "./components/Countdown";
import Progress from "./components/Progress";
import Motivation from "./components/Motivation";
import Stats from "./components/Stats";
import Rules from "./components/Rules";
import { getDaysElapsed, getDaysRemaining } from "./lib/time";

const GOAL = 1000;

// ✏️ UPDATE THIS NUMBER as you earn money. Everything else recalculates.
const currentEarnings = 0;

export default function App() {
  // `now` updates every second and is passed down to components that need the time
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const progressPercent = Math.min(100, Math.round((currentEarnings / GOAL) * 100));

  return (
    <main className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-12 sm:gap-8 sm:px-6 sm:py-20">
      {/* HERO */}
      <header className="fade-in text-center">
        <h1 className="bg-gradient-to-b from-white to-white/50 bg-clip-text text-7xl font-black tracking-tighter text-transparent sm:text-9xl">
          $1,000
        </h1>
        <p className="mt-3 text-xl font-bold tracking-[0.2em] sm:text-2xl">30 DAYS. ONE GOAL.</p>
        <p className="mx-auto mt-5 max-w-xl text-base text-white/60 sm:text-lg">
          30 days from now, I want to look back and know I gave this goal everything I had.
        </p>
      </header>

      <Countdown now={now} />
      <Progress current={currentEarnings} goal={GOAL} />
      <Motivation />
      <Stats
        daysElapsed={getDaysElapsed(now)}
        daysRemaining={getDaysRemaining(now)}
        progressPercent={progressPercent}
      />
      <Rules />

      {/* FINAL STATEMENT */}
      <footer className="px-2 py-12 text-center sm:py-20">
        <p className="text-4xl font-black tracking-tight sm:text-6xl">$1,000 is not the finish line.</p>
        <p className="mx-auto mt-5 max-w-2xl text-xl text-white/70 sm:text-2xl">
          Proof that I can set a goal, execute, and finish.
        </p>
        <p className="mt-10 inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-emerald-400">
          <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
          THE CLOCK IS RUNNING.
        </p>
      </footer>
    </main>
  );
}
