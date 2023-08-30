import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import { DetailPage } from '../components/DetailPage';

const Details = () => {
  return (
    <div>
      <Helmet>
        <title>ColralParadise</title>
      </Helmet>
      {/* <Header /> */}
      <DetailPage />
    </div>
  );
};

export default Details;
