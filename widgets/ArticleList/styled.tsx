import styled from 'styled-components';
import { PageWrapper } from '@/shared/PageWrapper/PageWrapper';
import { Container } from '@/shared/Container/Container';
export const ArticleListStyled = styled(PageWrapper).attrs({ as: 'ul' })`
  gap: 16px;
  flex-wrap: wrap;
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
  margin: 20px auto 120px;
  &[disabled] {
    background-color: ${({ theme }) => theme.colors.grey};
  }
`;
