import { useState, useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";
import type { Language } from "../types/language";

function useScrollReveal() {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = el.querySelectorAll<HTMLElement>(
      ".reveal, .reveal-left, .reveal-right, .reveal-scale, .heading-underline",
    );
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" },
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);
  return ref;
}

function useLockBody(active: boolean) {
  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);
}

const ProjectsSection = ({ language }: { language: Language }) => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const sectionRef = useScrollReveal() as React.RefObject<HTMLElement>;
  useLockBody(selectedProject !== null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const copy = {
    es: {
      eyebrow: "Trabajo Reciente",
      title: "Mis",
      titleHighlight: "Proyectos",
      subtitle:
        "Algunos de mis trabajos recientes donde he aplicado mis habilidades para resolver problemas reales.",
      close: "Cerrar",
      viewDemo: "Ver Demo",
      viewFrontend: "Ver Frontend",
      viewBackend: "Ver Backend",
      viewGuide: "Ver Guía",
      viewDetails: "Ver detalles",
    },
    en: {
      eyebrow: "Recent Work",
      title: "My",
      titleHighlight: "Projects",
      subtitle:
        "Some of my recent work where I applied my skills to solve real-world problems.",
      close: "Close",
      viewDemo: "View Demo",
      viewFrontend: "View Frontend",
      viewBackend: "View Backend",
      viewGuide: "View Guide",
      viewDetails: "View details",
    },
  };

  const text = copy[language];

  const projects = [
    {
      title: { es: "Programa de automatización", en: "Automation Program" },
      description: {
        es: "Programa de automatización para creación de tickets con interfaz de usuario, toma de datos con formulario y envíos de WhatsApp.",
        en: "Automation program for ticket creation with UI, form-based data capture, and WhatsApp sending.",
      },
      image: "/imagenes/Capturas Proyectos/imgIAutomation.png",
      technologies: ["C#", "React", "TypeScript", "PostgreSQL"],
      details: {
        es: `<p>Programa de automatización para tickets con:</p><ul><li>Interfaz de usuario intuitiva</li><li>Toma de datos mediante formulario</li><li>Captura de audio para transcripción</li><li>Voz de IA para lectura de datos</li><li>Envíos automáticos por WhatsApp</li><li>Integración con PostgreSQL</li><li>Generación de reportes</li></ul>`,
        en: `<p>Automation ticketing platform with:</p><ul><li>Intuitive user interface</li><li>Form-based data capture</li><li>Audio capture for transcription</li><li>AI voice playback for collected data</li><li>Automated WhatsApp sending</li><li>PostgreSQL integration</li><li>Report generation</li></ul>`,
      },
      demoUrl: "https://ia-automation-frontend.vercel.app/",
      frontendRepoUrl: "https://github.com/Zoyeras/IAutomation_frontend",
      backendRepoUrl: "https://github.com/Zoyeras/IAutomation_backend",
      guideUrl: undefined,
    },
    {
      title: { es: "TaskManager", en: "TaskManager" },
      description: {
        es: "Aplicación completa de gestión de tareas con autenticación JWT, roles de usuario y administrador, desarrollada con .NET 10 (backend) y React + TypeScript (frontend).",
        en: "Full-stack task management app with JWT authentication, user/admin roles, built with .NET 10 (backend) and React + TypeScript (frontend).",
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
        es: `<p>Sistema completo de gestión de tareas con:</p><ul><li>Autenticación JWT con expiración configurable</li><li>Roles: administrador y usuario normal</li><li>Tablero Kanban con drag & drop</li><li>Backend .NET 10 con Entity Framework Core</li><li>Base de datos PostgreSQL</li></ul>`,
        en: `<p>Complete task management system with:</p><ul><li>JWT authentication with configurable expiration</li><li>Admin and regular user roles</li><li>Kanban board with drag & drop</li><li>.NET 10 backend with Entity Framework Core</li><li>PostgreSQL database</li></ul>`,
      },
      demoUrl: undefined,
      frontendRepoUrl: "https://github.com/Zoyeras/TaskManager_frontend",
      backendRepoUrl: "https://github.com/Zoyeras/TaskManager_backend",
      guideUrl: undefined,
    },
  ];

  const staggerDelays = ["delay-100", "delay-200", "delay-300", "delay-400"];
  const proj = selectedProject !== null ? projects[selectedProject] : null;

  const projectGridClass = (() => {
    const n = projects.length;
    if (n <= 1)
      return "grid grid-cols-1 gap-5 max-w-xl mx-auto w-full";
    if (n === 2)
      return "grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto w-full";
    if (n === 3)
      return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5";
    return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5";
  })();

  type Variant = "primary" | "secondary" | "ghost";
  type LinkBtn = { href: string; label: string; variant: Variant };

  const getLinks = (p: (typeof projects)[0]): LinkBtn[] => {
    const links: LinkBtn[] = [];
    if (p.demoUrl && p.demoUrl !== "#")
      links.push({ href: p.demoUrl, label: text.viewDemo, variant: "primary" });
    if (p.frontendRepoUrl)
      links.push({
        href: p.frontendRepoUrl,
        label: text.viewFrontend,
        variant: "secondary",
      });
    if (p.backendRepoUrl)
      links.push({
        href: p.backendRepoUrl,
        label: text.viewBackend,
        variant: "secondary",
      });
    if (p.guideUrl)
      links.push({ href: p.guideUrl, label: text.viewGuide, variant: "ghost" });
    return links;
  };

  const btnStyle: Record<Variant, string> = {
    primary:
      "bg-green-400 text-black hover:bg-green-300 shadow-md shadow-green-900/20",
    secondary:
      "bg-purple-800/70 text-purple-100 border border-purple-600/50 hover:border-purple-400/70 hover:bg-purple-700/70",
    ghost:
      "bg-transparent text-purple-400 border border-purple-700/35 hover:border-purple-500/55 hover:text-purple-200",
  };

  return (
    <section
      id="proyectos"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="scroll-mt-24 py-28 px-6 relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-purple-700/35 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-48 bg-purple-700/7 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-4 reveal">
          <p
            className="text-xs font-semibold tracking-[0.3em] uppercase text-green-400/55 mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {text.eyebrow}
          </p>
          <h2
            className="text-4xl md:text-5xl font-black tracking-tight section-title-glow inline-block"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="text-green-400">{text.title}</span>{" "}
            <span className="text-white heading-underline">
              {text.titleHighlight}
            </span>
          </h2>
        </div>

        <p className="reveal delay-100 text-center text-purple-300/60 max-w-xl mx-auto mb-16 leading-relaxed font-light">
          {text.subtitle}
        </p>

        {/* Grid */}
        <div className={projectGridClass}>
          {projects.map((project, index) => (
            <div
              key={index}
              className={`reveal-scale ${staggerDelays[index] ?? ""}`}
            >
              <ProjectCard
                title={project.title[language]}
                description={project.description[language]}
                image={project.image}
                technologies={project.technologies}
                detailsLabel={text.viewDetails}
                onClick={() => setSelectedProject(index)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* ══ Modal ══ */}
      {proj !== null && selectedProject !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div className="absolute inset-0 bg-black/75 backdrop-blur-md" />

          <div
            className="modal-animate relative w-full max-w-3xl max-h-[88vh] overflow-y-auto rounded-2xl border border-purple-700/45 shadow-2xl shadow-black/60"
            style={{
              background:
                "linear-gradient(160deg, rgb(13 8 32 / 0.98), rgb(5 2 15 / 0.99))",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Imagen hero del modal */}
            <div className="relative h-56 md:h-68 overflow-hidden rounded-t-2xl">
              <img
                src={proj.image}
                alt={proj.title[language]}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0820] via-black/35 to-transparent" />

              {/* Título sobre imagen */}
              <div className="absolute bottom-0 left-0 p-6">
                <p
                  className="text-xs font-semibold tracking-[0.2em] uppercase text-green-400/65 mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {language === "es" ? "Proyecto" : "Project"}
                </p>
                <h3
                  className="text-2xl md:text-3xl font-black text-white tracking-tight leading-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {proj.title[language]}
                </h3>
              </div>

              {/* Cerrar */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-black/55 border border-white/8 text-white/50 hover:text-white hover:border-green-400/35 transition-all duration-200"
                aria-label={text.close}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Cuerpo */}
            <div className="p-6 md:p-8 space-y-6">
              {/* Detalles */}
              <div
                className="modal-details text-sm font-light leading-relaxed"
                dangerouslySetInnerHTML={{ __html: proj.details[language] }}
              />

              <div className="h-px bg-gradient-to-r from-transparent via-purple-700/25 to-transparent" />

              {/* Tech */}
              <div>
                <p
                  className="text-[10px] font-bold tracking-[0.2em] uppercase text-purple-500/55 mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {proj.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full border"
                      style={{
                        background: "rgb(124 58 237 / 0.1)",
                        borderColor: "rgb(124 58 237 / 0.28)",
                        color: "rgb(167 139 250 / 0.88)",
                        fontFamily: "var(--font-display)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              {getLinks(proj).length > 0 && (
                <div className="flex flex-wrap gap-3 pt-1">
                  {getLinks(proj).map((btn, i) => (
                    <a
                      key={i}
                      href={btn.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-200 hover:-translate-y-0.5 ${btnStyle[btn.variant]}`}
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {btn.variant === "primary" ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                          />
                        </svg>
                      )}
                      {btn.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Estilos del modal */}
      <style>{`
        .modal-details p { color: rgb(216 180 254 / 0.8); margin-bottom: 0.35rem; }
        .modal-details ul { list-style: none; padding: 0; margin-top: 0.4rem; }
        .modal-details li {
          position: relative; padding-left: 1.2rem;
          margin-bottom: 0.35rem; color: rgb(196 181 253 / 0.7);
        }
        .modal-details li::before {
          content: ""; position: absolute; left: 0; top: 0.48em;
          width: 5px; height: 5px; border-radius: 50%;
          background: rgb(74 222 128 / 0.65);
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;
