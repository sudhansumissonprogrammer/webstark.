import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '@/components/pages/about/Hero';
import Stats from '@/components/pages/about/Stats';
import OurStory from '@/components/pages/about/OurStory';
import Values from '@/components/pages/about/Values';
import Team from '@/components/pages/about/Team';
import Timeline from '@/components/pages/about/Timeline';
import MissionVision from '@/components/pages/about/MissionVision';
import Cta from '@/components/pages/shared/Cta';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About DigitalCraft | Web Development Team Bhubaneswar | Our Story</title>
        <meta name="description" content="Learn about DigitalCraft's journey, team, and values. Professional web development and e-commerce solutions in Bhubaneswar with a client-centric approach." />
      </Helmet>
      <Hero />
      <Stats />
      <OurStory />
      <Values />
      <Team />
      <Timeline />
      <MissionVision />
      <Cta 
        title="Ready to Work with Us?"
        description="Let's discuss your project and see how we can help transform your digital presence. We're excited to be part of your success story."
        primaryButtonText="Get in Touch"
        secondaryButtonText="View Our Work"
        secondaryButtonLink="/work"
      />
    </>
  );
};

export default AboutPage;