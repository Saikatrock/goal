// Shared time logic for the challenge.
// Month is 0-indexed in JS Dates: 9 = October.

export const CHALLENGE_DAYS = 30;
const MS_PER_DAY = 24 * 60 * 60 * 1000;

/** Challenge starts Oct 1, 2026 at 00:00 (viewer's local time). */
export const START_DATE = new Date(2026, 9, 1, 0, 0, 0);

/** Ends exactly 30 days later: Oct 31, 2026 at 00:00. Computed, not hardcoded. */
export const END_DATE = new Date(START_DATE.getTime() + CHALLENGE_DAYS * MS_PER_DAY);

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  finished: boolean;
}

/** Breaks the time remaining until END_DATE into days/hours/minutes/seconds. Never negative. */
export function getTimeLeft(now: number): TimeLeft {
  const diff = Math.max(0, END_DATE.getTime() - now); // clamp at 0
  const totalSeconds = Math.floor(diff / 1000);
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
    finished: diff === 0,
  };
}

/** Whole days that have passed since the start (0 to 30). */
export function getDaysElapsed(now: number): number {
  const elapsed = Math.floor((now - START_DATE.getTime()) / MS_PER_DAY);
  return Math.min(CHALLENGE_DAYS, Math.max(0, elapsed));
}

/** Days left, rounded up so a partial day still counts (0 to 30). */
export function getDaysRemaining(now: number): number {
  const left = Math.ceil((END_DATE.getTime() - now) / MS_PER_DAY);
  return Math.min(CHALLENGE_DAYS, Math.max(0, left));
}

export const pad = (n: number) => String(n).padStart(2, "0");
