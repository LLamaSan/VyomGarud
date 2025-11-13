'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Button } from '@/components/ui/Button';
import { COMPANY_INFO } from '@/lib/constants';
import { fadeInUp, slideInLeft, slideInRight } from '@/lib/animations';
import { ContactFormData } from '@/types';
// Import icons to replace emojis
import { Mail, Phone, Building, Scan, Check } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <SectionWrapper id="contact" background="grid">
      <motion.div
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white/90">
          Get in <span className="gradient-text">Touch</span>
        </h2>
        <div className="w-24 h-1 bg-linear-to-r from-charcoal-light via-orange to-charcoal-light mx-auto mb-6"></div>
        <p className="text-white/60 max-w-2xl mx-auto">
          Ready to elevate your defense capabilities? Contact us to discuss your requirements
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Information */}
        <motion.div
          variants={slideInLeft}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-2xl font-bold mb-6 gradient-text">
              Contact Information
            </h3>
            <p className="text-white/60 mb-8">
              Reach out to our team for inquiries about our UAV systems, partnerships, 
              or technical specifications.
            </p>
          </div>

          <div className="space-y-6">
            {/* Replaced 📧 with Lucide 'Mail' icon */}
            <motion.div
              whileHover={{ x: 10 }}
              className="flex items-center gap-4 p-4 bg-charcoal-light rounded-lg border border-orange/20 hover:border-orange/50 transition-colors"
            >
              <Mail className="w-6 h-6 text-orange" />
              <div>
                <h4 className="font-semibold mb-1 text-white/90">Email</h4>
                <a 
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-orange hover:text-orange-light transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
            </motion.div>

            {/* Replaced 📞 with Lucide 'Phone' icon */}
            <motion.div
              whileHover={{ x: 10 }}
              className="flex items-center gap-4 p-4 bg-charcoal-light rounded-lg border border-orange/20 hover:border-orange/50 transition-colors"
            >
              <Phone className="w-6 h-6 text-orange" />
              <div>
                <h4 className="font-semibold mb-1 text-white/90">Phone</h4>
                <a 
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="text-orange hover:text-orange-light transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>
            </motion.div>

            {/* Replaced 🏢 with Lucide 'Building' icon */}
            <motion.div
              whileHover={{ x: 10 }}
              className="flex items-center gap-4 p-4 bg-charcoal-light rounded-lg border border-orange/20 hover:border-orange/50 transition-colors"
            >
              <Building className="w-6 h-6 text-orange" />
              <div>
                <h4 className="font-semibold mb-1 text-white/90">Headquarters</h4>
                <p className="text-white/60">India</p>
              </div>
            </motion.div>
          </div>

          {/* REMOVED the rotating 🛸 emoji.
            Replaced with a large, slow-spinning, abstract 'Scan' icon.
            This feels infinitely more "tech" and "military-grade".
          */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="mt-12 text-orange/10 flex justify-center"
          >
            <Scan className="w-48 h-48" />
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          variants={slideInRight}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-white/70">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-charcoal-light border border-orange/30 rounded-lg focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/50 transition-all text-white"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-white/70">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-charcoal-light border border-orange/30 rounded-lg focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/50 transition-all text-white"
                placeholder="john@company.com"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium mb-2 text-white/70">
                Company / Organization
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-charcoal-light border border-orange/30 rounded-lg focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/50 transition-all text-white"
                placeholder="Your Organization"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-white/70">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-charcoal-light border border-orange/30 rounded-lg focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/50 transition-all text-white resize-none"
                placeholder="Tell us about your requirements..."
              />
            </div>

            {/* Re-styled the success message to be on-brand (orange, not green) */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 p-4 bg-orange/10 border border-orange/30 rounded-lg text-orange-light"
              >
                <Check className="w-5 h-5" />
                ✓ Message sent successfully! We'll get back to you soon.
              </motion.div>
            )}

            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};