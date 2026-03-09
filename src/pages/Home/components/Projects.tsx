import { LockIcon } from 'lucide-react';
import { type IconKey } from '@/util/icons';
import Section from '@/components/Section';
import AnimatedContent from '@/components/AnimatedContent';
import Tags from '@/components/Tags';
import { Link, Separator } from '@heroui/react';

type Project = {
  title: string;
  description: string;
  tags: IconKey[];
  link?: string;
};

const projects: Project[] = [
  {
    title: 'SQL Release Note Tool',
    description:
      'Written as part of a yearly competition at Kenna, myself and two colleagues created a windowed application to assist in creating release notes which are used to move SQL code throughout our various deployment environments.',
    tags: ['tauri', 'rust', 'react', 'tailwind', 'mssql'],
    link: '#',
  },
  {
    title: 'Kisto Coin',
    description:
      "To learn more about Blockchain, I created a barebones, account based Proof-of-Work blockchain that allows users to create wallets and send Kisto Coin's to one another.",
    tags: ['react', 'tailwind', 'java', 'spring'],
    link: '#',
  },
  {
    title: 'Kill Task Utility',
    description:
      'Working with multiple running Express instances, occasionally results in the message "This port is in use". Through the terminal, calling this utility program lets me terminate all programs running on a list of ports.',
    tags: ['rust'],
    link: '#',
  },
  {
    title: 'Instagram 4 Pomeranians',
    description:
      'An Instagram clone with a twist. Users can only upload pictures of my favourite dog breed - The Pomeranian. This is enforced via image recognition.',
    tags: ['react', 'mongodb', 'node', 'express'],
    link: '#',
  },
  {
    title: 'Student Registration Form',
    description:
      "Created during my co-op placement at Six Nations Polytechnic. This was designed to be a drop in replacement for OUAC (Ontario Universities' Applcation Centre) allowing for a more streamlined student application process.",
    tags: ['javascript', 'jquery', 'bootstrap', 'php', 'mysql'],
    link: '#',
  },
];

const Projects = () => {
  return (
    <Section id="projects">
      <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full blur-3xl opacity-10 bg-emerald-400 dark:bg-emerald-500" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-10 bg-cyan-400 dark:bg-cyan-500" />

      <AnimatedContent>
        <h2 className="text-4xl md-text-5xl mb-4 tracking-tight">Projects</h2>
        <Separator className="mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="p-8 rounded-lg border transition-all bg-card border-muted hover:border-emerald-600/50 hover:shadow-lg hover:shadow-emerald-600/5 flex flex-col"
            >
              <div>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl tracking-tight">{project.title}</h3>
                  <Link isDisabled={true} href="#" target="_blank">
                    <LockIcon size={20} />
                    {/* {project.link && <ExternalLink size={20} />} */}
                  </Link>
                </div>

                <p className="mb-6 leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </div>

              <div className="mt-auto">
                <Tags tags={project.tags} />
              </div>
            </div>
          ))}
        </div>
      </AnimatedContent>
    </Section>
  );
};

export default Projects;
