'use client';
import { Container } from '@/shared/Container/Container';
import styled from 'styled-components';
import Image from 'next/image';
import { PageWrapper } from '@/shared/PageWrapper/PageWrapper';

export const Wrapper = styled(PageWrapper)`
  padding: 0;
`;
export const ShareWrapper = styled(Container)`
  height: auto;
  position: relative;
  width: 100%;

  @media (min-width: 425px) {
    width: 405px;
  }
  @media (min-width: 768px) {
    width: 744px;
  }
`;
export const MainImagePost = styled(Image).attrs({ width: 744, height: 420 })`
  border-radius: 8px;
  object-fit: cover;
  width: 100%;
  @media (min-width: 425px) {
    width: 405px;
  }
  @media (min-width: 768px) {
    width: 744px;
  }
`;
export const CategoryName = styled(Container)`
  position: absolute;
  z-index: 1;
  top: 20px;
  left: 21px;
  padding: 4px 16px;
  width: auto;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.blue};
  border-radius: 16px;
  align-items: 16px;
`;
export const SharedButtonWrap = styled(Container)`
  position: absolute;
  gap: 8px;
  left: 85%;
  top: 10px;
  flex-direction: column;
  @media (min-width: 425px) {
    gap: 8px;
    left: 60%;
    flex-direction: row;
  }
  @media (min-width: 768px) {
    gap: 8px;
    left: 95%;
    flex-direction: column;
    top: 10px;
  }
  @media (min-width: 1200px) {
    top: 0;
    gap: 8px;
    flex-direction: column;
    left: 121%;
  }
`;
