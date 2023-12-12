'use client';
import styled, { keyframes } from 'styled-components';
import Container from '@/shared/Container/Container';
import Image from 'next/image';

const slideInAnimation = keyframes`
  from {
    transform: scale(0.95);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

export const AdviceCardStyled = styled(Container).attrs({ as: 'li' })`
  animation: ${slideInAnimation} 0.5s ease-out;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  position: relative;
  box-shadow: 0px 8px 16px 0px rgba(132, 151, 164, 0.08), 0px 4px 8px 0px rgba(132, 151, 164, 0.08);
  &:hover {
    scale: 1.01;
    box-shadow: 0px 8px 16px 0px rgba(0, 134, 191, 0.08), 0px 4px 8px 0px rgba(0, 134, 191, 0.08);
  }
  transition: box-shadow 0.3s, scale 0.3s;
  @media (min-width: 768px) {
    margin: 0 auto 0 0;
    width: 360px;
  }
  a {
    display: flex;
    flex-direction: column;
    width: 100%;

    @media (min-width: 425px) {
      width: 380px;
    }
    @media (min-width: 768px) {
      width: 360px;
    }
  }
`;
export const ImageArticle = styled(Image).attrs({ width: 380, height: 204 })`
  width: 100%;
  height: 204px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
  @media (min-width: 425px) {
    width: 405px;
  }
  @media (min-width: 768px) {
    width: 360px;
  }
`;
export const ArticleCardText = styled(Container)`
  padding: 20px;
  flex-direction: column;
  gap: 10px;
  border-radius: 0 0 8px 8px;
  h2 {
    font-size: 20px;
  }
`;
export const CategoryTitle = styled(Container)<{ $color: string }>`
  position: absolute;
  width: auto;
  top: 12px;
  left: 12px;
  border-radius: 100px;
  align-items: center;
  padding: 4px 16px;
  background-color: ${({ theme, $color }) => $color || theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
`;
