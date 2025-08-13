const AboutSection = () => {
  const skills = [
    { name: "React", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Express", level: 75 },
    { name: "MongoDB", level: 70 },
    { name: "Tailwind CSS", level: 95 },
  ];

  return (
    <section id="sobremi" className="py-20 px-4 bg-purple-900/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16 text-green-400">
          Sobre <span className="text-white">Mí</span>
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-2/5 flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-purple-600 rounded-full blur-xl opacity-75 animate-pulse group-hover:opacity-100 transition-opacity"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl transform transition-transform group-hover:scale-105">
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
              <div className="bg-purple-800/50 p-6 rounded-xl border border-purple-700 hover:border-green-400 transition-colors">
                <h3 className="text-green-400 font-bold text-xl mb-4">
                  Mis habilidades
                </h3>
                <div className="space-y-4">
                  {skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="w-full bg-purple-700 rounded-full h-2">
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-purple-800/50 p-6 rounded-xl border border-purple-700 hover:border-green-400 transition-colors">
                <h3 className="text-green-400 font-bold text-xl mb-4">
                  Mi enfoque
                </h3>
                <p className="mb-4">
                  Desarrollo soluciones escalables con código limpio y bien
                  documentado. Me especializo en crear aplicaciones que
                  solucionan problemas reales con interfaces intuitivas.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "Responsive Design",
                    "Performance",
                    "SEO",
                    "Accesibilidad",
                  ].map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-purple-700 text-green-300 text-sm rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
