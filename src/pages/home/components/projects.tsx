import { ExternalLink, LockIcon } from 'lucide-react';
import Section from '@/components/section';
import AnimatedContent from '@/components/animated-content';
import Tags from '@/components/tags';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import ProjectGallery from '@/components/project-gallery';
import { projects } from '@/data/projects';

const Projects = () => {
  return (
    <Section id="projects">
      <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full blur-3xl opacity-10 bg-emerald-400 dark:bg-emerald-500" />
      <div className="absolute bottom-1/4 right-0 w-125 h-125 rounded-full blur-3xl opacity-10 bg-cyan-400 dark:bg-cyan-500" />

      <AnimatedContent>
        <h2 className="mb-4 text-4xl tracking-tight md:text-5xl">Projects</h2>
        <Separator className="mb-16" />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-xl border border-muted bg-card transition-all hover:border-emerald-600/50 hover:shadow-lg hover:shadow-emerald-600/5"
            >
              {project.coverImage && (
                <ProjectGallery
                  title={project.title}
                  coverImage={project.coverImage}
                  images={project.images ?? []}
                />
              )}

              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl tracking-tight sm:text-2xl">
                    {project.title}
                  </h3>

                  {project.proprietary ? (
                    <span
                      className="shrink-0 text-muted-foreground"
                      title="This project is proprietary"
                      aria-label="Proprietary project"
                    >
                      <LockIcon size={20} aria-hidden="true" />
                    </span>
                  ) : (
                    project.link && (
                      <Button
                        asChild
                        variant="ghost"
                        size="icon"
                        className="shrink-0"
                      >
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Open ${project.title}`}
                        >
                          <ExternalLink size={20} aria-hidden="true" />
                        </a>
                      </Button>
                    )
                  )}
                </div>

                <p className="mb-6 mt-3 leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-auto">
                  <Tags tags={project.tags} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </AnimatedContent>
    </Section>
  );
};

export default Projects;
