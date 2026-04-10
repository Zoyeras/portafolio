import type { Language } from "../types/language";

export type Localized = Record<Language, string>;

export type PortfolioProject = {
  title: Localized;
  description: Localized;
  image: string;
  technologies: string[];
  details: Localized;
  demoUrl?: string;
  frontendRepoUrl?: string;
  backendRepoUrl?: string;
  guideUrl?: string;
  /** Shown in modal when there is no public demo (sets expectations). */
  noPublicDemoNote?: Localized;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    title: { es: "TaskManager", en: "TaskManager" },
    description: {
      es: "Gestionar tareas en equipo con roles, tablero Kanban y API segura — proyecto fullstack .NET + React.",
      en: "Team task management with roles, a Kanban board, and a secure API — fullstack .NET + React project.",
    },
    image: "/imagenes/Capturas Proyectos/imgTaskManager.png",
    technologies: [
      "React",
      "TypeScript",
      ".NET 10",
      "Entity Framework",
      "PostgreSQL",
      "JWT",
    ],
    details: {
      es: `<p><strong>Problema:</strong> organizar trabajo con visibilidad por rol y cambios de estado controlados.</p>
<p><strong>Mi rol:</strong> diseño e implementación del backend (JWT, EF, PostgreSQL) y del frontend (React, TypeScript).</p>
<p><strong>Resultado:</strong> app con autenticación, permisos y tablero con drag & drop.</p>
<ul><li>JWT con expiración configurable</li><li>Roles administrador y usuario</li><li>Kanban con drag & drop</li><li>Backend .NET 10 con Entity Framework Core</li></ul>`,
      en: `<p><strong>Problem:</strong> organize work with role-based visibility and controlled status changes.</p>
<p><strong>My role:</strong> backend (JWT, EF, PostgreSQL) and frontend (React, TypeScript) design and implementation.</p>
<p><strong>Outcome:</strong> app with authentication, authorization, and a drag & drop board.</p>
<ul><li>JWT with configurable expiration</li><li>Admin and user roles</li><li>Kanban with drag & drop</li><li>.NET 10 backend with Entity Framework Core</li></ul>`,
    },
    demoUrl: undefined,
    frontendRepoUrl: "https://github.com/Zoyeras/TaskManager_frontend",
    backendRepoUrl: "https://github.com/Zoyeras/TaskManager_backend",
    noPublicDemoNote: {
      es: "No hay demo pública en línea; puedes revisar el código y el flujo en los repositorios de GitHub.",
      en: "There is no public live demo; explore the code and flow in the GitHub repositories.",
    },
  },
];
