import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = true,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={hover ? { scale: 1.05, y: -5 } : {}}
      className={`
        bg-charcoal-light border border-orange/20 rounded-xl p-6
        ${hover ? 'hover:border-orange/50 hover:shadow-[0_0_30px_rgba(255,123,0,0.2)]' : ''}
        transition-all duration-300
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};