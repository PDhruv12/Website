import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Education from '../components/Education';
import loadable from '@loadable/component';
import WorkExperience from '../components/WorkExperience';
import Projects from '../components/Projects';
import LoadingFallback from '../components/Loading';

const FluidBackground = loadable(() => import('../components/FluidBackground'), {
  fallback: <LoadingFallback />,
});

const IndexPage = () => {
  return (
    <main>
      <FluidBackground />

      <Hero />
      <About />
      <Education />
      <WorkExperience />
      <Projects />
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Dhruv Padam Kumar</title>;
