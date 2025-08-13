const AboutSection = () => {
  return (
    <section id="sobremi" className="py-20 px-4 bg-purple-900/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16 text-green-400">
          Sobre <span className="text-white">Mí</span>
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-2/5 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-purple-600 rounded-full blur-xl opacity-75 animate-pulse"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img
                  className="w-full h-full object-cover"
                  src="imagenes/fotoMia-800.webp"
                  alt="Foto Samuel"
                />
              </div>
            </div>
          </div>

          <div className="lg:w-3/5 text-white">
            <p className="text-lg mb-6 leading-relaxed">
              ¡Hola! Soy Samuel Loaiza, un apasionado desarrollador fullstack
              con experiencia en la creación de aplicaciones web modernas y
              eficientes. Mi enfoque combina diseño atractivo con funcionalidad
              robusta para ofrecer experiencias de usuario excepcionales.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-purple-800/50 p-6 rounded-xl border border-purple-700">
                <h3 className="text-green-400 font-bold text-xl mb-3">
                  Mis habilidades
                </h3>
                <ul className="space-y-2">
                  {[
                    "React",
                    "Node.js",
                    "Express",
                    "MongoDB",
                    "TypeScript",
                    "Tailwind CSS",
                  ].map((skill) => (
                    <li key={skill} className="flex items-center">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-purple-800/50 p-6 rounded-xl border border-purple-700">
                <h3 className="text-green-400 font-bold text-xl mb-3">
                  Mi enfoque
                </h3>
                <p>
                  Desarrollo soluciones escalables con código limpio y bien
                  documentado. Me especializo en crear aplicaciones que
                  solucionan problemas reales con interfaces intuitivas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
