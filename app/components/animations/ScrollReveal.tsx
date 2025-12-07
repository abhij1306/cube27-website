import React from "react";

export default function ScrollReveal({
   children,
   className = "",
}: {
   children: React.ReactNode;
   className?: string;
}) {
   return (
      <div className={`fade-up ${className}`}>
         {children}
      </div>
   );
}
