import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Icons from '@/util/icons';
import { scrollToSection } from '@/util';

const linkedInIconClass = Icons['linkedin-colourless'].iconClass;
const githubIconClass = Icons['github-colourless'].iconClass;

const linkedInProfileUrl = 'https://www.linkedin.com/in/rohit-kisto/';
const githubProfileUrl = 'https://github.com/rohitrtk';

const navigationItems = [
  { id: 'hero', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'journey', label: 'Journey' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t bg-background">
      <div
        aria-hidden="true"
        className="absolute pointer-events-none bottom-0 left-1/2 h-48 w-96 -translate-x-1/2 bg-emerald-400/10 blur-3xl dark:bg-emerald-500/10"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-10 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
            <Button
              type="button"
              variant="ghost"
              onClick={() => scrollToSection('hero')}
              className="text-xl tracking-tight hover:bg-transparent hover:text-emerald-500 dark:hover:text-emerald-400"
            >
              rohitkisto.dev
            </Button>

            <nav
              aria-label="Footer navigation"
              className="flex flex-wrap items-center justify-center gap-1"
            >
              {navigationItems.map(({ id, label }) => (
                <Button
                  key={id}
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection(id)}
                  className="text-muted-foreground hover:bg-transparent hover:text-emerald-500 dark:hover:text-emerald-400"
                >
                  {label}
                </Button>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <Button
                asChild
                variant="outline"
                size="icon"
                className="hover:border-emerald-500 hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:text-emerald-400"
              >
                <a
                  href={linkedInProfileUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="View Rohit Kisto on LinkedIn"
                  title="LinkedIn"
                >
                  <i
                    aria-hidden="true"
                    className={`${linkedInIconClass} text-xl`}
                  />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="icon"
                className="hover:border-emerald-500 hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:text-emerald-400"
              >
                <a
                  href={githubProfileUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="View Rohit Kisto on GitHub"
                  title="GitHub"
                >
                  <i
                    aria-hidden="true"
                    className={`${githubIconClass} text-xl`}
                  />
                </a>
              </Button>
            </div>
          </div>

          <Separator />

          <div className="flex flex-col items-center justify-between gap-3 text-center text-sm text-muted-foreground sm:flex-row sm:text-left">
            <p>
              © {new Date().getFullYear()} Rohit Kisto. All rights reserved.
            </p>

            <p>Built with React, TypeScript, Tailwind CSS, and Shadcn.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
