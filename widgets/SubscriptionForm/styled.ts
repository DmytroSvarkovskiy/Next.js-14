'use client';
import Container from '@/shared/Container/Container';
import { CSSObjectWithLabel, ControlProps, OptionProps } from 'react-select';
import styled from 'styled-components';

export const FormWrapper = styled(Container)`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  width: 100%;
  filter: drop-shadow(0px 8px 16px rgba(132, 151, 164, 0.08))
    drop-shadow(0px 4px 8px rgba(132, 151, 164, 0.08));
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  margin: 0;
  flex-direction: column;
  padding: 20px;

  h3 {
    font-size: 25px;
    font-weight: 500;
    margin-bottom: 8px;
  }
  p {
    font-size: 16px;
    line-height: 1.5;
  }
  @media (min-width: 768px) {
    width: 400px;
  }
  @media (min-width: 1200px) {
    padding: 88px 70px 70px;
    width: 648px;
    h3 {
      font-size: 33px;
      font-weight: 500;
      margin-bottom: 8px;
    }
    p {
      font-size: 20px;
    }
  }
`;
export const ImageWrap = styled.div`
  margin: 0;
  display: flex;
  height: 300px;
  border-radius: 0 8px 8px 0;
  align-items: center;
  justify-content: center;
  min-width: 300px;
  width: 100%;
  background: linear-gradient(
    to bottom right,
    rgba(255, 255, 255, 0.3) 10%,
    rgba(255, 204, 247, 0.3) 50%,
    rgba(197, 222, 255, 0.3) 100%
  );
  @media (min-width: 425px) {
    width: 405px;
  }

  @media (min-width: 768px) {
    width: 480px;
    height: 500px;
  }
  @media (min-width: 1200px) {
    height: 592px;
  }
  img {
    width: 300px;
  }
`;
export const InputsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin: 24px 0 32px;
  @media (min-width: 1200px) {
    gap: 22px;
  }
`;
export const SelectWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 20px;
  @media (min-width: 425px) {
    width: 365px;
  }
  @media (min-width: 768px) {
    width: 360px;
  }
  @media (min-width: 1200px) {
    width: 508px;
  }
`;
export const selectStyles = {
  valueContainer: (provided: CSSObjectWithLabel) => ({
    ...provided,
    padding: '0 8px',
    height: '76px',
    width: '100%',
    '@media(min-width:768px)': {
      height: '56px',
    },
  }),

  control: (
    provided: CSSObjectWithLabel,
    state: ControlProps<{ label: string; value: string }>
  ) => ({
    ...provided,
    height: '76px',
    '@media(min-width:768px)': {
      height: '56px',
    },

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

export const TextLink = styled.span`
  a {
    color: ${({ theme }) => theme.colors.blue};
  }
`;
export const HeaderSuccess = styled.h3`
  font-size: 36px;
  margin: 0 auto;
  padding: 20px;
  margin-top: 20%;
  width: 100%;
  @media (min-width: 768px) {
    width: 608px;
  }
`;
