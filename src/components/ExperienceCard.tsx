import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BentoCard } from './BentoCard';
import { ChevronDown, ChevronRight } from 'lucide-react';

const EXPERIENCES = [
  {
    role: 'Junior SQA Engineer',
    company: 'Dynamic Solution Innovators',
    period: 'Dec 2024 – Present',
    highlight: true,
    projects: [
      {
        name: 'e-Doptor',
        description: 'Government office management solution for employee records, promotions, leave applications, ACRs, and organogram.',
        responsibilities: [
          'Conducted manual and regression testing, designed test cases, and reported bugs using OpenProject/Squash TM.',
          'Ensured functionality, usability, and performance across modules like leave, ACR, and promotions.',
        ],
        tools: ['Squash TM', 'OpenProject', 'Manual Testing'],
      },
      {
        name: 'RJSC',
        description: 'Online platform for company registration, name clearance, and return filing in Bangladesh.',
        responsibilities: [
          'Designed and executed test cases, reported bugs, and validated workflows for regulatory compliance.',
          'Collaborated in Agile sprints, participated in Scrum meetings, and performed regression testing.',
        ],
        tools: ['Agile', 'Scrum', 'Regression Testing'],
      },
      {
        name: 'IPEMIS',
        description: 'Primary education management system for teacher recruitment, school/student info, transfers, and performance evaluation.',
        responsibilities: [
          'Prepared and executed test cases in Squash TM, tracked bugs in OpenProject, and validated backend data via DBeaver.',
          'Performed regression testing and analyzed application logs using Kibana.',
        ],
        tools: ['Squash TM', 'DBeaver', 'Kibana', 'OpenProject'],
      },
      {
        name: 'OpenCRVS',
        description: 'Open-source civil registration system for birth, death, and marriage records.',
        responsibilities: [
          'Reviewed documentation, designed test cases in TestRail, and logged bugs in GitHub.',
          'Developed end-to-end (E2E) test automation using Playwright and handled merge conflicts during test integration.',
          'Performed regression testing and collaborated with the team following Agile methodology.',
        ],
        tools: ['Playwright', 'TestRail', 'GitHub', 'E2E Automation'],
      },
    ],
  },
  {
    role: 'Career Development Program',
    company: 'Spring Rain Private Ltd.',
    period: 'Feb 2024 – Jul 2024',
    highlight: false,
    projects: [
      {
        name: 'NotifyHub',
        description: 'Upgrading an existing notification center with a multi-tenant architecture for startups.',
        responsibilities: [
          'Worked on upgrading notification infrastructure to support multi-tenant SaaS architecture.',
          'Collaborated with the team using React, Redux, Koa.js, Node.js, and DynamoDB.',
        ],
        tools: ['React', 'Redux', 'Koa.js', 'Node.js', 'DynamoDB'],
      },
    ],
  },
  {
    role: 'Industrial Trainee Software Engineer',
    company: 'Diligite',
    period: 'Sept 2023 – Oct 2023',
    highlight: false,
    projects: [
      {
        name: 'Doctor Appointment System',
        description: 'Automated doctor appointment system for seamless scheduling and improved user experience.',
        responsibilities: [
          'Developed an automated scheduling system to streamline appointment booking.',
          'Built with React, Vue.js, and MongoDB for a seamless user experience.',
        ],
        tools: ['React', 'Vue.js', 'MongoDB'],
      },
    ],
  },
];

export interface ExperienceCardProps {
  className?: string;
  delay?: number;
}

export function ExperienceCard({ className = '', delay = 0 }: ExperienceCardProps) {
  const [expandedJob, setExpandedJob] = useState<number | null>(0);
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  return (
    <BentoCard className={className} delay={delay}>
      <h2 className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-5">
        Experience
      </h2>
      <div className="flex flex-col gap-3 overflow-y-auto max-h-[420px] pr-1 scrollbar-thin">
        {EXPERIENCES.map((exp, i) => (
          <div key={i} className="border border-dark-border rounded-xl overflow-hidden">
            {/* Job header */}
            <button
              onClick={() => setExpandedJob(expandedJob === i ? null : i)}
              className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-white/5 transition-colors duration-200"
            >
              <div>
                <p className={`text-sm font-semibold ${exp.highlight ? 'text-accent' : 'text-white'}`}>
                  {exp.role}
                </p>
                <p className="text-xs text-gray-500">{exp.company} · {exp.period}</p>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-gray-500 flex-shrink-0 transition-transform duration-300 ${expandedJob === i ? 'rotate-180' : ''}`}
              />
            </button>

            {/* Projects list */}
            <AnimatePresence>
              {expandedJob === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <div className="px-4 pb-3 flex flex-col gap-2">
                    {exp.projects.map((project, j) => {
                      const key = `${i}-${j}`;
                      const isOpen = expandedProject === key;
                      return (
                        <div key={j} className="rounded-lg border border-dark-border overflow-hidden">
                          {/* Project header */}
                          <button
                            onClick={() => setExpandedProject(isOpen ? null : key)}
                            className="w-full flex items-center justify-between px-3 py-2 text-left hover:bg-white/5 transition-colors duration-200"
                          >
                            <div className="flex items-center gap-2">
                              <ChevronRight
                                className={`w-3.5 h-3.5 text-accent flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
                              />
                              <span className="text-sm font-medium text-white">{project.name}</span>
                            </div>
                            <div className="flex gap-1 flex-wrap justify-end max-w-[55%]">
                              {project.tools.slice(0, 2).map((tool, t) => (
                                <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-accent/10 text-accent border border-accent/20">
                                  {tool}
                                </span>
                              ))}
                            </div>
                          </button>

                          {/* Project details */}
                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <div className="px-3 pb-3 border-t border-dark-border">
                                  <p className="text-xs text-gray-400 mt-2 mb-3 leading-relaxed">
                                    {project.description}
                                  </p>
                                  <ul className="flex flex-col gap-1.5 mb-3">
                                    {project.responsibilities.map((r, ri) => (
                                      <li key={ri} className="flex items-start gap-2 text-xs text-gray-300">
                                        <span className="w-1 h-1 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                                        {r}
                                      </li>
                                    ))}
                                  </ul>
                                  <div className="flex flex-wrap gap-1.5">
                                    {project.tools.map((tool, t) => (
                                      <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-gray-300 border border-dark-border">
                                        {tool}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </BentoCard>
  );
}
