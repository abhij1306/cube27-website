"use client";

import GlassCard from "../cards/GlassCard";
import { useScrollReveal } from "../animations/useScrollReveal";

export default function Solutions() {
  useScrollReveal();

  const items = [
    {
      icon: "fa-route",
      title: "AI Strategy & Roadmapping",
      desc: "We work with your leadership team to define where AI creates the highest value, then turn that into a prioritized, sequenced roadmap.",
    },
    {
      icon: "fa-robot",
      title: "Intelligent Automation",
      desc: "From support to finance and operations, we deploy AI agents and workflow automations that reduce manual work and error rates.",
    },
    {
      icon: "fa-chart-line",
      title: "Predictive & Prescriptive Analytics",
      desc: "Custom models that forecast demand, churn, and risk—feeding decisions back into your operating rhythm in real time.",
    },
  ];

  return (
    <section id="solutions" className="container py-20">
      <h2 className="section-title">AI Solutions Built for Impact</h2>
      <p className="section-sub">
        We design and deploy high-performance AI systems that deliver measurable business value.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 fade-up">
        {items.map((item) => (
          <GlassCard key={item.title}>
            <div className="flex flex-col gap-4">
              <i
                className={`fa-solid ${item.icon} text-3xl text-accent-primary`}
              />
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-sm text-text-muted">{item.desc}</p>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
