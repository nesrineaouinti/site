import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";
import FeaturedProjects from "@/components/featured-projects";
import ServicesSection from "@/components/services";
import CtaSection from "@/components/cta";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.06),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_60%)]" />
        <div className="grid w-full grid-cols-1 items-center gap-10 px-4 py-10 md:grid-cols-2 md:px-8 md:py-16">
          <div className="order-2 md:order-1">
            <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs font-medium text-black/80 dark:border-white/20 dark:bg-white/10 dark:text-white/80">
              Fullstack Developer
            </span>
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Hi, I’m <span className="bg-gradient-to-r from-black to-black/60 bg-clip-text text-transparent dark:from-white dark:to-white/60">nesrine aouinti</span>
            </h1>
            <p className="mb-6 text-lg text-black/70 dark:text-white/70">
              Hello there! I’m Nesrine, a full-stack developer specializing in building
              scalable, high-performance web applications. I focus on creating robust
              front-end interfaces with clean architecture, reusable components, and a strong
              emphasis on performance, accessibility, and modern UI patterns.
            </p>

            <p className="mb-6 text-lg text-black/70 dark:text-white/70">
              Over the past four years, I’ve worked extensively across the web development
              stack—designing responsive UIs, implementing optimized server-rendered pages,
              integrating RESTful APIs, and improving application reliability and
              maintainability. My experience spans component-driven development with
              React/Next.js, state management, API orchestration, and performance tuning to
              deliver seamless, production-ready user experiences.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/projects"
                className="inline-flex h-11 items-center justify-center rounded-md bg-foreground px-5 text-sm font-medium text-background transition-colors hover:bg-foreground/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center rounded-md border border-black/10 bg-black/5 px-5 text-sm font-medium text-foreground transition-colors hover:bg-black/10 dark:border-white/20 dark:bg-white/10 dark:hover:bg-white/20"
              >
                Contact Me
              </Link>
            </div>
            <div className="mt-4 flex items-center gap-2">
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
                aria-label="Email"
                target="_blank"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-black/10 bg-black/5 text-black/70 transition-colors hover:bg-black/10 dark:border-white/15 dark:bg-white/10 dark:text-white/80 dark:hover:bg-white/20"
              >
                <Mail className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative mx-auto aspect-square w-56 overflow-hidden rounded-2xl ring-1 ring-black/10 dark:ring-white/10 md:w-72">
              <Image
                src="/images/WhatsApp%20Image%202025-02-17%20at%2017.12.50.jpeg"
                alt="Portrait of nesrine aouinti"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 224px, 288px"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Landing sections */}
      <FeaturedProjects />
      <ServicesSection />
      <CtaSection />
    </>
  );
}
