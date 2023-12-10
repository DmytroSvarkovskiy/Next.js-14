'use client';
import styled from 'styled-components';
import Image from 'next/image';
import Container from '@/shared/Container/Container';

export const CategoryImage = styled(Image)`
  object-fit: cover;
  border-radius: 4px;
`;
export const CategoryItem = styled(Container).attrs({ as: 'li' })<{ $active?: boolean }>`
  gap: 8px;
  background-color: ${({ theme, $active }) => (!$active ? theme.colors.white : '#EBF3FF')};
  padding: 4px 6px;
  border-radius: 8px;
  border: ${({ theme, $active }) => (!$active ? theme.borderInputs : '1px solid #0086BF')};
  margin: 0;
  align-items: center;
  cursor: pointer;
  width: 120px;
  height: auto;
  p {
    font-size: 14px;
    font-weight: 500;
  }
  &:hover {
    background-color: #ebf3ff;
  }
  transition: background-color 0.3s;
  @media (min-width: 768px) {
    min-width: 140px;
    width: auto;
    padding: 4px 16px;
    p {
      font-size: 16px;
    }
  }
`;
export const FilterWrap = styled(Container).attrs({ as: 'li', width: 'auto' })`
  margin: 0;
  cursor: pointer;
  @media (min-width: 768px) {
    margin-left: 40px;
  }
`;
export const Button = styled(Container).attrs({ as: 'button' })<{ $active: boolean }>`
  border: 1px solid ${({ theme, $active }) => (!$active ? theme.colors.white : theme.colors.blue)};
  outline: none;
  color: ${({ theme, $active }) => ($active ? theme.colors.blue : theme.colors.text)};
  width: 40px;
  height: 40px;
  padding: 4px 12p;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, $active }) => ($active ? ' #ebf3ff' : theme.colors.white)};
  border-radius: 50%;
  cursor: pointer;
  svg {
    width: 20px;
    height: 20px;
  }
`;
