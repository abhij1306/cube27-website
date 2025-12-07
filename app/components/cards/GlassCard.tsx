"use client";

import { ReactNode } from "react";
import { clsx } from "clsx";

export default function GlassCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "glass-card p-6 transition-all cursor-default",
        "rounded-glass-lg shadow-soft-light hover:shadow-soft",
        className
      )}
    >
      {children}
    </div>
  );
}
