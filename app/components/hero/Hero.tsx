"use client";

import { useEffect } from "react";
import HeroDevice from "./HeroDevice";
import HeroStats from "./HeroStats";
import { useScrollReveal } from "@/app/components/animations/useScrollReveal";

export default function Hero() {
  // Add scroll reveal to elements with fade-up
  useScrollReveal();

  return (
    <header id="top" className="container py-16">
      <div className="hero-grid fade-up">
        {/* LEFT SIDE — TEXT BLOCK */}
        <div className="flex flex-col gap-6 fade-up">
          <p className="text-xs tracking-wider uppercase text-text-soft">
            AI Consulting · Strategy · Deployment
          </p>

          <h1 className="hero-title font-bold fade-up">
            The Future of Your Business
            <br /> Is Intelligently Automated.
          </h1>

          <p className="hero-sub fade-up">
            Cube27 partners with leadership teams to design, build, and scale
            AI-native workflows that unlock new revenue, reduce cost, and
            transform customer experience.
          </p>

          {/* CTA BUTTONS */}
          <div className="hero-actions flex flex-wrap gap-4 fade-up">
            <a href="#contact" className="btn-primary rounded-full px-6 py-3">
              Start Your AI Transformation
              <i className="fa-solid fa-arrow-right ml-2" />
            </a>

            <a href="#framework" className="btn-outline rounded-full px-6 py-3">
              Explore Our Framework
            </a>
          </div>

          {/* STATS */}
          <HeroStats />
        </div>

        {/* RIGHT SIDE — DEVICE / CHAT SIMULATION */}
        <div className="fade-up flex justify-end">
          <HeroDevice />
        </div>
      </div>
    </header>
  );
}
