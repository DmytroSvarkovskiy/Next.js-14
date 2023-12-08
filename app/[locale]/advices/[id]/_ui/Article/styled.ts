'use client';

import styled from 'styled-components';
import { Container } from '@/shared/Container/Container';
export const ArticleWrapper = styled(Container)`
  article {
    font-size: 16px;
    line-height: 1.6;
  }
  @media (min-width: 1200px) {
    width: 744px;
  }
`;
