import { useTheme } from '@/context/theme-provider';
import { Button } from '@/components/ui/button';
import { ArrowRight, Contact } from 'lucide-react';
import { scrollToSection } from '@/util';
import Section from '@/components/section';
import AnimatedContent from '@/components/animated-content';
import {
  GithubIconColourless,
  LinkedinIconColourless,
} from '@/components/icons';

const linkedInProfileUrl = 'https://www.linkedin.com/in/rohit-kisto/';
const githubProfileUrl = 'https://github.com/rohitrtk';

const Hero = () => {
  const { isDark } = useTheme();

  return (
    <Section id="hero" verticalPadding={false}>
      <div
        aria-hidden={true}
        className="absolute pointer-events-none inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(${isDark ? '#E5E7EB' : `#111111`} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? '#E5E7EB' : '#111111'} 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div
        aria-hidden={true}
        className="absolute pointer-events-none top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 bg-emerald-400 dark:bg-emerald-500"
      />

      <AnimatedContent>
        <div className="inline-block px-4 py-2 rounded-full border mb-8 bg-emerald-50 border-emerald-200 text-emerald-700 dark:bg-emerald-500/10 dark:border-emerald-500/20 dark:text-emerald-400">
          <span className="text-sm tracking-wide">
            Full-Stack Software Developer
          </span>
        </div>

        <h1 className="text-6xl md:text-7xl lg:text-8xl mb-8 tracking-tight text-foreground">
          Rohit Kisto
        </h1>

        <p className="text-xl md:text-2xl mb-12 max-w-3xl text-muted-foreground">
          Building performant systems and type-safe APIs for the web.
        </p>

        <div className="mb-6 flex flex-wrap gap-6">
          <Button
            type="button"
            size="responsive"
            onClick={() => scrollToSection('projects')}
            aria-label="View projects"
            className="flex gap-1 w-full sm:w-auto"
          >
            View Projects
            <ArrowRight data-icon="inline-end" size={20} />
          </Button>

          <Button
            type="button"
            size="responsive"
            onClick={() => scrollToSection('contact')}
            variant="outline"
            aria-label="Contact"
            className="flex gap-1 w-full sm:w-auto"
          >
            Contact
            <Contact data-icon="inline-end" size={20} />
          </Button>
        </div>

        <div className="flex items-center gap-3">
          <Button
            asChild
            variant="outline"
            size="icon-responsive"
            className="hover:border-emerald-500 hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:text-emerald-400"
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
                className="size-7 fill-current sm:size-8"
              />
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            size="icon-responsive"
            className="hover:border-emerald-500 hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:text-emerald-400"
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
                className="size-7 fill-current sm:size-8"
              />
            </a>
          </Button>
        </div>
      </AnimatedContent>
    </Section>
  );
};

export default Hero;
