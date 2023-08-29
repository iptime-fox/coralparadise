import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import { SliderWrapper } from '../styles/SliderStyle';
import { Container } from '../styles/ContainerStyle';
import { fetchData, getOptions } from '../utils/fetchData';
import { Link } from 'react-router-dom';
import Button from './Button';
import { styled } from 'styled-components';

const CustomSearchWrapper = styled.div`
  text-align: center;

  h3 {
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 180%;
    letter-spacing: 0.25rem;

    select {
      font-size: 1.8rem;
      font-weight: 600;
      text-decoration: underline;
    }
  }

  .buttons {
    width: 50%;
    display: flex;
    margin: auto;
    column-gap: 1rem;
    margin-top: 2.5rem;
  }
`;

const SliderSection = () => {
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <RiArrowLeftSLine />,
    nextArrow: <RiArrowRightSLine />,
  };
  const [slider, setSlider] = useState([]);
  useEffect(() => {
    const getSearchData = async () => {
      const getData = await fetchData(
        'https://airbnb13.p.rapidapi.com/search-location?location=Paris&checkin=2023-09-16&checkout=2023-09-17&adults=1&children=0&infants=0&pets=0&page=1&currency=USD',
        getOptions
      );
      setSlider(getData.results);
    };
    getSearchData();
  }, []);
  return (
    <div>
      <CustomSearchWrapper id='custom-search' className='section'>
        <Container>
          <div className='text-wrapper'>
            <h3>
              나는
              <select>
                <option key='child' value='child'>
                  👶 아이와 함께
                </option>
                <option key='couple' value='couple'>
                  👩‍❤️‍👨 연인과 함께
                </option>
                <option key='dog' value='dog'>
                  🐶 반려동물과 함께
                </option>
              </select>
              <br />
              <select>
                <option key='America' value='America'>
                  🇺🇸 미주/캐나다/대양주로
                </option>
                <option key='SouthEastAsia' value='SouthEastAsia'>
                  🏖️ 동남아로
                </option>
                <option key='Asia' value='Asia'>
                  🏙️ 일본/중국/대만/홍콩으로
                </option>
                <option key='Europe' value='Europe'>
                  🇪🇺 유럽으로
                </option>
                <option key='Guam' value='Guam'>
                  🏝️ 괌/사이판으로
                </option>
              </select>
              떠나고 싶어요
            </h3>
            <div className='buttons'>
              <Button text='최신순' mode='sub-white' />
              <Button text='리뷰순' mode='sub-point' />
            </div>
          </div>
        </Container>
      </CustomSearchWrapper>

      <Container>
        <SliderWrapper>
          <Slider {...settings} className='slider-wrapper'>
            {slider.map((data) => (
              <div className='slide-item'>
                <img src={data.images[0]} alt='' />
                <div className='slider-text'>
                  <h3>{data.name}</h3>
                  <p>
                    <em>{data.address}</em>
                    <em>{data.rating}</em>

                    <span>
                      {/* {Array.from({ length: {data.rating} }).map((_, index) => (
                        <RiStarSFill key={index} />
                      ))} */}
                    </span>
                  </p>
                  <Link to={`/details/${data.id}`}>
                    <strong>자세히 보기</strong>
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
        </SliderWrapper>
      </Container>
    </div>
  );
};

export default SliderSection;
