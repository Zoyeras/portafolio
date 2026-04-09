import { useEffect, useRef } from "react";
import type { Language } from "../types/language";

const HeroSection = ({ language }: { language: Language }) => {
  const sectionRef = useRef<HTMLElement>(null);

  // Entrada escalonada — se ejecuta una sola vez al montar
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const targets = el.querySelectorAll<HTMLElement>(".hero-reveal");
    targets.forEach((t, i) => {
      t.style.opacity = "0";
      t.style.transform = "translateY(26px)";
      t.style.transition = `opacity 0.8s cubic-bezier(0.22,1,0.36,1) ${i * 110}ms,
                            transform 0.8s cubic-bezier(0.22,1,0.36,1) ${i * 110}ms`;
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          t.style.opacity = "1";
          t.style.transform = "none";
        })
      );
    });
  }, []);

  const copy = {
    es: {
      badge: "Disponible para nuevos proyectos",
      role: "Desarrollador Fullstack",
      subtitle: "Construyo productos web que combinan arquitectura limpia con interfaces que enamoran.",
      projects: "Ver Proyectos",
      contact: "Contactar",
      scroll: "scroll",
    },
    en: {
      badge: "Available for new projects",
      role: "Fullstack Developer",
      subtitle: "I build web products that combine clean architecture with interfaces people love.",
      projects: "View Projects",
      contact: "Contact",
      scroll: "scroll",
    },
  };

  const t = copy[language];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Grid estático — 0 CPU, solo background-image */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgb(124 58 237) 1px, transparent 1px),
                            linear-gradient(90deg, rgb(124 58 237) 1px, transparent 1px)`,
          backgroundSize: "72px 72px",
        }}
      />

      {/* Acento de color — estático, sin animación */}
      <div className="absolute top-1/3 right-[18%] w-72 h-72 bg-green-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 left-[12%] w-80 h-80 bg-purple-700/12 rounded-full blur-3xl pointer-events-none" />

      {/* Fade inferior */}
      <div className="absolute bottom-0 inset-x-0 h-36 bg-gradient-to-t from-[#05020f] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">

        {/* Badge */}
        <div className="hero-reveal mb-8">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-green-400/22 bg-green-400/5 px-5 py-2 text-sm font-medium text-green-300 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-70" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            {t.badge}
          </span>
        </div>

        {/* Nombre */}
        <div className="hero-reveal">
          <h1
            className="text-6xl md:text-8xl lg:text-9xl font-black mb-3 tracking-tight leading-[0.88]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="text-shimmer">Samuel</span>
            <br />
            <span className="text-white">Loaiza</span>
          </h1>
        </div>

        {/* Role */}
        <div className="hero-reveal my-8">
          <div className="inline-flex items-center gap-3">
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-purple-500/50" />
            <span
              className="text-sm font-semibold tracking-[0.2em] uppercase text-purple-300/75"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t.role}
            </span>
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-purple-500/50" />
          </div>
        </div>

        {/* Divider */}
        <div className="hero-reveal">
          <div className="hero-divider h-px w-40 mx-auto mb-8 rounded-full" />
        </div>

        {/* Subtítulo */}
        <div className="hero-reveal">
          <p
            className="text-lg md:text-2xl text-purple-100/65 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {t.subtitle}
          </p>
        </div>

        {/* CTAs */}
        <div className="hero-reveal flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#proyectos"
            className="group relative px-8 py-3.5 bg-green-400 text-black font-bold rounded-full hover:bg-green-300 transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-green-900/25 flex items-center justify-center gap-2 text-sm tracking-wide overflow-hidden"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {/* Shimmer de hover — solo se activa al pasar el mouse */}
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-600 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12 pointer-events-none" />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
            {t.projects}
          </a>

          <a
            href="#contacto"
            className="group relative px-8 py-3.5 bg-transparent border border-purple-500/45 text-purple-200 font-semibold rounded-full hover:border-green-400/55 hover:text-green-300 hover:bg-green-400/5 transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-2 text-sm tracking-wide overflow-hidden backdrop-blur-sm"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-600 bg-gradient-to-r from-transparent via-green-400/8 to-transparent skew-x-12 pointer-events-none" />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {t.contact}
          </a>
        </div>

        {/* Scroll hint */}
        <div className="hero-reveal mt-20 flex justify-center">
          <a
            href="#sobremi"
            aria-label="Scroll"
            className="flex flex-col items-center gap-2 text-purple-300/70 hover:text-green-400 transition-colors"
          >
            <span className="text-[10px] tracking-[0.25em] uppercase" style={{ fontFamily: "var(--font-display)" }}>
              {t.scroll}
            </span>
            <div className="w-px h-10 bg-gradient-to-b from-purple-400/55 to-transparent" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
