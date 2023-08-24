import React from 'react';
import { CommonBtn, SubPointBtn, SubWhiteBtn } from '../styles/ButtonStyle';

const Button = ({ text, mode }) => {
  if (mode === 'hero') {
    return <CommonBtn>{text}</CommonBtn>;
  } else if (mode === 'sub-white') {
    return <SubWhiteBtn>{text}</SubWhiteBtn>;
  } else if (mode === 'sub-point') {
    return <SubPointBtn>{text}</SubPointBtn>;
  }
};

export default Button;
