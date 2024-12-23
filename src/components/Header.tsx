import React from 'react';
import { Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <nav className="flex justify-between items-center">
          <a href="#" className="text-xl font-bold text-blue-600">Portfolio</a>
          <div className="hidden md:flex gap-6">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Projects</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
          </div>
          <button className="md:hidden">
            <Menu size={24} />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;