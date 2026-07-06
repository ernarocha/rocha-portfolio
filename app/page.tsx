import Image from "next/image";
import { CertificatePreview } from "./certificate-preview";
import { ProjectCard } from "./project-card";
import { projects } from "./project-data";
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
    items: ["Python", "Java", "MongoDB", "Supabase"],
  },
  {
    group: "Tools",
    items: ["Git", "GitHub", "Figma"],
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
          <h1>Ernalene Rocha</h1>
          <p className="profile-location">Lipa City, Batangas, Philippines</p>
          <p className="profile-role">Frontend Developer | UI/UX | Freelancer</p>
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
              I&apos;m a BS Computer Science student at De La Salle Lipa with a
              passion for building functional and user-friendly web
              applications. I enjoy turning ideas into clean, responsive
              interfaces and developing solutions that simplify everyday tasks.
            </p>
            <p>
              I&apos;m particularly interested in frontend development and
              UI/UX, where I can combine design with functionality to create
              intuitive digital experiences. I&apos;m always looking to improve
              my skills and build applications that are both practical and
              reliable.
            </p>
          </article>

          <article className="panel education-panel tech-panel reveal-on-scroll">
            <div className="tech-heading" id="tech-stack">
              <p className="section-label">Tech Stack</p>
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
              {projects.slice(0, 4).map((project) => (
                <ProjectCard project={project} key={project.title} />
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
            <span aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>
            </span>
            <div>
              <strong>Email</strong>
              <small>erna.srocha@gmail.com</small>
            </div>
          </a>
          <a href="/Ernalene-Rocha-Resume.pdf" target="_blank" rel="noreferrer">
            <span aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 15a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V18a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V18a.75.75 0 0 1 .75-.75Z"
                />
              </svg>
            </span>
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
