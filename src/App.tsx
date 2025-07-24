import "./App.css";

function App() {
  return (
    <>
      <div>
        {" "}
        {/* Encabezado */}
        <h1 className="p-1 top-0 absolute left-0 text-green-500 bg-purple-900 w-full hover:text-purple-900 hover:bg-green-500 hover:cursor-pointer transform transition-transform transition-colors duration-1000 hover:scale-150">
          Zoyeras
        </h1>
      </div>

      <div className="absolute top-20 left-1 text-green-500 text-5xl font-bold">
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
      {/* Texto sobre mi */}
      <div className="bg-purple-900 text-white p-4 items-center gap-10 left-1 absolute top-40">
        <h2 className="text-green-500 top-0 !text-10xl">Sobre mí</h2>
        <div className="flex gap-12">
          <p className="text-justify w-1/2">
            Soy Samuel Loaiza, un apasionado de la programación y el desarrollo
            web. Me encanta crear aplicaciones y sitios web que sean funcionales
            y atractivos. Siempre estoy aprendiendo nuevas tecnologías y
            buscando mejorar mis habilidades.
          </p>
          <p className="text-justify w-1/2">
            En mi portafolio encontrarás algunos de los proyectos en los que he
            trabajado, así como información sobre mis habilidades y experiencia.
            Si tienes alguna pregunta o quieres colaborar en un proyecto, no
            dudes en contactarme.
          </p>
        </div>
      </div>
      {/* Sección de proyectos */}
      <section className="flex bg-purple-900 text-white p-4 items-center gap-10 left-1 absolute top-80">
        {/* Gestor de Tareas */}
        <div className="w-1/4">
          {/* Titulo */}
          <h2 className="text-green-500 !text-xl !font-bold">
            Gestor de Tareas
          </h2>
          {/* Imagen */}
          <img
            src="../public/imagenes/Capturas Proyectos/MisTareas Gestor-Tareas.png"
            alt="MisTareas Gestor-Tareas"
          />
          {/* Descripcion */}
          <p className="text-justify">
            Gestor de Tareas es una aplicación web que te permite gestionar tus
            tareas de manera eficiente. Manejo de registro e inicio de sesion.
            Manejo de roles, usuario y administrador. Tablero de tareas y
            usuarios en inicio de los administradores. Manejo de tokens y
            contraseñas con JWT.
          </p>
        </div>
        {/* Otro proyecto */}
        <div className="w-1/4">
          {/* Titulo */}
          <h2 className="text-green-500 !text-xl !font-bold">Titulo</h2>
          {/* Imagen */}
          <img src="#" alt="..." />
          {/* Descripcion */}
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
            eius cumque molestias quidem incidunt nemo, quam optio saepe
            tempore! Aspernatur animi obcaecati iusto qui ad praesentium iste
            officiis dolore eligendi.
          </p>
        </div>
        {/* Otro proyecto */}
        <div className="w-1/4">
          {/* Titulo */}
          <h2 className="text-green-500 !text-xl !font-bold">Titulo</h2>
          {/* Imagen */}
          <img src="#" alt="..." />
          {/* Descripcion */}
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
            eius cumque molestias quidem incidunt nemo, quam optio saepe
            tempore! Aspernatur animi obcaecati iusto qui ad praesentium iste
            officiis dolore eligendi.
          </p>
        </div>
        {/* Otro proyecto */}
        <div className="w-1/4">
          {/* Titulo */}
          <h2 className="text-green-500 !text-xl !font-bold">Titulo</h2>
          {/* Imagen */}
          <img src="#" alt="..." />
          {/* Descripcion */}
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
            eius cumque molestias quidem incidunt nemo, quam optio saepe
            tempore! Aspernatur animi obcaecati iusto qui ad praesentium iste
            officiis dolore eligendi.
          </p>
        </div>
      </section>
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
