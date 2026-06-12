import Link from "next/link";

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

export default function TechStackPage() {
  return (
    <main className="site-shell subpage-shell">
      <div className="subpage-heading">
        <Link href="/">Back</Link>
        <h1>Tech Stack</h1>
        <p>Tools and technologies used across portfolio projects.</p>
      </div>

      <section className="panel subpage-panel">
        <div className="stack-groups all-stack-groups">
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
      </section>
    </main>
  );
}
