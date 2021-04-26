import React from 'react';
import NavBar from 'src/modules/nav-bar/nav-bar';
import BusinessAccounting from 'src/modules/business-accounting/Bussiness';

const About = (): React.ReactElement => {
  return (
    <>
      <NavBar />
      About Section
      <BusinessAccounting />
    </>
  );
};

export default About;
