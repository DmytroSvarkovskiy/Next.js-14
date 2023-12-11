import { styled } from 'styled-components';
import { TButtonStyledProps } from './types';
import Link from 'next/link';

export const ButtonStyled = styled.button<TButtonStyledProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  color: ${({ color }) => color};
  border-radius: 100px;
  padding: ${({ $padding }) => $padding};
  display: flex;
  cursor: pointer;
  margin: ${({ $margin }) => $margin};
  justify-content: center;
  align-items: center;
  border: 1px solid
    ${({ theme, $borderColor, disabled }) =>
      !disabled ? (!$borderColor ? theme.colors.blue : $borderColor) : theme.colors.grey};
  background-color: ${({ fill, theme, disabled }) => (!disabled ? fill : theme.colors.grey)};

  svg {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }
`;

export const LinkButton = styled(Link)<TButtonStyledProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 100px;
  display: flex;
  cursor: pointer;
  padding: ${({ $padding }) => $padding};
  justify-content: center;
  align-items: center;
  border: 1px solid
    ${({ theme, $borderColor }) => (!$borderColor ? theme.colors.blue : $borderColor)};
  background-color: ${({ fill }) => fill};
  color: ${({ color }) => color};
  background-color: ${({ fill }) => fill};
  margin: ${({ $margin }) => $margin};
  svg {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }
`;
