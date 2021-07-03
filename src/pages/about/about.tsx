import React from 'react';
import SystemCheck from 'src/modules/system-check/system-check';
import NavBar from 'src/modules/nav-bar/nav-bar';
import HorizontalSpace from 'src/modules/horizontal-space/horizontal-space';
import Mosaic from 'src/modules/mosaic/mosaic';
import Footer from 'src/modules/footer/footer';
import Video from 'src/modules/examples/video/video';

const About = (): React.ReactElement => {
  return (
    <>
      <NavBar />
      <HorizontalSpace size='medium' />
      <Mosaic />
      <HorizontalSpace size='large' />
      <Video />
      <Footer />
      <SystemCheck />
    </>
  );
};

export default About;
