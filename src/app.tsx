import { MotionConfig } from 'motion/react';
import { Route, Routes } from 'react-router';

import { useIsMobile } from '@/hooks/use-is-mobile';
import SiteLayout from '@/layouts/site-layout';
import HomePage from '@/pages/home';
import NotFoundPage from '@/pages/not-found';
import ProjectPage from '@/pages/project';

const App = () => {
  const isMobile = useIsMobile();

  return (
    <MotionConfig reducedMotion={isMobile ? 'always' : 'user'}>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="projects/:slug" element={<ProjectPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </MotionConfig>
  );
};

export default App;
