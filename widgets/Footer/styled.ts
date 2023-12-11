'use client';
import Container from '@/shared/Container/Container';
import styled from 'styled-components';

export const FooterContainer = styled(Container).attrs({ as: 'footer' })`
  background-color: ${({ theme }) => theme.colors.white};
  margin: 60px 0 0;

  @media (min-width: 768px) {
    margin: 120px 0 0;
  }
`;

export const TopWrap = styled(Container)`
  margin: 0;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  div {
    &:first-child {
      margin-bottom: 16px;
    }
  }
  @media (min-width: 768px) {
    flex-direction: row;
    div {
      &:first-child {
        margin-bottom: 0;
      }
    }
  }
`;

export const FooterWrap = styled(Container)`
  min-height: 200px;
  padding: 35px 0 30px;
  flex-direction: column;
`;
export const LinksWrap = styled(Container)`
  width: auto;

  gap: 20px;
  color: ${({ theme }) => theme.colors.blue};
  font-weight: 600;
  margin: 25px auto 12px;
  flex-direction: column;
  @media (min-width: 768px) {
    margin: 20px auto 12px 0;
  }
  @media (min-width: 1200px) {
    margin: 25px auto 12px 0;
    flex-direction: row;
  }
`;
