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
        height:"calc(100vh - 108px)",
        paddingTop: '32px',
        maxWidth: 'md'
      }}>
        <TitleDisplay />
        <BlurbDisplay />
      </div>
    </ThemeProvider>
  );
}
