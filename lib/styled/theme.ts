export const theme = {
  colors: {
    text: '#070C11',
    blue: '#0086BF',
    heroGradient: 'linear-gradient(180deg, #C5DEFF 0%, #C5DEFF 100%)',
    mainBackground: '#F7F7F8',
    white: '#ffffff',
    errorRed: '#F91D1D',
    grey: '#9DADBC',
  },
  borderInputs: '0.5px solid #9DADBC',
  cardShadow:
    '0px 8px 16px 0px rgba(132, 151, 164, 0.08), 0px 4px 8px 0px rgba(132, 151, 164, 0.08)',
};

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      text: string;
      blue: string;
      heroGradient: string;
      mainBackground: string;
      white: string;
      errorRed: string;
      grey: string;
    };
    borderInputs: string;
    cardShadow: string;
  }
}
