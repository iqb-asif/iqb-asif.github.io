"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ThemeSwitch } from "@/components/ui/ThemeSwitch";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors duration-300",
        scrolled ? "bg-bg/80 backdrop-blur-md border-b border-border" : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="font-mono text-sm font-medium tracking-tight">
          AI<span className="text-accent-blue">.</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-text-secondary hover:text-text transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/recruiter"
            className="hidden md:inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-text transition-colors"
          >
            Recruiter Mode
            <ArrowUpRight className="size-3.5" />
          </a>
          <ThemeSwitch />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="lg:hidden flex size-9 flex-col items-center justify-center gap-1 rounded-[var(--radius-sm)] border border-border"
          >
            <span className="block h-px w-4 bg-current" />
            <span className="block h-px w-4 bg-current" />
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden container-page pb-6 flex flex-col gap-4 border-t border-border pt-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-sm text-text-secondary hover:text-text transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
