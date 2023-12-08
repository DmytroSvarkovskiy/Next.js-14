'use client';
import styled from 'styled-components';
import { Container } from '@/shared/Container/Container';
import Image from 'next/image';

export const AdvicCardStyled = styled(Container).attrs({ as: 'li' })`
  width: auto;
  border-radius: 8px;
  box-shadow: 0px 8px 16px 0px rgba(132, 151, 164, 0.08), 0px 4px 8px 0px rgba(132, 151, 164, 0.08);
  a {
    display: flex;
    flex-direction: column;
    width: 300px;
    height: auto;
    @media (min-width: 768px) {
      width: 360px;
    }
  }
`;
export const ImageArticle = styled(Image).attrs({ width: 360, height: 204 })`
  width: 100%;
  height: 204px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
`;
export const ArticleCardText = styled(Container)`
  padding: 20px;
  flex-direction: column;
  gap: 10px;
  border-radius: 0 0 8px 8px;
`;
