import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-purple-900">
      <Navbar />
      <HomePage />
      <ContactSection />

      {/* WhatsApp Button */}
      <div className="fixed bottom-8 left-8 z-50 opacity-80 hover:opacity-100 transition-opacity">
        <a
          className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors"
          href="https://api.whatsapp.com/send?phone=573112617910&text=Hola%20Samuel,%20me%20gustaría%20contactarte%20para%20hablar%20sobre%20tu%20portafolio."
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="w-10 h-10"
            src="/imagenes/iconoWhatsapp-400.webp"
            alt="WhatsApp"
          />
        </a>
      </div>
    </div>
  );
}

export default App;
