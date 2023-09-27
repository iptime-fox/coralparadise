import React, { useEffect, useState } from 'react';
import { Container } from '../styles/ContainerStyle';
import { fetchData, getOptions } from '../utils/fetchData';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import { ClipLoader } from 'react-spinners';
import DetailImages from './DetailImages';
import { styled } from 'styled-components';
import DetailMap from './DetailMap';
import { PiBathtubLight } from 'react-icons/pi';
import { LiaBedSolid } from 'react-icons/lia';
import SearchBoxes from './SearchBox';
import { getFormattedTodayDate, getFormattedTomorrowDate } from '../utils/util';
import {
  Details,
  TitleWrapper,
  Title,
  HostWrapper,
  HostImages,
  InfoWrapper,
  RoomInfoWrapper,
  RoomInfoBoxWrapper,
  RoomInfo,
  MapWrapper,
  LeftDetails,
  DetailWrapper,
} from '../styles/DetailStyle';

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
  const nelat = new URLSearchParams(loca.search).get('ne_lat');
  const nelng = new URLSearchParams(loca.search).get('ne_lng');
  const swlat = new URLSearchParams(loca.search).get('sw_lat');
  const swlng = new URLSearchParams(loca.search).get('sw_lng');

  const getSearchData = async () => {
    let fetchUrl;

    if (nelat) {
      fetchUrl = `https://airbnb13.p.rapidapi.com/search-location?ne_lat=${nelat}&ne_lng=${nelng}&sw_lat=${swlat}&sw_lng=${swlng}&checkin=${checkIn}&checkout=${checkOut}&adults=1&page=1&currency=KRW`;
    } else if (location) {
      fetchUrl = `https://airbnb13.p.rapidapi.com/search-location?location=${location}&checkin=${checkIn}&checkout=${checkOut}&adults=${adults}&children=${children}&infants=0&pets=${pets}&page=1&currency=KRW`;
    }
    const getData = await fetchData(fetchUrl, getOptions);
    setDetails(getData.results);
    setLoading(false);
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
              <>
                <Details>
                  <div className='section'>
                    <DetailImages roomImages={room.images} />
                  </div>
                  <DetailWrapper>
                    <LeftDetails>
                      <TitleWrapper>
                        <Title>
                          <h3>{room.name}</h3>
                          <b>
                            {room.city} ★ {room.rating}
                          </b>
                          <p> ₩ {room.price.rate}</p>
                        </Title>
                        <HostWrapper>
                          <HostImages src={room.hostThumbnail}></HostImages>
                        </HostWrapper>
                      </TitleWrapper>
                      <InfoWrapper>
                        <h4>숙소 정보</h4>

                        <p>{room.type} </p>
                      </InfoWrapper>
                      <RoomInfoWrapper>
                        <h4>숙소 시설</h4>
                        <RoomInfoBoxWrapper
                          style={{ justifyContent: 'flex-start' }}>
                          <RoomInfo>
                            <PiBathtubLight size={50} />

                            <p>욕실 {room.bathrooms}개</p>
                          </RoomInfo>
                          <RoomInfo>
                            <LiaBedSolid size={50} />
                            <p>
                              침실 {room.bedrooms}개, 침대 {room.beds}개
                            </p>
                          </RoomInfo>
                        </RoomInfoBoxWrapper>
                      </RoomInfoWrapper>
                    </LeftDetails>
                    <SearchBoxes />
                  </DetailWrapper>
                  <MapWrapper>
                    <h4>호스팅 지역</h4>
                    <DetailMap lati={room.lat} long={room.lng} />
                  </MapWrapper>
                </Details>
              </>
            ))}
        </Container>
      )}
    </>
  );
};
