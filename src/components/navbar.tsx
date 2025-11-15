"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import * as React from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-black/10 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:border-white/15 dark:supports-[backdrop-filter]:bg-black/40">
      <div className="flex h-16 w-full items-center justify-between px-4 md:px-8">
        <Link href="/" className="text-sm font-semibold tracking-tight">
          nesrine aouinti
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "relative text-sm text-black/70 transition-colors hover:text-black dark:text-white/70 dark:hover:text-white",
                pathname === l.href && "text-black dark:text-white"
              )}
            >
              {l.label}
              {pathname === l.href && (
                <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-black/80 dark:bg-white/80" />
              )}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-black/70 ring-1 ring-transparent transition hover:bg-black/5 hover:text-black focus:outline-none focus:ring-2 focus:ring-foreground/50 dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {/* Mobile panel */}
      {open && (
        <div className="md:hidden">
          <nav className="mx-4 mb-4 grid gap-2 rounded-lg border border-black/10 bg-white/70 p-2 backdrop-blur dark:border-white/15 dark:bg-black/40">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm text-black/80 transition-colors hover:bg-black/5 dark:text-white/80 dark:hover:bg-white/10",
                  pathname === l.href && "bg-black/5 text-black dark:bg-white/10 dark:text-white"
                )}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
