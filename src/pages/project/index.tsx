import { createElement, Suspense } from 'react';
import { useParams } from 'react-router';

import { projectDocuments } from '@/data/project-documents';
import { projects } from '@/data/projects';
import ProjectLayout from '@/layouts/project-layout';
import NotFoundPage from '@/pages/not-found';
import ProjectPageSkeleton from '@/pages/project/components/project-page-skeleton';

const ProjectPage = () => {
  const { slug } = useParams();

  const project = projects.find((candidate) => candidate.slug === slug);
  const Document = slug ? projectDocuments.get(slug) : undefined;

  if (!project || !Document) {
    return <NotFoundPage />;
  }

  return (
    <ProjectLayout project={project}>
      <Suspense fallback={<ProjectPageSkeleton />}>
        {createElement(Document)}
      </Suspense>
    </ProjectLayout>
  );
};

export default ProjectPage;
