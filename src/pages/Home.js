import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import { Helmet } from 'react-helmet';
import { styled } from 'styled-components';
import { fetchData, getOptions } from '../utils/fetchData';
import mainImg from '../assets/main.jpg';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {
  HomeWrapper,
  LandingPage,
  SearchBox,
  SearchBoxWrapper,
  MainImgWrapper,
  MainImg,
  TitleWrapper,
  InputWrapper,
  CalenderWrapper,
  SubmitWrapper,
  SubmitBtn,
} from '../styles/HomeStyle';

const getFormattedDate = (targetDate) => {
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();
  if (month < 10) {
    month = `0${month}`;
  }
  if (date < 10) {
    date = `0${date}`;
  }
  return `${year}-${month}-${date}`;
};

const Home = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    location: '',
    checkIn: getFormattedDate(new Date()),
    checkOut: getFormattedDate(new Date()),
  });
  const inputRef = useRef();
  const [main, setMain] = useState([]);
  useEffect(() => {
    const getSearchData = async () => {
      const getData = await fetchData(
        'https://airbnb13.p.rapidapi.com/search-location?location=Paris&checkin=2023-09-16&checkout=2023-09-17&adults=1&children=0&infants=0&pets=0&page=1&currency=USD',
        getOptions
      );
      setMain(getData.results[0]);
      console.log(getData.results[0]);
    };
    getSearchData();
  }, []);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  const onSubmit = (e) => {
    if (state.location === '') {
      e.preventDefault();
      alert('검색하실 위치를 입력하세요');
      inputRef.current.focus();
      return;
    }
    e.preventDefault();
    navigate(
      `/search-lists?location=${state.location}&checkIn=${state.checkIn}&checkOut=${state.checkOut}`
    );
  };
  return (
    <>
      <Helmet>
        <title>ColralParadise</title>
      </Helmet>
      <Header />
      <HomeWrapper>
        <LandingPage>
          <SearchBoxWrapper>
            <SearchBox>
              <TitleWrapper>
                <h4>한국의 휴가 임대 시설</h4>
                <p>CoralParadise에서 독특한 숙소를 예약하세요.</p>
              </TitleWrapper>
              <form onSubmit={onSubmit}>
                <InputWrapper>
                  <p>위치</p>
                  <input
                    type='text'
                    ref={inputRef}
                    placeholder='여행지 검색'
                    name='location'
                    value={state.location}
                    onChange={handleOnChange}
                  />
                </InputWrapper>
                <CalenderWrapper>
                  <InputWrapper>
                    <p>체크인</p>
                    <input
                      type='date'
                      name='checkIn'
                      value={state.checkIn}
                      onChange={handleOnChange}
                    />
                  </InputWrapper>
                  <InputWrapper>
                    <p>체크아웃</p>
                    <input
                      type='date'
                      name='checkOut'
                      value={state.checkOut}
                      onChange={handleOnChange}
                    />
                  </InputWrapper>
                </CalenderWrapper>
                <SubmitWrapper>
                  <SubmitBtn type='submit'>검색</SubmitBtn>
                </SubmitWrapper>
              </form>
            </SearchBox>
          </SearchBoxWrapper>
          <MainImgWrapper>
            <MainImg src={mainImg}></MainImg>
          </MainImgWrapper>
        </LandingPage>
      </HomeWrapper>
    </>
  );
};
export default Home;
