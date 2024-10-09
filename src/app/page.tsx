'use client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import BlurbDisplay from "./components/BlurbDisplay";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import TitleDisplay from "./components/TitleDisplay";
import { customTheme } from './CustomTheme';

export default function Home() {
  return (
    <ThemeProvider theme={customTheme}>
      <ResponsiveAppBar />
      <div style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        height:"calc(100vh - 76.5px)",
        gap: '10px',
        paddingTop: '32px'
      }}>
        <TitleDisplay />
        <BlurbDisplay />
      </div>
    </ThemeProvider>
  );
}
