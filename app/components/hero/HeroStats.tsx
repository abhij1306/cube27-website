"use client";

export default function HeroStats() {
  const stats = [
    { value: "20–40%", label: "Ops cost reduction" },
    { value: "3–6x", label: "Productivity lift" },
    { value: "90 days", label: "To first deployment" },
  ];

  return (
    <div className="flex flex-wrap gap-3 fade-up">
      {stats.map((s) => (
        <div
          key={s.label}
          className="px-4 py-3 rounded-full glass-card flex flex-col 
          min-w-[130px] shadow-soft-light"
        >
          <span className="font-semibold text-base">{s.value}</span>
          <span className="text-xs text-text-soft">{s.label}</span>
        </div>
      ))}
    </div>
  );
}
