import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ContactSection from "./components/ContactSection";
import type { Language } from "./types/language";

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [language, setLanguage] = useState<Language>("es");

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === "es" ? "es" : "en";
  }, [language]);

  return (
    <div className="min-h-screen overflow-x-hidden text-white" style={{ background: "var(--bg-deep)" }}>
      <Navbar language={language} onLanguageChange={setLanguage} />
      <HomePage language={language} />
      <ContactSection language={language} />

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-purple-900/25">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-purple-400/55 text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-display)" }}>
            © {new Date().getFullYear()} Samuel Loaiza
          </span>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-500/45 text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-display)" }}>
              {language === "es" ? "Disponible" : "Available"}
            </span>
          </div>
        </div>
      </footer>

      {/* WhatsApp FAB */}
      <div className="fixed bottom-8 left-8 z-50">
        <a
          href={
            language === "es"
              ? "https://api.whatsapp.com/send?phone=573112617910&text=Hola%20Samuel,%20me%20gustaría%20contactarte%20para%20hablar%20sobre%20tu%20portafolio."
              : "https://api.whatsapp.com/send?phone=573112617910&text=Hi%20Samuel,%20I%20would%20like%20to%20contact%20you%20about%20your%20portfolio."
          }
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg shadow-black/35 hover:shadow-[0_0_18px_rgb(37_211_102/0.35)] hover:scale-105 transition-all duration-250"
        >
          <img className="w-7 h-7" src="/imagenes/iconoWhatsapp-400.webp" alt="WhatsApp" />
        </a>
      </div>

      {/* Scroll to top FAB */}
      <div
        className={`fixed bottom-8 right-8 z-50 transition-all duration-300 ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
        }`}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group flex items-center justify-center w-11 h-11 rounded-full border border-purple-700/45 bg-purple-950/75 backdrop-blur-sm hover:border-green-400/45 hover:bg-purple-900/75 shadow-lg shadow-black/25 transition-all duration-250 hover:scale-105"
          aria-label={language === "es" ? "Volver arriba" : "Back to top"}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-300 group-hover:text-green-400 transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default App;
