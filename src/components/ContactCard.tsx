import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { BentoCard } from './BentoCard';
export interface ContactCardProps {
  className?: string;
  delay?: number;
}
export function ContactCard({ className = '', delay = 0 }: ContactCardProps) {
  const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/taohidkhan22'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/arnob-islam'
  }];

  return (
    <BentoCard className={className} delay={delay}>
      <h2 className="text-xl font-semibold text-white mb-2">Let's Connect</h2>
      <p className="text-gray-400 text-sm mb-6">
        Ready to build something amazing together?
      </p>

      <div className="mt-auto flex flex-col gap-4">
        <a
          href="mailto:taohid130@gmail.com"
          className="flex items-center gap-3 text-gray-300 hover:text-accent transition-colors duration-300 group/mail">
          
          <div className="p-2 rounded-full bg-white/5 group-hover/mail:bg-accent/10 transition-colors duration-300">
            <Mail className="w-4 h-4" />
          </div>
          <span className="text-sm font-medium">taohid130@gmail.com</span>
        </a>

        <div className="flex items-center gap-3 pt-4 border-t border-dark-border">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="p-2 rounded-full bg-white/5 text-gray-400 hover:text-accent hover:bg-accent/10 transition-all duration-300">
                
                <Icon className="w-4 h-4" />
              </a>);

          })}
        </div>
      </div>
    </BentoCard>);

}