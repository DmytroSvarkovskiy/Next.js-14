'use client';
import styled from 'styled-components';

type ContainerProps = {
  as?: React.ElementType;
  width?: string;
  height?: string;
  $maxWidth?: string;
  $minWidth?: string;
  $padding?: string;
  $gap?: string;
  $margin?: string;
  $bgColor?: string;
  $flexDirection?: 'row' | 'column';
  $justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  $alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  $position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
  $top?: string;
  $right?: string;
  $bottom?: string;
  $left?: string;
  $zIndex?: number | string;
  $overflow?: 'hidden' | 'auto' | 'visible ' | 'scroll';
  color?: string;
  $flexWrap?: string;
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  gap: ${props => props.$gap};
  height: ${props => props.height};
  width: ${props => props.width};
  max-width: ${props => props.$maxWidth};
  min-width: ${props => props.$minWidth};
  padding: ${props => props.$padding};
  margin: ${props => props.$margin};
  background-color: ${props => props.$bgColor};
  flex-direction: ${props => props.$flexDirection};
  justify-content: ${props => props.$justifyContent};
  align-items: ${props => props.$alignItems};
  position: ${props => props.$position};
  top: ${props => props.$top};
  right: ${props => props.$right};
  bottom: ${props => props.$bottom};
  left: ${props => props.$left};
  z-index: ${props => props.$zIndex};
  overflow: ${props => props.$overflow};
  color: ${props => props.color};
  flex-wrap: ${props => props.$flexWrap};
`;

Container.defaultProps = {
  width: '100%',
  height: 'auto',
  $maxWidth: 'none',
  $padding: '0',
  $margin: '0 auto',
  $bgColor: 'transparent',
  $flexDirection: 'row',
  $justifyContent: 'flex-start',
  $alignItems: 'flex-start',
  $gap: '0',
  $minWidth: 'none',
  $position: 'static',
  $top: 'auto',
  $right: 'auto',
  $bottom: 'auto',
  $left: 'auto',
  $zIndex: 'auto',
  $overflow: 'visible ',
  $flexWrap: 'nowrap',
};
