import React from 'react';
import { HeroSection, HeroOverlay, HeroContent } from '../styles/components';

function Hero({ title, subtitle, background }) {
  return (
    <HeroSection bg={background}>
      <HeroOverlay />
      <HeroContent>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </HeroContent>
    </HeroSection>
  );
}

export default Hero;
