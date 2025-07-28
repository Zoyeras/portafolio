import "./App.css";

function App() {
  return (
    <>
      {/* Encabezado */}
      <div className="relative flex justify-center bg-purple-900 hover:bg-green-500">
        <h1 className="p-2 text-green-500 hover:text-purple-900 hover:cursor-pointer">
          Zoyeras
        </h1>
      </div>
      {/* Navegación */}
      <nav className="absolute right-5 top-20">
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
      {/* Contenedor foto y texto sobre mi */}
      <div className="relative flex mx-10 my-15">
        {/* Foto */}
        <div className="mx-auto flex relative w-150 h-150 overflow-hidden rounded-full">
          <img
            className="w-full h-full object-center"
            src="/imagenes/fotoMia-800.webp"
            alt="Foto Samuel"
          />
        </div>

        {/* Texto sobre mi */}
        <div
          id="sobreMi"
          className="relative bg-purple-900 text-white p-4 items-center w-1/2"
        >
          <h2 className="text-green-500 !text-2xl text-center">Sobre mí</h2>
          <div className="flex gap-12">
            <p className="text-justify w-2/4">
              Soy Samuel Loaiza, un apasionado de la programación y el
              desarrollo web. Me encanta crear aplicaciones y sitios web que
              sean funcionales y atractivos. Siempre estoy aprendiendo nuevas
              tecnologías y buscando mejorar mis habilidades.
            </p>
            <p className="text-justify w-2/4">
              En mi portafolio encontrarás algunos de los proyectos en los que
              he trabajado, así como información sobre mis habilidades y
              experiencia. Si tienes alguna pregunta o quieres colaborar en un
              proyecto, no dudes en contactarme.
            </p>
          </div>
          <h2 className="text-green-500 !text-5xl text-center p-20">
            Portafolio de Samuel Loaiza
          </h2>
        </div>
      </div>
      {/* Sección de proyectos */}
      <section
        id="proyectos"
        className="relative flex bg-purple-900 text-white p-4 items-center gap-10 top-10"
      >
        {/* Gestor de Tareas */}
        <div className="w-1/4">
          {/* Titulo */}
          <h2 className="text-green-500 !text-xl !font-bold">
            Gestor de Tareas
          </h2>
          {/* Imagen */}
          <img
            src="/imagenes/Capturas Proyectos/MisTareas Gestor-Tareas.png"
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
      {/* Sección de contacto */}
      <div className="relative flex gap-30 bg-purple-900 items-center top-20">
        {/*<h2 className="text-green-500 !text-10xl text-center">Contacto</h2>*/}
        <p className="text-justify w-1/4">
          Si tienes alguna pregunta o quieres colaborar en un proyecto, no dudes
          en contactarme. Puedes encontrarme en redes sociales o enviarme un
          correo electr&oacute;nico.
        </p>
        <a href="mailto:loaizaocampos@gmail.com">
          <img
            className="w-20 h-20"
            src="/imagenes/iconoGmail.png"
            alt="Icono de Gmail"
          />
        </a>
        <a href="https://www.linkedin.com/in/samueldavidloaiza/">
          <img
            className="w-20 h-20"
            src="/imagenes/iconoLinkedin.png"
            alt="Icono de linkedin"
          />
        </a>
        <img
          className="w-20 h-20"
          src="imagenes/iconoTelefono.png"
          alt="Icono de Telefono"
        />
      </div>
      {/* Botón de Whatsapp */}
      <a
        className="fixed shadow-lg bottom-5 left-5 w-auto h-auto flex items-center justify-center bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
        href="https://api.whatsapp.com/send?phone=573112617910&text=Hola%20Samuel,%20me%20gustaría%20contactarte%20para%20hablar%20sobre%20tu%20portafolio."
        target="_blank"
      >
        <img
          className="w-14 h-auto m-2"
          src="/imagenes/iconoWhatsapp.webp"
          alt="Icono Whatsapp"
        />
      </a>
    </>
  );
}

export default App;
