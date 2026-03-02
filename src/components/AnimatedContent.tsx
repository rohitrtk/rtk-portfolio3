import { motion } from 'motion/react';
import { type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  animate?: boolean;
};

const AnimatedContent = ({ children }: Props) => {
  return (
    <motion.div
      className="max-w-4xl w-full relative z-10 mx-auto"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      viewport={{ once: true, margin: '-100px', amount: 0.05 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedContent;
