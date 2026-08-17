import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const descriptors = [
  'building',
  'designing',
  'testing',
  'debugging',
  'delivering',
] as const;

type CurtainPhase = 'idle' | 'covering' | 'revealing';

const RotatingDescriptor = () => {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<CurtainPhase>('idle');

  useEffect(() => {
    const interval = window.setInterval(() => {
      setPhase((current) => (current === 'idle' ? 'covering' : current));
    }, 3000);

    return () => window.clearInterval(interval);
  }, []);

  const handleCurtainComplete = () => {
    if (phase === 'covering') {
      setIndex((current) => (current + 1) % descriptors.length);
      setPhase('revealing');
      return;
    }

    if (phase === 'revealing') {
      setPhase('idle');
    }
  };

  return (
    <>
      <span
        aria-hidden="true"
        className="relative inline-grid justify-items-center overflow-hidden align-baseline text-primary"
      >
        {/* Keep constant width. */}
        <span className="invisible col-start-1 row-start-1">developing</span>

        <span className="col-start-1 row-start-1 inline-block">
          {descriptors[index]}
        </span>

        <motion.span
          className="absolute inset-0 z-10 bg-muted"
          initial={false}
          animate={{ scaleX: phase === 'covering' ? 1 : 0 }}
          style={{
            transformOrigin:
              phase === 'covering' ? 'left center' : 'right center',
          }}
          transition={{ duration: 0.25, ease: 'backInOut' }}
          onAnimationComplete={handleCurtainComplete}
          aria-hidden={true}
        />
      </span>

      <span className="sr-only">building</span>
    </>
  );
};

export default RotatingDescriptor;
