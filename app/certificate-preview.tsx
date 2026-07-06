"use client";

import Image from "next/image";
import { useState } from "react";
import { createPortal } from "react-dom";

type Certificate = {
  title: string;
  issuer: string;
  year: string;
  image: string;
  alt: string;
};

const certificates: Certificate[] = [
  {
    title: "Web Development Fundamentals",
    issuer: "IBM",
    year: "2026",
    image: "/ibm.png",
    alt: "IBM Web Development Fundamentals certificate",
  },
  {
    title: "Introduction to Front-End Development",
    issuer: "Meta · Coursera",
    year: "2025",
    image: "/coursera.png",
    alt: "Coursera Introduction to Front-End Development certificate",
  },
];

export function CertificatePreview() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const activeCertificate = openIndex !== null ? certificates[openIndex] : null;

  return (
    <>
      <div className="certification-list">
        {certificates.map((certificate, index) => (
          <button
            className="certification-card"
            onClick={() => setOpenIndex(index)}
            type="button"
            key={certificate.title}
          >
            <div>
              <strong>{certificate.title}</strong>
              <small>
                {certificate.issuer} &middot; {certificate.year}
              </small>
            </div>
          </button>
        ))}
      </div>

      {activeCertificate
        ? createPortal(
            <div
              className="certificate-modal"
              role="dialog"
              aria-label={`${activeCertificate.issuer} certificate preview`}
            >
              <button
                className="certificate-modal-backdrop"
                onClick={() => setOpenIndex(null)}
                type="button"
                aria-label="Close certificate preview"
              />
              <div className="certificate-modal-content">
                <button
                  className="certificate-modal-close"
                  onClick={() => setOpenIndex(null)}
                  type="button"
                  aria-label="Close certificate preview"
                >
                  &times;
                </button>
                <Image
                  src={activeCertificate.image}
                  alt={activeCertificate.alt}
                  width={1200}
                  height={800}
                  sizes="90vw"
                />
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
