'use client';
import Container from '@/shared/Container/Container';
import styled from 'styled-components';

export const HeroSectionWrap = styled(Container).attrs({ as: 'section' })`
  flex-direction: column;
  align-items: center;
  min-height: 330px;
  width: 100%;
  overflow: hidden;
  background: linear-gradient(to right, rgba(255, 204, 247, 0.5), rgba(197, 222, 255, 0.5));
  padding: 0 20px 20px;
  @media (min-width: 768px) {
    min-height: 330px;
    padding: 0 0 20px;
  }
  @media (min-width: 1200px) {
    min-height: 380px;
    padding: 0 0 30px;
  }
`;
export const HeadingTitle = styled(Container)`
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
  h1 {
    width: 210px;
    text-align: center;
    width: 100%;
    font-weight: 500;
    &.blue {
      color: ${({ theme }) => theme.colors.blue};
    }
    font-size: 32px;
    @media (min-width: 768px) {
      font-size: 52px;
      width: 648px;
    }
  }
  @media (min-width: 768px) {
    margin: 15px 0 50px;
  }
`;
