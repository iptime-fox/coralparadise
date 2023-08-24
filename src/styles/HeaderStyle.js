import { styled } from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const NavList = styled.div`
  width: 100%;
  height: auto;
  padding: 1.25rem 2rem;
  max-width: 1280px;
  position: fixed;
  margin: auto;
  background-color: white;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e9e9e9;
`;

export const Logo = styled.div``;
export const LogoImg = styled.img`
  width: 200px;
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
`;
