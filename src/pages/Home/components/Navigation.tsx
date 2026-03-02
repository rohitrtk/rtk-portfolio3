import { useState, useEffect, useRef } from 'react';
import { useTheme } from '@/context/ThemeProvider';
import { Button, Separator } from '@heroui/react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { scrollToSection } from '@/util';
import { AnimatePresence, motion } from 'motion/react';
import Logo from '@/components/Logo';

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

          <div className="flex items-center gap-3">
            {items.map(({ id, text }) => (
              <Button
                key={id}
                onClick={() => handleNavItemClick(id)}
                className="text-md bg-transparent hover:bg-transparent! transition-none! hover:text-emerald-400 hover:dark:text-emerald-border-500"
                aria-label={text}
              >
                {text}
              </Button>
            ))}
            <Button
              onClick={toggleTheme}
              className="p-2 bg-transparent hover:bg-transparent! transition-none! hover:text-emerald-400 hover:dark:text-emerald-border-500"
              aria-label="Toggle theme"
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
            onClick={() => setOpen((prev) => !prev)}
            variant="ghost"
            className="p-2 bg-transparent hover:bg-transparent! transition-none! hover:text-emerald-400 hover:dark:text-emerald-border-500"
            aria-label="Toggle navigation menu"
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
                  <div
                    key={id}
                    // variant="ghost"
                    className="justify-start hover:text-emerald-400 hover:dark:text-emerald-border-500 cursor-pointer"
                    onClick={() => handleNavItemClick(id)}
                    aria-label={text}
                  >
                    {text}
                  </div>
                ))}

                <Separator />

                <div
                  onClick={toggleTheme}
                  className="justify-start cursor-pointer bg-transparent hover:bg-transparent! transition-none! hover:text-emerald-400 hover:dark:text-emerald-border-500"
                  aria-label="Toggle theme"
                >
                  {isDark ? (
                    <span className="flex items-center gap-2">
                      Light Mode <Sun size={20} />
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Dark Mode <Moon size={20} />
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navigation;
