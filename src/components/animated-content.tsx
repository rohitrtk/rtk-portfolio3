import { motion } from 'motion/react';
import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

type AnimatedContentProps = {
  children: ReactNode;
  className?: string;
};

const AnimatedContent = ({ children, className }: AnimatedContentProps) => {
  // const isMobile = useIsMobile();

  const classes = cn(
    'relative z-10 mx-auto w-full min-w-0 max-w-6xl',
    className,
  );

  // if (isMobile) {
  //   return <div className={classes}>{children}</div>;
  // }

  return (
    <motion.div
      className={classes}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.1,
        ease: 'easeIn',
      }}
      viewport={{
        once: true,
        margin: '-100px',
        amount: 0.15,
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedContent;
