import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";

export type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  url?: string;
  source?: string;
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>
        <div className="flex gap-2">
          {project.url && (
            <Link
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className={cn(
                "inline-flex h-10 items-center justify-center gap-2 rounded-md bg-foreground px-4 text-sm font-medium text-background transition-colors hover:bg-foreground/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
              )}
            >
              <ExternalLink className="h-4 w-4" /> Live
            </Link>
          )}
          {project.source && (
            <Link
              href={project.source}
              target="_blank"
              rel="noreferrer"
              className={cn(
                "inline-flex h-10 items-center justify-center gap-2 rounded-md border border-black/10 bg-black/5 px-4 text-sm font-medium text-foreground transition-colors hover:bg-black/10 dark:border-white/20 dark:bg-white/10 dark:hover:bg-white/20"
              )}
            >
              <Github className="h-4 w-4" /> Code
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
