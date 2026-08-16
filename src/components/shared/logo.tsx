import { Link } from 'react-router';

import { Button } from '@/components/ui/button';

const Logo = () => {
  return (
    <Button
      asChild
      variant="ghost"
      size="icon"
      className="size-11 overflow-visible p-0 hover:bg-transparent"
    >
      <Link to="/#hero" aria-label="Back to the top" title="Rohit Kisto">
        <span aria-hidden="true" className="logo-card">
          RK
        </span>
      </Link>
    </Button>
  );
};

export default Logo;
