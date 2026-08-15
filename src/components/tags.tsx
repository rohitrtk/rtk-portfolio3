import { ChevronRight } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

import Tag from '@/components/tag';
import { useIsMobile } from '@/hooks/use-is-mobile';
import { cn } from '@/lib/utils';
import Icons, { type IconKey } from '@/util/icons';

type Props = {
  tags: IconKey[];
};

const Tags = ({ tags }: Props) => {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleOpen = () => {
    setOpen((previous) => !previous);
  };

  const tagList = (
    <div className="mt-2 flex flex-wrap gap-2">
      {tags.map((tag) => {
        const { id, name, icon } = Icons[tag];

        return <Tag key={id} name={name} icon={icon} />;
      })}
    </div>
  );

  return (
    <div>
      <button
        type="button"
        onClick={toggleOpen}
        aria-expanded={open}
        className="flex items-center tracking-tight text-muted-foreground transition-colors hover:text-foreground"
      >
        <ChevronRight
          size={20}
          aria-hidden="true"
          className={cn(
            !isMobile && 'transition-transform',
            open ? 'rotate-90' : 'rotate-0',
          )}
        />

        <span>{open ? 'Hide Skills' : 'See Skills'}</span>
      </button>

      {isMobile ? (
        open ? (
          tagList
        ) : null
      ) : (
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              exit={{ height: 0 }}
              transition={{
                duration: 0.22,
                ease: 'easeInOut',
              }}
              className="overflow-hidden"
            >
              <motion.div
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.18 }}
              >
                {tagList}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

export default Tags;
