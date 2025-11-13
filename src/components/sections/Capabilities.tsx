'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Card } from '@/components/ui/Card';
import { CAPABILITIES } from '@/lib/constants';
import { fadeInUp, staggerContainer } from '@/lib/animations';
// Import icons. You'll need to update your CAPABILITIES constant to use these.
import { BrainCircuit, Signal, Crosshair, Package } from 'lucide-react';

// --- IMPORTANT ---
// You MUST update your `lib/constants.ts` file.
// The `CAPABILITIES` array should now use components instead of emoji strings.
//
// Example:
// export const CAPABILITIES = [
//   {
//     id: 'ai',
//     title: 'Autonomous AI',
//     description: '...',
//     icon: <BrainCircuit className="w-16 h-16" /> 
//   },
//   {
//     id: 'comms',
//     title: 'Secure Comms',
//     description: '...',
//     icon: <Signal className="w-16 h-16" />
//   },
//   // etc.
// ];
//
// I've written the code below assuming you've made this change.

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
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white/90">
          Our <span className="gradient-text">Capabilities</span>
        </h2>
        <div className="w-24 h-1 bg-linear-to-r from-charcoal-light via-orange to-charcoal-light mx-auto mb-6"></div>
        <p className="text-white/60 max-w-2xl mx-auto">
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
          // We use the 'card-hover' utility class from your Global.css
          // (transform: scale(1.05) and box-shadow)
          // This is much better than the 360 rotate.
          <Card key={capability.id} delay={index * 0.1} className="card-hover">
            <div className="text-center">
              {/* This div now renders the icon component from your constant.
                We give it an orange color and a subtle 'float' animation.
              */}
              <div
                className="text-orange mb-6 inline-block animate-float"
              >
                {capability.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-orange">
                {capability.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {capability.description}
              </p>
            </div>
          </Card>
        ))}
      </motion.div>
    </SectionWrapper>
  );
};