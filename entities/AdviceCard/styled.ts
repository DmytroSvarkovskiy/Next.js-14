'use client';
import styled from 'styled-components';
import { Container } from '@/shared/Container/Container';
import Image from 'next/image';

export const AdviceCardStyled = styled(Container).attrs({ as: 'li' })`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  position: relative;
  box-shadow: 0px 8px 16px 0px rgba(132, 151, 164, 0.08), 0px 4px 8px 0px rgba(132, 151, 164, 0.08);
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
`;
export const CategoryTitle = styled(Container)`
  position: absolute;
  width: auto;
  top: 12px;
  left: 12px;
  border-radius: 100px;
  align-items: center;
  padding: 4px 16px;
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
`;
