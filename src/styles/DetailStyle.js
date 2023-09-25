import { styled } from 'styled-components';

export const Details = styled.div`
  h4 {
    font-size: 25px;
    font-weight: 500;
  }
`;

export const TitleWrapper = styled.div`
  /* width: 50%; */
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const Title = styled.div`
  /* width: 70%; */
  h3 {
    font-size: 25px;
    font-weight: 500;
  }
  b {
    font-size: 18px;
    font-weight: 300;
    color: #777;
  }
`;

export const HostWrapper = styled.div``;

export const HostImages = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
`;

export const InfoWrapper = styled.div`
  margin-bottom: 2rem;
`;

export const RoomInfoWrapper = styled.div`
  margin-bottom: 2rem;
`;

export const RoomInfoBoxWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  padding: 2rem;
  column-gap: 2rem;
  padding-left: 0;
  text-align: center;
`;

export const RoomInfo = styled.div`
  width: 35%;
  border: 1px solid black;
  border-radius: 1rem;
  padding: 2rem;
`;

export const MapWrapper = styled.div``;

export const LeftDetails = styled.div`
  width: 100%;
`;

export const DetailWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  width: 100%;
  /* column-gap: 3rem; */
  div:nth-child(2) {
    position: static;
    transform: none;
    justify-content: flex-end;
  }
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    padding: 2rem;
    div:nth-child(2) {
      justify-content: center;
    }
  }
`;
