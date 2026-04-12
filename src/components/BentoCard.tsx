import React from 'react';
import { motion } from 'framer-motion';
export interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}
export function BentoCard({
  children,
  className = '',
  delay = 0
}: BentoCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1] // Apple-like ease out
      }}
      whileHover={{
        scale: 1.02
      }}
      className={`relative bg-dark-card border border-dark-border rounded-2xl overflow-hidden group ${className}`}>
      
      {/* Glassmorphism hover overlay */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 pointer-events-none" />

      {/* Content container */}
      <div className="relative z-10 h-full p-6 md:p-8 flex flex-col">
        {children}
      </div>
    </motion.div>);

}