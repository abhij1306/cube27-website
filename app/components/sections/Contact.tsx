"use client";

import { useState } from "react";
import { useScrollReveal } from "../animations/useScrollReveal";

export default function Contact() {
  useScrollReveal();

  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  async function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = new FormData(e.currentTarget);

    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: form.get("name"),
        email: form.get("email"),
        message: form.get("message")
      })
    });

    setStatus("success");
    e.currentTarget.reset();
  }

  return (
    <section id="contact" className="container py-20">
      <h2 className="section-title">Let’s Build Your AI Advantage</h2>
      <p className="section-sub">
        Share your goals. We’ll help you identify the fastest path to value.
      </p>

      <div className="contact-grid fade-up">
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-3">
          <p className="text-text-main text-base">
            Our consultants typically respond within 24–48 hours.
          </p>

          <p className="text-sm text-text-muted">
            • AI Strategy
            • Workflow Automation
            • LLM Integration
            • Predictive AI
            • Infrastructure & MLOps
            • Team Enablement
          </p>

          <div className="mt-4 flex flex-col gap-2 text-sm text-text-main">
            <span><i className="fa-solid fa-envelope mr-2"></i>hello@cube27.com</span>
            <span><i className="fa-solid fa-phone mr-2"></i>+1 (415) 000-0000</span>
          </div>
        </div>

        {/* RIGHT SIDE — FORM */}
        <form onSubmit={submitForm} className="flex flex-col gap-4">
          <input
            name="name"
            required
            placeholder="Full Name"
            className="contact-input"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Work Email"
            className="contact-input"
          />
          <textarea
            name="message"
            required
            placeholder="Tell us about your AI goals..."
            rows={5}
            className="contact-input resize-none"
          />

          <button
            type="submit"
            disabled={status === "loading"}
            className="btn-primary rounded-full py-3 flex items-center justify-center gap-3"
          >
            {status === "loading" ? "Sending..." : "Submit"}
            <i className="fa-solid fa-arrow-right"></i>
          </button>

          {status === "success" && (
            <p className="text-green-600 text-sm mt-2">Message sent successfully!</p>
          )}
        </form>
      </div>
    </section>
  );
}
