import React, { useEffect, useRef, useState } from 'react';
import { fetchData, getOptions } from '../utils/fetchData';
import Header from '../components/Header';
import { Helmet } from 'react-helmet';
import { useLocation, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import list from '../assets/list.jpg';

const SearchListsWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  padding: 2rem;
  padding-top: 8rem;
  max-width: 1400px;
`;
const SearchListsBoxWrapper = styled.div``;

const SearchListsBox = styled.form`
  padding: 0.5rem 2rem;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 1.5rem;
  display: flex;
  column-gap: 1rem;
`;

const SearchBtn = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  border: none;
  border-right: 1px solid #e9e9e9;
  padding-right: 1rem;
  &:nth-child(4) {
    border: none;
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
  i {
    background-color: #ff6666;
    border-radius: 50%;
    padding: 0.5rem;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
  }
`;

const SearchResultWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 2.5rem 0;
  display: flex;
  flex-wrap: wrap;
  column-gap: 1rem;
  justify-content: center;
`;

const SearchResult = styled.div`
  width: 23%;
  height: 450px;
  margin: 1rem 0;
  position: relative;
  img {
    width: 100%;
    height: 60%;
    border-radius: 0.75rem;
    object-fit: cover;
    margin-bottom: 0.5rem;
  }
  i {
    position: absolute;
    right: 0;
    padding: 1rem;
    font-size: 20px;
    cursor: pointer;
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

const SearchLists = () => {
  const navigate = useNavigate();
  const loca = useLocation();
  const inputRef = useRef();
  const location = new URLSearchParams(loca.search).get('location');
  const checkIn = new URLSearchParams(loca.search).get('checkIn');
  const checkOut = new URLSearchParams(loca.search).get('checkOut');
  const [state, setState] = useState({
    location: location,
    checkIn: checkIn,
    checkOut: checkOut,
  });
  const [like, setLike] = useState(false);
  const [rooms, setRooms] = useState([]);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  useEffect(() => {
    const getSearchData = async () => {
      const getData = await fetchData(
        `https://airbnb13.p.rapidapi.com/search-location?location=${location}&checkin=${checkIn}&checkout=${checkOut}&adults=2&children=0&infants=0&pets=0&page=1&currency=KRW`,
        getOptions
      );
      setRooms(getData.results);
      console.log(getData);
    };
    getSearchData();
  }, []);
  const onSubmit = (e) => {
    if (state.location === '') {
      e.preventDefault();
      alert('검색하실 위치를 입력하세요');
      inputRef.current.focus();
      return;
    }
    e.preventDefault();
    navigate(
      `/search-lists?location=${state.location}&checkIn=${state.checkIn}&checkOut=${state.checkOut}`
    );
  };
  const toggleActive = () => setLike((prev) => !prev);
  return (
    <>
      <Helmet>
        <title>ColralParadise</title>
      </Helmet>
      <Header />
      <SearchListsWrapper>
        <SearchListsBoxWrapper>
          <SearchListsBox onSubmit={onSubmit}>
            <SearchBtn>
              <span>위치</span>
              <input
                type='text'
                placeholder={location}
                ref={inputRef}
                name='location'
                value={state.location}
                onChange={handleOnChange}
              />
            </SearchBtn>
            <SearchBtn>
              <span>체크인</span>
              <input
                type='date'
                name='checkIn'
                value={state.checkIn}
                onChange={handleOnChange}
              />
            </SearchBtn>
            <SearchBtn>
              <span>체크아웃</span>
              <input
                type='date'
                name='checkOut'
                value={state.checkOut}
                onChange={handleOnChange}
              />
            </SearchBtn>
            <SearchBtn>
              <span>인원</span>
              <div>성인2</div>
            </SearchBtn>
            <SearchBtn>
              <i class='ri-search-line'></i>
            </SearchBtn>
          </SearchListsBox>
        </SearchListsBoxWrapper>
        <SearchResultWrapper>
          {rooms.map((room) => (
            <SearchResult>
              <img src={room.images[0]} alt='' />
              <i
                class='ri-heart-fill'
                onClick={toggleActive}
                value={like}
                style={{
                  color: like ? '#ff6666' : 'rgba(0, 0, 0, 0.5)',
                }}></i>
              <h4>{room.name}</h4>
              <p>{room.address}</p>
              <b>₩{room.price.rate}</b>
              <span>/박 · 총액 ₩{room.price.total}</span>
              <p>★{room.rating}</p>
            </SearchResult>
          ))}
        </SearchResultWrapper>
      </SearchListsWrapper>
    </>
  );
};

export default SearchLists;
