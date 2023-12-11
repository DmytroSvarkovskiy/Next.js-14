'use client';
import Container from '@/shared/Container/Container';
import styled from 'styled-components';

export const FormWrapper = styled(Container)`
  margin: 0;
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
`;

export const FormContainer = styled(Container).attrs({ as: 'form' })`
  margin: 0;
  flex-direction: column;
  padding: 40px 50px 50px;
  h3 {
    font-size: 25px;
    font-weight: 500;
    margin-bottom: 8px;
  }
  p {
    font-size: 16px;
    line-height: 1.5;
  }
  @media (min-width: 1200px) {
    padding: 88px 72px 72px;
    width: 576px;
    h3 {
      font-size: 36px;
      font-weight: 500;
      margin-bottom: 8px;
    }
    p {
      font-size: 20px;
    }
  }
`;
export const ImageWrap = styled(Container)`
  margin: 0;
  height: 609px;
  align-items: center;
  justify-content: center;
  width: 480px;
  background: linear-gradient(to right, rgba(255, 204, 247, 0.5), rgba(197, 222, 255, 0.5));
`;
