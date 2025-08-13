const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-green-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
          <span className="text-green-400">Samuel</span> Loaiza
        </h1>
        <div className="bg-gradient-to-r from-green-400 to-purple-500 h-1 w-32 mx-auto mb-8"></div>

        <h2 className="text-2xl md:text-3xl text-purple-200 mb-10 max-w-3xl mx-auto">
          Desarrollador Fullstack apasionado por crear soluciones web
          innovadoras
        </h2>

        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <a
            href="#proyectos"
            className="px-8 py-3 bg-green-500 text-white font-medium rounded-full hover:bg-green-600 transition-colors shadow-lg flex items-center justify-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
            Ver Proyectos
          </a>
          <a
            href="#contacto"
            className="px-8 py-3 bg-transparent border-2 border-green-500 text-green-400 font-medium rounded-full hover:bg-green-500/10 transition-colors flex items-center justify-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Contactar
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
