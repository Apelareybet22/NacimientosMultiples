import BusinessCard from "../components/BusinessCard";
import { businesses } from "../data/businesses";

const Benefits = () => {
  return (
    <div className="min-h-screen bg-primary-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-primary-900 mb-8 text-center">
          Beneficios Múltiples
        </h1>
        <p className="text-xl text-primary-700 text-center mb-12 max-w-2xl mx-auto">
          Descubre los comercios que ofrecen descuentos especiales para familias
          con múltiples
        </p>
        <p className="text-base text-primary-700 text-center mb-10 max-w-2xl mx-auto">
          Si queres acceder a los descuentos multiples, envia un email con foto de tu CI y la foto de las CI de tus multiples a xxxx@gmail.com
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businesses.map((business) => (
            <BusinessCard key={business.id} business={business} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
