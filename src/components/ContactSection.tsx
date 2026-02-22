import type { Language } from "../types/language";

const ContactSection = ({ language }: { language: Language }) => {
  type LocalizedText = { es: string; en: string };
  type ContactMethod = {
    icon: string;
    label: LocalizedText;
    value: string | LocalizedText;
    link: string | LocalizedText;
  };

  const contactMethods: ContactMethod[] = [
    {
      icon: "/imagenes/iconoGmail.png",
      label: { es: "Email", en: "Email" },
      value: "loaizaocampos@gmail.com",
      link: "mailto:loaizaocampos@gmail.com",
    },
    {
      icon: "/imagenes/iconoLinkedin-400.webp",
      label: { es: "LinkedIn", en: "LinkedIn" },
      value: "samueldavidloaiza",
      link: {
        es: "https://www.linkedin.com/in/samueldavidloaiza/",
        en: "https://www.linkedin.com/in/samueldavidloaiza/?locale=en-US",
      },
    },
    {
      icon: "/imagenes/iconoTelefono-400.webp",
      label: { es: "Teléfono", en: "Phone" },
      value: { es: "311 261 7910", en: "+57 311 261 7910" },
      link: {
        es: "tel:3112617910",
        en: "tel:+573112617910",
      },
    },
    {
      icon: "/imagenes/iconoHV-400.webp",
      label: { es: "CV", en: "Resume" },
      value: { es: "Descargar", en: "Download" },
      link: {
        es: "/CV_Samuel_Loaiza_Backend_NET_ES.pdf",
        en: "/CV_Samuel_Loaiza_Backend_NET_EN.pdf",
      },
    },
  ];

  const copy = {
    es: {
      title: "Contacto",
      subtitle: "¿Interesado en trabajar juntos? No dudes en contactarme",
    },
    en: {
      title: "Contact",
      subtitle: "Interested in working together? Feel free to contact me",
    },
  };

  const text = copy[language];

  return (
    <section id="contacto" className="scroll-mt-28 py-24 px-4 bg-purple-900/45">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-green-400 tracking-tight">
          <span className="text-white">{text.title}</span>
        </h2>
        <p className="text-center text-purple-200/90 max-w-2xl mx-auto mb-14 leading-relaxed">
          {text.subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactMethods.map((method, index) => {
            const currentLink =
              typeof method.link === "string"
                ? method.link
                : method.link[language];
            const currentValue =
              typeof method.value === "string"
                ? method.value
                : method.value[language];

            return (
              <a
                key={index}
                href={currentLink}
                target={currentLink.startsWith("http") ? "_blank" : undefined}
                rel={
                  currentLink.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="bg-gradient-to-br from-purple-900/95 to-black rounded-2xl p-6 border border-purple-700/70 hover:border-green-400/80 transition-all duration-300 group flex flex-col items-center text-center hover:-translate-y-1.5 shadow-xl shadow-black/25"
              >
                <div className="w-16 h-16 mb-5 bg-purple-800 rounded-full border border-purple-600 flex items-center justify-center group-hover:bg-green-500 transition-colors">
                  <img
                    src={method.icon}
                    alt={method.label[language]}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <h3 className="text-green-400 font-bold text-xl mb-2 group-hover:text-white transition-colors tracking-tight">
                  {method.label[language]}
                </h3>
                <p className="text-gray-300 group-hover:text-white transition-colors leading-relaxed">
                  {currentValue}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
