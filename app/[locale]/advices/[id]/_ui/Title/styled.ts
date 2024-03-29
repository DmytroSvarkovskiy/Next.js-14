'use client';
import Container from '@/shared/Container/Container';
import styled from 'styled-components';

export const TitleWrap = styled(Container)`
  margin: 20px 0 22px;
  flex-direction: column;
  @media (min-width: 1200px) {
    width: 744px;
    margin: 44px auto 52px;
  }
  h2 {
    margin-top: 12px;
  }
`;
export const TagsList = styled.ul`
  display: flex;
  gap: 8px;
  align-items: center;
  flex-wrap: wrap;
  li {
    display: flex;
    gap: 8px;
    align-items: flex-end;
    p {
      font-size: 14px;
      line-height: 1.25;
      color: ${({ theme }) => theme.colors.grey};
    }
  }
`;
