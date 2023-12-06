'use client';
import { ReactNode } from 'react';
import StyledComponentsRegistry from './styled/StyledComponentsRegistry';
import { ThemeProvider } from 'styled-components';
import { theme } from './styled/theme';
import { GlobalStyle } from './styled/GlobalStyle';
import 'normalize.css/normalize.css';
import { store } from './redux/store';
import { Provider } from 'react-redux';

const RootProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <StyledComponentsRegistry>
        <GlobalStyle />
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </StyledComponentsRegistry>
    </Provider>
  );
};
export default RootProvider;
