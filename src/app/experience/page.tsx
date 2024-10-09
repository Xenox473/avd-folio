"use client"

import { ThemeProvider } from "@mui/material";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import { Timeline } from "../components/timeline";
import { customTheme } from "../CustomTheme";

export default function Experience() {
  return (
    <ThemeProvider theme={customTheme}>
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