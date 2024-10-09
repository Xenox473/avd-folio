'use client';
import { ThemeProvider } from '@mui/material/styles';
import BlurbDisplay from "./components/BlurbDisplay";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import TitleDisplay from "./components/TitleDisplay";
import { myTheme } from './myTheme';

export default function Home() {
  return (
    <ThemeProvider theme={myTheme}>
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
