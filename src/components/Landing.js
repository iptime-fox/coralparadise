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
import SearchBoxes from './SearchBox';

const Landing = () => {
  const [main, setmMain] = useState([]);
  useEffect(() => {
    const getMainData = async () => {
      const getData = await fetchData(
        `https://airbnb13.p.rapidapi.com/search-location?location=korea&checkin=2023-12-01&checkout=2023-12-02&adults=$1&currency=KRW`,
        getOptions
      );
      setmMain(getData.results);
      // setmMain[Math.floor(Math.random() * setmMain.length)]
    };
    getMainData();
  }, []);
  return (
    <>
      <Container style={{ paddingTop: '3rem' }}>
        <LandingPage>
          <SearchBoxes />
          <MainImgWrapper>
            {/* {main.Math.f((data) => (
              <MainImg src={data.images[0]}></MainImg>
            ))} */}
            <MainImg src={mainImg}></MainImg>
          </MainImgWrapper>
        </LandingPage>
      </Container>
    </>
  );
};
export default Landing;
