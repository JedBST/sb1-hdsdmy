import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import DemoForm from './components/DemoForm';
import ChatDemo from './components/ChatDemo';
import Footer from './components/Footer';

const SectionWrapper = ({ children, threshold = 0.1 }) => {
  const [ref, inView] = useInView({
    threshold,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

function App() {
  const [showDemoForm, setShowDemoForm] = useState(false);

  return (
    <div className="min-h-screen bg-[#1E1E1E] text-[#E0E0E0] font-sans">
      <Header />
      <Hero onBookDemo={() => setShowDemoForm(true)} />
      <SectionWrapper threshold={0.2}>
        <Features />
      </SectionWrapper>
      <SectionWrapper>
        <ChatDemo />
      </SectionWrapper>
      {showDemoForm && <DemoForm onClose={() => setShowDemoForm(false)} />}
      <SectionWrapper>
        <Footer />
      </SectionWrapper>
    </div>
  );
}

export default App;
