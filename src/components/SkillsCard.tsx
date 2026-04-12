import React from 'react';
import { BentoCard } from './BentoCard';
const SKILLS = [
{ name: 'Playwright', highlight: true },
{ name: 'Postman', highlight: true },
{ name: 'JMeter', highlight: false },
{ name: 'TestRail', highlight: false },
{ name: 'JavaScript', highlight: true },
{ name: 'Python', highlight: false },
{ name: 'SQL', highlight: false },
{ name: 'GitHub CI/CD', highlight: false },
{ name: 'Kibana', highlight: false },
{ name: 'Squash TM', highlight: false },
{ name: 'DBeaver', highlight: false },
{ name: 'Agile / Scrum', highlight: true },
];

export interface SkillsCardProps {
  className?: string;
  delay?: number;
}
export function SkillsCard({ className = '', delay = 0 }: SkillsCardProps) {
  return (
    <BentoCard className={className} delay={delay}>
      <h2 className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-6">
        Skills & Tools
      </h2>
      <div className="flex flex-wrap gap-2 mt-auto">
        {SKILLS.map((skill) =>
        <span
          key={skill.name}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-300 ${skill.highlight ? 'bg-accent/10 text-accent border border-accent/20' : 'bg-dark-border/50 text-gray-300 border border-transparent hover:border-dark-border'}`}>
          
            {skill.name}
          </span>
        )}
      </div>
    </BentoCard>);

}