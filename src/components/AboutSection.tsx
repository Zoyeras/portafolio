import type { Language } from "../types/language";

const AboutSection = ({ language }: { language: Language }) => {
  // Agrupamos por categorías para mayor claridad técnica
  const skillGroups = [
    {
      category: language === "es" ? "Backend" : "Backend",
      skills: [
        "C#",
        ".NET (ASP.NET Core)",
        "Entity Framework Core",
        "PostgreSQL",
      ],
    },
    {
      category: language === "es" ? "Frontend" : "Frontend",
      skills: ["React", "TypeScript (TSX)", "Tailwind CSS"],
    },
    {
      category: language === "es" ? "Herramientas & OS" : "Tools & OS",
      skills: ["Docker", "Arch Linux", "JetBrains Suite", "Git"],
    },
  ];

  const copy = {
    es: {
      title: "Sobre",
      titleHighlight: "Mí",
      summary:
        "Perfil técnico orientado a construir productos robustos, rápidos y escalables.",
      aboutText:
        "Desarrollador de Software enfocado en el ecosistema .NET y React. Tengo experiencia práctica construyendo APIs y arquitecturas limpias. Me motivan los desafíos técnicos; si hay algo que no sé hacer, lo investigo y lo aprendo. Priorizo la lógica, la eficiencia y la resolución directa de problemas. Trabajo de forma nativa en entornos Linux (Arch) utilizando herramientas profesionales y Docker.",
      skillsTitle: "Stack Tecnológico",
      focusTitle: "Mi enfoque",
      focusText:
        "Desarrollo soluciones escalables con código limpio y bien documentado. Me especializo en crear aplicaciones que solucionan problemas reales con interfaces intuitivas.",
      chips: [
        "Diseño Responsive",
        "Rendimiento",
        "Arquitectura Limpia",
        "APIs REST",
      ],
    },
    en: {
      title: "About",
      titleHighlight: "Me",
      summary:
        "Technical profile focused on building robust, fast, and scalable products.",
      aboutText:
        "Software Developer focused on the .NET ecosystem and React. I have hands-on experience building APIs and clean architectures. I enjoy technical challenges; when I face something new, I research it and learn it quickly. I prioritize logic, efficiency, and direct problem-solving. I work natively in Linux environments (Arch), using professional tools and Docker.",
      skillsTitle: "Tech Stack",
      focusTitle: "My approach",
      focusText:
        "I build scalable solutions with clean, maintainable code. I focus on developing applications that solve real problems through intuitive interfaces.",
      chips: [
        "Responsive Design",
        "Performance",
        "Clean Architecture",
        "REST APIs",
      ],
    },
  };

  const text = copy[language];

  return (
    <section
      id="sobremi"
      className="scroll-mt-28 py-24 px-4 bg-purple-900/45 relative overflow-hidden"
    >
      <div className="absolute -top-28 -left-16 w-72 h-72 bg-purple-700/25 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-5 text-green-400 tracking-tight section-title-glow">
          {text.title} <span className="text-white">{text.titleHighlight}</span>
        </h2>
        <p className="text-center text-purple-200/90 max-w-2xl mx-auto mb-14 leading-relaxed">
          {text.summary}
        </p>

        <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
          {/* Imagen de Perfil */}
          <div className="lg:w-2/5 flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-purple-600 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative w-64 h-64 md:w-100 md:h-100 rounded-full overflow-hidden border-4 border-white/90 shadow-xl shadow-black/30 transform transition-transform duration-300 group-hover:scale-105">
                <img
                  className="w-full h-full object-cover"
                  src="/imagenes/fotoMia-800.webp"
                  alt="Samuel"
                />
              </div>
            </div>
          </div>

          {/* Información y Skills */}
          <div className="lg:w-3/5 text-white">
            <div className="glass-panel rounded-2xl p-6 md:p-7 mb-8">
              <p className="text-lg leading-relaxed text-gray-100 max-w-3xl">
                {text.aboutText}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Sección de Skills Refactorizada */}
              <div className="glass-panel p-6 rounded-2xl border border-white/10">
                <h3 className="text-green-400 font-bold text-xl mb-6">
                  {text.skillsTitle}
                </h3>
                <div className="space-y-6">
                  {skillGroups.map((group) => (
                    <div key={group.category}>
                      <h4 className="text-sm font-semibold text-purple-300 uppercase tracking-wider mb-3">
                        {group.category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {group.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm text-gray-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enfoque */}
              <div className="glass-panel p-6 rounded-2xl border border-white/10">
                <h3 className="text-green-400 font-bold text-xl mb-4">
                  {text.focusTitle}
                </h3>
                <p className="mb-4 text-gray-200 leading-relaxed">
                  {text.focusText}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {text.chips.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-purple-800/90 text-green-300 text-sm rounded-full border border-purple-700/70"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
