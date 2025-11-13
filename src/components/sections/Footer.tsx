'use client';

import React from 'react';
import { motion } from 'framer-motion';
// --- FIX: Corrected import path ---
import { COMPANY_INFO, SOCIAL_LINKS, NAV_LINKS } from '@/lib/constants';
// Import professional icons to replace emojis
import { Linkedin, X, Github, Mail, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal-dark border-t border-orange/20">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <motion.h3
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-bold gradient-text mb-4 inline-block"
            >
              {COMPANY_INFO.name}
            </motion.h3>
            <p className="text-white/70 mb-6 max-w-md">
              Military-grade UAV systems with precision engineering and advanced autonomy 
              for critical defense operations.
            </p>
            <div className="flex gap-4">
              {/* LinkedIn Icon */}
              <motion.a
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-charcoal-light border border-orange/30 rounded-lg flex items-center justify-center group hover:border-orange hover:bg-orange/10 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white/70 group-hover:text-orange transition-colors" />
              </motion.a>
              {/* Twitter Icon */}
              <motion.a
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-charcoal-light border border-orange/30 rounded-lg flex items-center justify-center group hover:border-orange hover:bg-orange/10 transition-all"
                aria-label="Twitter"
              >
                <X className="w-5 h-5 text-white/70 group-hover:text-orange transition-colors" />
              </motion.a>
              {/* GitHub Icon */}
              <motion.a
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-charcoal-light border border-orange/30 rounded-lg flex items-center justify-center group hover:border-orange hover:bg-orange/10 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-white/70 group-hover:text-orange transition-colors" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/70 hover:text-orange hover:translate-x-1 transition-all duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange">Contact</h4>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange/70" />
                <a 
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-orange transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange/70" />
                <a 
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="hover:text-orange transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-orange/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {currentYear} {COMPANY_INFO.name}. All rights reserved.
            </p> 
            {/* --- FIX: Corrected closing tag --- */}
            <div className="flex gap-6 text-sm">
              <button className="text-white/60 hover:text-orange transition-colors">
                Privacy Policy
              </button>
              <button className="text-white/60 hover:text-orange transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Line (Kept your awesome animation, just cleaned up the class) */}
      <motion.div
        animate={{
          backgroundPosition: ['0% 0%', '100% 0%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
          repeatType: "reverse", // Makes it scan back and forth
        }}
        className="h-1 bg-linear-to-r from-transparent via-orange to-transparent [background-size:200%_100%]"
      />
    </footer>
  );
};