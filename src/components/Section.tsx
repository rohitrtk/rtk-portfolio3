import { type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  id?: string;
  verticalPadding?: boolean;
};

const Section = ({ children, id, verticalPadding = true }: Props) => {
  return (
    <section
      id={id}
      className={`min-h-screen flex items-center justify-center px-6 relative ${verticalPadding ? 'py-32' : ''}`}
    >
      {children}
    </section>
  );
};

export default Section;
