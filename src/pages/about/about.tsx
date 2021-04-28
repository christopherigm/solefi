import React from 'react';
import NavBar from 'src/modules/nav-bar/nav-bar';
import BusinessAccounting from 'src/modules/business-accounting/Bussiness';
import BoxBusiness from 'src/modules/boxbusiness/boxbusiness';
import SquareSolutions from 'src/modules/square-solutions/SquareSolutions';

const About = (): React.ReactElement => {
  return (
    <>
      <NavBar />
      About Section
      <BusinessAccounting/>
      <BoxBusiness/>
      <SquareSolutions/>
    </>
  );
};

export default About;
