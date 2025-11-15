import Link from "next/link";
import { ProjectCard, type Project } from "@/components/project-card";
import projectsData from "../../public/projects.json";

export default function FeaturedProjects() {
  const all = (projectsData as { projects?: Project[] }).projects ?? [];
  const projects = all.slice(0, 3);

  return (
    <section className="py-12 md:py-16">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Featured Projects</h2>
          <p className="mt-1 text-black/70 dark:text-white/70">A quick look at recent work.</p>
        </div>
        <Link
          href="/projects"
          className="hidden rounded-md border border-black/10 bg-black/5 px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-black/10 dark:border-white/20 dark:bg-white/10 dark:hover:bg-white/20 md:inline-flex"
        >
          See all
        </Link>
      </div>

      {projects.length === 0 ? (
        <div className="rounded-lg border border-dashed border-black/10 p-6 text-sm text-black/70 dark:border-white/15 dark:text-white/70">
          No projects to show yet. Edit <code>/public/projects.json</code> to add items.
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      )}

      <div className="mt-6 md:hidden">
        <Link
          href="/projects"
          className="inline-flex rounded-md border border-black/10 bg-black/5 px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-black/10 dark:border-white/20 dark:bg-white/10 dark:hover:bg-white/20"
        >
          See all projects
        </Link>
      </div>
    </section>
  );
}
