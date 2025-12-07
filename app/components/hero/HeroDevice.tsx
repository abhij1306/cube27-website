"use client";

import { useEffect, useState } from "react";
import { clsx } from "clsx";

export default function HeroDevice() {
  const [step, setStep] = useState<number>(0);

  useEffect(() => {
    // Enhanced staggered chat reveal
    const timers = [
      setTimeout(() => setStep(1), 500),
      setTimeout(() => setStep(2), 1800),
      setTimeout(() => setStep(3), 2600),
      setTimeout(() => setStep(4), 4000),
      setTimeout(() => setStep(5), 5500),
      setTimeout(() => setStep(6), 7200),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="device shadow-soft">
      <div className="device-screen flex flex-col">

        {/* MESSAGE 1 — BOT */}
        {step >= 1 && (
          <div className="chat-bubble bot animate-slide-in">
            👋 Hi! I'm your AI Operations Assistant. What's your biggest operational bottleneck?
          </div>
        )}

        {/* MESSAGE 2 — USER */}
        {step >= 2 && (
          <div className="chat-bubble user animate-slide-in">
            Customer support tickets are overwhelming our team.
          </div>
        )}

        {/* MESSAGE 3 — TYPING INDICATOR */}
        {step === 3 && (
          <div className="chat-bubble bot flex gap-1 items-center animate-slide-in">
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
        )}

        {/* MESSAGE 4 — BOT ANALYSIS */}
        {step >= 4 && (
          <div className="chat-bubble bot animate-slide-in">
            📊 Analyzing your support data... Found 847 repetitive queries. I can automate 73% with ML classification.
          </div>
        )}

        {/* MESSAGE 5 — USER */}
        {step >= 5 && (
          <div className="chat-bubble user animate-slide-in">
            Show me the ROI projection.
          </div>
        )}

        {/* MESSAGE 6 — BOT WITH PULSE */}
        {step >= 6 && (
          <div
            className={clsx(
              "chat-bubble bot animate-slide-in relative",
              "border border-accent-primary/40 shadow-sm"
            )}
          >
            💰 Projected savings: $127K/year
            <br />⚡ 89% faster resolution time
            <br />📈 Customer satisfaction +34%
            <span className="absolute inset-0 rounded-xl border border-blue-400/50 animate-ping opacity-20" />
          </div>
        )}
      </div>

      {/* FOOTER LABEL */}
      <div className="flex justify-between items-center pt-3 px-1">
        <span className="text-xs text-text-muted">Live AI Simulation</span>

        <span className="flex items-center gap-2 text-xs text-green-500">
          <span className="w-2.5 h-2.5 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.9)] animate-pulse" />
          Active
        </span>
      </div>
    </div>
  );
}
