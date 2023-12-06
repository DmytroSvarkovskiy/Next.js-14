import styled from 'styled-components';

import { TStyledLabelProps, TStyledInputProps } from './types';
// style for Input
export const StyledInput = styled.input<TStyledInputProps>`
  border-radius: 8px;
  box-sizing: border-box;
  display: block;
  /* outline: none; */
  border: none;
  padding: ${({ $padding }) => $padding};
  outline: ${({ theme, $error }) => (!$error ? theme.borderInput : theme.errorBorderInput)};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  font-size: 16px;
  background-color: ${({ fill }) => fill};
  transition: border-color 0.2s;
  color: ${({ theme }) => theme.colors.text};
  &[disabled] {
    background-color: ${({ theme }) => theme.colors.grey};
  }
  &:focus {
    outline: 2px solid
      ${({ theme, $error }) => (!$error ? theme.colors.blue : theme.colors.errorRed)};
  }
`;
export const ShowPasswordButton = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  left: 90%;
  bottom: 8px;
  cursor: pointer;
  opacity: 0.5;
  font-size: 12px;
  svg {
    width: 20px;
    height: 20px;
  }
`;
// style for label
export const Label = styled.label<TStyledLabelProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  top: 0;
  width: ${({ width }) => width};
  color: ${({ theme }) => theme.colors.text};
  span {
    margin-bottom: 8px;
    font-size: 16px;
    font-weight: 600;
  }
`;
export const ErrorMessage = styled.div`
  position: absolute;
  font-size: 12px;
  bottom: -16px;
  color: ${({ theme }) => theme.colors.errorRed};
`;
