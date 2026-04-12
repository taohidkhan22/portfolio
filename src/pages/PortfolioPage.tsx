import React from 'react';
import { HeroCard } from '../components/HeroCard';
import { AvatarCard } from '../components/AvatarCard';
import { SkillsCard } from '../components/SkillsCard';
import { ProjectCard } from '../components/ProjectCard';
import { StatsCard } from '../components/StatsCard';
import { ContactCard } from '../components/ContactCard';
import { ExperienceCard } from '../components/ExperienceCard';

export function PortfolioPage() {
  return (
    <main className="min-h-screen w-full bg-dark-bg py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
      <div className="max-w-6xl w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[minmax(200px,auto)]">
          {/* Row 1 */}
          <HeroCard className="md:col-span-2 lg:col-span-2 row-span-1" delay={0.1} />
          <AvatarCard className="md:col-span-1 lg:col-span-1 row-span-1" delay={0.15} />
          <StatsCard className="md:col-span-1 lg:col-span-1 row-span-1" delay={0.2} />

          {/* Row 2 */}
          <SkillsCard className="md:col-span-1 lg:col-span-1 row-span-1" delay={0.25} />
          <ProjectCard
            title="DemoQA E2E Framework"
            description="Scalable test automation framework using Playwright & TypeScript. Implements Page Object Model with zero hardcoded waits and comprehensive multi-module coverage."
            techStack={['Playwright', 'TypeScript', 'Page Object Model', 'JSON']}
            featured={true}
            githubUrl="https://github.com/taohidkhan22"
            className="md:col-span-2 lg:col-span-2 row-span-1"
            delay={0.3} />
          <ContactCard className="md:col-span-1 lg:col-span-1 row-span-1" delay={0.35} />

          {/* Row 3 */}
          <ExperienceCard className="md:col-span-2 lg:col-span-2 row-span-1" delay={0.4} />
          <ProjectCard
            title="ToDoApp"
            description="Robust to-do app using Redux Toolkit for efficient state management with seamless task CRUD operations and responsive design."
            techStack={['React', 'Vite', 'Redux Toolkit', 'Tailwind CSS']}
            githubUrl="https://github.com/taohidkhan22"
            className="md:col-span-1 lg:col-span-1 row-span-1"
            delay={0.45} />
          <ProjectCard
            title="Depression Detection"
            description="Deep learning detection of anxiety & depression from Bangla social media text using ML models and transfer learning."
            techStack={['Python', 'Deep Learning', 'NLP', 'Transfer Learning']}
            githubUrl="https://github.com/taohidkhan22"
            className="md:col-span-1 lg:col-span-1 row-span-1"
            delay={0.5} />
        </div>
      </div>
    </main>
  );
}
