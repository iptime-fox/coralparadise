import React from 'react';
import { CommonBtn, SubPointBtn, SubWhiteBtn } from '../styles/ButtonStyle';

const Button = ({ text, mode, onClick }) => {
  if (mode === 'hero') {
    return <CommonBtn>{text}</CommonBtn>;
  } else if (mode === 'sub-white') {
    return (
      <SubWhiteBtn
        onClick={(e) => {
          e.preventDefault();
          onClick();
        }}>
        {text}
      </SubWhiteBtn>
    );
  } else if (mode === 'sub-point') {
    return (
      <SubPointBtn
        onClick={(e) => {
          e.preventDefault();
          onClick();
        }}>
        {text}
      </SubPointBtn>
    );
  }
};

export default Button;
