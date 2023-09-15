import { styled } from 'styled-components';

export const CustomSearchWrapper = styled.div`
  text-align: center;
  margin-top: 2rem;
  h3 {
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 180%;
    letter-spacing: 0.25rem;

    select {
      font-size: 1.8rem;
      font-weight: 600;
      text-decoration: underline;
    }
  }

  .buttons {
    width: 50%;
    margin: auto;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

export const SliderWrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 0 2rem;
  .slick-slide {
    overflow: hidden;
    padding: 1.5rem;

    img {
      width: 100%;
      height: 300px;
      object-fit: cover;
    }
  }

  .slide-item {
    position: relative;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: -3px 3px 10px #ccc;

    .slider-text {
      position: absolute;
      bottom: 0;
      background: #fff;
      width: 100%;
      padding: 0.65rem;

      h3 {
        font-size: 18px;
        line-height: 100%;
        display: -webkit-box;
        text-overflow: ellipsis;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        word-break: keep-all;
        overflow: hidden;
      }

      p {
        font-size: 14px;
        line-height: 150%;
        display: flex;
        flex-direction: column;
        margin-bottom: 0.5rem;
        em {
          color: #999;
          margin-right: 0.5rem;
          display: -webkit-box;
          text-overflow: ellipsis;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          word-break: keep-all;
          overflow: hidden;
        }
        span {
          color: ${({ theme }) => theme.colors.point};
        }
      }
      a {
        font-size: 14px;
      }
      a:hover {
        text-decoration: underline;
      }
    }
  }

  .slick-prev,
  .slick-next {
    z-index: 999;
    background: #fff;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: inline-block;
    color: ${({ theme }) => theme.colors.point};
    border: 2px solid ${({ theme }) => theme.colors.point};
    transition: all 0.4s;
    &:hover {
      background: ${({ theme }) => theme.colors.point};
      color: #fff;
    }
  }

  .slick-prev {
    left: -60px;
  }

  .slick-next {
    right: -60px;
  }
`;

export const SliderTitle = styled.h3`
  text-align: center;
  font-size: 30px;
  font-weight: 500;
`;

export const BestSlider = styled(SliderWrapper)`
  margin-top: 2.5rem;
  overflow: hidden;

  .slick-slide {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .slick-slide > div {
    height: 100%;
  }

  .slide-item {
    border-radius: 0;
    /* height: 100%; */

    .slider-text {
      position: absolute;
      background: transparent;
      width: 100%;
      height: 100%;

      span {
        position: absolute;
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        right: 0;
        top: 0;
        background: ${({ theme }) => theme.colors.point};
        color: #fff;
      }

      h3 {
        text-transform: uppercase;
        font-size: 20px;
        color: #fff;
        font-weight: 700;
        font-family: 'Noto Sans KR', sans-serif;
        letter-spacing: -1px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }

  .slick-list {
    overflow: visible;
    .slick-slide {
      padding: 0.5rem;
      height: 450px;
      position: relative;
    }
  }
`;
