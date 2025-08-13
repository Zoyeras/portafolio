import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-purple-900/90 backdrop-blur-sm z-50 py-3 px-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-400 hover:text-purple-300 transition-colors cursor-pointer">
          Zoyeras
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8">
          {["Sobre mí", "Proyectos", "Contacto"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="text-green-400 hover:text-white font-medium transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-green-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-purple-800 mt-3 py-4 px-4 rounded-lg">
          <ul className="space-y-3">
            {["Sobre mí", "Proyectos", "Contacto"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  className="block text-green-400 hover:text-white py-2 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
