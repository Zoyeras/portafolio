import { useState } from "react";
import ProjectCard from "./ProjectCard";
import type { Language } from "../types/language";

const ProjectsSection = ({ language }: { language: Language }) => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const sectionCopy = {
    es: {
      title: "Mis",
      titleHighlight: "Proyectos",
      subtitle:
          "Algunos de mis trabajos recientes donde he aplicado mis habilidades para resolver problemas reales",
      close: "Cerrar",
      viewDemo: "Ver Demo",
      viewCode: "Ver Código",
      viewGuide: "Ver Guía",
      viewDetails: "Ver detalles",
    },
    en: {
      title: "My",
      titleHighlight: "Projects",
      subtitle:
          "Some of my recent work where I applied my skills to solve real-world problems",
      close: "Close",
      viewDemo: "View Demo",
      viewCode: "View Code",
      viewGuide: "View Guide",
      viewDetails: "View details",
    },
  };

  const text = sectionCopy[language];

  const projects = [
    {
      title: {
        es: "Gestor de Tareas",
        en: "Task Manager",
      },
      description: {
        es: "Aplicación web para gestión de tareas con sistema de autenticación, roles de usuario y administrador, y tablero de tareas interactivo.",
        en: "Web app for task management with authentication, user/admin roles, and an interactive task board.",
      },
      image: "/imagenes/Capturas Proyectos/imgGestorTareas.png",
      technologies: ["React", "Python", "Flask", "MySQL", "JWT"],
      details: {
        es: `
          <p>Sistema completo de gestión de tareas con:</p>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>Autenticación JWT segura</li>
            <li>Roles de usuario y administrador</li>
            <li>Tablero Kanban interactivo</li>
            <li>Notificaciones en tiempo real</li>
            <li>Reportes y estadísticas</li>
          </ul>
        `,
        en: `
          <p>Complete task management system with:</p>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>Secure JWT authentication</li>
            <li>User and administrator roles</li>
            <li>Interactive Kanban board</li>
            <li>Real-time notifications</li>
            <li>Reports and analytics</li>
          </ul>
        `,
      },
      demoUrl: "https://gestortareas-frontend.vercel.app/login",
      repoUrl: "https://github.com/Zoyeras/backend-GestorTareas",
    },
    {
      title: {
        es: "Programa de automatización",
        en: "Automation Program",
      },
      description: {
        es: "Programa de automatización para creación de tickets con interfaz de usuario, toma de datos con formulario y envíos de WhatsApp.",
        en: "Automation program for ticket creation with UI, form-based data capture, and WhatsApp sending.",
      },
      image: "/imagenes/Capturas Proyectos/imgIAutomation.png",
      technologies: ["C#", "React", "TypeScript", "PostgreSQL"],
      details: {
        es: `
          <p>Programa de automatización para creación de tickets con:</p>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>Interfaz de usuario intuitiva</li>
            <li>Toma de datos mediante formulario</li>
            <li>Captura de audio para transcripción</li>
            <li>Voz de IA para lectura de datos</li>
            <li>Envíos automáticos por WhatsApp</li>
            <li>Integración con base de datos PostgreSQL</li>
            <li>Generación de reportes</li>
            <li>Base de datos para almacenamiento de datos</li>
          </ul>
        `,
        en: `
          <p>Automation ticketing platform with:</p>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>Intuitive user interface</li>
            <li>Form-based data capture</li>
            <li>Audio capture for transcription</li>
            <li>AI voice playback for collected data</li>
            <li>Automated WhatsApp sending</li>
            <li>PostgreSQL database integration</li>
            <li>Report generation</li>
            <li>Data storage and tracking</li>
          </ul>
        `,
      },
      demoUrl: "https://ia-automation-frontend.vercel.app/",
      repoUrl: "https://github.com/Zoyeras/IAutomation_backend",
    },
    {
      title: {
        es: "Ecommerce ligero",
        en: "Light Ecommerce",
      },
      description: {
        es: "Catálogo e-commerce conversacional administrable desde Google Drive. Los productos se actualizan en tiempo real, el carrito y checkout se realizan por WhatsApp.",
        en: "Conversational e-commerce catalog managed via Google Drive. Products update in real time, cart and checkout via WhatsApp.",
      },
      image: "/imagenes/Capturas Proyectos/imgEcommerceLigero.png",
      technologies: ["React", "TypeScript", "Vite", "Google Drive API", "Vercel"],
      details: {
        es: `
          <p>Demo de tienda en línea con:</p>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>Catálogo dinámico desde Google Drive (carpetas = categorías, imágenes = productos)</li>
            <li>Filtro por categoría y carga por lotes</li>
            <li>Carrito de compras con total estimado</li>
            <li>Checkout por WhatsApp con mensaje estructurado</li>
            <li>Vista previa modal de productos</li>
            <li>Tema oscuro/claro persistente</li>
            <li>API serverless en Vercel</li>
            <li>Logo administrable desde Drive</li>
          </ul>
        `,
        en: `
          <p>Demo online store featuring:</p>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>Dynamic catalog from Google Drive (folders = categories, images = products)</li>
            <li>Category filter and batch loading</li>
            <li>Shopping cart with estimated total</li>
            <li>WhatsApp checkout with structured message</li>
            <li>Product modal preview</li>
            <li>Persistent dark/light mode</li>
            <li>Serverless API on Vercel</li>
            <li>Customizable logo from Drive</li>
          </ul>
        `,
      },
      demoUrl: "https://ecommerce-ligero.vercel.app",
      repoUrl: "https://github.com/Zoyeras/Ecommerce-Ligero",
      guideUrl: "https://github.com/Zoyeras/Ecommerce-Ligero/blob/main/GESTION.md",
    },
  ];

  return (
      <section id="proyectos" className="scroll-mt-28 py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white tracking-tight">
            {text.title}{" "}
            <span className="text-green-400">{text.titleHighlight}</span>
          </h2>
          <p className="text-center text-purple-200/90 max-w-2xl mx-auto mb-14 leading-relaxed">
            {text.subtitle}
          </p>

          <div
              className={`grid grid-cols-1 md:grid-cols-2 gap-7 ${
                  projects.length === 2
                      ? "lg:grid-cols-2 lg:max-w-5xl lg:mx-auto lg:justify-items-center"
                      : "lg:grid-cols-3"
              }`}
          >
            {projects.map((project, index) => (
                <ProjectCard
                    key={index}
                    title={project.title[language]}
                    description={project.description[language]}
                    image={project.image}
                    technologies={project.technologies}
                    detailsLabel={text.viewDetails}
                    onClick={() => setSelectedProject(index)}
                />
            ))}
          </div>
        </div>

        {/* Project Modal */}
        {selectedProject !== null && (
            <div
                className="fixed inset-0 bg-black/85 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                onClick={() => setSelectedProject(null)}
            >
              <div
                  className="bg-gradient-to-br from-purple-900 to-black rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-purple-600/80 shadow-2xl shadow-black/50"
                  onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-green-400 tracking-tight">
                      {projects[selectedProject].title[language]}
                    </h3>
                    <button
                        onClick={() => setSelectedProject(null)}
                        className="text-gray-400 hover:text-white bg-purple-800/80 border border-purple-700 rounded-full p-2 transition-colors"
                        aria-label={text.close}
                    >
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
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

                  <div className="relative h-64 md:h-80 mb-6 rounded-xl overflow-hidden border border-purple-700/70">
                    <img
                        src={projects[selectedProject].image}
                        alt={projects[selectedProject].title[language]}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                  </div>

                  <div
                      className="text-gray-300 mb-6 leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: projects[selectedProject].details[language],
                      }}
                  />

                  <div className="flex flex-wrap gap-2 mb-6">
                    {projects[selectedProject].technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 bg-purple-800 text-green-300 text-sm rounded-full border border-purple-700/70"
                        >
                    {tech}
                  </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    {/* Demo Button */}
                    <a
                        href={projects[selectedProject].demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-4 py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 font-semibold ${
                            projects[selectedProject].demoUrl === "#"
                                ? "bg-green-500/40 text-white/70 pointer-events-none"
                                : "bg-green-500 text-white hover:bg-green-600"
                        }`}
                    >
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                      >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      {text.viewDemo}
                    </a>

                    {/* Code Button */}
                    <a
                        href={projects[selectedProject].repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-4 py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 font-semibold ${
                            projects[selectedProject].repoUrl === "#"
                                ? "bg-purple-700/40 text-white/70 pointer-events-none"
                                : "bg-purple-700 text-white hover:bg-purple-600"
                        }`}
                    >
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
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
                      {text.viewCode}
                    </a>

                    {/* Guide Button – solo si existe guideUrl */}
                    {(projects[selectedProject] as any).guideUrl && (
                        <a
                            href={(projects[selectedProject] as any).guideUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2.5 rounded-lg bg-purple-700 text-white hover:bg-purple-600 transition-colors flex items-center justify-center gap-2 font-semibold"
                        >
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                          >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                            />
                          </svg>
                          {text.viewGuide}
                        </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
        )}
      </section>
  );
};

export default ProjectsSection;