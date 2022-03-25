import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import Propa from '../components/sections/Propa';

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <Cta split />
      <Testimonial topDivider />
      <Propa split />
      <FeaturesTiles />
      
    </>
  );
}

export default Home;