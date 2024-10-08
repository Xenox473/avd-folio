'use client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import BlurbDisplay from "./components/BlurbDisplay";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import TitleDisplay from "./components/TitleDisplay";

const theme = createTheme({
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
    h4: {
      fontFamily: 'monospace',
      fontSize: '2rem',
    }
  },
});

export default function Home() {
  console.log(theme);
  return (
    <ThemeProvider theme={theme}>
      <ResponsiveAppBar />
      <TitleDisplay />
      <div style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
        <BlurbDisplay />
      </div>
    </ThemeProvider>
  );
}
