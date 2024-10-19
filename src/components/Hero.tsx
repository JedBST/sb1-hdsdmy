import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onBookDemo: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookDemo }) => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#2D2D2D] to-[#1E1E1E]">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-5xl font-bold mb-6">Empower Your Insurance Practice with AI</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
        EVE: Where intelligence meets innovation for the modern New Zealand insurance adviser.
        </p>
        <button
          onClick={onBookDemo}
          className="bg-[#007B7F] hover:bg-[#005B63] text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 flex items-center mx-auto"
        >
          Book a Demo <ArrowRight className="ml-2" size={20} />
        </button>
      </div>
    </section>
  );
};

export default Hero;