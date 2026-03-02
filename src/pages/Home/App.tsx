import Navigation from '@/pages/Home/components/Navigation';
import Hero from '@/pages/Home/components/Hero';
import Projects from '@/pages/Home/components/Projects';
import Journey from '@/pages/Home/components/Journey';
import About from '@/pages/Home/components/About';
import Contact from '@/pages/Home/components/Contact';

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
