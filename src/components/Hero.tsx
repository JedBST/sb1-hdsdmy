import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onBookDemo: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookDemo }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.8, 
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#2D2D2D] to-[#1E1E1E] overflow-hidden">
      <motion.div 
        className="container mx-auto text-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <motion.h1 
          className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#007B7F] to-[#00A3A8]"
          variants={itemVariants}
        >
          Empower Your Insurance Practice with AI
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-300"
          variants={itemVariants}
        >
          EVE: Where intelligence meets innovation for the modern New Zealand insurance adviser.
        </motion.p>
        <motion.div variants={itemVariants}>
          <button
            onClick={onBookDemo}
            className="bg-gradient-to-r from-[#007B7F] to-[#00A3A8] hover:from-[#005B63] hover:to-[#007B7F] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center mx-auto shadow-lg"
          >
            Book a Demo 
            <motion.div
              className="ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowRight size={20} />
            </motion.div>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;