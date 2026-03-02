import { type IconKey } from '@/util/icons';
import { GraduationCap, Briefcase } from 'lucide-react';
import Section from '@/components/Section';
import AnimatedContent from '@/components/AnimatedContent';
import Tags from '@/components/Tags';
import { Separator } from '@heroui/react';

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
    type: 'employment',
    title: 'Application Developer',
    organization: 'Kenna',
    period: 'Jan 2024 - Present',
    description:
      'Full-stack development building data driven tools for company clients.',
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
  {
    type: 'employment',
    title: 'Software Developer Co-op',
    organization: 'Six Nations Polytechnic',
    period: 'Sep 2021 - Sep 2022',
    description:
      'Full-stack development building a variety of webpages, tools, and XR experiences.',
    tags: ['javascript', 'typescript', 'php', 'mysql', 'aframe', 'azure'],
  },
  {
    type: 'education',
    title: 'Honors Bachelor of Science',
    organization: 'University of Toronto',
    period: 'Sep 2017 - Apr 2023',
    description:
      'Graduated with honors studying Computer Science, Mathematics, and Philosophy.',
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
    type: 'education',
    title: 'High School Diploma',
    organization: 'Craig Kielbirger Secondary School',
    period: 'Sep 2013 - Jun 2017',
    description:
      'Where my programming journey began. Graduated with the highest grade in Grade 12 Computer Science.',
    tags: ['javascript', 'java', 'python', 'csharp', 'unity'],
  },
];

const Journey = () => {
  return (
    <Section id="journey">
      <div className="absolute top-0 right-1/4 w-[600px] h-64 blur-3xl opacity-10 rotate-12 bg-purple-400 dark:bg-purple-500" />
      <div className="absolute bottom-1/3 left-1/4 w-[400px] h-96 blur-3xl opacity-10 -rotate-12 bg-emerald-400 dark:bg-emerald-500" />
      <div className="absolute left-1/2 top-64 bottom-32 w-px hidden lg:block z-0 bg-emerald-500/20" />

      <AnimatedContent>
        <h2 className="text-4xl md-text-5xl mb-4 tracking-tight">
          Professional Journey
        </h2>
        <Separator className="mb-16" />

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className={`relative grid lg:grid-cols-2 gap-8 lg:gap-16 ${index % 2 === 0 ? '' : 'lg:grid-flow-dense'}`}
            >
              <div className="hidden lg:block absolute left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full border-4 bg-emerald-400 dark:bg-emerald-border-500" />
              <div
                className={`${index % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-2'}`}
              >
                <div className="p-8 rounded-lg border transition-all group bg-card border-muted hover:border-emerald-600/50 hover:shadow-lg hover:shadow-emerald-600/5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
                      {exp.type === 'education' ? (
                        <GraduationCap size={20} />
                      ) : (
                        <Briefcase size={20} />
                      )}
                    </div>
                    <span className="text-sm tracking-wide">{exp.period}</span>
                  </div>

                  <h3 className="text-2xl mb-2 tracking-tight">{exp.title}</h3>
                  <p className="text-lg mb-4 text-emerald-600 dark:text-emerald-400">
                    {exp.organization}
                  </p>
                  <p className="mb-6 leading-relaxed text-muted-foreground">
                    {exp.description}
                  </p>

                  {exp.tags && (
                    <div className="mt-auto">
                      <Tags tags={exp.tags} />
                    </div>
                  )}
                  {/* <div className="flex flex-wrap gap-2">
                    {exp.tags?.map((tag) => {
                      const { id, name, iconClass } = Icons[tag];
                      return (
                        <Tag
                          key={`${exp.title}-${id}`}
                          name={name}
                          icon={iconClass}
                        />
                      );
                    })}
                  </div> */}
                </div>
              </div>

              <div
                className={`hidden lg:block ${index % 2 === 0 ? 'lg:col-start-2' : 'lg:col-start-1'}`}
              />
            </div>
          ))}
        </div>
      </AnimatedContent>
    </Section>
  );
};

export default Journey;
