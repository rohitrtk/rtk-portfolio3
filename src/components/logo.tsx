import { Button } from '@/components/ui/button';
import { scrollToSection } from '@/util';

const Logo = () => {
  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      onClick={() => scrollToSection('hero')}
      className="size-11 overflow-visible p-0 hover:bg-transparent"
      aria-label="Back to the top"
      title="Rohit Kisto"
    >
      <span aria-hidden="true" className="logo-card">
        RK
      </span>
    </Button>
  );
};

export default Logo;
