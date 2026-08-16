import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';

import AnimatedContent from '@/components/shared/animated-content';
import Section from '@/components/shared/section';
import { Button } from '@/components/ui/button';

const NotFoundPage = () => {
  return (
    <Section>
      <AnimatedContent className="section-card">
        <div className="max-w-3xl">
          <p className="mb-3 font-heading text-sm font-semibold tracking-[0.2em] text-primary uppercase">
            Error 404
          </p>

          <h1 className="mb-6 text-5xl leading-none tracking-tight text-foreground md:text-7xl">
            Page not found
          </h1>

          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            The page you requested doesn't exist, may have moved, or isn't
            available yet.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild size="responsive" className="button-accent gap-2">
              <Link to="/">
                <ArrowLeft aria-hidden="true" />
                Back home
              </Link>
            </Button>
          </div>
        </div>
      </AnimatedContent>
    </Section>
  );
};

export default NotFoundPage;
