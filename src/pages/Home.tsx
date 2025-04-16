import { Heart, Users, Phone } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-900 mb-4 font-poppins">
            Nacimientos Múltiples UY
          </h1>
          <p className="text-xl text-primary-700 max-w-2xl mx-auto font-poppins">
            Apoyando a las familias con nacimientos múltiples en Uruguay
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Heart className="h-12 w-12 text-primary-500 mx-auto mb-4 font-poppins" />
            <h2 className="text-xl font-semibold mb-2">Nuestra Misión</h2>
            <p className="text-gray-600">
              Brindar apoyo y recursos a familias con nacimientos múltiples en
              Uruguay
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Users className="h-12 w-12 text-primary-500 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Comunidad</h2>
            <p className="text-gray-600">
              Conectamos familias para compartir experiencias y apoyo mutuo
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Phone className="h-12 w-12 text-primary-500 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Contacto</h2>
            <p className="text-gray-600">
              Estamos aquí para ayudarte en tu camino con múltiples
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-primary-900 mb-6 text-center">
            Contáctanos
          </h2>
          <div className="max-w-lg mx-auto">
            <p className="text-gray-600 text-center mb-4">
              ¿Tienes preguntas? Estamos aquí para ayudarte.
            </p>
            <div className="text-center">
              <a
                href="mailto:contacto@nacimientosmultiples.uy"
                className="text-primary-600 hover:text-primary-800 font-medium"
              >
                nacimientosmultiplesuruguay@gmail.com
                <div className="text-center">
                  <a
                    href="https://www.instagram.com/nacimientosmultiples.uy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-800 font-medium"
                  >
                    Síguenos en Instagram: @nacimientosmultiples.uy
                  </a>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
