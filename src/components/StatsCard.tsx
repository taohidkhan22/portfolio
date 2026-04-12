import React from 'react';
import { BentoCard } from './BentoCard';
const STATS = [
{ value: '1+', label: 'Years Experience' },
{ value: '4+', label: 'Live Projects' },
{ value: '100+', label: 'Test Cases Written' },
{ value: 'E2E', label: 'Automation Expert' },
];

export interface StatsCardProps {
  className?: string;
  delay?: number;
}
export function StatsCard({ className = '', delay = 0 }: StatsCardProps) {
  return (
    <BentoCard className={className} delay={delay}>
      <div className="grid grid-cols-2 gap-4 h-full">
        {STATS.map((stat, index) =>
        <div key={index} className="flex flex-col justify-center">
            <span className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-accent transition-colors duration-300">
              {stat.value}
            </span>
            <span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider font-medium">
              {stat.label}
            </span>
          </div>
        )}
      </div>
    </BentoCard>);

}