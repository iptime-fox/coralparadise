import React from 'react';
import { NavList } from '../styles/HeaderStyle';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <NavList>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/search-lists'>위시리스트</Link>
          </li>
        </ul>
      </NavList>
    </>
  );
};

export default Header;
