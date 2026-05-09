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
    title: { es: "CoworkingReservations", en: "CoworkingReservations" },
    description: {
      es: "Sistema de gestión de coworking con reservas en tiempo real (SignalR) y API .NET 10 — actualmente en producción para un espacio real.",
      en: "Coworking management system with real-time bookings (SignalR) and .NET 10 API — currently in production for a real venue.",
    },
    image: "/imagenes/Capturas Proyectos/imgCoworkingReservations.png",
    technologies: [
      ".NET 10",
      "Entity Framework Core",
      "PostgreSQL",
      "SignalR",
      "WebSockets",
      "JWT",
      "Clean Architecture",
    ],
    details: {
      es: `<p><strong>⚠️ En producción activa:</strong> Este proyecto está siendo usado por un espacio de coworking real. El código sigue en desarrollo con nuevas funcionalidades.</p>
<p><strong>Problema:</strong> Gestionar reservas de espacios de coworking con disponibilidad en tiempo real, historial por usuario y control administrativo.</p>
<p><strong>Mi rol:</strong> Arquitectura completa backend con Clean Architecture, implementación de SignalR para notificaciones en tiempo real, y despliegue en producción.</p>
<ul><li>Reservas en tiempo real con SignalR</li><li>Roles: administrador, recepcionista, usuario</li><li>API REST documentada con OpenAPI/Swagger</li><li>PostgreSQL + Entity Framework Core</li><li>Clean Architecture (Domain, Application, Infrastructure, API)</li><li>Autenticación JWT</li></ul>`,
      en: `<p><strong>⚠️ Active production:</strong> This project is being used by a real coworking space. The code is still under active development with new features.</p>
<p><strong>Problem:</strong> Manage coworking space bookings with real-time availability, per-user history, and administrative control.</p>
<p><strong>My role:</strong> Full backend architecture with Clean Architecture, SignalR implementation for real-time notifications, and production deployment.</p>
<ul><li>Real-time bookings with SignalR</li><li>Roles: admin, receptionist, user</li><li>REST API documented with OpenAPI/Swagger</li><li>PostgreSQL + Entity Framework Core</li><li>Clean Architecture (Domain, Application, Infrastructure, API)</li><li>JWT Authentication</li></ul>`,
    },
    demoUrl: undefined,
    frontendRepoUrl: undefined,
    backendRepoUrl: "https://github.com/Zoyeras/CoworkingReservations",
    noPublicDemoNote: {
      es: "No hay demo pública en línea. El proyecto está en producción para un coworking real. Puedes revisar el código en el repositorio de GitHub y contactarme para una demo guiada.",
      en: "There is no public live demo. The project is in production for a real coworking space. You can review the code on GitHub or contact me for a guided demo.",
    },
  },
  {
    title: { es: "MotorOn", en: "MotorOn" },
    description: {
      es: "Sistema fullstack para gestión de flotilla vehicular: control de gasolina, mantenimientos, ITV, seguro e incidencias — backend .NET 10 + frontend React.",
      en: "Fullstack fleet management system: fuel control, maintenance, ITV, insurance and incidents — .NET 10 backend + React frontend.",
    },
    image: "/imagenes/Capturas Proyectos/imgMotorOn.png",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      ".NET 10",
      "Entity Framework Core",
      "PostgreSQL",
      "JWT",
      "CQRS/MediatR",
      "Clean Architecture",
    ],
    details: {
      es: `<p><strong>Proyecto terminado, pendiente de despliegue.</strong> Aplicación completa para la gestión integral de una flotilla de vehículos.</p>
<p><strong>Problema:</strong> Controlar y dar seguimiento a los gastos de combustible, mantenimientos programados, ITV, seguros e incidencias de múltiples vehículos.</p>
<p><strong>Mi rol:</strong> Desarrollo completo fullstack — backend con Clean Architecture + CQRS, frontend con React + TypeScript + Tailwind, y Docker Compose para PostgreSQL.</p>
<ul><li>Módulo de gastos de combustible por vehículo</li><li>Control de mantenimientos preventivos y correctivos</li><li>Gestión de ITV, seguros e incidencias</li><li>Autenticación JWT con BCrypt</li><li>Clean Architecture + CQRS (MediatR)</li><li>Arquitectura monorepo con Docker Compose</li></ul>`,
      en: `<p><strong>Completed project, pending deployment.</strong> Full application for comprehensive fleet management.</p>
<p><strong>Problem:</strong> Track and control fuel expenses, scheduled maintenance, ITV, insurance, and incidents across multiple vehicles.</p>
<p><strong>My role:</strong> Full fullstack development — backend with Clean Architecture + CQRS, frontend with React + TypeScript + Tailwind, and Docker Compose for PostgreSQL.</p>
<ul><li>Fuel expense module per vehicle</li><li>Preventive and corrective maintenance control</li><li>ITV, insurance and incident management</li><li>JWT authentication with BCrypt</li><li>Clean Architecture + CQRS (MediatR)</li><li>Monorepo architecture with Docker Compose</li></ul>`,
    },
    demoUrl: undefined,
    frontendRepoUrl: "https://github.com/Zoyeras/motoron-frontend",
    backendRepoUrl: "https://github.com/Zoyeras/motoron-backend",
    noPublicDemoNote: {
      es: "Proyecto terminado pero aún no desplegado. Puedes revisar el código en los repositorios de GitHub (frontend y backend).",
      en: "Completed project, not yet deployed. You can review the code in the GitHub repositories (frontend and backend).",
    },
  },
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
