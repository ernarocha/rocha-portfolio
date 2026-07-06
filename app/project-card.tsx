"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { Project } from "./project-data";

type ProjectCardProps = {
  project: Project;
};

type ModalStatus = "closed" | "opening" | "open" | "closing";

const CLOSE_ANIMATION_MS = 220;

export function ProjectCard({ project }: ProjectCardProps) {
  const [status, setStatus] = useState<ModalStatus>("closed");
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const wasOpenRef = useRef(false);

  const isMounted = status !== "closed";

  const handleClose = () => {
    setStatus((current) => (current === "closed" ? current : "closing"));
  };

  useEffect(() => {
    if (status !== "opening") return;
    const raf = requestAnimationFrame(() => setStatus("open"));
    return () => cancelAnimationFrame(raf);
  }, [status]);

  useEffect(() => {
    if (status !== "closing") return;
    const timeout = setTimeout(() => setStatus("closed"), CLOSE_ANIMATION_MS);
    return () => clearTimeout(timeout);
  }, [status]);

  useEffect(() => {
    if (status === "open") {
      wasOpenRef.current = true;
      closeButtonRef.current?.focus();
    }
    if (status === "closed" && wasOpenRef.current) {
      wasOpenRef.current = false;
      triggerRef.current?.focus();
    }
  }, [status]);

  useEffect(() => {
    if (!isMounted) return;

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;

    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMounted]);

  useEffect(() => {
    if (!isMounted) return;
    const el = scrollRef.current;
    if (!el) return;

    const handleWheel = (event: WheelEvent) => {
      const atTop = el.scrollTop <= 0;
      const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;
      if ((atTop && event.deltaY < 0) || (atBottom && event.deltaY > 0)) {
        event.preventDefault();
      }
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [isMounted]);

  return (
    <>
      <article className="project-card">
        <button
          className="project-card-open"
          ref={triggerRef}
          onClick={() => setStatus("opening")}
          type="button"
          aria-label={`View details for ${project.title}`}
        />
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
        <a href={project.url} target="_blank" rel="noreferrer">
          View Live
        </a>
      </article>

      {isMounted
        ? createPortal(
            <div
              className={`project-modal${status === "open" ? " is-open" : ""}`}
              role="dialog"
              aria-modal="true"
              aria-label={`${project.title} details`}
            >
              <button
                className="project-modal-backdrop"
                onClick={handleClose}
                type="button"
                aria-label="Close project details"
              />
              <div className="project-modal-content">
                <button
                  className="project-modal-close"
                  ref={closeButtonRef}
                  onClick={handleClose}
                  type="button"
                  aria-label="Close project details"
                >
                  &times;
                </button>
                <div className="project-modal-scroll" ref={scrollRef}>
                  <div className="project-modal-copy">
                    <h2>{project.title}</h2>
                    <p className="project-modal-role">{project.role}</p>
                    <p>{project.summary}</p>

                    <section>
                      <h3>Tech Stack</h3>
                      <div className="project-modal-tags">
                        {project.techStack.map((item) => (
                          <span key={item}>{item}</span>
                        ))}
                      </div>
                    </section>

                    <section>
                      <h3>Key Highlights</h3>
                      <ul>
                        {project.highlights.map((highlight) => (
                          <li key={highlight}>{highlight}</li>
                        ))}
                      </ul>
                    </section>

                    <section>
                      <h3>Screenshots / Preview</h3>
                      <div className="project-modal-screenshots">
                        {project.screenshots.map((screenshot) => (
                          <figure className="project-modal-preview" key={screenshot.src}>
                            <Image
                              src={screenshot.src}
                              alt={screenshot.alt}
                              width={1913}
                              height={997}
                              sizes="(max-width: 760px) 82vw, 640px"
                              draggable={false}
                            />
                            <figcaption>{screenshot.description}</figcaption>
                          </figure>
                        ))}
                      </div>
                    </section>

                    <a href={project.url} target="_blank" rel="noreferrer">
                      View Live
                    </a>
                  </div>
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
