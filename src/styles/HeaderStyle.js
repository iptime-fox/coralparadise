import { styled } from 'styled-components';

export const HeaderSection = styled.header`
  box-shadow: 0 0 7px 0px #ddd;
  display: flex;
  .menu-icon {
    display: none;
  }

  .header-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.8rem 20px;

    .navi {
      display: flex;
      gap: 1.25rem;
      align-items: center;

      li.google-login img {
        width: 18px;
      }

      a {
        font-size: 1.125rem;
        font-weight: 500;
      }

      li.google-login button {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.9375rem;
        border: 1px solid ${({ theme }) => theme.colors.point} !important;
        padding: 0.25rem 0.75rem;
        border-radius: 5px !important;
        box-shadow: none !important;
        div {
          margin-right: 0 !important;
          padding: 0.25rem 0 0.25rem 0.75rem !important;
        }
        span {
          padding: 0.5rem 0.75rem !important;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    html,
    body {
      font-size: 14px;
    }

    .header-wrapper {
      position: relative;
      padding: 1.2rem;

      .logo > img {
        width: 195px;
      }

      .navi {
        display: none;
      }

      .navi.active {
        display: block;
        position: absolute;
        top: 101%;
        z-index: 9999;
        background: #fff;
        width: 100%;
        left: 0;

        a {
          padding: 1rem 0;
          display: inline-block;
          text-align: center;
          width: 100%;
          border-bottom: 1px solid #ddd;
          transition: all 0.4s;

          &:hover {
            background: ${({ theme }) => theme.colors.point};
            color: #fff;
          }
        }
      }

      .menu-icon {
        display: block;

        button {
          font-size: 1.5rem;
          background: #fff;
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        button.active {
          background: #eee;
          border-radius: 50%;
        }
      }
    }
  }
`;
