const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
          <span className="text-green-400">Samuel</span> Loaiza
        </h1>
        <div className="bg-gradient-to-r from-green-400 to-purple-500 h-1 w-32 mx-auto mb-8"></div>

        <h2 className="text-2xl md:text-3xl text-purple-200 mb-10 max-w-3xl mx-auto">
          Desarrollador Fullstack apasionado por crear soluciones web
          innovadoras
        </h2>

        <div className="flex justify-center gap-6">
          <a
            href="#proyectos"
            className="px-8 py-3 bg-green-500 text-white font-medium rounded-full hover:bg-green-600 transition-colors shadow-lg"
          >
            Ver Proyectos
          </a>
          <a
            href="#contacto"
            className="px-8 py-3 bg-transparent border-2 border-green-500 text-green-400 font-medium rounded-full hover:bg-green-500/10 transition-colors"
          >
            Contactar
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
