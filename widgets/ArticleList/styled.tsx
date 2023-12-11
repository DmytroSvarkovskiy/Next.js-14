'use client';
import styled from 'styled-components';
import PageWrapper from '@/shared/PageWrapper/PageWrapper';
import Container from '@/shared/Container/Container';

export const ArticleListStyled = styled(PageWrapper).attrs({ as: 'ul' })`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
  padding-bottom: 12px;
  row-gap: 24px;
`;
export const LoadMore = styled(Container).attrs({ as: 'button' })`
  width: auto;
  padding: 12px 44px;
  outline: none;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.blue};
  cursor: pointer;
  border-radius: 100px;
  border: none;
  margin: 20px auto 20px;
  &[disabled] {
    background-color: ${({ theme }) => theme.colors.grey};
  }
  @media (min-width: 1200px) {
    padding: 12px 44px;
    margin: 20px auto 120px;
  }
`;
