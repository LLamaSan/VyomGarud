'use client';

import React from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { childFadeUp, fadeInUp, popIn, slideInLeft, slideInRight, staggerChildren, slideLeft, slideRight } from '@/lib/animations';
// Import professional icons to replace emojis
import { Target, Zap, Shield } from 'lucide-react';

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
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white/90">
                        About <span className="gradient-text">VyomGarud</span>
                    </h2>
                    {/* This subtle divider is more professional than a solid color */}
                    <div className="w-24 h-1 bg-linear-to-r from-charcoal-light via-orange to-charcoal-light mx-auto"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-stretch">
                    {/* --- Left Card: Our Mission --- */}
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        viewport={{ amount: 0.3 }}
                        transition={{ type: "spring", stiffness: 70, damping: 15 }}
                        className="relative bg-charcoal/60 backdrop-blur-md border border-orange/30 rounded-2xl p-8 shadow-[0_0_20px_rgba(255,123,0,0.15)] overflow-hidden flex flex-col justify-between h-full"
                    >
                        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,123,0,0.25)_0%,transparent_70%)] pointer-events-none"></div>
                        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-orange/40 to-transparent animate-scan"></div>
                            <div className="relative z-10 flex flex-col justify-center h-full">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", delay: 0.2, stiffness: 100, damping: 10 }}
                        >
                            <h3 className="text-2xl font-semibold mb-4 text-orange flex items-center gap-2">
                                <span className="w-2 h-2 bg-orange rounded-full animate-pulse"></span>
                                Our Mission
                            </h3>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", delay:0.2, stiffness: 100, damping: 10 }}
                        >
                            <p className="text-white/70 leading-relaxed mb-6">
                                VyomGarud is at the forefront of unmanned aerial vehicle technology,
                                delivering military-grade solutions that redefine precision, reliability,
                                and autonomous capabilities in critical defense operations.
                            </p>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", delay:0.2, stiffness: 100, damping: 10 }}
                        >
                            <p className="text-white/70 leading-relaxed">
                                We engineer UAV systems that operate seamlessly in the most challenging
                                environments, providing strategic advantages through cutting-edge artificial
                                intelligence and robust aerospace design.
                            </p>
                        </motion.div>
                        </div>
                    </motion.div>

                    {/* --- Right Card: Features --- */}
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        viewport={{ amount: 0.3 }}
                        transition={{ type: "spring", stiffness: 70, damping: 15, delay: 0.2 }}
                        className="relative neon-border bg-charcoal-light rounded-2xl p-8 flex flex-col justify-center h-full"
                    >
                        {[
                            {
                                icon: <Target />,
                                title: "Strategic Excellence",
                                text: "Purpose-built systems for mission-critical operations",
                            },
                            {
                                icon: <Zap />,
                                title: "Rapid Deployment",
                                text: "Quick response capabilities for time-sensitive scenarios",
                            },
                            {
                                icon: <Shield />,
                                title: "Unmatched Security",
                                text: "Encrypted communications and secure data handling",
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 30 }}
                                viewport={{ amount: 0.3 }}
                                whileHover={{ scale: 1.05 }}
                                transition={{ delay: 0.2 + i * 0.1, duration: 0.2, type: "spring", stiffness: 100, damping: 10 }}
                                className="flex items-start gap-4 mb-6 last:mb-0"
                            >
                                {React.cloneElement(item.icon, {
                                    className:
                                        "w-8 h-8 text-orange/70 group-hover:text-orange transition-colors duration-300",
                                })}
                                <div>
                                    <h4 className="font-semibold text-lg mb-2 text-white/90">
                                        {item.title}
                                    </h4>
                                    <p className="text-white/60 text-sm">{item.text}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </SectionWrapper>
    );
};