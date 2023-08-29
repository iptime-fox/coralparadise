import React, { useEffect, useRef, useState } from 'react';
import { fetchData, getOptions } from '../utils/fetchData';
import mainImg from '../assets/main.jpg';
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
  UpperInputs,
  LowerInputs,
  InputNumWrapper,
} from '../styles/LandingStyle';
import { Container } from '../styles/ContainerStyle';
import { getFormattedTodayDate, getFormattedTomorrowDate } from '../utils/util';

const Landing = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    location: '',
    adults: 2,
    children: 0,
    pets: 0,
    checkIn: getFormattedTodayDate(new Date()),
    checkOut: getFormattedTomorrowDate(new Date()),
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
      // console.log(getData.results[0]);
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
    if (state.adults === '') {
      e.preventDefault();
      alert('검색하실 위치를 입력하세요');
      inputRef.current.focus();
      return;
    }
    if (state.children === '') {
      e.preventDefault();
      alert('검색하실 위치를 입력하세요');
      inputRef.current.focus();
      return;
    }
    if (state.pets === '') {
      e.preventDefault();
      alert('검색하실 위치를 입력하세요');
      inputRef.current.focus();
      return;
    }
    e.preventDefault();
    navigate(
      `/search-lists?location=${state.location}&checkIn=${state.checkIn}&checkOut=${state.checkOut}&adults=${state.adults}&children=${state.children}&pets=${state.pets}`
    );
  };
  return (
    <>
      <Container style={{ paddingTop: '8rem' }}>
        <LandingPage>
          <SearchBoxWrapper>
            <SearchBox>
              <TitleWrapper>
                <h4>한국의 휴가 임대 시설</h4>
                <p>CoralParadise에서 독특한 숙소를 예약하세요.</p>
              </TitleWrapper>
              <form onSubmit={onSubmit}>
                <UpperInputs>
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
                  <InputWrapper>
                    <p>인원</p>
                    <InputNumWrapper>
                      <div>
                        <span>성인</span>
                        <input
                          type='number'
                          ref={inputRef}
                          name='adults'
                          value={state.adults}
                          onChange={handleOnChange}
                        />
                      </div>
                      <div>
                        <span>어린이</span>
                        <input
                          type='number'
                          ref={inputRef}
                          name='children'
                          value={state.children}
                          onChange={handleOnChange}
                        />
                      </div>
                      <div>
                        <span>반려동물</span>
                        <input
                          type='number'
                          ref={inputRef}
                          name='pets'
                          value={state.pets}
                          onChange={handleOnChange}
                        />
                      </div>
                    </InputNumWrapper>
                  </InputWrapper>
                </UpperInputs>
                <LowerInputs>
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
                </LowerInputs>
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
      </Container>
    </>
  );
};
export default Landing;
