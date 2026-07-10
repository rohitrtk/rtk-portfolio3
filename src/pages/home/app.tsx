import Navigation from '@/pages/home/components/navigation';
import Hero from '@/pages/home/components/hero';
import Projects from '@/pages/home/components/projects';
import Journey from '@/pages/home/components/journey';
import About from '@/pages/home/components/about';
import Contact from '@/pages/home/components/contact';
import Footer from './components/footer';

const App = () => {
  return (
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
    </div>
  );
};

export default App;
