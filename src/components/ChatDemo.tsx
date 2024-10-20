import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { User, Bot, FileSearch, Brain, Users, Globe } from 'lucide-react';

interface Message {
  text: string;
  isUser: boolean;
  icon?: React.ElementType;
}

const ChatDemo: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const conversation = [
    { text: "Hi EVE, I'm preparing for a client meeting. Can you help me analyze their current situation?", isUser: true },
    { text: "Of course! I'd be happy to help. Please provide me with their information.", isUser: false, icon: FileSearch },
    { text: "Great, I've uploaded their personal information and current covers. Can you analyse and look for any potential gaps in coverage?", isUser: true },
    { text: "Certainly! I've analyzed their financial position and existing cover. Here are the key points:\n\n1. Life cover: $500,000\n2. TPD cover: $300,000\n3. Income protection: 75% of income, 13-week wait period\n\nPotential gaps:\n1. No trauma cover\n2. Income protection wait period could be reduced\n\nWould you like me to generate some recommendations based on this analysis?", isUser: false, icon: Brain },
    { text: "Yes, please. The client is 35 years old, works in finance, and has two young children.", isUser: true },
    { text: "Based on the client's profile and current coverage, here are my recommendations:\n\n1. Add trauma cover: $200,000\n2. Increase TPD cover to $500,000\n3. Reduce income protection wait period to 4 weeks\n4. Consider adding children's trauma benefit\n\nThese recommendations aim to provide more comprehensive coverage for the client's life stage and family situation. Would you like me to prepare a detailed report for your client meeting?", isUser: false, icon: Users },
    { text: "That would be fantastic, EVE. ", isUser: true },
    { text: "The report will be ready in a few moments.", isUser: false, icon: Globe },
    { text: "Thanks, EVE. You've made my preparation so much easier and more thorough. I'm confident this will lead to a productive client meeting.", isUser: true },
    { text: "You're welcome! I'm glad I could assist you in preparing for your client meeting. Remember, I'm always here to help with policy analysis, recommendations, and industry insights. Good luck with your meeting, and don't hesitate to consult me again if you need any further information or support!", isUser: false },
  ];

  useEffect(() => {
    if (inView && currentIndex < conversation.length) {
      const timer = setTimeout(() => {
        setMessages(prev => [...prev, conversation[currentIndex]]);
        setCurrentIndex(prev => prev + 1);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const messageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section ref={ref} id="demo" className="py-20 bg-gradient-to-b from-[#1E1E1E] to-[#2D2D2D]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Experience EVE in Action</h2>
        <motion.div 
          className="max-w-3xl mx-auto bg-[#2D2D2D] rounded-lg shadow-2xl p-6 h-[600px] overflow-y-auto border border-[#007B7F]"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {messages.map((message, index) => (
            <motion.div
              key={index}
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} mb-4`}
              variants={messageVariants}
            >
              <div className={`flex items-start ${message.isUser ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`rounded-full p-2 ${message.isUser ? 'bg-[#007B7F]' : 'bg-gray-700'} ${message.isUser ? 'ml-2' : 'mr-2'} shadow-lg`}>
                  {message.isUser ? <User size={24} /> : message.icon ? <message.icon size={24} /> : <Bot size={24} />}
                </div>
                <div
                  className={`max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-lg p-4 ${
                    message.isUser ? 'bg-[#007B7F] text-white' : 'bg-gray-700'
                  } shadow-lg transform transition-all duration-300 hover:scale-105`}
                >
                  <p className="text-sm md:text-base">{message.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ChatDemo;