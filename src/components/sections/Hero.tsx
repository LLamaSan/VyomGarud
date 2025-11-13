'use client';

import React from 'react';
import { motion } from 'framer-motion';
// --- FIX: Corrected import paths ---
import { Button } from '@/components/ui/Button'; 
import { COMPANY_INFO } from '@/lib/constants'; 
import { fadeInUp } from '@/lib/animations'; 
// Import professional icons
import { Signal, ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal">
      {/* Animated background grid */}
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      
      {/* Animated orange glow effect */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange/20 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-orange/20 rounded-full blur-3xl"
      />

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo/Company Name */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="mb-8"
          >
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-4">
              <span className="gradient-text">{COMPANY_INFO.name}</span>
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.2 }}
            className="text-xl sm:text-2xl lg:text-3xl text-white/80 mb-6 font-light"
          >
            {COMPANY_INFO.tagline}
          </motion.p>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.4 }}
            className="text-base sm:text-lg text-white/60 mb-12 max-w-3xl mx-auto"
          >
            {COMPANY_INFO.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button size="lg" onClick={scrollToContact}>
              Get in Touch
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Capabilities
            </Button>
          </motion.div>

          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="mt-20 text-orange/20 flex justify-center"
          >
            
            <Signal size={128} strokeWidth={0.5} />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-orange"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
};