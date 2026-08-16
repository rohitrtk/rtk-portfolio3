import { Skeleton } from '@/components/ui/skeleton';

const ProjectPageSkeleton = () => {
  return (
    <div role="status" aria-live="polite" className="space-y-10">
      <span className="sr-only">Loading project details</span>

      <div className="space-y-4">
        <Skeleton className="h-9 w-2/5" />
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-11/12" />
        <Skeleton className="h-5 w-4/5" />
      </div>

      <div className="space-y-4">
        <Skeleton className="h-8 w-1/3" />
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-5/6" />
      </div>

      <Skeleton className="aspect-video w-full" />
    </div>
  );
};

export default ProjectPageSkeleton;
