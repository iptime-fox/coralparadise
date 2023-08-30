import React, { useEffect, useState } from 'react';
import { Container } from '../styles/ContainerStyle';
import { fetchData, getOptions } from '../utils/fetchData';
import { useLocation } from 'react-router-dom';

export const DetailPage = () => {
  const [details, setDetails] = useState([]);
  const [dataId, setDataId] = useState([]);
  const loca = useLocation();
  // const inputRef = useRef();
  const location = new URLSearchParams(loca.search).get('location');
  const checkIn = new URLSearchParams(loca.search).get('checkIn');
  const checkOut = new URLSearchParams(loca.search).get('checkOut');
  const adults = new URLSearchParams(loca.search).get('adults');
  const children = new URLSearchParams(loca.search).get('children');
  const pets = new URLSearchParams(loca.search).get('pets');
  // const id = new URLSearchParams(loca.search).get('id');
  useEffect(() => {
    const getSearchData = async () => {
      const getData = await fetchData(
        `https://airbnb13.p.rapidapi.com/search-location?location=${location}&checkin=${checkIn}&checkout=${checkOut}&adults=${adults}&children=${children}&infants=0&pets=${pets}&page=1&currency=KRW`,
        getOptions
      );
      setDetails(getData.results);
      console.log(getData.results.id);
      // setLoading(false);
      // console.log(getData);
    };
    getSearchData();
  }, []);
  return (
    <>
      <Container>
        {/* {details.map((data) => (
          if (data.id === id){
            <h4>{data.name}</h4>

          }
        ))} */}
      </Container>
    </>
  );
};
