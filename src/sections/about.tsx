import Tag from '@/components/tag';
import Icons, { type IconKey } from '@/util/icons';
import Section from '@/components/section';
import AnimatedContent from '@/components/animated-content';
import { Separator } from '@/components/ui/separator';

const coreSkills: IconKey[] = [
  'react',
  'typescript',
  'tailwind',
  'scss',
  'mssql',
  'postgresql',
  'rust',
  'express',
  'node',
];

const About = () => {
  return (
    <Section id="about">
      <div
        aria-hidden={true}
        className="absolute pointer-events-none top-1/3 left-1/3 w-[700px] h-32 blur-3xl opacity-10 -rotate-45 bg-cyan-400 dark:bg-cyan-500"
      />
      <div
        aria-hidden={true}
        className="absolute pointer-events-none bottom-1/4 right-1/4 h-[500px] w-[500px] -rotate-45 bg-emerald-400 opacity-10 blur-3xl dark:bg-emerald-500"
      />

      <AnimatedContent>
        <h2 className="text-4xl md:text-5xl mb-4 tracking-tight">About</h2>
        <Separator className="mb-16" />

        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            Full-stack developer with 3+ years of professional experience
            building software across the React, TypeScript, and Node ecosystem.
            I specialize in building scalable, data-driven applications with a
            strong emphasis on performance, reliability, and maintainable
            architecture.
          </p>
          <p className="text-lg leading-relaxed">
            Outside of work, I build performance-focused tools using Rust or
            C++, exploring optimization and efficient execution beyond the
            traditional web stack.
          </p>

          <div className="pt-8">
            <h3 className="text-xl mb-4 tracking-tight">Core Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {coreSkills.map((skill) => {
                const { id, name, icon } = Icons[skill];
                return <Tag key={id} name={name} icon={icon} variant="large" />;
              })}
            </div>
          </div>
        </div>
      </AnimatedContent>
    </Section>
  );
};

export default About;
