import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiStarSFill,
} from 'react-icons/ri';
import { BestSlider, SliderTitle, SliderWrapper } from '../styles/SliderStyle';
import { Container } from '../styles/ContainerStyle';
import { fetchData, getOptions } from '../utils/fetchData';
import { Link } from 'react-router-dom';
import Button from './Button';
import { styled } from 'styled-components';
import { getFormattedTodayDate, getFormattedTomorrowDate } from '../utils/util';

const CustomSearchWrapper = styled.div`
  text-align: center;
  margin-top: 2rem;
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
    margin: auto;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;
const SliderComponent = ({ mode }) => {
  let settings = {};
  const [slider, setSlider] = useState([]);
  const [options, setOptions] = useState({
    loca: 'USA',
    adults: '1',
    children: '1',
    pets: '0',
    checkIn: getFormattedTodayDate(new Date()),
    checkOut: getFormattedTomorrowDate(new Date()),
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    if (value === 'child') {
      setOptions({
        ...options,
        adults: '1',
        children: '1',
        pets: '0',
      });
    } else if (value === 'alone') {
      setOptions({
        ...options,
        adults: '1',
        children: '0',
        pets: '0',
      });
    } else if (value === 'couple') {
      setOptions({
        ...options,
        adults: '2',
        children: '0',
        pets: '0',
      });
    } else if (value === 'pet') {
      setOptions({
        ...options,
        adults: '1',
        children: '0',
        pets: '1',
      });
    } else {
      setOptions({
        ...options,
        [name]: value,
      });
    }
  };
  const handleOnClick = () => {
    getSearchData();
  };
  const getSearchData = async () => {
    const getData = await fetchData(
      `https://airbnb13.p.rapidapi.com/search-location?location=${options.loca}&checkin=${options.checkIn}&checkout=${options.checkOut}&adults=${options.adults}&children=${options.children}&infants=0&pets=${options.pets}&page=1&currency=KRW`,
      getOptions
    );
    setSlider(getData.results);
  };
  useEffect(() => {
    getSearchData();
  }, []);
  const [locationsFromJson, setLocationsFromJson] = useState([]);
  const [currentLocation, setCurrentLocation] = useState(null);
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
            <form className='text-wrapper'>
              <h3>
                나는
                <select
                  onChange={handleOnChange}
                  name='guest'
                  value={options.guest}>
                  <option key='child' value='child'>
                    👶 아이와 함께
                  </option>
                  <option key='alone' value='alone'>
                    👤 나 홀로
                  </option>
                  <option key='couple' value='couple'>
                    👩‍❤️‍👨연인과 함께
                  </option>
                  <option key='pet' value='pet'>
                    🐶 반려동물과 함께
                  </option>
                </select>
                <br />
                <select
                  onChange={handleOnChange}
                  name='loca'
                  value={options.loca}>
                  <option key='USA' value='USA'>
                    🇺🇸 미국으로
                  </option>
                  <option key='SouthEastAsia' value='SouthEastAsia'>
                    🏖️ 동남아로
                  </option>
                  <option key='Japan' value='Japan'>
                    🏙️ 일본으로
                  </option>
                  <option key='Europe' value='Europe'>
                    🇪🇺 유럽으로
                  </option>
                  <option key='Hawaii' value='Hawaii'>
                    🏝️ 하와이로
                  </option>
                </select>
                떠나고 싶어요
              </h3>
              <div className='buttons'>
                {/* <Button text='최신순' mode='sub-white' /> */}
                <Button
                  text='🔍 내 취향 숙소 찾기'
                  mode='sub-point'
                  onClick={handleOnClick}
                />
              </div>
            </form>
          </Container>
          <Container>
            <SliderWrapper>
              <Slider {...settings} className='slider-wrapper'>
                {slider.map((item) => (
                  <div className='slide-item' key={item.id}>
                    <div className='slider-img'>
                      <img src={item.images[0]} alt='' />
                    </div>
                    <div className='slider-text'>
                      <h3>{item.name}</h3>
                      <p>
                        <em>{item.address}</em>
                        <span>
                          {/* {Array.from({ length: Math.round(item.rating) }).map(
                        (_, index) => (
                          <RiStarSFill key={index} />
                        )
                      )} */}
                          <RiStarSFill />
                          {item.rating}
                        </span>
                      </p>
                      <Link
                        to={`/details?location=${options.loca}&checkIn=${options.checkIn}&checkOut=${options.checkOut}&adults=${options.adults}&children=${options.children}&pets=${options.pets}&id=${item.id}`}>
                        자세히 보기
                      </Link>
                    </div>
                  </div>
                ))}
              </Slider>
            </SliderWrapper>
          </Container>
        </CustomSearchWrapper>
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
        <SliderTitle>📍 내 주변 숙소찾기</SliderTitle>
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
