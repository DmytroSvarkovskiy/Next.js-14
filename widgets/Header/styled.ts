'use client';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/shared/Container/Container';

export const HeaderWrap = styled(Container).attrs({ as: 'header' })`
  background-color: transparent;
  padding: 20px 0;

  @media (min-width: 768px) {
  }
  @media (min-width: 1200px) {
    padding: 24px 0;
  }
`;
export const Logo = styled(Image)`
  width: auto;
  height: auto;
  width: 181px;
  height: 60px;

  @media (min-width: 425px) {
  }
  @media (min-width: 768px) {
    width: 151px;
    height: 60px;
  }
  @media (min-width: 1200px) {
    width: 181px;
    height: 60px;
  }
`;
export const LinkWrap = styled(Container)<{ $visible: boolean }>`
  align-items: center;
  gap: 5px;
  font-weight: 600;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: ${({ $visible }) => ($visible ? '0' : '-100%')};
  align-items: flex-start;
  padding: 20px;
  background-color: #f0f0f0;
  z-index: 1;
  height: 100%;
  transition: left 0.3s;
  span {
    display: flex;
    align-items: center;
    height: 40px;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors.blue};
    }
    transition: color 0.3s;
  }

  @media (min-width: 768px) {
    position: static;
    background-color: transparent;
    gap: 12px;
    align-items: center;
    justify-content: end;
    flex-direction: row;
    height: auto;
    padding: 0;
    span {
      display: block;
      height: 18px;
    }
  }
  @media (min-width: 1200px) {
    justify-content: end;
    gap: 40px;
  }
  span {
    &.active {
      color: ${({ theme }) => theme.colors.blue};
    }
  }
`;
export const LogoLink = styled(Link)`
  margin: 0 auto;
  @media (min-width: 768px) {
    gap: 12px;
    justify-content: end;

    margin: 0 20px 0 0;
  }
`;
export const ButtonClose = styled(Container).attrs({ as: 'button' })`
  border: none;
  outline: none;
  align-items: center;
  justify-content: center;
  position: absolute;
  margin: 0;
  width: auto;
  right: 0;
  top: 0;
  padding: 20px;
  svg {
    width: 25px;
    height: 25px;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;
export const BurgerMenu = styled(Container).attrs({ as: 'button' })`
  border: none;
  outline: none;
  align-items: center;
  justify-content: center;
  position: absolute;
  margin: 0;
  width: auto;
  right: 0;
  top: 0;
  padding: 20px;
  svg {
    width: 25px;
    height: 25px;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;
