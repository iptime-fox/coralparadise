import React, { useEffect } from 'react';
import { fetchData, getOptions } from '../utils/fetchData';
import Header from '../components/Header';
import { Helmet } from 'react-helmet';

const SearchLists = () => {
  useEffect(() => {
    const getSearchData = async () => {
      const getData = await fetchData(
        'https://airbnb13.p.rapidapi.com/search-location?location=Paris&checkin=2023-09-16&checkout=2023-09-17&adults=1&children=0&infants=0&pets=0&page=1&currency=USD',
        getOptions
      );
      console.log(getData);
    };
    // getSearchData();
  }, []);

  return (
    <>
      <Helmet>
        <title>ColralParadise</title>
      </Helmet>
      <Header />
    </>
  );
};

export default SearchLists;
