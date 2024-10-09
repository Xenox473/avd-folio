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
      color: colors.periwinkle
    },
    h4: {
      color: colors.periwinkle
    },
    body1: {
      color: colors.periwinkle
    },
    body2: {
      color: colors.periwinkle
    },
    caption: {
      color: colors.periwinkle
    }
  },
});
