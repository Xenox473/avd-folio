"use client"

import { ThemeProvider } from "@mui/material";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import { Timeline } from "../components/timeline";
import { myTheme } from "../myTheme";

export default function Experience() {
  return (
    <ThemeProvider theme={myTheme}>
      <ResponsiveAppBar />
      <div style={{
        display: 'flex',
        // alignItems: 'center',
        flexDirection: 'column'
      }}>
        <Timeline />
      </div>
    </ThemeProvider>
  )
}