import React, { useEffect } from 'react';
import NavBar from 'src/modules/nav-bar/nav-bar';
import SwiperSample from 'src/modules/examples/swiper/swiper';
import HorizontalSpace from 'src/modules/horizontal-space/horizontal-space';
import InfoGrid from 'src/modules/info-grid/info-grid';

const Home = (): React.ReactElement => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <NavBar />
      <SwiperSample />
      <HorizontalSpace size='large' />
      <InfoGrid/>
    </>
  );
};

export default Home;
