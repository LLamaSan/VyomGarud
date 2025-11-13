import React from 'react';
import { motion } from 'framer-motion';

interface SectionWrapperProps {
  children: React.ReactNode;
  id: string;
  className?: string;
  background?: 'default' | 'grid' | 'gradient';
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  id,
  className = '',
  background = 'default',
}) => {
  const backgrounds = {
    default: 'bg-charcoal',
    grid: 'bg-charcoal grid-bg',
    gradient: 'bg-gradient-to-b from-charcoal-dark via-charcoal to-charcoal-dark',
  };

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className={`section-padding ${backgrounds[background]} ${className}`}
    >
      <div className="container-custom">
        {children}
      </div>
    </motion.section>
  );
};