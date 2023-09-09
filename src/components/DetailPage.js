import React, { useEffect, useState } from 'react';
import { Container } from '../styles/ContainerStyle';
import { fetchData, getOptions } from '../utils/fetchData';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import { ClipLoader } from 'react-spinners';
import DetailImages from './DetailImages';
import { styled } from 'styled-components';

const Title = styled.div`
  font-size: 20px;
`;

export const DetailPage = () => {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([]);
  // const [dataId, setDataId] = useState([]);
  const loca = useLocation();
  // const inputRef = useRef();
  const location = new URLSearchParams(loca.search).get('location');
  const checkIn = new URLSearchParams(loca.search).get('checkIn');
  const checkOut = new URLSearchParams(loca.search).get('checkOut');
  const adults = new URLSearchParams(loca.search).get('adults');
  const children = new URLSearchParams(loca.search).get('children');
  const pets = new URLSearchParams(loca.search).get('pets');
  const dataId = new URLSearchParams(loca.search).get('id');
  const getSearchData = async () => {
    const getData = await fetchData(
      `https://airbnb13.p.rapidapi.com/search-location?location=${location}&checkin=${checkIn}&checkout=${checkOut}&adults=${adults}&children=${children}&infants=0&pets=${pets}&page=1&currency=KRW`,
      getOptions
    );
    setDetails(getData.results);
    setLoading(false);
    // console.log(getData.results.id);
    // setLoading(false);
  };
  useEffect(() => {
    getSearchData();
  }, []);
  return (
    <>
      <Header />
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
        <Container>
          {details
            .filter((room) => room.id === dataId)
            .map((room) => (
              <div className='section'>
                <DetailImages roomImages={room.images} />
              </div>
            ))}
          <Title>
            <h4></h4>
          </Title>
        </Container>
      )}
    </>
  );
};
