'use client';
import Container from '@/shared/Container/Container';
import styled from 'styled-components';

export const TagsWrap = styled(Container)`
  margin: 20px 0 22px;
  flex-direction: column;
  h3 {
    margin-bottom: 10px;
    @media (min-width: 1200px) {
      margin-bottom: 20px;
    }
  }
  @media (min-width: 1200px) {
    width: 744px;
    margin: 64px auto 52px;
  }
`;

export const TagsList = styled.ul`
  display: flex;
  gap: 8px;
  align-items: center;
  flex-wrap: wrap;
  li {
    display: flex;
    cursor: pointer;
    gap: 8px;
    align-items: flex-end;
    border-radius: 50px;
    background-color: #e9efff;
    padding: 4px 16px;
    p {
      font-size: 14px;
      line-height: 1.25;
      color: ${({ theme }) => theme.colors.blue};
    }
  }
`;
