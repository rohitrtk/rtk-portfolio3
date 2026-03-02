import { useTheme } from '@/context/ThemeProvider';
import { Button } from '@heroui/react';
import { Moon, Sun } from 'lucide-react';
import { scrollToSection } from '@/util';

const items = [
  { id: 'projects', text: 'Projects' },
  { id: 'journey', text: 'Journey' },
  { id: 'about', text: 'About' },
  { id: 'contact', text: 'Contact' },
];

const Navigation = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Button className="tracking-tight" variant="ghost">
          rohitkisto.dev
        </Button>

        <div className="flex items-center gap-5">
          {items.map(({ id, text }) => (
            <Button
              key={id}
              onClick={() => scrollToSection(id)}
              variant="ghost"
            >
              {text}
            </Button>
          ))}
          <Button
            onClick={toggleTheme}
            className="p-2"
            variant="ghost"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
