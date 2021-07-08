import React from 'react';
import SystemCheck from 'src/modules/system-check/system-check';
import NavBar from 'src/modules/nav-bar/nav-bar';
import HorizontalSpace from 'src/modules/horizontal-space/horizontal-space';
import Mosaic from 'src/modules/mosaic/mosaic';
import Footer from 'src/modules/footer/footer';
import MediaVideo from 'src/modules/media-video/media-video';

const About = (): React.ReactElement => {
  return (
    <>
      <NavBar />
      <MediaVideo/>
      <Mosaic />
      <HorizontalSpace size='large' />
      <Footer />
      <SystemCheck />
    </>
  );
};

export default About;
