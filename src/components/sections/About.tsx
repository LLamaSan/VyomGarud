'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { fadeInUp, slideInLeft, slideInRight } from '@/lib/animations';

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
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            About <span className="gradient-text">VyomGarud</span>
          </h2>
          <div className="w-24 h-1 bg-orange mx-auto"></div>
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
            <p className="text-gray-300 leading-relaxed mb-6">
              VyomGarud is at the forefront of unmanned aerial vehicle technology, 
              delivering military-grade solutions that redefine precision, reliability, 
              and autonomous capabilities in critical defense operations.
            </p>
            <p className="text-gray-300 leading-relaxed">
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
            <div className="bg-charcoal-light border border-orange/30 rounded-xl p-8 glow-border">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">🎯</div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Strategic Excellence</h4>
                    <p className="text-gray-400 text-sm">
                      Purpose-built systems for mission-critical operations
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-3xl">⚡</div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Rapid Deployment</h4>
                    <p className="text-gray-400 text-sm">
                      Quick response capabilities for time-sensitive scenarios
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-3xl">🛡️</div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Unmatched Security</h4>
                    <p className="text-gray-400 text-sm">
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