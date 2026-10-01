import { useEffect, useState } from "react";

const QUOTES: string[] = [
  "Nobody is coming. Build it yourself.",
  "30 days. 1 goal. No excuses.",
  "Small progress every day becomes a completely different life.",
  "Focus on the next action, not the entire mountain.",
  "Your future self is watching what you do today.",
  "Stop planning. Start shipping.",
  "One client can change the month.",
  "Consistency beats motivation.",
  "Build. Ship. Sell. Repeat.",
  "I don't need perfect. I need progress.",
];

const ROTATE_MS = 6000; // change the quote every 6 seconds

export default function Motivation() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % QUOTES.length), ROTATE_MS);
    return () => clearInterval(id); // clean up when the component unmounts
  }, []);

  return (
    <section aria-label="Daily motivation" className="glass px-6 py-10 text-center sm:py-14">
      {/* Changing `key` remounts the element, which replays the fade-in animation */}
      <blockquote key={index} className="fade-in mx-auto max-w-2xl text-2xl font-bold leading-snug sm:text-4xl">
        “{QUOTES[index]}”
      </blockquote>
    </section>
  );
}
