import { ArrowLeft, ExternalLink, LockKeyhole } from 'lucide-react';
import type { ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router';

import { GithubIconColourless } from '@/components/icons';
import AnimatedContent from '@/components/shared/animated-content';
import Section from '@/components/shared/section';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import SkillTagList from '@/pages/project/components/skill-tag-list';
import type { Project } from '@/types/project';

type ProjectLayoutProps = {
  children: ReactNode;
  project: Project;
};

type ProjectNavigationState = {
  fromProjects?: boolean;
};

const ProjectLayout = ({ children, project }: ProjectLayoutProps) => {
  const { coverImage } = project;
  const location = useLocation();
  const navigate = useNavigate();
  const navigationState = location.state as ProjectNavigationState | null;

  const returnToProjects = () => {
    if (navigationState?.fromProjects) {
      navigate(-1);
      return;
    }

    navigate('/#projects', { replace: true });
  };

  return (
    <Section>
      <AnimatedContent className="section-card">
        <div className="flex justify-between">
          <Button
            type="button"
            variant="outline"
            className="button-accent mb-10 gap-2"
            onClick={returnToProjects}
          >
            <ArrowLeft aria-hidden="true" />
            Back to projects
          </Button>

          <div className="flex shrink-0 flex-wrap gap-4">
            {project.link && (
              <Button asChild className="button-accent gap-2">
                <a href={project.link} target="_blank" rel="noreferrer">
                  <GithubIconColourless
                    aria-hidden="true"
                    className="size-4 fill-current"
                  />
                  Source code
                </a>
              </Button>
            )}

            {project.liveLink && (
              <Button asChild variant="outline" className="button-accent gap-2">
                <a href={project.liveLink} target="_blank" rel="noreferrer">
                  Live project
                  <ExternalLink aria-hidden="true" />
                </a>
              </Button>
            )}

            {project.proprietary && !project.link && (
              <span className="inline-flex h-9 items-center gap-2 border border-border bg-muted/50 px-4 text-sm text-muted-foreground">
                <LockKeyhole aria-hidden="true" className="size-4" />
                Proprietary
              </span>
            )}
          </div>
        </div>

        <header>
          <p className="mb-3 font-heading text-sm font-semibold tracking-[0.2em] text-primary uppercase">
            Project
          </p>

          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <h1 className="mb-5 text-5xl leading-none tracking-tight text-foreground md:text-7xl">
                {project.title}
              </h1>

              <p className="text-lg leading-relaxed text-muted-foreground">
                {project.description}
              </p>
            </div>
          </div>

          <SkillTagList skillTags={project.tags} />
        </header>

        {coverImage && (
          <figure className="mt-10 overflow-hidden border border-border bg-muted/30">
            <img
              src={coverImage.src}
              alt={coverImage.alt}
              className={
                coverImage.fit === 'contain'
                  ? 'max-h-[42rem] w-full object-contain'
                  : 'max-h-[42rem] w-full object-cover'
              }
              style={{ objectPosition: coverImage.position ?? 'center' }}
            />
          </figure>
        )}

        <Separator className="my-10" />

        <article className="project-content">{children}</article>
      </AnimatedContent>
    </Section>
  );
};

export default ProjectLayout;
