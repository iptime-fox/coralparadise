import React from 'react';
import {
  NavList,
  Logo,
  Nav,
  LogoImg,
  HeaderWrapper,
} from '../styles/HeaderStyle';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <HeaderWrapper>
      <NavList>
        <Logo>
          <Link to='/'>
            <LogoImg src={logo} />
          </Link>
        </Logo>
        <Nav>
          <Link to='/'>로그인</Link>
          <Link to='/search-lists'>서치리스트</Link>
          <i class='ri-menu-line'></i>
        </Nav>
      </NavList>
    </HeaderWrapper>
  );
};

export default Header;
