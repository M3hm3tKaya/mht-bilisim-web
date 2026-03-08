'use client';

import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { useDictionary } from '@/lib/DictionaryProvider';

const technologies = [
  { name: 'Next.js', color: '#000000', bg: 'bg-white/10' },
  { name: 'React', color: '#61DAFB', bg: 'bg-[#61DAFB]/10' },
  { name: 'React Native', color: '#61DAFB', bg: 'bg-[#61DAFB]/10' },
  { name: 'TypeScript', color: '#3178C6', bg: 'bg-[#3178C6]/10' },
  { name: 'Node.js', color: '#339933', bg: 'bg-[#339933]/10' },
  { name: 'Firebase', color: '#FFCA28', bg: 'bg-[#FFCA28]/10' },
  { name: 'Supabase', color: '#3FCF8E', bg: 'bg-[#3FCF8E]/10' },
  { name: 'Tailwind CSS', color: '#06B6D4', bg: 'bg-[#06B6D4]/10' },
];

export default function TechStack() {
  const { dict } = useDictionary();

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-blue/5 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            {dict.techStack.title} <span className="gradient-text">{dict.techStack.titleHighlight}</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            {dict.techStack.subtitle}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="gradient-border p-6 text-center group cursor-default"
            >
              <div
                className={`w-12 h-12 mx-auto mb-3 rounded-xl ${tech.bg} flex items-center justify-center`}
              >
                <span
                  className="font-heading font-bold text-lg"
                  style={{ color: tech.color === '#000000' ? '#ffffff' : tech.color }}
                >
                  {tech.name.charAt(0)}
                </span>
              </div>
              <p className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">
                {tech.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
