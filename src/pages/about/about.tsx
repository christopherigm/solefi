import React from 'react';
import SystemCheck from 'src/modules/system-check/system-check';
import NavBar from 'src/modules/nav-bar/nav-bar';
import HorizontalSpace from 'src/modules/horizontal-space/horizontal-space';
import Mosaic from 'src/modules/mosaic/mosaic';
import Footer from 'src/modules/footer/footer';
import Contact from 'src/modules/square-contact/contact';

const About = (): React.ReactElement => {
  return (
    <>
      <NavBar />
      <HorizontalSpace size='large' />
      <Mosaic />
      <Contact/>
      <Footer />
      <SystemCheck />
    </>
  );
};

export default About;
