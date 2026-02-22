import { useState } from "react";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Gestor de Tareas",
      description:
        "Aplicación web para gestión de tareas con sistema de autenticación, roles de usuario y administrador, y tablero de tareas interactivo.",
      image: "/imagenes/Capturas Proyectos/imgGestorTareas.png",
      technologies: ["React", "Python", "Flask", "MySQL", "JWT"],
      details: `
        <p>Sistema completo de gestión de tareas con:</p>
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>Autenticación JWT segura</li>
          <li>Roles de usuario y administrador</li>
          <li>Tablero Kanban interactivo</li>
          <li>Notificaciones en tiempo real</li>
          <li>Reportes y estadísticas</li>
        </ul>
      `,
      demoUrl: "https://gestortareas-frontend.vercel.app/login",
      repoUrl: "https://github.com/Zoyeras/backend-GestorTareas",
    },
    {
      title: "Programa de automatizacion",
      description:
        "Programa de automatizacion para creacion de tickets con interfaz de usuario, toma de datos con formulario y envios de whatsapp.",
      image: "/imagenes/Capturas Proyectos/imgIAutomation.png",
      technologies: ["C#", "React", "TypeScript", "PostgreSQL"],
      details: `
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
      demoUrl: "https://ia-automation-frontend.vercel.app/",
      repoUrl: "https://github.com/Zoyeras/IAutomation_backend",
    },
    {
      title: "Sistema de Reservas",
      description:
        "Sistema de gestión de reservas para restaurantes con calendario interactivo y notificaciones en tiempo real.",
      image: "/imagenes/placeholder-project.jpg",
      technologies: ["React", "Socket.io", "PostgreSQL", "Tailwind CSS"],
      details: `
        <p>Sistema de reservas con:</p>
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>Calendario interactivo con disponibilidad</li>
          <li>Notificaciones en tiempo real con Socket.io</li>
          <li>Confirmación automática por email/SMS</li>
          <li>Panel de gestión para administradores</li>
          <li>Integración con Google Calendar</li>
        </ul>
      `,
      demoUrl: "#",
      repoUrl: "#",
    },
  ];

  return (
    <section id="proyectos" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-white">
          Mis <span className="text-green-400">Proyectos</span>
        </h2>
        <p className="text-center text-purple-300 max-w-2xl mx-auto mb-16">
          Algunos de mis trabajos recientes donde he aplicado mis habilidades
          para resolver problemas reales
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              onClick={() => setSelectedProject(index)}
            />
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject !== null && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-gradient-to-br from-purple-900 to-black rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-purple-700"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-green-400">
                  {projects[selectedProject].title}
                </h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-white"
                  aria-label="Cerrar"
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

              <div className="relative h-64 md:h-80 mb-6 rounded-lg overflow-hidden">
                <img
                  src={projects[selectedProject].image}
                  alt={projects[selectedProject].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
              </div>

              <div
                className="text-gray-300 mb-6"
                dangerouslySetInnerHTML={{
                  __html: projects[selectedProject].details,
                }}
              />

              <div className="flex flex-wrap gap-2 mb-6">
                {projects[selectedProject].technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-purple-800 text-green-300 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={projects[selectedProject].demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors flex items-center gap-2"
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
                  Ver Demo
                </a>
                <a
                  href={projects[selectedProject].repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-600 transition-colors flex items-center gap-2"
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
                  Ver Código
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
