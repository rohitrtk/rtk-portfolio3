import { cn } from '@/lib/utils';
import { type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  id?: string;
};

const Section = ({ children, id }: Props) => {
  return (
    <section
      id={id}
      className={cn(
        'relative flex min-h-[calc(100svh-4.25rem)] flex-col',
        'items-center justify-center-safe',
        'overflow-x-clip px-6 py-8 sm:py-12',
      )}
    >
      {children}
    </section>
  );
};

export default Section;
