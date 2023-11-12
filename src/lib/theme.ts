export const theme = {
  colors: {
    primaryBright: '#F35E2F',
    primary: '#FD835D',
    primariLight: '#FFE9E2',
    mainBackground: '#F5F8FA',
    blockBackground: '#ffffff',
    mainTextColor: '#1E1C2C',
    errorRed: '#F91D1D',
    rose: '#FFC2C2',
    lightRose: '#FFF0F0',
    darkOrange: '#ED850E',
    orange: '#F59E0B',
    yellow: '#FFF6D3',
    darkGreen: '#29B247',
    green: '#29B247',
    lightGreen: '#F0FFF2',
    white: '#ffffff',
    grey: '#E3E3E3',
    greytext: '#646369',
    blue: '#198BDD',
  },
  bottomLine: '1px solid #EDEDED',
  borderInput: '1px solid #D6D5D9',
  errorBorderInput: '1px solid #F91D1D',
};

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primaryBright: string;
      primary: string;
      primariLight: string;
      mainBackground: string;
      blockBackground: string;
      mainTextColor: string;
      errorRed: string;
      rose: string;
      lightRose: string;
      darkOrange: string;
      orange: string;
      yellow: string;
      darkGreen: string;
      green: string;
      lightGreen: string;
      white: string;
      grey: string;
      greytext: string;
      blue: string;
    };
    bottomLine: string;
    borderInput: string;
    errorBorderInput: string;
  }
}
