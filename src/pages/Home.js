import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import { Helmet } from 'react-helmet';
import Landing from '../components/Landing';
import { SliderSection } from '../components/SliderSection';
import MapComponent from '../components/MapComponent';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>ColralParadise</title>
      </Helmet>
      <Header />
      <Landing />
      <SliderSection />
      <MapComponent />
    </>
  );
};
export default Home;
