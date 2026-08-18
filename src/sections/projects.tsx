import { ArrowRight, ExternalLink, LockIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router';

import { GithubIcon } from '@/components/icons';
import AnimatedContent from '@/components/shared/animated-content';
import Section from '@/components/shared/section';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { projects } from '@/data/projects';
import type { Project } from '@/types/project';
import { saveRouteScrollPosition } from '@/util/route-scroll';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const Projects = () => {
  const { key: locationKey } = useLocation();

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.15]);

  return (
    <Section id="projects" ref={containerRef}>
      <AnimatedContent className="section-card">
        <h2 className="mb-6 text-4xl tracking-tight md:text-5xl">Projects</h2>
        <Separator className="mb-6" />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project: Project) => (
            <article
              key={project.title}
              className="group flex flex-col overflow-hidden border border-border bg-background transition-[border-color,box-shadow] hover:border-primary/60 hover:shadow-lg hover:shadow-primary/5"
            >
              {project.coverImage && (
                <div className="aspect-16/10 w-full overflow-hidden border-b bg-muted/40">
                  <motion.img
                    style={{ scale }}
                    src={project.coverImage.src}
                    alt={project.coverImage.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </div>
              )}

              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl tracking-tight sm:text-2xl">
                    {project.title}
                  </h3>

                  <div>
                    {project.liveLink && (
                      <Button
                        asChild
                        variant="ghost"
                        size="icon"
                        className="shrink-0"
                      >
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Open ${project.liveLink}`}
                        >
                          <ExternalLink size={20} aria-hidden="true" />
                        </a>
                      </Button>
                    )}

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
                            <span
                              aria-hidden="true"
                              className="inline-flex items-center justify-center size-10 [&>svg]:size-full [&_path]:fill-current"
                            >
                              <GithubIcon />
                            </span>
                          </a>
                        </Button>
                      )
                    )}
                  </div>
                </div>

                <p className="mb-6 mt-3 leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-auto">
                  <Button
                    asChild
                    variant="outline"
                    className="button-accent mt-6 gap-2"
                  >
                    <Link
                      to={`/projects/${project.slug}`}
                      state={{ fromProjects: true }}
                      onClick={() => saveRouteScrollPosition(locationKey)}
                    >
                      Read more
                      <ArrowRight aria-hidden="true" />
                    </Link>
                  </Button>
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
