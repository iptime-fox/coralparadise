import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import { BestSlider, SliderWrapper } from '../styles/SliderStyle';
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
const SliderComponent = ({ mode }) => {
  let settings = {};
  const [slider, setSlider] = useState([]);
  const [locationsFromJson, setLocationsFromJson] = useState([]);
  const [currentLocation, setCurrentLocation] = useState(null);
  const getSearchData = async () => {
    const getData = await fetchData(
      'https://airbnb13.p.rapidapi.com/search-location?location=Paris&checkin=2023-11-16&checkout=2023-11-17&adults=1&children=0&infants=0&pets=0&page=1&currency=USD',
      getOptions
    );
    setSlider(getData.results);
  };
  useEffect(() => {
    getSearchData();
  }, []);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({ lat: latitude, lng: longitude });
        const ne_lat = latitude + 0.01;
        const ne_lng = longitude + 0.01;
        const sw_lat = latitude - 0.01;
        const sw_lng = longitude - 0.01;
        getMyLocaData(ne_lat, ne_lng, sw_lat, sw_lng);
      },
      (error) => {
        console.error('Error getting current location:', error);
      }
    );

    const getMyLocaData = async (nelat, nelng, swlat, swlng) => {
      const getData = await fetchData(
        `https://airbnb13.p.rapidapi.com/search-location?ne_lat=${nelat}&ne_lng=${nelng}&sw_lat=${swlat}&sw_lng=${swlng}&checkin=2023-11-16&checkout=2023-11-17&adults=1&children=0&infants=0&pets=0&page=1`,
        getOptions
      );

      setLocationsFromJson(getData.results);
    };
  }, []);

  if (mode === 'custom') {
    settings = {
      arrows: true,
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: <RiArrowLeftSLine />,
      nextArrow: <RiArrowRightSLine />,
    };

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
                    🇺🇸 미국으로
                  </option>
                  <option key='SouthEastAsia' value='SouthEastAsia'>
                    🏖️ 동남아로
                  </option>
                  <option key='Asia' value='Asia'>
                    🏙️ 일본으로
                  </option>
                  <option key='Europe' value='Europe'>
                    🇪🇺 유럽으로
                  </option>
                  <option key='Guam' value='Guam'>
                    🏝️ 괌으로
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
                      <em>★ {data.rating}</em>

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
  } else if (mode === 'best') {
    settings = {
      arrows: false,
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
    // const sortedBestList = bestList.sort(
    //   (a, b) => b.star - a.star || a.id - b.id
    // );
    return (
      <div className='section'>
        <BestSlider>
          <Slider {...settings} className='slider-wrapper'>
            {locationsFromJson.map((data) => (
              <div className='slide-item' key=''>
                <Link to={`/details?id=${data.id}`}>
                  <img src={data.images[0]} alt='' />
                </Link>

                <div className='slider-text'>
                  <span className='label'>{1}위</span>
                  <h3>{data.city}</h3>
                </div>
              </div>
            ))}
          </Slider>
        </BestSlider>
      </div>
    );
  }
};
export default SliderComponent;
