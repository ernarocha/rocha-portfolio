"use client";

import Image from "next/image";
import { useState } from "react";
import { createPortal } from "react-dom";

export function CertificatePreview() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="certification-card" onClick={() => setOpen(true)} type="button">
        <div>
          <strong>Web Development Fundamentals</strong>
          <small>IBM &middot; 2026</small>
        </div>
      </button>

      {open
        ? createPortal(
            <div className="certificate-modal" role="dialog" aria-label="IBM certificate preview">
              <button
                className="certificate-modal-backdrop"
                onClick={() => setOpen(false)}
                type="button"
                aria-label="Close certificate preview"
              />
              <div className="certificate-modal-content">
                <button
                  className="certificate-modal-close"
                  onClick={() => setOpen(false)}
                  type="button"
                  aria-label="Close certificate preview"
                >
                  &times;
                </button>
                <Image
                  src="/ibm.png"
                  alt="IBM Web Development Fundamentals certificate"
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
