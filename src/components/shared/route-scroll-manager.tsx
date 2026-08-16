import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router';

import {
  captureRouteScrollPosition,
  getRouteScrollPosition,
} from '@/util/route-scroll';

const RouteScrollManager = () => {
  const { hash, key } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';

    return () => {
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  useEffect(() => {
    const animationFrame = window.requestAnimationFrame(() => {
      const savedPosition = getRouteScrollPosition(key);

      if (navigationType === 'POP' && savedPosition !== undefined) {
        window.scrollTo({ top: savedPosition, behavior: 'auto' });
        return;
      }

      if (hash) {
        const targetId = decodeURIComponent(hash.slice(1));
        const target = document.getElementById(targetId);

        target?.scrollIntoView({
          behavior: navigationType === 'POP' ? 'auto' : 'smooth',
        });
        return;
      }

      window.scrollTo({ top: 0, behavior: 'auto' });
    });

    return () => {
      window.cancelAnimationFrame(animationFrame);
      captureRouteScrollPosition(key);
    };
  }, [hash, key, navigationType]);

  return null;
};

export default RouteScrollManager;
