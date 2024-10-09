import { createTheme } from "@mui/material";
import { colors } from "./colors";

export const myTheme = createTheme({
  typography: {
    fontFamily: [
      'Roboto',
      'monospace',
      'sans-serif',
    ].join(','),
    fontSize: 16,
    h1: {
      fontFamily: 'monospace',
      fontSize: '4rem',
    },
    h2: {
      fontFamily: 'monospace',
      fontSize: '3rem',
    },
    h4: {
      fontFamily: 'monospace',
      fontSize: '2rem',
    },
    body1: {
      fontFamily: 'monospace',
      fontSize: '1.5rem',
      color: colors.periwinkle
    },
    body2: {
      fontFamily: 'monospace',
      fontSize: '1rem',
      color: colors.periwinkle
    },
    caption: {
      fontFamily: 'monospace',
      color: colors.periwinkle
    }
  },
});
