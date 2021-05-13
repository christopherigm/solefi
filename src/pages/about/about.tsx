import React, { useEffect } from 'react';
import NavBar from 'src/modules/nav-bar/nav-bar';
import InfoGrid from 'src/modules/info-grid/info-grid';
import SquareItWork from 'src/modules/how-it-works-item/how-it-works/how-it-works';

const About = (): React.ReactElement => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <NavBar />
      <InfoGrid/>
      <SquareItWork/>
    </>
  );
};

export default About;
