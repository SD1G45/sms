import React from "react";
import { ThemeProvider } from "styled-components";
import ITheme from "./types";

const screenWidth = {
  minSmall: `(min-width: ${430}px)`,
  minMedium: `(min-width: ${730}px)`,
  minLarge: `(min-width: ${1024}px)`,
  maxSmall: `(max-width: ${430}px)`,
  maxMedium: `(max-width: ${730}px)`,
  maxLarge: `(max-width: ${1024}px)`,
};

const lightTheme: ITheme = {
  colors: {
    primary: "#4881F0",
    lightGray: "#BEC8D2",
    textPrimary: "#000000",
    error: "#FF7F7F",
  },
  screenWidth: { ...screenWidth },
};

interface ThemeProps {
  children: React.ReactNode;
}

const Theme: React.FC<ThemeProps> = ({ children }) => (
  <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
);

export default Theme;
