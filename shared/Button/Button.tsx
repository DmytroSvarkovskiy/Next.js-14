import { ButtonStyled, LinkButton } from './styled';
import { TButtonProps } from './types';

export const Button = ({
  width,
  height = '44px',
  type = 'button',
  link = '/',
  onClick,
  purpose = 'button',
  color = '#ffffff',
  children,
  fill = '#0086BF',
  $borderColor,
  disabled = false,
  $padding = '16px 28px',
  $margin = '0',
}: TButtonProps) => {
  return (
    <>
      {purpose === 'button' ? (
        <ButtonStyled
          fill={fill}
          onClick={onClick}
          width={width}
          height={height}
          type={type}
          color={color}
          $borderColor={$borderColor}
          disabled={disabled}
          $padding={$padding}
          $margin={$margin}
        >
          {children}
        </ButtonStyled>
      ) : (
        <LinkButton
          $borderColor={$borderColor}
          fill={fill}
          href={link}
          width={width}
          height={height}
          color={color}
          $padding={$padding}
          $margin={$margin}
        >
          {children}
        </LinkButton>
      )}
    </>
  );
};
