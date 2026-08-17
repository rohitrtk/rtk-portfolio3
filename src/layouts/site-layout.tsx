import { Outlet } from 'react-router';

import RouteScrollManager from '@/components/shared/route-scroll-manager';
import { Toaster } from '@/components/ui/sonner';
import Footer from '@/sections/footer';
import Navigation from '@/sections/navigation';

const SiteLayout = () => (
  <div className="min-h-screen bg-background text-foreground">
    <RouteScrollManager />
    <Navigation />

    <main>
      <Outlet />
    </main>

    <Footer />
    <Toaster />
  </div>
);

export default SiteLayout;
