import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import type { ReactNode } from 'react';

type AnimatedContentProps = {
  children: ReactNode;
  className?: string;
};

const AnimatedContent = ({ children, className }: AnimatedContentProps) => {
  return (
    <motion.div
      className={cn('relative z-10 mx-auto w-full max-w-4xl', className)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      viewport={{
        once: true,
        margin: '-100px',
        amount: 0.05,
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedContent;
