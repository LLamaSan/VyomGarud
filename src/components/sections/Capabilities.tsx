'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { CAPABILITIES } from '@/lib/constants';
import {
  fadeInUp,
  staggerContainer,
  childFadeUp,
} from '@/lib/animations';

export const Capabilities: React.FC = () => {
  return (
    <SectionWrapper id="capabilities" background="gradient">
      {/* --- Section Heading --- */}
      <motion.div
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white/90">
          Our <span className="gradient-text">Capabilities</span>
        </h2>
        <div className="w-24 h-1 bg-linear-to-r from-charcoal-light via-orange to-charcoal-light mx-auto mb-6"></div>
        <p className="text-white/60 max-w-2xl mx-auto">
          Cutting-edge UAV solutions engineered for the most demanding operational requirements
        </p>
      </motion.div>

      {/* Cards Grid  */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-visible"
      >
        {CAPABILITIES.map((capability, index) => (
          <motion.div
            key={capability.id}
            variants={childFadeUp}
            whileHover={{
              scale: 1.05,
              y: -8,
              boxShadow: '0 8px 25px rgba(255,123,0,0.25)',
            }}
            transition={{
              type: 'spring',
              stiffness: 250,
              damping: 18,
            }}
            className="rounded-2xl relative neon-border bg-charcoal-light p-2 cursor-pointer"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: {
                  delay: index * 0.1,
                  duration: 0.5,
                  ease: 'easeOut',
                },
              }}
              viewport={{ once: true }}
              className="h-full bg-charcoal-light border border-orange/30 rounded-xl p-6 text-center glow-border flex flex-col justify-between overflow-visible"
            >
              <motion.div
                initial={{ y: 15, opacity: 0 }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 0.2 + index * 0.1,
                    duration: 0.4,
                    ease: 'easeOut',
                  },
                }}
                viewport={{ once: true }}
                className="text-orange mb-6 inline-block"
              >
                {capability.icon}
              </motion.div>

              <h3 className="text-xl font-semibold mb-3 text-orange">
                {capability.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {capability.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
};
