'use client';
import Container from '@/shared/Container/Container';
import styled from 'styled-components';

export const Title = styled(Container).attrs({ as: 'p' })`
  width: auto;
  color: ${({ theme }) => theme.colors.blue};
  margin: 0;
`;
export const Wrapper = styled(Container)`
  margin: 16px 0 40px;
  width: auto;
  font-weight: 600;
  justify-content: flex-start;
`;
