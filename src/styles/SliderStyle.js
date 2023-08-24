import { styled } from 'styled-components';

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
      padding: 1rem;

      h3 {
        line-height: 200%;
        display: -webkit-box;
        text-overflow: ellipsis;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        word-break: keep-all;
        overflow: hidden;
      }

      p {
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
