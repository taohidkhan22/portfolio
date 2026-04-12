import React from 'react';
import { BentoCard } from './BentoCard';
export interface AvatarCardProps {
  className?: string;
  delay?: number;
}
export function AvatarCard({ className = '', delay = 0 }: AvatarCardProps) {
  return (
    <BentoCard className={`${className} !p-4`} delay={delay}>
      <div className="relative w-full h-full min-h-[200px] rounded-xl overflow-hidden group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-shadow duration-500">
        <div className="absolute inset-0 bg-accent/10 mix-blend-overlay z-10 rounded-xl" />
        <img
          src="/Arnob.png"
          alt="MD Arnob Islam"
          className="w-full h-full object-cover rounded-xl" />
        
      </div>
    </BentoCard>);

}