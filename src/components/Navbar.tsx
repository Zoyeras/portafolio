import { useState, useEffect, type MouseEvent } from "react";
import type { Language } from "../types/language";

const NAV_ITEMS = [
  { id: "sobremi",  label: { es: "Sobre mí",  en: "About"    } },
  { id: "proyectos",label: { es: "Proyectos", en: "Projects" } },
  { id: "contacto", label: { es: "Contacto",  en: "Contact"  } },
];

const Navbar = ({
  language,
  onLanguageChange,
}: {
  language: Language;
  onLanguageChange: (value: Language) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((i) => i.id);

    const handleScroll = () => {
      const sy = window.scrollY;
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docH > 0 ? (sy / docH) * 100 : 0);
      setScrolled(sy > 20);

      const ref = window.innerHeight * 0.35;
      let current = sectionIds[0] ?? "";
      let minDist = Infinity;
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const r = el.getBoundingClientRect();
        if (r.bottom <= 0 || r.top >= window.innerHeight) return;
        const dist = Math.abs(r.top + r.height / 2 - ref);
        if (dist < minDist) { minDist = dist; current = id; }
      });
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-400 ${scrolled ? "py-3" : "py-5"}`}>

      {/* Barra de progreso de scroll */}
      <div
        className="absolute top-0 left-0 h-[2px] transition-all duration-150"
        style={{
          width: `${scrollProgress}%`,
          background: "linear-gradient(90deg, var(--green), var(--purple-light))",
        }}
      />

      {/* Fondo frosted — solo cuando hay scroll */}
      <div
        className={`absolute inset-0 transition-all duration-400 ${
          scrolled
            ? "bg-[#05020f]/85 backdrop-blur-lg border-b border-purple-900/40 shadow-xl shadow-black/30"
            : "bg-transparent"
        }`}
      />

      <div className="relative max-w-7xl mx-auto px-6 flex justify-between items-center">

        {/* Logo */}
        <a
          href="#"
          className="group flex items-center gap-2"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
        >
          <div className="w-8 h-8 rounded-lg bg-green-400/10 border border-green-400/25 flex items-center justify-center transition-all duration-200 group-hover:bg-green-400/18 group-hover:border-green-400/50">
            <span className="text-green-400 font-bold text-sm" style={{ fontFamily: "var(--font-display)" }}>Z</span>
          </div>
          <span className="text-xl font-bold text-white tracking-tight transition-colors duration-200 group-hover:text-green-400" style={{ fontFamily: "var(--font-display)" }}>
            Zoyeras
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-5">
          <ul className="flex gap-1 items-center bg-white/[0.03] rounded-full px-2 py-1.5 border border-white/[0.06]">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`relative px-4 py-1.5 rounded-full text-sm font-medium tracking-wide transition-all duration-200 block ${
                    activeSection === item.id
                      ? "text-white bg-white/10"
                      : "text-purple-300/75 hover:text-white hover:bg-white/5"
                  }`}
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.label[language]}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-green-400" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={() => onLanguageChange(language === "es" ? "en" : "es")}
            className="px-4 py-1.5 rounded-full border border-green-400/25 bg-green-400/5 text-sm font-semibold text-green-400 hover:text-white hover:bg-green-400/12 hover:border-green-400/45 transition-all duration-200"
            style={{ fontFamily: "var(--font-display)" }}
            aria-label={language === "es" ? "Cambiar a inglés" : "Switch to Spanish"}
          >
            {language === "es" ? "EN" : "ES"}
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-green-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-80 opacity-100 mt-2" : "max-h-0 opacity-0"}`}>
        <div className="mx-4 bg-[#0d0820]/96 py-4 px-4 rounded-2xl border border-purple-800/45 backdrop-blur-xl shadow-xl shadow-black/40">
          <button
            className="mb-4 w-full px-3 py-2 rounded-xl border border-purple-500/25 bg-purple-900/25 text-sm font-semibold text-green-300 hover:text-white hover:border-green-400/40 transition-colors"
            style={{ fontFamily: "var(--font-display)" }}
            onClick={() => onLanguageChange(language === "es" ? "en" : "es")}
          >
            {language === "es" ? "Switch to English" : "Cambiar a Español"}
          </button>
          <ul className="space-y-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`flex items-center gap-2.5 py-2.5 px-4 rounded-xl font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? "text-white bg-purple-800/55 border border-purple-600/35"
                      : "text-purple-300 hover:text-white hover:bg-purple-800/25"
                  }`}
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {activeSection === item.id && (
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
                  )}
                  {item.label[language]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
