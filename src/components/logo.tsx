import { Button } from '@/components/ui/button';
import { scrollToSection } from '@/util';

const Logo = () => {
  return (
    <Button
      type="button"
      variant="ghost"
      onClick={() => scrollToSection('hero')}
      className="text-xl tracking-tight hover:bg-transparent hover:text-emerald-500 dark:hover:text-emerald-400"
    >
      rohitkisto.dev
    </Button>
  );
};

export default Logo;
