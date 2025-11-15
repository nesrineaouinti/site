import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-black/10 py-8 text-sm text-black/60 dark:border-white/15 dark:text-white/60">
      <div className="flex w-full flex-col items-center justify-between gap-4 px-4 md:px-8 sm:flex-row">
        <p>© {new Date().getFullYear()} nesrine aouinti</p>
        <div className="flex items-center gap-3">
          <Link
            href="https://github.com/nesrineaouinti"
            aria-label="GitHub"
            target="_blank"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-black/10 bg-black/5 text-black/70 transition-colors hover:bg-black/10 dark:border-white/15 dark:bg-white/10 dark:text-white/80 dark:hover:bg-white/20"
          >
            <Github className="h-4 w-4" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/aouintinesrine/"
            aria-label="LinkedIn"
            target="_blank"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-black/10 bg-black/5 text-black/70 transition-colors hover:bg-black/10 dark:border-white/15 dark:bg-white/10 dark:text-white/80 dark:hover:bg-white/20"
          >
            <Linkedin className="h-4 w-4" />
          </Link>
          <Link
            href="mailto:nesrineaouinti.dev@gmail.com"
            target="_blank"
            aria-label="Email"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-black/10 bg-black/5 text-black/70 transition-colors hover:bg-black/10 dark:border-white/15 dark:bg-white/10 dark:text-white/80 dark:hover:bg-white/20"
          >
            <Mail className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
