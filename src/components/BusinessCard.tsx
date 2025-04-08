import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Business } from '../types';

interface BusinessCardProps {
  business: Business;
}

const BusinessCard: React.FC<BusinessCardProps> = ({ business }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      {/* Contenedor con aspect-ratio */}
      <div className="w-full aspect-[3/2] bg-gray-100">
  <img 
    src={business.imageUrl} 
    alt={business.name}
    className="w-full h-full object-contain"
  />
</div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-primary-900 mb-2">{business.name}</h3>
        <p className="text-gray-600 mb-4">{business.description}</p>
        <a
          href={business.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-800 transition-colors"
        >
          <span>Ver en Instagram</span>
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

export default BusinessCard;