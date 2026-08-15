import { MotionConfig } from 'motion/react';

import { Toaster } from '@/components/ui/sonner';
import { useIsMobile } from '@/hooks/use-is-mobile';
import Contact from '@/sections/contact';
import Footer from '@/sections/footer';
import Hero from '@/sections/hero';
import Navigation from '@/sections/navigation';
import Projects from '@/sections/projects';

const App = () => {
  const isMobile = useIsMobile();

  return (
    <MotionConfig reducedMotion={isMobile ? 'always' : 'user'}>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />

        <main>
          <Hero />
          <Projects />
          <Contact />
        </main>

        <Footer />

        <Toaster />
      </div>
    </MotionConfig>
  );
};

export default App;
