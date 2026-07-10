import { useEffect, useRef, useState } from 'react';
import { useTheme } from '@/context/theme-provider';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { scrollToSection } from '@/util';
import { AnimatePresence, motion } from 'motion/react';
import Logo from '@/components/logo';

const items = [
  { id: 'projects', text: 'Projects' },
  { id: 'journey', text: 'Journey' },
  { id: 'about', text: 'About' },
  { id: 'contact', text: 'Contact' },
];

const Navigation = () => {
  const [open, setOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const { isDark, toggleTheme } = useTheme();

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

  const handleNavItemClick = (id: string) => {
    if (open) {
      setOpen(false);
      setTimeout(() => scrollToSection(id), 100);
    } else {
      scrollToSection(id);
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 py-4 hidden md:flex items-center justify-between">
          <Logo />

          <div className="flex items-center gap-1">
            {items.map(({ id, text }) => (
              <Button
                key={id}
                type="button"
                variant="ghost"
                onClick={() => handleNavItemClick(id)}
                className="text-base hover:bg-transparent hover:text-emerald-500 dark:hover:text-emerald-400"
              >
                {text}
              </Button>
            ))}

            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hover:bg-transparent hover:text-emerald-500 dark:hover:text-emerald-400"
              aria-label={
                isDark ? 'Switch to light mode' : 'Switch to dark mode'
              }
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
          </div>
        </div>

        <div
          className={`md:hidden flex items-center justify-between px-6 py-4 gap-2 transition-colors duration-300 ${open ? 'bg-background/95 backdrop-blur-md' : 'bg-inherit'}`}
          ref={menuRef}
        >
          <Logo />

          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => setOpen((previous) => !previous)}
            className="hover:bg-transparent hover:text-emerald-500 dark:hover:text-emerald-400"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              onMouseDown={(e) => e.stopPropagation()}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute top-full left-0 right-0 border-b backdrop-blur-md bg-background/95"
            >
              <div className="flex flex-col px-6 py-4 gap-4">
                {items.map(({ id, text }) => (
                  <Button
                    key={id}
                    type="button"
                    variant="ghost"
                    className="justify-start hover:bg-transparent hover:text-emerald-500 dark:hover:text-emerald-400"
                    onClick={() => handleNavItemClick(id)}
                  >
                    {text}
                  </Button>
                ))}

                <Separator />

                <Button
                  type="button"
                  variant="ghost"
                  className="justify-start hover:bg-transparent hover:text-emerald-500 dark:hover:text-emerald-400"
                  onClick={toggleTheme}
                >
                  {isDark ? (
                    <>
                      Light Mode
                      <Sun data-icon="inline-end" size={20} />
                    </>
                  ) : (
                    <>
                      Dark Mode
                      <Moon data-icon="inline-end" size={20} />
                    </>
                  )}
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navigation;
