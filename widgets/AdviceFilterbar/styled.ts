'use client';
import Container from '@/shared/Container/Container';
import styled from 'styled-components';
export const IconWrap = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  svg {
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.colors.grey};
  }
`;
export const InputsWrapper = styled(Container)`
  position: relative;
  margin: 15px 0 0;
  min-height: 50px;
  align-items: center;
  flex-direction: column;
  gap: 8px;

  @media (min-width: 1200px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
export const SearchWrap = styled(Container)`
  width: 300px;
  position: relative;
  margin: 0;
  @media (min-width: 1200px) {
    width: 340px;
  }
`;
