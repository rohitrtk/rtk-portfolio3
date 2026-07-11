import { MotionConfig } from 'motion/react';
import { useIsMobile } from '@/hooks/use-is-mobile';

import Navigation from '@/sections/navigation';
import Hero from '@/sections/hero';
import Projects from '@/sections/projects';
import Journey from '@/sections/journey';
import About from '@/sections/about';
import Contact from '@/sections/contact';
import Footer from '@/sections/footer';
import { Toaster } from './components/ui/sonner';

const App = () => {
  const isMobile = useIsMobile();

  return (
    <MotionConfig reducedMotion={isMobile ? 'always' : 'user'}>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />

        <main>
          <Hero />
          <Projects />
          <Journey />
          <About />
          <Contact />
        </main>

        <Footer />

        <Toaster />
      </div>
    </MotionConfig>
  );
};

export default App;
