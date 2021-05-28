import React from 'react';
import SystemCheck from 'src/modules/system-check/system-check';
import NavBar from 'src/modules/nav-bar/nav-bar';
import Slides from 'src/modules/slides/slides';
import HorizontalSpace from 'src/modules/horizontal-space/horizontal-space';
import InfoGrid from 'src/modules/info-grid/info-grid';
import Footer from 'src/modules/footer/footer';

const Home = (): React.ReactElement => {
  return (
    <>
      <NavBar />
      <Slides />
      <HorizontalSpace size='large' />
      <InfoGrid/>
      <Footer />
      <SystemCheck />
    </>
  );
};

export default Home;
