import Navigation from '@/pages/home/components/navigation';
import Hero from '@/pages/home/components/hero';
import Projects from '@/pages/home/components/projects';
import Journey from '@/pages/home/components/journey';
import About from '@/pages/home/components/about';
import Contact from '@/pages/home/components/contact';

const App = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <Projects />
      <Journey />
      <About />
      <Contact />
    </div>
  );
};

export default App;
