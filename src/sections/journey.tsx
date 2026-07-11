import AnimatedContent from '@/components/animated-content';
import Section from '@/components/section';
import Tags from '@/components/tags';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import type { IconKey } from '@/util/icons';
import { Briefcase, GraduationCap, Footprints } from 'lucide-react';

type Experience = {
  type: 'education' | 'employment';
  title: string;
  organization: string;
  period: string;
  description: string;
  tags?: IconKey[];
};

const experiences: Experience[] = [
  {
    type: 'education',
    title: 'High School Diploma',
    organization: 'Craig Kielburger Secondary School',
    period: 'September 2013 – June 2017',
    description:
      'Where my programming journey began. Graduated with the highest grade in Grade 12 Computer Science.',
    tags: ['javascript', 'java', 'python', 'csharp', 'unity'],
  },
  {
    type: 'education',
    title: 'Honours Bachelor of Science',
    organization: 'University of Toronto',
    period: 'September 2017 – April 2023',
    description:
      'Studied Computer Science, Mathematics, and Philosophy, building a strong foundation in software development and problem-solving.',
    tags: [
      'python',
      'c',
      'java',
      'spring',
      'mongodb',
      'postgresql',
      'maven',
      'docker',
    ],
  },
  {
    type: 'employment',
    title: 'Software Developer Co-op',
    organization: 'Six Nations Polytechnic',
    period: 'September 2021 – September 2022',
    description:
      'Built full-stack webpages, internal tools, and immersive XR experiences.',
    tags: ['javascript', 'typescript', 'php', 'mysql', 'aframe', 'azure'],
  },
  {
    type: 'employment',
    title: 'Application Developer',
    organization: 'Kenna',
    period: 'January 2024 – Present',
    description:
      'Building full-stack, data-driven applications and reusable tools for enterprise clients.',
    tags: [
      'javascript',
      'typescript',
      'node',
      'react',
      'nextjs',
      'postgresql',
      'mssql',
    ],
  },
];

const Journey = () => {
  return (
    <Section id="journey">
      <div
        aria-hidden={true}
        className="absolute pointer-events-none right-1/4 top-0 h-64 w-[600px] rotate-12 bg-purple-400 opacity-10 blur-3xl dark:bg-purple-500"
      />
      <div
        aria-hidden={true}
        className="absolute pointer-events-none bottom-1/3 left-1/4 h-96 w-[400px] -rotate-12 bg-emerald-400 opacity-10 blur-3xl dark:bg-emerald-500"
      />

      <AnimatedContent className="max-w-5xl">
        <h2 className="mb-4 text-4xl tracking-tight md:text-5xl">
          Professional Journey
        </h2>

        <Separator className="mb-16" />

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute bottom-5 left-5 top-12 w-px -translate-x-1/2 bg-emerald-500/50 lg:left-1/2"
          />

          <ol>
            {experiences.map((experience, index) => {
              const placeOnLeft = index % 2 === 0;

              return (
                <li
                  key={`${experience.title}-${experience.organization}`}
                  className="relative grid grid-cols-[2.5rem_minmax(0,1fr)] gap-x-4 pb-12 last:pb-0 lg:grid-cols-[minmax(0,1fr)_3rem_minmax(0,1fr)] lg:gap-x-8 lg:pb-16"
                >
                  <div className="relative z-10 col-start-1 row-start-1 flex justify-center pt-7 lg:col-start-2">
                    <span className="flex size-10 items-center justify-center rounded-full border border-emerald-500/40 bg-background text-emerald-600 shadow-sm dark:text-emerald-400">
                      {experience.type === 'education' ? (
                        <GraduationCap size={20} />
                      ) : (
                        <Briefcase size={20} />
                      )}
                    </span>
                  </div>

                  <article
                    className={cn(
                      'col-start-2 row-start-1 rounded-xl border bg-card p-5 shadow-sm transition-all duration-300 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/5 sm:p-6 lg:p-8',
                      placeOnLeft ? 'lg:col-start-1' : 'lg:col-start-3',
                    )}
                  >
                    <p className="mb-3 text-sm font-medium tracking-wide text-emerald-600 dark:text-emerald-400">
                      {experience.period}
                    </p>

                    <h3 className="mb-2 text-xl tracking-tight sm:text-2xl">
                      {experience.title}
                    </h3>

                    <p className="mb-4 text-base font-medium sm:text-lg">
                      {experience.organization}
                    </p>

                    <p className="mb-6 leading-relaxed text-muted-foreground">
                      {experience.description}
                    </p>

                    {experience.tags && <Tags tags={experience.tags} />}
                  </article>
                </li>
              );
            })}

            <li className="relative grid grid-cols-[2.5rem_minmax(0,1fr)] gap-x-4 lg:grid-cols-[minmax(0,1fr)_3rem_minmax(0,1fr)] lg:gap-x-8">
              <div className="relative z-10 col-start-1 flex justify-center lg:col-start-2">
                <span className="flex size-10 items-center justify-center rounded-full border border-emerald-500/40 bg-background text-emerald-600 shadow-sm dark:text-emerald-400">
                  <Footprints size={20} aria-hidden="true" />
                </span>
              </div>
            </li>
          </ol>
        </div>
      </AnimatedContent>
    </Section>
  );
};

export default Journey;
