import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FileSearch, Brain, Users, Globe, Lock, Zap } from 'lucide-react';

const features = [
  {
    icon: FileSearch,
    title: 'Policy Wording Search',
    description: 'Quickly search and cite specific insurance policy wordings.',
    details: 'Instantly locate relevant clauses and definitions within complex policy documents, saving time and improving accuracy in client communications.'
  },
  {
    icon: Brain,
    title: 'Insurance Recommendation Engine',
    description: 'Generate tailored insurance recommendations based on client information.',
    details: 'Leverage AI to analyze client data and provide personalized insurance product suggestions, ensuring comprehensive coverage and identifying potential gaps.'
  },
  {
    icon: Users,
    title: 'Client Information Analysis',
    description: 'Analyse and manage client information for personalized services.',
    details: 'Gain deeper insights into client needs by processing and interpreting various data points, enabling more informed and tailored advice.'
  },
  {
    icon: Globe,
    title: 'Web Page Summarisation',
    description: 'Summarise articles and long-form content efficiently.',
    details: 'Quickly digest and extract key information from industry news, regulatory updates, and market trends to stay informed and ahead of the curve.'
  },
  {
    icon: Lock,
    title: 'Privacy Focused',
    description: 'Designed with strict privacy considerations and no data retention.',
    details: 'Ensure client confidentiality with a system that processes queries in isolation, leaving no trace of sensitive information after each session.'
  },
  {
    icon: Zap,
    title: 'Seamless Integration',
    description: 'Always accessible as a browser extension, ready to assist.',
    details: "Access EVE's capabilities directly within your workflow, eliminating the need to switch between multiple applications and increasing productivity."
  },
];

const FeatureCard = ({ icon: Icon, title, description, details, index }) => {
  const cardVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      className="bg-[#2D2D2D] p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer overflow-hidden relative group"
    >
      <motion.div
        initial={{ opacity: 1 }}
        whileHover={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <Icon className="text-[#007B7F] mb-4" size={40} />
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p>{description}</p>
      </motion.div>
      <motion.div
        className="absolute inset-0 bg-[#007B7F] p-6 flex flex-col justify-center items-center"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-white text-center">{details}</p>
      </motion.div>
    </motion.div>
  );
};

const Features = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section id="features" className="py-20 bg-[#1E1E1E]">
      <div className="container mx-auto px-4">
        <motion.h2
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={titleVariants}
          className="text-4xl font-bold text-center mb-12"
        >
          Key Features
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
