import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';

import {
  GithubIconColourless,
  LinkedinIconColourless,
} from '@/components/icons';
import Logo from '@/components/shared/logo';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-is-mobile';

const linkedInProfileUrl = 'https://www.linkedin.com/in/rohit-kisto/';
const githubProfileUrl = 'https://github.com/rohitrtk';

const items = [
  { id: 'projects', text: 'Projects' },
  { id: 'contact', text: 'Contact' },
];

const SocialLinks = () => (
  <div className="flex items-center gap-1">
    <Button
      asChild
      variant="ghost"
      size="icon"
      className="hover:bg-transparent hover:text-primary"
    >
      <a
        href={githubProfileUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="View Rohit Kisto on GitHub"
        title="GitHub"
      >
        <GithubIconColourless
          aria-hidden="true"
          className="size-5 fill-current"
        />
      </a>
    </Button>

    <Button
      asChild
      variant="ghost"
      size="icon"
      className="hover:bg-transparent hover:text-primary"
    >
      <a
        href={linkedInProfileUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="View Rohit Kisto on LinkedIn"
        title="LinkedIn"
      >
        <LinkedinIconColourless
          aria-hidden="true"
          className="size-5 fill-current"
        />
      </a>
    </Button>
  </div>
);

const Navigation = () => {
  const [open, setOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const isMobile = useIsMobile();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        open &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  const menuContent = (
    <div className="flex flex-col gap-1 px-4 py-4">
      {items.map(({ id, text }) => (
        <Button
          key={id}
          asChild
          variant="ghost"
          className="justify-start hover:bg-transparent hover:text-primary"
        >
          <Link to={`/#${id}`} onClick={() => setOpen(false)}>
            {text}
          </Link>
        </Button>
      ))}
    </div>
  );

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 hidden md:flex items-center justify-between">
          <Logo />

          <div className="flex items-center gap-1">
            {items.map(({ id, text }) => (
              <Button
                key={id}
                asChild
                variant="ghost"
                className="text-base hover:bg-transparent hover:text-primary"
              >
                <Link to={`/#${id}`}>{text}</Link>
              </Button>
            ))}

            <div className="ml-2 border-l pl-2">
              <SocialLinks />
            </div>
          </div>
        </div>

        <div
          className={`md:hidden flex items-center justify-between px-6 py-4 gap-2 transition-colors duration-300 ${open ? 'bg-background/95 backdrop-blur-md' : 'bg-inherit'}`}
          ref={menuRef}
        >
          <Logo />

          <div className="flex items-center gap-1">
            <SocialLinks />

            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => setOpen((previous) => !previous)}
              className="hover:bg-transparent hover:text-primary"
              aria-label={
                open ? 'Close navigation menu' : 'Open navigation menu'
              }
              aria-expanded={open}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
        {isMobile ? (
          open && (
            <div className="border-t bg-background lg:hidden">
              {menuContent}
            </div>
          )
        ) : (
          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden border-t bg-background lg:hidden"
              >
                {menuContent}
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </nav>
    </>
  );
};

export default Navigation;
