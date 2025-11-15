import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="relative my-12 overflow-hidden rounded-2xl border border-black/10 bg-gradient-to-br from-zinc-100 to-white p-8 dark:border-white/15 dark:from-zinc-900 dark:to-black md:my-16 md:p-10">
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-black/5 blur-2xl dark:bg-white/10" />
      <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-black/5 blur-2xl dark:bg-white/10" />
      <div className="relative">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Let’s build something great together</h2>
        <p className="mt-2 max-w-2xl text-black/70 dark:text-white/70">
          Have an idea in mind or a product to ship? I can help you design and build a delightful experience.
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center rounded-md bg-foreground px-5 text-sm font-medium text-background transition-colors hover:bg-foreground/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
          >
            Get in touch
          </Link>
          <Link
            href="/projects"
            className="inline-flex h-11 items-center justify-center rounded-md border border-black/10 bg-black/5 px-5 text-sm font-medium text-foreground transition-colors hover:bg-black/10 dark:border-white/20 dark:bg-white/10 dark:hover:bg-white/20"
          >
            View work
          </Link>
        </div>
      </div>
    </section>
  );
}
