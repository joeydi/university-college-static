import React from "react";

import ThrivePhotoHeader from '../components/ThrivePhotoHeader';
import ThriveText from '../components/ThriveText';
import ThriveCircleFeature from '../components/ThriveCircleFeature';
import ThrivePhotoCardGrid from '../components/ThrivePhotoCardGrid';
import ThriveQuoteSlider from '../components/ThriveQuoteSlider';
import ThriveLinkSlider from '../components/ThriveLinkSlider';
import ThriveRecentNews from '../components/ThriveRecentNews';
import ThriveCTAGrid from '../components/ThriveCTAGrid';

const Home = () => {
  return (
    <>
      <ThrivePhotoHeader />
      <ThriveText />
      <ThriveCircleFeature />
      <ThrivePhotoCardGrid />
      <ThriveQuoteSlider />
      <ThriveLinkSlider />
      <ThriveRecentNews />
      <ThriveCTAGrid />
    </>
  );
};

export default Home;
