import { useState, useEffect, type MouseEvent } from "react";
import type { Language } from "../types/language";

const NAV_ITEMS = [
  {
    id: "sobremi",
    label: { es: "Sobre mí", en: "About" },
  },
  {
    id: "proyectos",
    label: { es: "Proyectos", en: "Projects" },
  },
  {
    id: "contacto",
    label: { es: "Contacto", en: "Contact" },
  },
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

  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.id);

    const updateActiveSection = () => {
      const viewportReference = window.innerHeight * 0.35;
      let current = sectionIds[0] ?? "";
      let smallestDistance = Number.POSITIVE_INFINITY;

      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (!element) return;

        const rect = element.getBoundingClientRect();

        if (rect.bottom <= 0 || rect.top >= window.innerHeight) {
          return;
        }

        const sectionMiddle = rect.top + rect.height / 2;
        const distance = Math.abs(sectionMiddle - viewportReference);

        if (distance < smallestDistance) {
          smallestDistance = distance;
          current = id;
        }
      });

      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const handleNavClick = (
    event: MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (!section) return;

    section.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-purple-900/80 backdrop-blur-md z-50 py-3 px-4 border-b border-purple-700/60 shadow-lg shadow-black/25">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a
          href="#"
          className="text-2xl font-bold text-green-400 hover:text-white transition-colors cursor-pointer tracking-tight"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Zoyeras
        </a>

        <div className="hidden md:flex items-center gap-5">
          <button
            className="px-3 py-1.5 rounded-full border border-purple-500/70 bg-purple-800/70 text-sm font-semibold text-green-300 hover:text-white hover:border-green-400/70 transition-colors"
            onClick={() => onLanguageChange(language === "es" ? "en" : "es")}
            aria-label={
              language === "es"
                ? "Cambiar idioma a inglés"
                : "Switch language to Spanish"
            }
          >
            {language === "es" ? "EN" : "ES"}
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-8 items-center">
            {NAV_ITEMS.map((item) => {
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`${
                      activeSection === item.id
                        ? "text-white font-semibold"
                        : "text-green-400"
                    } hover:text-white font-medium transition-colors relative group tracking-wide`}
                    onClick={(event) => handleNavClick(event, item.id)}
                  >
                    {item.label[language]}
                    <span
                      className={`absolute -bottom-1.5 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full ${
                        activeSection === item.id ? "w-full" : ""
                      }`}
                    ></span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-green-400"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? (
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
          ) : (
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-purple-800/95 mt-3 py-4 px-4 rounded-xl border border-purple-600/70 backdrop-blur-md shadow-xl shadow-black/25">
          <button
            className="mb-4 w-full px-3 py-2 rounded-lg border border-purple-500/70 bg-purple-900/60 text-sm font-semibold text-green-300 hover:text-white hover:border-green-400/70 transition-colors"
            onClick={() => onLanguageChange(language === "es" ? "en" : "es")}
            aria-label={
              language === "es"
                ? "Cambiar idioma a inglés"
                : "Switch language to Spanish"
            }
          >
            {language === "es" ? "Switch to English" : "Cambiar a Español"}
          </button>

          <ul className="space-y-3">
            {NAV_ITEMS.map((item) => {
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`block py-2 px-2 rounded-md font-medium transition-colors ${
                      activeSection === item.id
                        ? "text-white font-semibold bg-purple-700/60"
                        : "text-green-400"
                    } hover:text-white hover:bg-purple-700/40`}
                    onClick={(event) => handleNavClick(event, item.id)}
                  >
                    {item.label[language]}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
