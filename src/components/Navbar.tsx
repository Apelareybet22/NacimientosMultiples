import React from 'react';
import { Link } from 'react-router-dom';
import { Baby, Home, CreditCard } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-primary-500 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Baby className="h-8 w-8" />
            <span className="font-bold text-lg">Nacimientos Múltiples UY</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="flex items-center space-x-1 hover:text-primary-200 transition-colors">
              <Home className="h-5 w-5" />
              <span>Inicio</span>
            </Link>
            <Link to="/benefits" className="flex items-center space-x-1 hover:text-primary-200 transition-colors">
              <Baby className="h-5 w-5" />
              <span>Beneficios</span>
            </Link>
            <Link to="/credential" className="flex items-center space-x-1 hover:text-primary-200 transition-colors">
              <CreditCard className="h-5 w-5" />
              <span>Credencial</span>
            </Link>
          </div>
          
          <div className="md:hidden">
            <button className="p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;