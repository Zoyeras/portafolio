import { useEffect, useRef } from "react";
import type { Language } from "../types/language";

function useScrollReveal() {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = el.querySelectorAll<HTMLElement>(
      ".reveal, .reveal-left, .reveal-right, .reveal-scale, .heading-underline"
    );
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);
  return ref;
}

const ContactSection = ({ language }: { language: Language }) => {
  const sectionRef = useScrollReveal() as React.RefObject<HTMLElement>;

  type LocalizedText = { es: string; en: string };
  type ContactMethod = {
    icon: string;
    label: LocalizedText;
    value: string | LocalizedText;
    link: string | LocalizedText;
    accentBg: string;
    accentBorder: string;
  };

  const contactMethods: ContactMethod[] = [
    {
      icon: "/imagenes/iconoGmail.png",
      label: { es: "Email", en: "Email" },
      value: "loaizaocampos@gmail.com",
      link: "mailto:loaizaocampos@gmail.com",
      accentBg: "rgb(239 68 68 / 0.07)",
      accentBorder: "rgb(239 68 68 / 0.2)",
    },
    {
      icon: "/imagenes/iconoLinkedin-400.webp",
      label: { es: "LinkedIn", en: "LinkedIn" },
      value: "samueldavidloaiza",
      link: { es: "https://www.linkedin.com/in/samueldavidloaiza/", en: "https://www.linkedin.com/in/samueldavidloaiza/?locale=en-US" },
      accentBg: "rgb(59 130 246 / 0.07)",
      accentBorder: "rgb(59 130 246 / 0.2)",
    },
    {
      icon: "/imagenes/iconoTelefono-400.webp",
      label: { es: "Teléfono", en: "Phone" },
      value: { es: "311 261 7910", en: "+57 311 261 7910" },
      link: { es: "tel:3112617910", en: "tel:+573112617910" },
      accentBg: "rgb(74 222 128 / 0.07)",
      accentBorder: "rgb(74 222 128 / 0.2)",
    },
    {
      icon: "/imagenes/iconoHV-400.webp",
      label: { es: "CV", en: "Resume" },
      value: { es: "Descargar", en: "Download" },
      link: { es: "https://cv-kappa-rust.vercel.app/", en: "https://cv-kappa-rust.vercel.app/en" },
      accentBg: "rgb(167 139 250 / 0.07)",
      accentBorder: "rgb(167 139 250 / 0.2)",
    },
  ];

  const copy = {
    es: { eyebrow: "Hablemos", title: "Contacto", subtitle: "¿Interesado en trabajar juntos? No dudes en contactarme." },
    en: { eyebrow: "Let's talk", title: "Contact",  subtitle: "Interested in working together? Feel free to reach out." },
  };

  const text = copy[language];
  const delays = ["delay-100", "delay-200", "delay-300", "delay-400"];

  return (
    <section
      id="contacto"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="scroll-mt-24 py-28 px-6 relative overflow-hidden"
    >
      {/* Líneas separadoras estáticas */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-purple-700/35 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-purple-700/25 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-4 reveal">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-green-400/55 mb-4" style={{ fontFamily: "var(--font-display)" }}>
            {text.eyebrow}
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight section-title-glow inline-block" style={{ fontFamily: "var(--font-display)" }}>
            <span className="text-white heading-underline">{text.title}</span>
          </h2>
        </div>

        <p className="reveal delay-100 text-center text-purple-300/60 max-w-md mx-auto mb-16 leading-relaxed font-light">
          {text.subtitle}
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {contactMethods.map((method, index) => {
            const currentLink = typeof method.link === "string" ? method.link : method.link[language];
            const currentValue = typeof method.value === "string" ? method.value : method.value[language];

            return (
              <div key={index} className={`reveal-scale ${delays[index] ?? ""}`}>
                <a
                  href={currentLink}
                  target={currentLink.startsWith("http") ? "_blank" : undefined}
                  rel={currentLink.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="contact-card group flex flex-col items-center text-center p-7 relative overflow-hidden"
                >
                  {/* Glow de color en hover — solo transition, sin loop */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                    style={{ background: `radial-gradient(circle at 50% 0%, ${method.accentBg} 0%, transparent 70%)` }}
                  />

                  {/* Ícono */}
                  <div
                    className="contact-icon-tile relative w-13 h-13 mb-5 rounded-xl flex items-center justify-center transition-transform duration-250 group-hover:scale-108"
                    style={{
                      width: "52px", height: "52px",
                      background: `linear-gradient(180deg, rgb(255 255 255 / 0.07), rgb(255 255 255 / 0.02)), ${method.accentBg}`,
                      border: `1px solid ${method.accentBorder}`,
                    }}
                  >
                    <img
                      src={method.icon}
                      alt={method.label[language]}
                      className="w-7 h-7 object-contain brightness-110 contrast-110 drop-shadow-[0_1px_2px_rgb(0_0_0/0.4)]"
                    />
                  </div>

                  <h3 className="text-white font-black text-base mb-1.5 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                    {method.label[language]}
                  </h3>
                  <p className="text-purple-400/65 text-xs leading-relaxed group-hover:text-purple-300/85 transition-colors duration-200 font-light">
                    {currentValue}
                  </p>

                  {/* Flecha */}
                  <span className="mt-5 flex items-center justify-center w-7 h-7 rounded-full border border-white/10 text-purple-300/75 group-hover:border-green-400/45 group-hover:text-green-400 transition-all duration-250">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.25} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </a>
              </div>
            );
          })}
        </div>

        {/* Tagline */}
        <div className="reveal delay-500 text-center mt-14">
          <p className="text-xs text-purple-400/55 tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-display)" }}>
            {language === "es" ? "Hecho con código y café ☕" : "Built with code & coffee ☕"}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
