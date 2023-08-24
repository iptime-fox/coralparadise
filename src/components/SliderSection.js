import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import SliderImage from '../assets/slick.jpeg';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
// import { Link } from 'react-router-dom';
import { SliderWrapper } from '../styles/SliderStyle';
import { Container } from '../styles/ContainerStyle';
import { fetchData, getOptions } from '../utils/fetchData';

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
      // console.log(getData.results);
    };
    getSearchData();
  }, []);
  return (
    <div>
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
                    <span>
                      {/* {Array.from({ length: stars }).map((_, index) => (
                        <RiStarSFill key={index} />
                      ))} */}
                    </span>
                  </p>
                  {/* <Link to={`/details/${linkId}`}>자세히 보기</Link> */}
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
