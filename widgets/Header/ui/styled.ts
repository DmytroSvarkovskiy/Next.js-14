'use client';
import { CSSObjectWithLabel } from 'react-select';
import styled from 'styled-components';

export const selectStylesLang = {
  valueContainer: (provided: CSSObjectWithLabel) => ({
    ...provided,
    padding: '0px',
    display: 'flex',
  }),
  control: (provided: CSSObjectWithLabel) => ({
    ...provided,
    height: '40px',
    border: 'none',
    boxShadow: '0',
    backgroundColor: 'transparent',
    with: '57px',
  }),
  indicatorSeparator: (provided: CSSObjectWithLabel) => ({
    ...provided,

    backgroundColor: 'transparent',
  }),
  dropdownIndicator: (provided: CSSObjectWithLabel) => ({
    ...provided,
    marginBottom: '1px',
    padding: '0',
    color: '#070C11',
    with: '8px',
  }),
  menuPortal: (base: CSSObjectWithLabel) => ({ ...base, zIndex: 9999 }),
};
export const LangWrap = styled.div`
  display: flex;
  padding: 2px 5px;
  padding: 4px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.blue};
  }
`;
export const Singlevalue = styled.div`
  display: flex;
  /* padding: 2px 5px; */
  gap: 4px;
  width: 33px;
  font-size: 16px;
  @media (min-width: 768px) {
    padding: 2px 3px;
  }
`;
