import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "CITE Thesis Management System",
    image: "/cite.png",
    url: "https://cite-tms-frontend.vercel.app/",
    summary:
      "Online library system for CITE research papers, allowing students and the public to search, request, and access approved academic materials.",
  },
  {
    title: "JPCS SiteBuild",
    image: "/jpcs.png",
    url: "https://jpcs-dlsl.vercel.app/",
    summary:
      "The official JPCS De La Salle Lipa website for announcements, events, officer information, and organization updates.",
  },
  {
    title: "ASMS",
    image: "/asms.png",
    url: "https://mediatrix-asms.vercel.app/",
    summary: "Ancillary services management platform for Mary Mediatrix Hospital.",
  },
  {
    title: "AnimoMart",
    image: "/animomart.png",
    url: "https://animomart.vercel.app/",
    summary:
      "A campus buy-and-sell platform for De La Salle Lipa students, featuring product listings, clean item browsing, and a student-friendly buying flow.",
  },
  {
    title: "Pinoy Recipe Finder",
    image: "/recipefinder.png",
    url: "https://pinoy-recipe-finder-ten.vercel.app/",
    summary:
      "A recipe discovery app for browsing Filipino dishes and finding cooking ideas through a simple, searchable interface.",
  },
  {
    title: "Study Spot",
    image: "/studyspot.png",
    url: "https://sample-project-vercel-plum.vercel.app/",
    summary:
      "A student-focused web project for exploring study-friendly spaces with a clean browsing experience.",
  },
];

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
            <article className="project-card" key={project.title}>
              <div className="project-preview">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  width={1913}
                  height={997}
                  sizes="(max-width: 920px) 100vw, 30vw"
                />
              </div>
              <div>
                <h3>{project.title}</h3>
                <span>{project.summary}</span>
              </div>
              <a
                href={project.url ?? "mailto:erna.srocha@gmail.com"}
                target={project.url ? "_blank" : undefined}
                rel={project.url ? "noreferrer" : undefined}
              >
                View Live
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
