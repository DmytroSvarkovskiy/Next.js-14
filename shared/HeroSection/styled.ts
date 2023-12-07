'use client';
import styled from 'styled-components';
import { Container } from '../Container/Container';
export const HeroSectionWrap = styled(Container).attrs({ as: 'section' })`
  position: absolute;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 380px;
  width: 100%;
  overflow: hidden;
  top: 0;
  z-index: -1;
  background: linear-gradient(to right, rgba(255, 204, 247, 0.5), rgba(197, 222, 255, 0.5));
  /* opacity: 0.7; */
  padding: 100px 20px 20px;
  @media (min-width: 768px) {
    height: 330px;
    padding: 115px 0 20px;
  }
  @media (min-width: 1200px) {
    height: 375px;
    padding: 145px 20px 40px;
  }
  h1 {
    width: 210px;
    text-align: center;
    width: 100%;
    &.blue {
      color: ${({ theme }) => theme.colors.blue};
    }
    /* font-size: 22px; */
    @media (min-width: 768px) {
      font-size: 42px;
      /* font-weight: 500; */
      width: 648px;
    }
  }
`;
