import React, { useEffect } from 'react';
import NavBar from 'src/modules/nav-bar/nav-bar';
import ChartExample from 'src/modules/examples/chart-example/chart-example';
import InputExamples from 'src/modules/examples/materialize/inputs-examples';
import CordovaDevice from 'src/modules/examples/cordova-device/cordova-device';
import SwiperSample from 'src/modules/examples/swiper/swiper';

const Home = (): React.ReactElement => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <NavBar />
      <SwiperSample />
      <div className="container">
        <InputExamples />
        <ChartExample />
        <CordovaDevice />
      </div>
    </>
  );
};

export default Home;
