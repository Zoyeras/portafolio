import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Gestor de Tareas",
      description:
        "Aplicación web para gestión de tareas con sistema de autenticación, roles de usuario y administrador, y tablero de tareas interactivo.",
      image: "/imagenes/Capturas Proyectos/MisTareas Gestor-Tareas.png",
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    },
    {
      title: "E-commerce Platform",
      description:
        "Plataforma de comercio electrónico con carrito de compras, pasarela de pago y panel de administración.",
      image: "#",
      technologies: ["Next.js", "Stripe", "Firebase", "Redux"],
    },
    {
      title: "Sistema de Reservas",
      description:
        "Sistema de gestión de reservas para restaurantes con calendario interactivo y notificaciones en tiempo real.",
      image: "#",
      technologies: ["React", "Socket.io", "PostgreSQL", "Tailwind CSS"],
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
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
