import Icons, { type IconKey } from '@/util/icons';
import { ChevronRight } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import Tag from './tag';

type Props = {
  tags: IconKey[];
};

const Tags = ({ tags }: Props) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen((prev) => !prev);

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
          className={`transition-transform ${open ? 'rotate-90' : 'rotate-0'}`}
        />
        See Skills
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.18 }}
              className="mt-2 flex flex-wrap gap-2"
            >
              {tags.map((tag) => {
                const { id, name, iconClass } = Icons[tag];

                return <Tag key={id} name={name} icon={iconClass} />;
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tags;
