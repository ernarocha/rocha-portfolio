import Image from "next/image";
import { CertificatePreview } from "./certificate-preview";
import { ScrollReveal } from "./scroll-reveal";
import { ThemeToggle } from "./theme-toggle";

const experiences = [
  {
    role: "Clerical Assistant - Executive Office",
    org: "De La Salle Lipa",
    date: "Jun 2023 - May 2026",
  },
  {
    role: "3rd Year Representative for CS",
    org: "JPCS - DLSL Chapter",
    date: "May 2025 - May 2026",
  },
];

const techStack = [
  {
    group: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    group: "Backend",
    items: ["Python", "Java", "MongoDB"],
  },
  {
    group: "Tools",
    items: ["Git", "GitHub"],
  },
];

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
    summary:
      "Ancillary services management platform for Mary Mediatrix Hospital.",
  },
  {
    title: "AnimoMart",
    image: "/animomart.png",
    url: "https://animomart.vercel.app/",
    summary:
      "A campus buy-and-sell platform for De La Salle Lipa students, featuring product listings, clean item browsing, and a student-friendly buying flow.",
  },
];

export default function Home() {
  return (
    <main className="site-shell">
      <ScrollReveal />
      <ThemeToggle />

      <header className="profile-header reveal-on-scroll">
        <div className="profile-mark">
          <Image
            src="/profile-updated.jpg"
            alt="Ernalene Rocha profile photo"
            width={600}
            height={600}
            priority
          />
        </div>

        <div className="intro-copy">
          <h1>
            Ernalene Rocha
          </h1>
          <p className="profile-location">Lipa City, Batangas, Philippines</p>
          <p className="profile-role">Web Developer | UI/UX | Freelancer</p>
          <div className="header-actions">
            <a href="/Ernalene-Rocha-Resume.pdf" download>
              Download Resume
            </a>
            <a href="/Ernalene-Rocha-Resume.pdf" target="_blank" rel="noreferrer">
              View Resume
            </a>
            <a href="mailto:erna.srocha@gmail.com">Send Email</a>
          </div>
        </div>
      </header>

      <section className="top-grid">
        <div className="portfolio-column">
          <article className="panel about-panel reveal-on-scroll">
            <p className="section-label">About Me</p>
            <p>
              I am a BS Computer Science student at De La Salle Lipa with a strong
              interest in frontend development, product thinking, and systems that
              help people work with less friction. My projects usually begin with
              real needs: making research easier to find, helping student
              organizations communicate better, and turning operational data into
              clearer dashboard experiences.
            </p>
            <p>
              I bring an organized, detail-aware mindset from executive office work
              into software. That means I care about the interface, the workflow
              behind it, and whether people can actually adopt the tool after it
              ships.
            </p>
          </article>

          <article className="panel education-panel tech-panel reveal-on-scroll">
            <div className="tech-heading" id="tech-stack">
              <p className="section-label">Tech Stack</p>
              <a href="/tech-stack">View all</a>
            </div>
            <div className="stack-groups">
              {techStack.map((group) => (
                <div className="stack-group" key={group.group}>
                  <h3>{group.group}</h3>
                  <div className="stack-cloud">
                    {group.items.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="panel certification-panel reveal-on-scroll" id="certifications">
            <div className="certification-copy">
              <p className="section-label">Certifications</p>
              <CertificatePreview />
            </div>
          </article>
        </div>

        <div className="portfolio-column">
          <article className="panel experience-panel reveal-on-scroll">
            <p className="section-label">Experience</p>
            <div className="experience-list">
              {experiences.map((item) => (
                <div className="experience-item" key={`${item.role}-${item.date}`}>
                  <div>
                    <h3>{item.role}</h3>
                    <p>{item.org}</p>
                  </div>
                  <time>{item.date}</time>
                </div>
              ))}
            </div>

            <div className="experience-item education-in-experience">
              <div>
                <h3>BS Computer Science</h3>
                <p>De La Salle Lipa</p>
              </div>
              <time>2023 - 2027</time>
            </div>
          </article>

          <article className="panel top-projects-panel projects-panel reveal-on-scroll" id="projects">
            <div className="projects-heading">
              <p className="section-label">Projects</p>
              <a href="/projects">View all</a>
            </div>
            <div className="project-list">
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
          </article>
        </div>
      </section>

      <section className="panel contact-panel reveal-on-scroll" id="contact">
        <div className="contact-copy">
          <h2>
            Let&apos;s work <span>together.</span>
          </h2>
          <p>
            Open to internships, junior frontend roles, and collaborative projects
            where organized execution and thoughtful interfaces matter.
          </p>
          <div className="follow-block">
            <a href="https://github.com/ernarocha" target="_blank" rel="noreferrer" aria-label="GitHub">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18a2.65 2.65 0 0 0-1.11-1.46c-.91-.62.07-.61.07-.61a2.1 2.1 0 0 1 1.53 1.03 2.13 2.13 0 0 0 2.91.83 2.12 2.12 0 0 1 .63-1.34c-2.22-.25-4.56-1.11-4.56-4.94a3.86 3.86 0 0 1 1.03-2.68 3.59 3.59 0 0 1 .1-2.64s.84-.27 2.75 1.03A9.48 9.48 0 0 1 12 7.01c.85 0 1.7.11 2.5.34 1.91-1.3 2.75-1.03 2.75-1.03.37.86.4 1.83.1 2.64a3.86 3.86 0 0 1 1.03 2.68c0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/ernalene-rocha" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9.5h4v11H3v-11Zm6.25 0h3.83v1.5h.06c.53-.95 1.84-1.96 3.78-1.96 4.04 0 4.78 2.66 4.78 6.12v5.34h-4v-4.73c0-1.13-.02-2.58-1.57-2.58-1.58 0-1.82 1.23-1.82 2.5v4.81h-4V9.5Z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/_nalene" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2Zm0 2A3.76 3.76 0 0 0 4 7.75v8.5A3.76 3.76 0 0 0 7.75 20h8.5A3.76 3.76 0 0 0 20 16.25v-8.5A3.76 3.76 0 0 0 16.25 4h-8.5Zm4.25 3.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Zm0 2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6Zm5.1-2.05a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3Z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="contact-list">
          <p className="section-label">Get In Touch</p>
          <a href="mailto:erna.srocha@gmail.com">
            <span>@</span>
            <div>
              <strong>Email</strong>
              <small>erna.srocha@gmail.com</small>
            </div>
          </a>
          <a href="/Ernalene-Rocha-Resume.pdf" target="_blank" rel="noreferrer">
            <span>CV</span>
            <div>
              <strong>Resume</strong>
              <small>View or download PDF</small>
            </div>
          </a>
        </div>
      </section>

      <footer>
        <span>&copy; 2025 Ernalene Rocha. All rights reserved.</span>
      </footer>
    </main>
  );
}
