'use client';
import styled from 'styled-components';
import Container from '../Container/Container';

const PageWrapper = styled(Container).attrs({ key: 'e64yhydh' })`
  width: 100%;
  overflow: hidden;
  padding: 0 10px;
  @media (min-width: 320px) {
    max-width: 100%;
  }
  @media (min-width: 425px) {
    max-width: 425px;
  }
  @media (min-width: 768px) {
    max-width: 768px;
  }
  @media (min-width: 1200px) {
    max-width: 1200px;
    padding: 0 36px;
  }
  /* @media (min-width: 1440px) {
    max-width: 1440px;
    padding: 0 156px;
  } */
`;
export default PageWrapper;
