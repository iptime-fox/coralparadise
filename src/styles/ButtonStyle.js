import { styled } from 'styled-components';

export const CommonBtn = styled.button`
  width: 100%;
  background: ${({ theme }) => theme.colors.point};
  border: 1px solid ${({ theme }) => theme.colors.point};
  color: #fff;
  padding: 0.75rem 0;
  border-radius: 0.25rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.4s;
`;

export const SubWhiteBtn = styled(CommonBtn)`
  width: 50%;
  background: #fff;
  color: #333;
  border-radius: 25px;

  &:hover {
    background: ${({ theme }) => theme.colors.point};
    color: #fff;
  }
`;

export const SubPointBtn = styled(CommonBtn)`
  width: 50%;
  background: ${({ theme }) => theme.colors.point};
  color: #fff;
  border-radius: 25px;

  &:hover {
    background: #fff;
    color: #333;
  }
`;
