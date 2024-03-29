'use client';
import Container from '@/shared/Container/Container';
import { CSSObjectWithLabel, ControlProps, OptionProps } from 'react-select';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    height: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
   height: auto;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    height: auto;
    transform: translateY(0);
  }
  to {
    opacity: 0;
     height: 0;
    transform: translateY(-20px);
  }
`;

export const InputsWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  margin: 15px 0 0;
  min-height: 50px;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  &.animated-visible {
    animation: ${fadeIn} 0.3s ease forwards;
    visibility: visible;
  }

  &.animated-hidden {
    animation: ${fadeOut} 0.3s ease forwards;
    visibility: hidden;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 8px;
  }
  @media (min-width: 1200px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
export const SearchWrap = styled.div`
  width: 300px;
  position: relative;
  margin: 0;
  @media (min-width: 768px) {
    width: 270px;
  }
  @media (min-width: 1200px) {
    width: 340px;
  }
  .iconWrap {
    position: absolute;
    top: 12px;
    left: 12px;
    svg {
      width: 20px;
      height: 20px;
      color: ${({ theme }) => theme.colors.grey};
    }
  }
`;
export const SelectWrap = styled.div`
  width: 300px;

  @media (min-width: 768px) {
    width: 270px;
  }
  @media (min-width: 1200px) {
    width: 340px;
  }
`;
export const OptionItem = styled(Container)`
  gap: 8px;
  cursor: pointer;
  padding: 8px;
  &:hover {
    background-color: #ebf3ff;
  }
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const selectStyles = {
  valueContainer: (provided: CSSObjectWithLabel) => ({
    ...provided,
    padding: '0px',
    height: '44px',
    width: '100%',
  }),

  control: (
    provided: CSSObjectWithLabel,
    state: ControlProps<{ label: string; value: string }>
  ) => ({
    ...provided,
    height: '44px',
    width: '100%',
    padding: ' 0 4px',
    borderRadius: '8px',
    boxShadow: state.isFocused || state.menuIsOpen ? '0 0 0 1px #0086BF' : undefined,
    border: state.isFocused || state.menuIsOpen ? '1px solid #0086BF' : undefined,
    '&:hover': {
      border: state.isFocused || state.menuIsOpen ? '1px solid #0086BF' : undefined,
    },
  }),

  indicatorSeparator: (provided: CSSObjectWithLabel) => ({
    ...provided,
    display: 'none',
  }),

  dropdownIndicator: (provided: CSSObjectWithLabel) => ({
    ...provided,
    padding: '0',
    display: 'flex',
    color: '#0086BF',
  }),

  menu: (base: CSSObjectWithLabel) => ({
    ...base,
    width: '100%',
    overflow: 'auto',
  }),

  option: (provided: CSSObjectWithLabel, state: OptionProps<{ label: string; value: string }>) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? '#646369'
      : state.isFocused
      ? '#9DADBC'
      : provided.backgroundColor,
    color: state.isSelected || state.isFocused ? 'white' : provided.color,
    ':active': {
      backgroundColor: state.isSelected ? '#646369' : provided.backgroundColor,
      color: state.isSelected ? 'white' : provided.color,
    },
  }),

  singleValue: (provided: CSSObjectWithLabel) => ({
    ...provided,
    color: '#646369',
  }),
};
