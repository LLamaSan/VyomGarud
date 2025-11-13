'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Card } from '@/components/ui/Card';
import { CAPABILITIES } from '@/lib/constants';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export const Capabilities: React.FC = () => {
  return (
    <SectionWrapper id="capabilities" background="gradient">
      <motion.div
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          Our <span className="gradient-text">Capabilities</span>
        </h2>
        <div className="w-24 h-1 bg-orange mx-auto mb-6"></div>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Cutting-edge UAV solutions engineered for the most demanding operational requirements
        </p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {CAPABILITIES.map((capability, index) => (
          <Card key={capability.id} delay={index * 0.1}>
            <div className="text-center">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
                className="text-6xl mb-4 inline-block"
              >
                {capability.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-3 text-orange">
                {capability.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {capability.description}
              </p>
            </div>
          </Card>
        ))}
      </motion.div>
    </SectionWrapper>
  );
};