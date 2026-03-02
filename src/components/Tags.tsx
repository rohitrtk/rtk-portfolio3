import Icons, { type IconKey } from '@/util/icons';
import { ChevronRight } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import Tag from './Tag';

type Props = {
  tags: IconKey[];
};

const Tags = ({ tags }: Props) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen((prev) => !prev);

  return (
    <div>
      <div
        onClick={toggleOpen}
        className="flex items-center tracking-tight text-muted-foreground cursor-pointer"
      >
        <ChevronRight
          size={20}
          className={`transition-all ${open ? 'rotate-90' : 'rotate-0'}`}
        />
        See Skills
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.15 }}
            className="mt-2 flex flex-wrap gap-2"
          >
            {tags.map((tag) => {
              const { id, name, iconClass } = Icons[tag];

              return <Tag key={id} name={name} icon={iconClass} />;
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tags;
