import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import loadable from '@loadable/component';

const FluidBackground = loadable(() => import('../components/FluidBackground'), {
  fallback: <div>Loading fluid effect...</div>, 
});

const IndexPage = () => {
  return (
    <main>
      <FluidBackground />

      <Hero />
      <About />
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Dhruv Padam Kumar</title>;
