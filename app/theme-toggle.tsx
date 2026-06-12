"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  return (
    <button
      aria-label="Toggle light and dark mode"
      aria-pressed={dark}
      className={`theme-toggle ${dark ? "is-dark" : "is-light"}`}
      onClick={() => setDark((value) => !value)}
      type="button"
    >
      <span className="theme-toggle-thumb" aria-hidden="true" />
      <span className="theme-toggle-icon sun-slot" aria-hidden="true">
        <svg className="sun-icon" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="4.2" />
          <path d="M12 1.8v3" />
          <path d="M12 19.2v3" />
          <path d="M1.8 12h3" />
          <path d="M19.2 12h3" />
          <path d="m4.8 4.8 2.1 2.1" />
          <path d="m17.1 17.1 2.1 2.1" />
          <path d="m19.2 4.8-2.1 2.1" />
          <path d="m6.9 17.1-2.1 2.1" />
        </svg>
      </span>
      <span className="theme-toggle-icon moon-slot" aria-hidden="true">
        <svg className="moon-icon" viewBox="0 0 24 24">
          <path d="M20.6 14.4A8.7 8.7 0 0 1 9.6 3.4 9.2 9.2 0 1 0 20.6 14.4Z" />
          <path d="M17.3 3.4 18 5l1.6.7L18 6.4 17.3 8l-.7-1.6L15 5.7l1.6-.7.7-1.6Z" />
          <path d="M20 9.2 20.4 10l.8.4-.8.4-.4.8-.4-.8-.8-.4.8-.4.4-.8Z" />
        </svg>
      </span>
    </button>
  );
}
