"use client";
import { ReactNode } from "react";
import StyledComponentsRegistry from "./StyledComponentsRegistry";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import "normalize.css/normalize.css";

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <StyledComponentsRegistry>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledComponentsRegistry>
  );
};
export default Provider;
