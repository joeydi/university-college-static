import React from "react";

import ThrivePhotoHeader from '../components/ThrivePhotoHeader';
import ThriveText from '../components/ThriveText';
import ThriveTextStats from '../components/ThriveTextStats';
import ThriveCircleFeature from '../components/ThriveCircleFeature';
import ThrivePhotoCardGrid from '../components/ThrivePhotoCardGrid';
import ThriveIconCardGrid from '../components/ThriveIconCardGrid';
import ThriveQuoteSlider from '../components/ThriveQuoteSlider';
import ThriveLinkSlider from '../components/ThriveLinkSlider';
import ThriveRecentNews from '../components/ThriveRecentNews';
import ThriveCTAGrid from '../components/ThriveCTAGrid';
import ThriveMasonry from '../components/ThriveMasonry';

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
      <ThriveMasonry />
    </>
  );
};

export default Home;
