"use client";

import GlassCard from "../cards/GlassCard";
import { useScrollReveal } from "../animations/useScrollReveal";

export default function Industries() {
  useScrollReveal();

  const list = [
    { icon: "fa-building", label: "BFSI" },
    { icon: "fa-cart-shopping", label: "E-Commerce" },
    { icon: "fa-truck-fast", label: "Logistics" },
    { icon: "fa-hospital", label: "Healthcare" },
    { icon: "fa-user-tie", label: "Professional Services" },
    { icon: "fa-screwdriver-wrench", label: "Manufacturing" },
  ];

  return (
    <section id="industries" className="container py-20">
      <h2 className="section-title">Industries We Serve</h2>
      <p className="section-sub">
        Our AI solutions are tailored for industry-specific workflows, regulations, and performance goals.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 fade-up">
        {list.map((ind) => (
          <GlassCard
            key={ind.label}
            className="flex flex-col items-center justify-center py-6 text-center"
          >
            <i
              className={`fa-solid ${ind.icon} text-xl text-accent-primary`}
            />
            <span className="font-medium mt-2">{ind.label}</span>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
