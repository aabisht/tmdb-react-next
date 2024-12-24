"use client";

import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xxl: true;
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
  }
}

const headingStyle = (fontSizeBase: string, fontSizeXL: string) => ({
  fontSize: fontSizeBase,
  [theme.breakpoints.up("xl")]: {
    fontSize: fontSizeXL,
  },
});

export const theme = createTheme({
  cssVariables: {
    cssVarPrefix: "tmdb",
    disableCssColorScheme: true,
  },
  palette: {
    mode: "dark",
    primary: {
      light: "#33c2e9",
      main: "#01b3e4",
      dark: "#007d9f",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#899097",
      main: "#6c757d",
      dark: "#4b5157",
      contrastText: "#ffffff",
    },
    background: {
      default: "#000000",
      paper: "#121212",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1500,
    },
  },
  typography: {
    fontFamily: "var(--font-roboto)",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    body1: {
      fontSize: "1rem",
      lineHeight: "1.5",
    },
    h5: {
      fontSize: "1.25rem",
    },
    h6: {
      fontSize: "1rem",
    },
    allVariants: {
      marginBottom: "0.5rem",
      fontWeight: 500,
      lineHeight: 1.2,
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {},
      },
    },
  },
});

theme.typography.h1 = headingStyle("calc(1.375rem + 1.5vw)", "2.5rem");
theme.typography.h2 = headingStyle("calc(1.325rem + .9vw)", "2rem");
theme.typography.h3 = headingStyle("calc(1.3rem + .6vw)", "1.75rem");
theme.typography.h4 = headingStyle("calc(1.275rem + .3vw)", "1.5rem");
