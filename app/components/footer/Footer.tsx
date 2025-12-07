"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer bg-bg-card border-t border-border-subtle mt-auto">
      <div className="container py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="font-semibold text-lg mb-1">Cube27</p>
          <p className="text-sm text-text-muted">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        <nav className="flex items-center gap-6 text-sm font-medium text-text-muted">
          <Link href="/privacy-policy" className="hover:text-accent-primary transition-colors">
            Privacy Policy
          </Link>
          <a href="mailto:contact@cube27.com" className="hover:text-accent-primary transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}
