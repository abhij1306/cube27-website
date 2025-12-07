"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { clsx } from "clsx";
import CubeLogo from "../logo/CubeLogo";

export default function NavBar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Avoid hydration mismatch
  const isDark = mounted && theme === "dark";

  return (
    <nav className="navbar container flex items-center justify-between">
      {/* LEFT: Logo */}
      <Link href="/" className="flex items-center gap-2 font-bold text-xl">
        <CubeLogo />
        <span>Cube<span className="text-accent-primary">27</span></span>
      </Link>

      {/* RIGHT: Desktop links */}
      <div
        className={clsx(
          "hidden md:flex items-center gap-8 transition-all",
          open && "opacity-100"
        )}
      >
        <NavLink href="#solutions">Solutions</NavLink>
        <NavLink href="#framework">Framework</NavLink>
        <NavLink href="#industries">Industries</NavLink>

        <Link
          href="#contact"
          className="px-5 py-2 rounded-full border border-gray-300 dark:border-white/20 
          bg-white dark:bg-transparent text-text-main dark:text-white
          shadow-sm hover:shadow-md transition-all"
        >
          Let’s Talk
        </Link>

        {/* THEME TOGGLE */}
        <button
          aria-label="Toggle Theme"
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className="theme-toggle w-10 h-10 rounded-full border flex items-center justify-center
          bg-white/70 dark:bg-black/40 backdrop-blur-md border-gray-300 dark:border-white/20
          hover:scale-110 transition-all"
        >
          {mounted ? (
            isDark ? (
              <i className="fa-solid fa-sun text-yellow-300 text-lg" />
            ) : (
              <i className="fa-solid fa-moon text-gray-800 text-lg" />
            )
          ) : (
            <i className="fa-regular fa-circle text-gray-400" />
          )}
        </button>
      </div>

      {/* MOBILE MENU BUTTON */}
      <button
        className="md:hidden w-10 h-10 rounded-full flex flex-col items-center justify-center gap-1.5 
        bg-white/80 dark:bg-black/40 backdrop-blur-md border border-gray-300 dark:border-white/20"
        onClick={() => setOpen((p) => !p)}
      >
        <span
          className={clsx(
            "block w-5 h-[2px] bg-gray-700 dark:bg-gray-300 transition-all",
            open && "rotate-45 translate-y-[5px]"
          )}
        />
        <span
          className={clsx(
            "block w-5 h-[2px] bg-gray-700 dark:bg-gray-300 transition-all",
            open && "-rotate-45 -translate-y-[5px]"
          )}
        />
      </button>

      {/* MOBILE MENU PANEL */}
      <div
        className={clsx(
          "md:hidden fixed top-[72px] right-4 left-4 rounded-2xl backdrop-blur-xl p-6 flex flex-col gap-6 z-30 shadow-xl",
          isDark
            ? "bg-black/70 border border-white/10"
            : "bg-white/70 border border-black/10",
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-3 pointer-events-none"
        )}
      >
        <NavLinkMobile href="#solutions" onClick={() => setOpen(false)}>
          Solutions
        </NavLinkMobile>
        <NavLinkMobile href="#framework" onClick={() => setOpen(false)}>
          Framework
        </NavLinkMobile>
        <NavLinkMobile href="#industries" onClick={() => setOpen(false)}>
          Industries
        </NavLinkMobile>

        <Link
          href="#contact"
          onClick={() => setOpen(false)}
          className="px-5 py-2 rounded-full border border-gray-300 dark:border-white/20 
          bg-white dark:bg-transparent text-text-main dark:text-white
          shadow-sm hover:shadow-md transition-all text-center"
        >
          Let’s Talk
        </Link>

        {/* MOBILE THEME TOGGLE */}
        <button
          aria-label="Toggle Theme"
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className="theme-toggle w-full py-2 rounded-full border border-gray-300 dark:border-white/20
          bg-white/70 dark:bg-black/40 backdrop-blur-md flex items-center justify-center gap-2"
        >
          {isDark ? (
            <>
              <i className="fa-solid fa-sun text-yellow-300" />
              <span>Light Mode</span>
            </>
          ) : (
            <>
              <i className="fa-solid fa-moon text-gray-800" />
              <span>Dark Mode</span>
            </>
          )}
        </button>
      </div>
    </nav>
  );
}

/* ---------------------------------------------
   Reusable Navigation Link Components
--------------------------------------------- */

function NavLink({
  href,
  children
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="nav-link hover:text-accent-primary transition-colors"
    >
      {children}
    </Link>
  );
}

function NavLinkMobile({
  href,
  children,
  onClick
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-lg font-medium text-text-main dark:text-white"
    >
      {children}
    </Link>
  );
}
