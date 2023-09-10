import React, { useEffect, useState } from 'react';
import { Container } from '../styles/ContainerStyle';
import { fetchData, getOptions } from '../utils/fetchData';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import { ClipLoader } from 'react-spinners';
import DetailImages from './DetailImages';
import { styled } from 'styled-components';
import DetailMap from './DetailMap';

const Title = styled.div`
  font-size: 20px;
`;

const TitleWrapper = styled.div``;

const HostWrapper = styled.div``;

const HostImages = styled.img``;

const InfoWrapper = styled.div``;

const RoomInfoWrapper = styled.div``;

const RoomInfoBoxWrapper = styled.div``;

const RoomInfo = styled.div``;

const MapWrapper = styled.div``;

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
              <>
                <div className='section'>
                  <DetailImages roomImages={room.images} />
                </div>
                <TitleWrapper>
                  <Title>
                    <h4>{room.name}</h4>
                    <b>{room.city}</b> <em>★{room.rating}</em>
                  </Title>
                  <HostWrapper>
                    <HostImages src={room.hostThumbnail}></HostImages>
                  </HostWrapper>
                </TitleWrapper>
                <InfoWrapper>
                  <h4>숙소 정보</h4>
                  <p>{room.type}</p>
                </InfoWrapper>
                <RoomInfoWrapper>
                  <h4>숙소 시설</h4>
                  <RoomInfoBoxWrapper>
                    <RoomInfo>욕실 {room.bathrooms}개</RoomInfo>
                    <RoomInfo>
                      침실 {room.bedrooms}개 침대 {room.beds}개
                    </RoomInfo>
                  </RoomInfoBoxWrapper>
                </RoomInfoWrapper>
                <MapWrapper>
                  <h4>호스팅 지역</h4>
                  <DetailMap lati={room.lat} long={room.lng} />
                </MapWrapper>
              </>
            ))}
        </Container>
      )}
    </>
  );
};
