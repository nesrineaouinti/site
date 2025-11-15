import { ProjectCard, type Project } from "@/components/project-card";
import projectsData from "../../../public/projects.json";

export default function ProjectsPage() {
  const projects = (projectsData as { projects?: Project[] }).projects ?? [];

  return (
    <section>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
        <p className="mt-2 text-black/70 dark:text-white/70">
          Selected work showcasing modern fullstack apps.
        </p>
      </div>

      {projects.length === 0 ? (
        <div className="rounded-lg border border-dashed border-black/10 p-6 text-sm text-black/70 dark:border-white/15 dark:text-white/70">
          No projects found. Edit <code>/public/projects.json</code> to add items.
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />)
          )}
        </div>
      )}
    </section>
  );
}
