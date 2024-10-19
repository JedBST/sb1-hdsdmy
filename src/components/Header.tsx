import React from 'react';
import { Bot } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-[#2D2D2D] py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <Bot className="text-[#007B7F] mr-2" size={32} />
          <span className="text-2xl font-bold text-[#E0E0E0]">EVE</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#features" className="hover:text-[#007B7F] transition-colors duration-300">Features</a></li>
            <li><a href="#demo" className="hover:text-[#007B7F] transition-colors duration-300">Demo</a></li>
            <li><a href="#privacy" className="hover:text-[#007B7F] transition-colors duration-300">Privacy</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;