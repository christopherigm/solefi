import React from 'react';
import SystemCheck from 'src/modules/system-check/system-check';
import NavBar from 'src/modules/nav-bar/nav-bar';
import InfoGrid from 'src/modules/info-grid/info-grid';
import SquareItWork from 'src/modules/how-it-works-item/how-it-works/how-it-works';
import PlatformTrial from 'src/modules/PlatformTrial/PlatformTrial';
import SolefiBlockSquare from 'src/modules/blocksquare/SolefiBlockSquare';
import Footer from 'src/modules/footer/footer';

const About = (): React.ReactElement => {
  return (
    <>
      <NavBar />
      <InfoGrid/>
      <SquareItWork/>
      <PlatformTrial/>
      <SolefiBlockSquare/>
      <Footer />
      <SystemCheck />
    </>
  );
};

export default About;
