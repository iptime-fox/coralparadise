import React from 'react';
import SearchResults from '../components/SearchResults';
import Header from '../components/Header';
import { Helmet } from 'react-helmet';

const SearchLists = () => {
  return (
    <>
      <Helmet>
        <title>ColralParadise</title>
      </Helmet>
      <Header />
      <SearchResults />
    </>
  );
};

export default SearchLists;
