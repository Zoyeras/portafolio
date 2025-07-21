import "./App.css";

function App() {
  return (
    <>
      <div>
        {" "}
        {/* Encabezado */}
        <h1 className="p-1 top-0 absolute left-0 justify-center text-green-500 bg-purple-900 w-full">
          Zoyeras
        </h1>
      </div>

      <div className="titulo">
        <h2>Portafolio de Samuel Loaiza</h2>
      </div>
      {/* Navegación */}
      <nav className="absolute right-5 top-32">
        <ul className="flex p-0 m-0 gap-4">
          <li>
            <a className="!text-green-500" href="#sobreMi">
              Sobre mí
            </a>
          </li>
          <li>
            <a className="!text-green-500" href="#proyectos">
              Proyectos
            </a>
          </li>
          <li>
            <a className="!text-green-500" href="#contacto">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
      {/* Sección de Proyectos */}
      <div className="bg-purple-900 text-white p-4 items-center text-justify-center w-1/2 left-1 absolute top-40">
        <h2 className="text-green-500">Sobre mí</h2>
        <p className="text-justify">
          Soy Samuel Zoyeras, un apasionado de la programación y el desarrollo
          web. Me encanta crear aplicaciones y sitios web que sean funcionales y
          atractivos. Siempre estoy aprendiendo nuevas tecnologías y buscando
          mejorar mis habilidades.
        </p>
        <p>
          En mi portafolio encontrarás algunos de los proyectos en los que he
          trabajado, así como información sobre mis habilidades y experiencia.
          Si tienes alguna pregunta o quieres colaborar en un proyecto, no dudes
          en contactarme.
        </p>
      </div>
      {/* Botón de Whatsapp */}
      <a
        className="absolute bottom-5 left-5 w-auto h-auto flex items-center justify-center bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
        href="https://api.whatsapp.com/send?phone=573112617910&text=Hola%20Samuel,%20me%20gustaría%20contactarte%20para%20hablar%20sobre%20tu%20portafolio."
        target="_blank"
      >
        <img
          className="w-14 h-auto m-2"
          src="../public/imagenes/iconoWhatsapp.png"
          alt="Icono Whatsapp"
        />
      </a>
    </>
  );
}

export default App;
