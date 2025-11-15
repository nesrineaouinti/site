import { ProjectCard, type Project } from "@/components/project-card";

async function getProjects(): Promise<Project[]> {
  try {
    const res = await fetch("http://localhost:4000/projects", { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to fetch");
    const data = await res.json();
    // If json-server is watching an object { projects: [...] }, adapt; otherwise assume array
    return Array.isArray(data) ? data : data.projects ?? [];
  } catch {
    return [];
  }
}

export default async function ProjectsPage() {
  const projects = await getProjects();

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
          No projects found. Make sure the JSON Server is running:
          <pre className="mt-3 rounded-md bg-black/5 p-3 dark:bg-white/10">npm run json:server</pre>
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
