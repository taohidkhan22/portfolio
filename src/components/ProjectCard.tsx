import React from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import { BentoCard } from './BentoCard';

export interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  featured?: boolean;
  githubUrl?: string;
  liveUrl?: string;
  className?: string;
  delay?: number;
}

export function ProjectCard({
  title,
  description,
  techStack,
  featured = false,
  githubUrl,
  liveUrl,
  className = '',
  delay = 0
}: ProjectCardProps) {
  return (
    <BentoCard className={className} delay={delay}>
      <div className="flex justify-between items-start mb-4">
        <h3 className={`${featured ? 'text-2xl' : 'text-xl'} font-semibold text-white group-hover:text-accent transition-colors duration-300`}>
          {title}
        </h3>
        <div className="flex gap-2">
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer"
              className="p-1.5 rounded-lg bg-white/5 text-gray-400 hover:text-accent hover:bg-accent/10 transition-all duration-300">
              <Github className="w-4 h-4" />
            </a>
          )}
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer"
              className="p-1.5 rounded-lg bg-white/5 text-gray-400 hover:text-accent hover:bg-accent/10 transition-all duration-300">
              <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
          {!githubUrl && !liveUrl && (
            <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-accent transition-colors duration-300" />
          )}
        </div>
      </div>

      <p className="text-gray-400 text-sm md:text-base mb-8 flex-1">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {techStack.map((tech) => (
          <span key={tech} className="text-xs font-medium px-2.5 py-1 rounded-md bg-white/5 text-gray-300">
            {tech}
          </span>
        ))}
      </div>
    </BentoCard>
  );
}
