import { scrollToSection } from '@/util';
import { Button } from '@heroui/react';

const Logo = () => {
  return (
    <Button
      onClick={() => scrollToSection('hero')}
      className="text-xl tracking-tight cursor-pointer bg-transparent hover:bg-transparent! hover:text-emerald-400 hover:dark:text-emerald-border-500"
    >
      rohitkisto.dev
    </Button>
  );
};

export default Logo;
