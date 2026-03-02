import { useTheme } from '@/context/ThemeProvider';
import { Button, Link } from '@heroui/react';
import { ArrowRight } from 'lucide-react';
import { scrollToSection } from '@/util';
import Section from '@/components/Section';
import AnimatedContent from '@/components/AnimatedContent';
import Icons from '@/util/icons';

const linkedInIconClass = Icons['linkedin-colourless'].iconClass;
const githubIconClass = Icons['github-colourless'].iconClass;

const linkedInProfileUrl = 'https://www.linkedin.com/in/rohit-kisto/';
const githubProfileUrl = 'https://github.com/rohitrtk';

const Hero = () => {
  const { isDark } = useTheme();

  return (
    <Section id="hero" verticalPadding={false}>
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(${isDark ? '#E5E7EB' : `#111111`} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? '#E5E7EB' : '#111111'} 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 bg-emerald-400 dark:bg-emerald-500" />

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

        <div className="flex flex-wrap gap-4 mb-4">
          <Button onClick={() => scrollToSection('projects')}>
            <span>View Projects</span>
            <ArrowRight size={18} />
          </Button>

          <Button onClick={() => scrollToSection('contact')} variant="outline">
            Contact
          </Button>
        </div>

        <div className="flex flex-wrap gap-4">
          <Button className="bg-transparent! hover:bg-transparent! p-0">
            <Link
              href={linkedInProfileUrl}
              target="_blank"
              className="text-foreground dark:text-inherit hover:text-emerald-500 no-underline"
            >
              <i className={`${linkedInIconClass} text-2xl`} />
            </Link>
          </Button>

          <Button className="bg-transparent! hover:bg-transparent! p-0">
            <Link
              href={githubProfileUrl}
              target="_blank"
              className="text-foreground dark:text-inherit hover:text-emerald-500 no-underline"
            >
              <i className={`${githubIconClass} text-2xl`} />
            </Link>
          </Button>
        </div>
      </AnimatedContent>
    </Section>
  );
};

export default Hero;
