import { useEffect, useRef } from "react";
import { portfolioProjects } from "../data/portfolioProjects";
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
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);
  return ref;
}

const SkillTag = ({ skill, index }: { skill: string; index: number }) => (
  <span
    className="skill-tag-animated px-3 py-1 rounded-md text-xs border transition-colors duration-200 hover:border-green-400/35 hover:text-green-300/90"
    style={{
      animationDelay: `${index * 50}ms`,
      background: "rgb(124 58 237 / 0.08)",
      borderColor: "rgb(124 58 237 / 0.22)",
      color: "rgb(196 181 253 / 0.9)",
      fontFamily: "var(--font-display)",
    }}
  >
    {skill}
  </span>
);

const StatCard = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center gap-1">
    <span
      className="text-3xl font-black text-shimmer"
      style={{ fontFamily: "var(--font-display)" }}
    >
      {value}
    </span>
    <span
      className="text-xs text-purple-400/65 uppercase tracking-widest"
      style={{ fontFamily: "var(--font-display)" }}
    >
      {label}
    </span>
  </div>
);

const AboutSection = ({ language }: { language: Language }) => {
  const sectionRef = useScrollReveal() as React.RefObject<HTMLElement>;

  const skillGroups = [
    {
      category: "Backend",
      icon: "⬡",
      skills: ["C#", ".NET Core", "Entity Framework", "PostgreSQL"],
    },
    {
      category: "Frontend",
      icon: "◈",
      skills: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    },
    {
      category: language === "es" ? "Herramientas" : "Tooling",
      icon: "◎",
      skills: ["Docker", "Arch Linux", "JetBrains", "Git"],
    },
  ];

  const copy = {
    es: {
      eyebrow: "Desarrollador de Software",
      title: "Sobre",
      titleHighlight: "Mí",
      summary:
        "Perfil técnico orientado a construir productos robustos, rápidos y escalables.",
      aboutText:
        "Desarrollador fullstack enfocado en el ecosistema .NET y React. Construyo APIs limpias y arquitecturas bien pensadas. Me motivan los problemas técnicos complejos — si algo no lo sé, lo investigo y lo aprendo. Trabajo nativo en Linux (Arch) con herramientas profesionales y Docker.",
      skillsTitle: "Stack",
      focusTitle: "Enfoque",
      focusText:
        "Soluciones escalables con código limpio. Aplicaciones que resuelven problemas reales con interfaces intuitivas.",
      chips: [
        "Diseño Responsive",
        "Rendimiento",
        "Arquitectura Limpia",
        "APIs REST",
      ],
      stats: [
        { value: "1+ año", label: "Experiencia" },
        {
          value: String(portfolioProjects.length),
          label: "Proyectos",
        },
        { value: "20", label: "Edad" },
      ],
    },
    en: {
      eyebrow: "Software Developer",
      title: "About",
      titleHighlight: "Me",
      summary:
        "Technical profile focused on building robust, fast, and scalable products.",
      aboutText:
        "Fullstack developer focused on the .NET ecosystem and React. I build clean APIs and well-designed architectures. Complex technical problems motivate me — if I don't know something, I research and learn it quickly. I work natively in Linux (Arch) with professional tools and Docker.",
      skillsTitle: "Stack",
      focusTitle: "Approach",
      focusText:
        "Scalable solutions with clean code. Applications that solve real problems through intuitive interfaces.",
      chips: [
        "Responsive Design",
        "Performance",
        "Clean Architecture",
        "REST APIs",
      ],
      stats: [
        { value: "2+", label: "Years" },
        {
          value: String(portfolioProjects.length),
          label: "Projects",
        },
        { value: "3", label: "Stacks" },
      ],
    },
  };

  const text = copy[language];

  return (
    <section
      id="sobremi"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="scroll-mt-24 py-28 px-6 relative overflow-hidden"
    >
      {/* Fondos estáticos — sin blur dinámico, sin animación */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/15 to-transparent pointer-events-none" />
      <div className="absolute -top-32 -left-16 w-80 h-80 bg-purple-700/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-green-500/6 rounded-full blur-3xl pointer-events-none" />

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

        <p className="reveal delay-100 text-center text-purple-300/65 max-w-xl mx-auto mb-16 leading-relaxed font-light">
          {text.summary}
        </p>

        <div className="flex flex-col lg:flex-row items-start gap-14 relative z-10">
          {/* Izquierda: foto + stats */}
          <div className="lg:w-2/5 flex flex-col items-center gap-9 reveal-left">
            <div className="relative group profile-ring">
              {/* Glow de hover — no anima en idle */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-purple-600/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />
              <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-white/8 shadow-2xl shadow-black/50 transition-transform duration-400 group-hover:scale-[1.03]">
                <img
                  className="w-full h-full object-cover"
                  src="/imagenes/fotoMia-800.webp"
                  alt="Samuel"
                />
              </div>
            </div>

            {/* Stats */}
            <div className="glass-panel rounded-2xl p-6 w-full max-w-xs">
              <div className="flex justify-around">
                {text.stats.map((s) => (
                  <StatCard key={s.label} value={s.value} label={s.label} />
                ))}
              </div>
            </div>
          </div>

          {/* Derecha: bio + skills */}
          <div className="lg:w-3/5 text-white space-y-5">
            <div className="glass-panel rounded-2xl p-7 reveal-right delay-100">
              <p className="text-base md:text-lg leading-relaxed text-purple-100/82 font-light">
                {text.aboutText}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Stack */}
              <div className="glass-panel p-6 rounded-2xl reveal delay-200">
                <h3
                  className="font-black text-base mb-5 flex items-center gap-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <span className="text-green-400">{text.skillsTitle}</span>
                  <span className="h-px flex-1 bg-gradient-to-r from-green-400/18 to-transparent" />
                </h3>
                <div className="space-y-4">
                  {skillGroups.map((group, gi) => (
                    <div key={group.category}>
                      <h4
                        className="text-[10px] font-bold text-purple-400/55 uppercase tracking-[0.2em] mb-2 flex items-center gap-1.5"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        <span className="text-purple-400/80">{group.icon}</span>
                        {group.category}
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {group.skills.map((skill, si) => (
                          <SkillTag
                            key={skill}
                            skill={skill}
                            index={gi * 4 + si}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enfoque */}
              <div className="glass-panel p-6 rounded-2xl reveal delay-300">
                <h3
                  className="font-black text-base mb-4 flex items-center gap-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <span className="text-green-400">{text.focusTitle}</span>
                  <span className="h-px flex-1 bg-gradient-to-r from-green-400/18 to-transparent" />
                </h3>
                <p className="text-purple-200/70 text-sm leading-relaxed mb-5 font-light">
                  {text.focusText}
                </p>
                <div className="flex flex-wrap gap-2">
                  {text.chips.map((item, i) => (
                    <span
                      key={item}
                      className="skill-tag-animated px-3 py-1.5 text-xs rounded-full border transition-colors duration-200 hover:border-green-400/35 hover:text-green-300/90"
                      style={{
                        animationDelay: `${i * 75}ms`,
                        background: "rgb(74 222 128 / 0.05)",
                        borderColor: "rgb(74 222 128 / 0.18)",
                        color: "rgb(134 239 172 / 0.85)",
                        fontFamily: "var(--font-display)",
                      }}
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
