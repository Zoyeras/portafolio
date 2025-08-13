const ContactSection = () => {
  const contactMethods = [
    {
      icon: "/imagenes/iconoGmail.png",
      label: "Email",
      value: "loaizaocampos@gmail.com",
      link: "mailto:loaizaocampos@gmail.com",
    },
    {
      icon: "/imagenes/iconoLinkedin-400.webp",
      label: "LinkedIn",
      value: "samueldavidloaiza",
      link: "https://www.linkedin.com/in/samueldavidloaiza/",
    },
    {
      icon: "imagenes/iconoTelefono-400.webp",
      label: "Teléfono",
      value: "311 261 7910",
      link: "tel:3112617910",
    },
    {
      icon: "imagenes/iconoHV-400.webp",
      label: "CV",
      value: "Descargar",
      link: "assets/Hoja de vida Samuel Loaiza.pdf",
    },
  ];

  return (
    <section id="contacto" className="py-20 px-4 bg-purple-900/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-green-400">
          <span className="text-white">Contacto</span>
        </h2>
        <p className="text-center text-purple-300 max-w-2xl mx-auto mb-16">
          ¿Interesado en trabajar juntos? No dudes en contactarme
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              target="_blank"
              rel="noreferrer"
              className="bg-gradient-to-br from-purple-800 to-black rounded-xl p-6 border border-purple-700 hover:border-green-400 transition-all group flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 mb-5 bg-purple-700 rounded-full flex items-center justify-center group-hover:bg-green-500 transition-colors">
                <img
                  src={method.icon}
                  alt={method.label}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <h3 className="text-green-400 font-bold text-xl mb-2 group-hover:text-white transition-colors">
                {method.label}
              </h3>
              <p className="text-gray-300 group-hover:text-white transition-colors">
                {method.value}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
