import React, { useEffect, useRef, useState } from 'react';
import { fetchData, getOptions } from '../utils/fetchData';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import list from '../assets/list.jpg';
import { Container } from '../styles/ContainerStyle';
import { RiH1 } from 'react-icons/ri';
import { ClipLoader } from 'react-spinners';
import {
  SearchListsBoxWrapper,
  SearchListsBox,
  SearchBtn,
  SubmitBtn,
  SearchResultWrapper,
  SearchResult,
} from '../styles/SearchListStyle';

const SearchResults = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const loca = useLocation();
  const inputRef = useRef();
  const location = new URLSearchParams(loca.search).get('location');
  const checkIn = new URLSearchParams(loca.search).get('checkIn');
  const checkOut = new URLSearchParams(loca.search).get('checkOut');
  const adults = new URLSearchParams(loca.search).get('adults');
  const children = new URLSearchParams(loca.search).get('children');
  const pets = new URLSearchParams(loca.search).get('pets');
  const [state, setState] = useState({
    location: location,
    checkIn: checkIn,
    checkOut: checkOut,
    adults: adults,
    children: children,
    pets: pets,
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
        `https://airbnb13.p.rapidapi.com/search-location?location=${location}&checkin=${checkIn}&checkout=${checkOut}&adults=${adults}&children=${children}&infants=0&pets=${pets}&page=1&currency=KRW`,
        getOptions
      );
      setRooms(getData.results);
      setLoading(false);
      // console.log(getData);
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
      `/search-lists?location=${state.location}&checkIn=${state.checkIn}&checkOut=${state.checkOut}&adults=${state.adults}&children=${state.children}&pets=${state.pets}`
    );
    window.location.reload();
  };
  const toggleActive = () => setLike((prev) => !prev);

  return (
    <>
      {loading ? (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}>
          <ClipLoader
            color='#ff6666'
            height={15}
            width={5}
            radius={2}
            margin={2}
          />
        </div>
      ) : (
        <>
          <Container style={{ paddingTop: '8rem' }}>
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
                  <div>
                    <div>
                      <span>성인 : </span>
                      <input
                        type='number'
                        name='adults'
                        onChange={handleOnChange}
                        value={state.adults}
                      />
                    </div>
                    <div>
                      <span>어린이 : </span>
                      <input
                        type='number'
                        name='children'
                        onChange={handleOnChange}
                        value={state.children}
                      />
                    </div>
                    <div>
                      <span>반려동물 : </span>
                      <input
                        type='number'
                        name='pets'
                        onChange={handleOnChange}
                        value={state.pets}
                      />
                    </div>
                  </div>
                </SearchBtn>
                <SubmitBtn type='submit'>
                  <i class='ri-search-line'></i>
                </SubmitBtn>
              </SearchListsBox>
            </SearchListsBoxWrapper>
            <SearchResultWrapper>
              {rooms.map((room) => (
                <SearchResult>
                  <Link
                    to={`/details?location=${state.location}&checkIn=${state.checkIn}&checkOut=${state.checkOut}&adults=${state.adults}&children=${state.children}&pets=${state.pets}&id=${room.id}`}>
                    <img src={room.images[0]} alt='' />
                  </Link>
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
          </Container>
        </>
      )}
    </>
  );
};

export default SearchResults;
