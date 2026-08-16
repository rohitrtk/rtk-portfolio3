import { Contact, Hammer } from 'lucide-react';

import AnimatedContent from '@/components/shared/animated-content';
import RotatingDescriptor from '@/components/shared/rotating-descriptor';
import Section from '@/components/shared/section';
import { Button } from '@/components/ui/button';
import { scrollToSection } from '@/util';

const Hero = () => {
  return (
    <Section id="hero" verticalPadding={false}>
      <AnimatedContent className="section-card">
        <div className="mb-8">
          <h1 className="ml-[-0.04em] text-6xl tracking-tighter text-foreground md:text-7xl lg:text-8xl">
            Rohit Kisto
          </h1>
          <p className="text-md text-primary font-bold">
            Full-Stack Software Developer
          </p>
        </div>

        <div className="text-md md:text-lg mb-12 max-w-3xl text-muted-foreground">
          <p className="mb-6">
            I'm a full-stack software developer with experience{' '}
            <RotatingDescriptor /> reliable, performant, and data-driven web
            systems. Specializing in React, TypeScript, Node.js, and SQL, with
            broader experience in Java, Python, Rust, and much more.
          </p>

          <p>
            Outside of software, I train in martial arts, lift weights, and
            study financial markets.
          </p>
        </div>

        <div className="flex flex-wrap gap-6">
          <Button
            type="button"
            size="responsive"
            onClick={() => scrollToSection('projects')}
            aria-label="View projects"
            className="button-accent flex w-full gap-1 sm:w-auto"
          >
            Projects
            <Hammer data-icon="inline-end" size={20} />
          </Button>

          <Button
            type="button"
            size="responsive"
            onClick={() => scrollToSection('contact')}
            variant="outline"
            aria-label="Contact"
            className="button-accent flex w-full gap-1 sm:w-auto"
          >
            Contact
            <Contact data-icon="inline-end" size={20} />
          </Button>
        </div>
      </AnimatedContent>
    </Section>
  );
};

export default Hero;
