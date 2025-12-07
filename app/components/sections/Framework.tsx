"use client";

import GlassCard from "../cards/GlassCard";
import { useScrollReveal } from "../animations/useScrollReveal";

export default function Framework() {
  useScrollReveal();

  const steps = [
    {
      num: "01",
      title: "Discover",
      desc: "Map value pools, data assets, and friction points across your business to identify where AI can create the most impact.",
    },
    {
      num: "02",
      title: "Design",
      desc: "Architect solutions, workflows, and guardrails with a clear ROI hypothesis and measurable success metrics.",
    },
    {
      num: "03",
      title: "Deploy",
      desc: "Rapid pilots, iterative experimentation, and production-grade deployment into your cloud, data, and app ecosystem.",
    },
    {
      num: "04",
      title: "Scale & Govern",
      desc: "Scale proven use cases with model monitoring, compliance, and human-in-the-loop controls baked in.",
    },
  ];

  return (
    <section id="framework" className="container py-20">
      <h2 className="section-title fade-up">Business Transformation Framework</h2>
      <p className="section-sub fade-up">
        A four-pillar operating model to take you from AI curiosity to AI-native execution.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step) => (
          <GlassCard key={step.num}>
            <div className="flex flex-col gap-3">
              <div className="flex items-baseline gap-3">
                <span className="text-5xl font-bold text-accent-primary/20">
                  {step.num}
                </span>
                <h3 className="font-semibold text-lg">{step.title}</h3>
              </div>
              <p className="text-sm text-text-muted leading-relaxed">{step.desc}</p>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
