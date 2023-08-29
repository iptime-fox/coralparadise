import { styled } from 'styled-components';

export const LandingPage = styled.div`
  width: 100%;
  display: flex;
`;

export const SearchBoxWrapper = styled.div`
  width: 100%;
  height: 100vh;
  /* top: 80%;
  transform: translateY(-50%); */
  top: 15rem;
  display: flex;
  justify-content: left;
  position: absolute;
  z-index: 10;
`;

export const SearchBox = styled.div`
  width: 500px;
  height: 350px;
  background-color: #fff;
  border: none;
  border-radius: 30px;
  padding: 2rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

export const MainImgWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
`;
export const MainImg = styled.img`
  width: 75%;
`;

export const TitleWrapper = styled.div`
  h4 {
    font-size: 25px;
    font-weight: 500;
  }
  p {
    font-size: 1rem;
    color: #777;
  }
  padding-bottom: 0.5rem;
  margin: 0.5rem;
  margin-top: 0;
`;
export const InputWrapper = styled.div`
  p {
    font-size: 14px;
    font-weight: 400;
  }
  input {
    border: none;
    width: 70%;
    outline: none;
    padding: 0.25rem 0;
    font-size: 16px;
    color: #999;
    cursor: pointer;
  }
`;

export const UpperInputs = styled.div`
  display: flex;
  border: 1px solid #e9e9e9;
  border-radius: 10px;
  padding: 0.25rem 0.875rem;
  margin: 0.5rem;
  div:first-child {
    width: 80%;
  }
`;

export const LowerInputs = styled.div`
  display: flex;
  border: 1px solid #e9e9e9;
  border-radius: 10px;
  padding: 0.25rem 0.875rem;
  margin: 0.5rem;
  div {
    width: 50%;
  }
`;

export const SubmitWrapper = styled.div`
  margin: 0.5rem;
`;
export const SubmitBtn = styled.button`
  padding: 0.3rem 0.65rem;
  border: none;
  outline: none;
  padding: 0.75rem 0;
  font-size: 16px;
  width: 100%;
  border-radius: 10px;
  background-color: #ff6666;
  color: #fff;
`;

export const InputNumWrapper = styled.div`
  display: flex;
  width: 100%;
  input {
    font-size: 14px;
  }
  div {
    span {
      font-size: 14px;
      color: #999;
    }
  }
`;
