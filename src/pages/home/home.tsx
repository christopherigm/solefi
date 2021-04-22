import React from 'react';
import NavBar from 'src/modules/nav-bar/nav-bar';
import ChartExample from 'src/modules/examples/chart-example/chart-example';
import InputExamples from 'src/modules/examples/materialize/inputs-examples';
import CordovaDevice from 'src/modules/examples/cordova-device/cordova-device';

const Home = (): React.ReactElement => {
  return (
    <>
      <NavBar />
      <div className="container">
        Home Section
        <InputExamples />
        <ChartExample />
        <CordovaDevice />
      </div>
    </>
  );
};

export default Home;
