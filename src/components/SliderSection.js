import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container } from '../styles/ContainerStyle';
import SliderComponent from './SliderComponent';

export const SliderSection = () => {
  return (
    <div>
      <>
        <SliderComponent mode='custom' />
        <SliderComponent mode='best' />
      </>
    </div>
  );
};
