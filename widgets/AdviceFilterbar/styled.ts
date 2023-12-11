'use client';
import Container from '@/shared/Container/Container';
import { CSSObjectWithLabel, ControlProps, OptionProps } from 'react-select';
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
    width: '300px',
  }),

  control: (
    provided: CSSObjectWithLabel,
    state: ControlProps<{ label: string; value: string }>
  ) => ({
    ...provided,
    height: '44px',
    width: '300px',
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
    width: '300px',
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
