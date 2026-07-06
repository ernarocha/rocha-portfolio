export type Project = {
  title: string;
  image: string;
  url: string;
  role: string;
  summary: string;
  techStack: string[];
  highlights: string[];
  screenshots: {
    src: string;
    alt: string;
    description: string;
  }[];
};

export const projects: Project[] = [
  {
    title: "CITE Thesis Management System",
    image: "/cite.png",
    url: "https://cite-tms-frontend.vercel.app/",
    role: "Frontend Developer",
    summary:
      "A research repository for CITE's thesis archive, so students can search and request access to approved papers without emailing an admin.",
    techStack: ["Vite", "React", "JavaScript", "Tailwind CSS"],
    highlights: [
      "Search-first catalog with real accounts and data behind it.",
      "Request-based access flow with toast notifications for clear status.",
      "Zustand and React Router keep browsing and requests in separate views.",
    ],
    screenshots: [
      {
        src: "/cite_landing.png",
        alt: "CITE Thesis Management System landing page",
        description: "Landing page preview for the research repository.",
      },
    ],
  },
  {
    title: "JPCS SiteBuild",
    image: "/jpcs.png",
    url: "https://jpcs-dlsl.vercel.app/",
    role: "Frontend Developer",
    summary:
      "The official JPCS De La Salle Lipa site, built as an animated, motion-driven chapter site instead of a static bulletin board.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    highlights: [
      "Scroll-driven animations and a moving background layer throughout the site.",
      "Neon-on-charcoal identity with a live scroll-progress bar.",
      "Announcements, events, and officer profiles in one Next.js/TypeScript codebase.",
    ],
    screenshots: [
      {
        src: "/jpcs_landing.png",
        alt: "JPCS SiteBuild landing page",
        description: "Landing page preview for the JPCS organization website.",
      },
    ],
  },
  {
    title: "ASMS",
    image: "/asms.png",
    url: "https://mediatrix-asms.vercel.app/",
    role: "Frontend Developer",
    summary:
      "A sign-in gated operations platform for Mary Mediatrix Hospital's ancillary services team.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    highlights: [
      "Every screen sits behind authentication, built for internal hospital use.",
      "Zinc-toned layout designed for staff scanning service requests.",
      "Built with Next.js and TypeScript for a maintainable ops workflow.",
    ],
    screenshots: [
      {
        src: "/asms_landing.png",
        alt: "ASMS landing page",
        description: "Landing page preview for the ancillary services platform.",
      },
    ],
  },
  {
    title: "AnimoMart",
    image: "/animomart.png",
    url: "https://animomart.vercel.app/",
    role: "Frontend Developer",
    summary:
      "A real-time DLSL campus marketplace with cart, checkout, and a seller dashboard.",
    techStack: ["Vite", "React", "JavaScript", "Tailwind CSS"],
    highlights: [
      "Full buy-and-sell flow: cart, checkout, and a seller dashboard.",
      "Socket.IO-powered messaging and notifications between buyers and sellers.",
      "Google OAuth for campus accounts, plus Recharts activity views.",
    ],
    screenshots: [
      {
        src: "/animomart_landing.png",
        alt: "AnimoMart landing page",
        description: "Landing page preview for the campus marketplace.",
      },
    ],
  },
  {
    title: "Pinoy Recipe Finder",
    image: "/recipefinder.png",
    url: "https://pinoy-recipe-finder-ten.vercel.app/",
    role: "Frontend Developer",
    summary:
      "A Filipino recipe app with favoriting and validated forms, not just a searchable list.",
    techStack: ["React", "JavaScript", "Tailwind CSS", "Vercel"],
    highlights: [
      "Favorite recipes, backed by validated forms (React Hook Form, Formik, Yup).",
      "Axios-driven data fetching with React Router navigation.",
      "Simple, food-first layout built for fast browsing.",
    ],
    screenshots: [
      {
        src: "/recipefinder_landing.png",
        alt: "Pinoy Recipe Finder landing page",
        description: "Landing page preview for the recipe finder.",
      },
    ],
  },
  {
    title: "Study Spot",
    image: "/studyspot.png",
    url: "https://sample-project-vercel-plum.vercel.app/",
    role: "Frontend Developer",
    summary:
      "A study-space booking app with authenticated reservations, not just a directory to browse.",
    techStack: ["React", "JavaScript", "Tailwind CSS", "Vercel"],
    highlights: [
      "12+ venues with instant search and dynamic space pages.",
      "Time-validated booking, dashboard, and cancel-with-confirmation.",
      "Session persistence via Context API and localStorage.",
    ],
    screenshots: [
      {
        src: "/studyspot_landing.png",
        alt: "Study Spot landing page",
        description: "Landing page preview for the study space project.",
      },
    ],
  },
];
