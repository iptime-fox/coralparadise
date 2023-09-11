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
  return (
    <>
      <Container style={{ paddingTop: '3rem' }}>
        <LandingPage>
          <SearchBoxes />
          <MainImgWrapper>
            <MainImg src={mainImg}></MainImg>
          </MainImgWrapper>
        </LandingPage>
      </Container>
    </>
  );
};
export default Landing;
