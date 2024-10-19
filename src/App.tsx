import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import DemoForm from './components/DemoForm';
import ChatDemo from './components/ChatDemo';
import Footer from './components/Footer';

function App() {
  const [showDemoForm, setShowDemoForm] = useState(false);

  return (
    <div className="min-h-screen bg-[#1E1E1E] text-[#E0E0E0] font-sans">
      <Header />
      <Hero onBookDemo={() => setShowDemoForm(true)} />
      <Features />
      <ChatDemo />
      {showDemoForm && <DemoForm onClose={() => setShowDemoForm(false)} />}
      <Footer />
    </div>
  );
}

export default App;