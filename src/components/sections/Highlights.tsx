'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { HIGHLIGHTS } from '@/lib/constants';
import { fadeInUp, scaleIn } from '@/lib/animations';
import { Award, Zap, Shield } from 'lucide-react';
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
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white/90">
          Why Choose <span className="gradient-text">VyomGarud</span>
        </h2>
        
        <div className="w-24 h-1 bg-linear-to-r from-charcoal-light via-orange to-charcoal-light mx-auto"></div>
      </motion.div> 

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {HIGHLIGHTS.map((highlight, index) => (
          <motion.div
            key={highlight.id}
            variants={scaleIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: index * 0.2 }}
            className="relative neon-border-strong card-trace rounded-2xl p-1 bg-charcoal-light/80 backdrop-blur-xl transition-transform duration-300 hover:scale-[1.08]"

          >
            <div className="bg-charcoal-light border-4 border-orange/30 rounded-xl p-8 text-center hover:border-orange-400 transition-all duration-300 h-full">
              

              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center border border-orange/20 shadow-[0_0_20px_rgba(255,123,0,0.3)] group-hover:bg-orange/20 transition-colors">
                  {highlight.icon}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 gradient-text">
                  {highlight.title}
                </h3>
            
                <p className="text-white/70 leading-relaxed">
                  {highlight.description}
                </p>
              </div>

              <div className="absolute inset-0 rounded-xl bg-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};