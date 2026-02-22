import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ContactSection from "./components/ContactSection";
import type { Language } from "./types/language";

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [language, setLanguage] = useState<Language>("es");

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-black to-purple-900 overflow-x-hidden text-white">
      <Navbar language={language} onLanguageChange={setLanguage} />
      <HomePage language={language} />
      <ContactSection language={language} />

      {/* WhatsApp Button */}
      <div className="fixed bottom-8 left-8 z-50 opacity-85 hover:opacity-100 transition-opacity">
        <a
          className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-lg shadow-black/30 hover:bg-green-600 transition-colors"
          href={
            language === "es"
              ? "https://api.whatsapp.com/send?phone=573112617910&text=Hola%20Samuel,%20me%20gustaría%20contactarte%20para%20hablar%20sobre%20tu%20portafolio."
              : "https://api.whatsapp.com/send?phone=573112617910&text=Hi%20Samuel,%20I%20would%20like%20to%20contact%20you%20about%20your%20portfolio."
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-10 h-10"
            src="/imagenes/iconoWhatsapp-400.webp"
            alt={language === "es" ? "WhatsApp" : "WhatsApp Contact"}
          />
        </a>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-purple-700 rounded-full shadow-lg shadow-black/30 flex items-center justify-center hover:bg-purple-600 transition-colors group"
          aria-label={language === "es" ? "Volver arriba" : "Back to top"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-green-400 group-hover:text-white transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      )}
    </div>
  );
}

export default App;
