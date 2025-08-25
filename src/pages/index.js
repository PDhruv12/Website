import * as React from 'react';
import FluidBackground from '../components/FluidBackground';
import Hero from '../components/Hero';
import About from '../components/About';

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
