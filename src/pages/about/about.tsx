import React, { useEffect } from 'react';
import NavBar from 'src/modules/nav-bar/nav-bar';
import BusinessAccounting from 'src/modules/business-accounting/Bussiness';
import BoxBusiness from 'src/modules/boxbusiness/boxbusiness';
import SquareSolutions from 'src/modules/square-solutions/SquareSolutions';
import SquareItWork from 'src/modules/square-it-work/SquareItWork';

const About = (): React.ReactElement => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <NavBar />
      <BusinessAccounting/>
      <BoxBusiness/>
      <SquareSolutions/>
      <SquareItWork/>
    </>
  );
};

export default About;
