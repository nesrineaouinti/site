import { LayoutDashboard, Server, Sparkles } from "lucide-react";

const services = [
  {
    icon: LayoutDashboard,
    title: "Web Apps",
    desc: "Modern, fast, and accessible apps built with Next.js and TypeScript.",
  },
  {
    icon: Server,
    title: "APIs & Backends",
    desc: "Scalable REST APIs, data modeling, and integrations.",
  },
  {
    icon: Sparkles,
    title: "UI/UX & Systems",
    desc: "Beautiful, consistent interfaces with Tailwind , MUI and component libraries.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-12 md:py-16">
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Services</h2>
        <p className="mt-1 text-black/70 dark:text-white/70">How I can help you build and ship.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div
            key={s.title}
            className="group rounded-xl border border-black/10 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/15 dark:bg-black"
          >
            <s.icon className="mb-3 h-6 w-6 text-black/70 transition-colors group-hover:text-black dark:text-white/70 dark:group-hover:text-white" />
            <h3 className="text-base font-semibold">{s.title}</h3>
            <p className="mt-1 text-sm text-black/70 dark:text-white/70">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
