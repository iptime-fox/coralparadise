import React, { useEffect, useRef, useState } from 'react';
import { fetchData, getOptions } from '../utils/fetchData';
import Header from '../components/Header';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { styled } from 'styled-components';
import list from '../assets/list.jpg';

const SearchListsWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  padding: 2rem;
  padding-top: 8rem;
  max-width: 1400px;
`;
const SearchListsBoxWrapper = styled.div``;

const SearchListsBox = styled.div`
  padding: 0.5rem 2rem;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 1.5rem;
  display: flex;
  column-gap: 1rem;
`;

const SearchBtn = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  border: none;
  border-right: 1px solid #e9e9e9;
  padding-right: 1rem;
  &:nth-child(4) {
    border: none;
  }
  &:nth-child(5) {
    border: none;
  }
  span {
    font-size: 16px;
  }
  div {
    color: #999;
  }
  input {
    border: none;
    outline: none;
    cursor: pointer;
    color: #999;
  }
  i {
    background-color: #ff6666;
    border-radius: 50%;
    padding: 0.5rem;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
  }
`;

const SearchResultWrapper = styled.div`
  width: 100%;
  padding: 2.5rem 0;
  display: flex;
  flex-wrap: wrap;
  column-gap: 1rem;
  justify-content: center;
`;

const SearchResult = styled.div`
  width: 23%;
  margin: 1rem 0;
  position: relative;

  img {
    width: 100%;
    margin-bottom: 0.5rem;
  }
  i {
    position: absolute;
    right: 0;
    padding: 1rem;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.5);
    &:hover {
      color: #ff6666;
    }
  }
  h4 {
    font-size: 20px;
  }
`;

const SearchLists = () => {
  const loca = useLocation();
  const inputRef = useRef();
  const location = new URLSearchParams(loca.search).get('location');
  const checkIn = new URLSearchParams(loca.search).get('checkIn');
  const checkOut = new URLSearchParams(loca.search).get('checkOut');
  const [state, setState] = useState({
    location: location,
    checkIn: checkIn,
    checkOut: checkOut,
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  useEffect(() => {
    const getSearchData = async () => {
      const getData = await fetchData(
        `https://airbnb13.p.rapidapi.com/search-location?location=${location}&checkin=${checkIn}&checkout=${checkOut}&adults=2&children=0&infants=0&pets=0&page=1&currency=USD`,
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
          <SearchListsBox>
            <SearchBtn>
              <span>위치</span>
              <input
                type='text'
                placeholder={location}
                ref={inputRef}
                name='location'
                value={state.location}
                onChange={handleOnChange}
              />
            </SearchBtn>
            <SearchBtn>
              <span>체크인</span>
              <input
                type='date'
                name='checkIn'
                value={state.checkIn}
                onChange={handleOnChange}
              />
            </SearchBtn>
            <SearchBtn>
              <span>체크아웃</span>
              <input
                type='date'
                name='checkOut'
                value={state.checkOut}
                onChange={handleOnChange}
              />
            </SearchBtn>
            <SearchBtn>
              <span>인원</span>
              <div>성인2</div>
            </SearchBtn>
            <SearchBtn>
              <i class='ri-search-line'></i>
            </SearchBtn>
          </SearchListsBox>
        </SearchListsBoxWrapper>
        <SearchResultWrapper>
          <SearchResult>
            <img src={list} alt='' />
            <i class='ri-heart-fill'></i>
            <h4>{location}</h4>
            <p>침대 1개</p>
            <b>₩200,000 / 박 </b>
            <span> 총액 ₩600,000</span>
          </SearchResult>
          <SearchResult>
            <img src={list} alt='' />
            <i class='ri-heart-fill'></i>
            <h4>{location}</h4>
            <p>침대 1개</p>
            <b>₩200,000 / 박 </b>
            <span> 총액 ₩600,000</span>
          </SearchResult>
          <SearchResult>
            <img src={list} alt='' />
            <i class='ri-heart-fill'></i>
            <h4>{location}</h4>
            <p>침대 1개</p>
            <b>₩200,000 / 박 </b>
            <span> 총액 ₩600,000</span>
          </SearchResult>
          <SearchResult>
            <img src={list} alt='' />
            <i class='ri-heart-fill'></i>
            <h4>{location}</h4>
            <p>침대 1개</p>
            <b>₩200,000 / 박 </b>
            <span> 총액 ₩600,000</span>
          </SearchResult>
          <SearchResult>
            <img src={list} alt='' />
            <i class='ri-heart-fill'></i>
            <h4>{location}</h4>
            <p>침대 1개</p>
            <b>₩200,000 / 박 </b>
            <span> 총액 ₩600,000</span>
          </SearchResult>
          <SearchResult>
            <img src={list} alt='' />
            <i class='ri-heart-fill'></i>
            <h4>{location}</h4>
            <p>침대 1개</p>
            <b>₩200,000 / 박 </b>
            <span> 총액 ₩600,000</span>
          </SearchResult>
          <SearchResult>
            <img src={list} alt='' />
            <i class='ri-heart-fill'></i>
            <h4>{location}</h4>
            <p>침대 1개</p>
            <b>₩200,000 / 박 </b>
            <span> 총액 ₩600,000</span>
          </SearchResult>
          <SearchResult>
            <img src={list} alt='' />
            <i class='ri-heart-fill'></i>
            <h4>{location}</h4>
            <p>침대 1개</p>
            <b>₩200,000 / 박 </b>
            <span> 총액 ₩600,000</span>
          </SearchResult>
        </SearchResultWrapper>
      </SearchListsWrapper>
    </>
  );
};

export default SearchLists;
