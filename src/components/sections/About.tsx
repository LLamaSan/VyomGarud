'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { fadeInUp, slideInLeft, slideInRight } from '@/lib/animations';
// Import professional icons to replace emojis
import { Target, Zap, Shield } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <SectionWrapper id="about" background="grid">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white/90">
            About <span className="gradient-text">VyomGarud</span>
          </h2>
          {/* This subtle divider is more professional than a solid color */}
          <div className="w-24 h-1 bg-linear-to-r from-charcoal-light via-orange to-charcoal-light mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={slideInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-orange">
              Our Mission
            </h3>
            {/* Using text-white with opacity looks cleaner than text-gray */}
            <p className="text-white/70 leading-relaxed mb-6">
              VyomGarud is at the forefront of unmanned aerial vehicle technology, 
              delivering military-grade solutions that redefine precision, reliability, 
              and autonomous capabilities in critical defense operations.
            </p>
            <p className="text-white/70 leading-relaxed">
              We engineer UAV systems that operate seamlessly in the most challenging 
              environments, providing strategic advantages through cutting-edge artificial 
              intelligence and robust hardware design.
            </p>
          </motion.div>

          <motion.div
            variants={slideInRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="relative"
          >
            {/* The glow-border is great. We'll add a 'group' utility for hover effects */}
            <div className="bg-charcoal-light border border-orange/30 rounded-xl p-8 glow-border group">
              <div className="space-y-6">
                
                {/* Replaced 🎯 with Lucide 'Target' icon */}
                <div className="flex items-start gap-4">
                  <Target className="w-8 h-8 text-orange/70 group-hover:text-orange transition-colors duration-300" />
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-white/90">Strategic Excellence</h4>
                    <p className="text-white/60 text-sm">
                      Purpose-built systems for mission-critical operations
                    </p>
                  </div>
                </div>
                
                {/* Replaced ⚡ with Lucide 'Zap' icon */}
                <div className="flex items-start gap-4">
                  <Zap className="w-8 h-8 text-orange/70 group-hover:text-orange transition-colors duration-300" />
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-white/90">Rapid Deployment</h4>
                    <p className="text-white/60 text-sm">
                      Quick response capabilities for time-sensitive scenarios
                    </p>
                  </div>
                </div>
                
                {/* Replaced 🛡️ with Lucide 'Shield' icon */}
                <div className="flex items-start gap-4">
                  <Shield className="w-8 h-8 text-orange/70 group-hover:text-orange transition-colors duration-300" />
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-white/90">Unmatched Security</h4>
                    <p className="text-white/60 text-sm">
                      Encrypted communications and secure data handling
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};