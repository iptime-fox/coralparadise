import { styled } from 'styled-components';

export const SearchListsBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

export const SearchListsBox = styled.form`
  padding: 0.5rem 2rem;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 1.5rem;
  display: flex;
  column-gap: 1rem;
  max-width: 900px;
`;

export const SearchBtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  border: none;
  border-right: 1px solid #e9e9e9;
  padding-right: 1rem;
  &:nth-child(4) {
    border: none;
    div {
      display: flex;
      align-items: center;

      span {
        font-size: 14px;
      }
      div {
        display: flex;
      }
      input {
        width: 33.33%;
      }
    }
  }
  &:nth-child(5) {
    border: none;
  }
  span {
    font-size: 16px;
  }
  div {
    color: #999;
  }
  input {
    border: none;
    outline: none;
    cursor: pointer;
    color: #999;
  }
`;

export const SubmitBtn = styled.button`
  background-color: #fff;
  i {
    background-color: #ff6666;
    border-radius: 50%;
    padding: 0.5rem;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
  }
`;

export const SearchResultWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 2.5rem 0;
  display: flex;
  flex-wrap: wrap;
  column-gap: 1rem;
  justify-content: center;
`;

export const SearchResult = styled.div`
  width: 23%;
  height: 450px;
  margin: 1rem 0;
  position: relative;
  img {
    cursor: pointer;
    width: 100%;
    height: 60%;
    border-radius: 0.75rem;
    object-fit: cover;
    margin-bottom: 0.5rem;
  }
  i {
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem;
    font-size: 20px;
    cursor: pointer;
    text-shadow: 1px 0 10px #888;
    &:hover {
      color: #ff6666;
    }
  }
  h4 {
    font-size: 16px;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: keep-all;
    overflow: hidden;
  }
  p {
    font-size: 14px;
    color: #999;
  }
`;
