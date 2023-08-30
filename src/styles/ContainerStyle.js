import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  padding: 2rem;
  position: relative;
  max-width: 1280px;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    width: 100%;
    height: auto;
    max-width: 768px;
    margin: auto;
    padding: 0 15px;
  }
  /* width: 100%;
  height: auto;
  max-width: 1280px;
  margin: auto;
  padding: 2rem;
  position: relative;

 
  } */
`;
