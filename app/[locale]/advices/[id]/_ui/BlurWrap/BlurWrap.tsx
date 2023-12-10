'use client';
import Container from '@/shared/Container/Container';
import styled from 'styled-components';

export const BlurWrap = styled(Container)`
  position: absolute;
  width: 100%;
  background: linear-gradient(
    to right,
    rgba(197, 222, 255, 0.5),
    rgba(255, 204, 247, 0.5),
    rgba(127, 140, 255, 0.5)
  );
  height: 500px;
  filter: blur(205.97830200195312px);
  top: 0;
  z-index: -1;
`;
