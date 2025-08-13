import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["sobremi", "proyectos", "contacto"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      setActiveSection(currentSection || "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Get section ID from nav item text
  const getSectionId = (item: string) => {
    return item.toLowerCase().replace(" ", "");
  };

  return (
    <nav className="fixed top-0 w-full bg-purple-900/90 backdrop-blur-sm z-50 py-3 px-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a
          href="#"
          className="text-2xl font-bold text-green-400 hover:text-purple-300 transition-colors cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Zoyeras
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8">
          {["Sobre mí", "Proyectos", "Contacto"].map((item) => {
            const sectionId = getSectionId(item);
            return (
              <li key={item}>
                <a
                  href={`#${sectionId}`}
                  className={`${
                    activeSection === sectionId
                      ? "text-white font-bold"
                      : "text-green-400"
                  } hover:text-white font-medium transition-colors relative group`}
                >
                  {item}
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all group-hover:w-full ${
                      activeSection === sectionId ? "w-full" : ""
                    }`}
                  ></span>
                </a>
              </li>
            );
          })}
        </ul>

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
        <div className="md:hidden bg-purple-800/95 mt-3 py-4 px-4 rounded-lg backdrop-blur-sm">
          <ul className="space-y-3">
            {["Sobre mí", "Proyectos", "Contacto"].map((item) => {
              const sectionId = getSectionId(item);
              return (
                <li key={item}>
                  <a
                    href={`#${sectionId}`}
                    className={`block py-2 font-medium ${
                      activeSection === sectionId
                        ? "text-white font-bold"
                        : "text-green-400"
                    } hover:text-white`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
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
