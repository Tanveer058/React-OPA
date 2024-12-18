import React from 'react';
import Mainpart from '../Components/2mainpart/mainpart';
import Comp3 from '../Components/3component3/comp3';
import CrouselComp from '../Components/4Crousel Component/CCopm4';
import Comp5CS from '../Components/5Comp5 Case Studies/Comp5-case-st';
import AandR from '../Components/6Awards & Recognitions/AR';

const Home = () => {
  return (
    <>
      <Mainpart />
      <Comp3 />
      <CrouselComp />
      <Comp5CS />
      <AandR />
    </>
  );
};

export default Home;