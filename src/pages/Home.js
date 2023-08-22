import React from 'react';
import Header from '../components/Header';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>ColralParadise</title>
      </Helmet>
      <Header />
    </>
  );
};
export default Home;
