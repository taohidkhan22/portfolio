import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BentoCard } from './BentoCard';
const ROLES = [
'Software Quality Assurance Engineer',
'Test Automation Engineer',
'Playwright & Postman Expert'];

export interface HeroCardProps {
  className?: string;
  delay?: number;
}
export function HeroCard({ className = '', delay = 0 }: HeroCardProps) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <BentoCard className={className} delay={delay}>
      <div className="flex flex-col justify-center h-full">
        <p className="text-gray-400 text-sm md:text-base mb-2 font-medium tracking-wide">
          Hi, I'm
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
          MD ARNOB ISLAM
        </h1>

        <div className="flex items-center gap-3 overflow-hidden h-8 md:h-10">
          <div className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
          <div className="relative flex-1 h-full">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentRoleIndex}
                initial={{
                  opacity: 0,
                  y: 20
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                exit={{
                  opacity: 0,
                  y: -20
                }}
                transition={{
                  duration: 0.4,
                  ease: 'easeInOut'
                }}
                className="text-lg md:text-xl text-gray-300 font-medium absolute inset-0 flex items-center">
                
                {ROLES[currentRoleIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </BentoCard>);

}