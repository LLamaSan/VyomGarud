'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { HIGHLIGHTS } from '@/lib/constants';
import { fadeInUp, scaleIn } from '@/lib/animations';

export const Highlights: React.FC = () => {
  return (
    <SectionWrapper id="highlights" background="default">
      <motion.div
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          Why Choose <span className="gradient-text">VyomGarud</span>
        </h2>
        <div className="w-24 h-1 bg-orange mx-auto"></div>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {HIGHLIGHTS.map((highlight, index) => (
          <motion.div
            key={highlight.id}
            variants={scaleIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="relative group"
          >
            <div className="bg-charcoal-light border-2 border-orange/30 rounded-xl p-8 text-center hover:border-orange transition-all duration-300 h-full">
              {/* Number Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 bg-orange rounded-full flex items-center justify-center text-white font-bold text-xl shadow-[0_0_20px_rgba(255,123,0,0.5)]">
                  {highlight.id}
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-bold mb-4 gradient-text">
                  {highlight.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {highlight.description}
                </p>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-xl bg-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};