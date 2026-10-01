const RULES: string[] = [
  "Build every day.",
  "Ship instead of overthinking.",
  "Talk to potential customers.",
  "Learn only what helps the goal.",
  "Track progress.",
  "Don't quit before day 30.",
];

export default function Rules() {
  return (
    <section aria-labelledby="rules-title" className="glass p-6 sm:p-8">
      <h2 id="rules-title" className="text-sm font-semibold tracking-widest text-white/50">
        THE RULES
      </h2>
      <ol className="mt-5 divide-y divide-white/10">
        {RULES.map((rule, i) => (
          <li key={rule} className="flex items-baseline gap-4 py-4 text-lg sm:text-xl">
            <span className="w-8 font-mono text-emerald-400">{String(i + 1).padStart(2, "0")}</span>
            <span className="font-medium">{rule}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
