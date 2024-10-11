"use client"

import { ThemeProvider, Typography } from "@mui/material";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import { Timeline } from "../components/timeline";
import { myTheme } from "../myTheme";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <ThemeProvider theme={myTheme}>
      <ResponsiveAppBar />
      <Typography variant="h2" sx={{ textAlign: 'center' }}>
        Experience
      </Typography>
      <div style={{
        display: 'flex',
        // alignItems: 'center',
        flexDirection: 'column'
      }}>
        <Timeline steps={experience} />
      </div>
    </ThemeProvider>
  )
}