import Link from "next/link";
import { ProjectCard } from "../project-card";
import { projects } from "../project-data";

export default function ProjectsPage() {
  return (
    <main className="site-shell subpage-shell">
      <div className="subpage-heading">
        <Link href="/">Back</Link>
        <h1>Projects</h1>
        <p>More project work can be added here as the portfolio grows.</p>
      </div>

      <section className="panel subpage-panel">
        <div className="project-list all-projects-list">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>
      </section>
    </main>
  );
}
