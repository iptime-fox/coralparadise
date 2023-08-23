import React, { useEffect } from 'react';
import { fetchData, getOptions } from '../utils/fetchData';
import Header from '../components/Header';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { styled } from 'styled-components';

const SearchListsWrapper = styled.div`
  display: flex;
  margin-top: 7rem;
`;
const SearchListsBoxWrapper = styled.div``;
const SearchListsBox = styled.div``;

const SearchLists = () => {
  const loca = useLocation();
  const location = new URLSearchParams(loca.search).get('location');
  const checkIn = new URLSearchParams(loca.search).get('checkIn');
  const checkOut = new URLSearchParams(loca.search).get('checkOut');

  useEffect(() => {
    const getSearchData = async () => {
      const getData = await fetchData(
        `https://airbnb13.p.rapidapi.com/search-location?location=${location}&checkin=${checkIn}&checkout=${checkOut}&adults=1&children=0&infants=0&pets=0&page=1&currency=USD`,
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
      <SearchListsWrapper>
        <SearchListsBoxWrapper>
          <SearchListsBox></SearchListsBox>
        </SearchListsBoxWrapper>
      </SearchListsWrapper>
    </>
  );
};

export default SearchLists;
