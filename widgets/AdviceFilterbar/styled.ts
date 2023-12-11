'use client';
import Container from '@/shared/Container/Container';
import { CSSObjectWithLabel, ControlProps } from 'react-select';
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
  &:not(:last-child) {
    margin-bottom: 8px;
  }
  &:last-child {
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  }
`;

export const selectStyles = {
  valueContainer: (provided: CSSObjectWithLabel) => ({
    ...provided,
    padding: '0px',
    display: 'flex',
    width: '140px',
  }),
  control: (
    provided: CSSObjectWithLabel,
    state: ControlProps<{ label: string; value: string }>
  ) => ({
    ...provided,
    height: '43px',
    padding: '5px',
    borderRadius: '8px',
    boxShadow: state.isFocused || state.menuIsOpen ? '0 0 0 1px #FD835D' : undefined,
    border: state.isFocused || state.menuIsOpen ? '1px solid #FD835D' : undefined,
    '&:hover': {
      border: state.isFocused || state.menuIsOpen ? '1px solid #FD835D' : undefined,
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
    color: '#FD835D',
  }),
  menu: (base: CSSObjectWithLabel) => ({
    ...base,
    padding: '4px',
    overflow: 'auto',
    width: '200px',
  }),
};
