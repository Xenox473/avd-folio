"use client"

import { ThemeProvider, Typography } from "@mui/material";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import { myTheme } from "../myTheme";
import { projects } from "@/data/projects";
import { Timeline } from "../components/timeline";

export default function Experience() {
  return (
    <ThemeProvider theme={myTheme}>
      <ResponsiveAppBar />
      <Typography variant="h2" sx={{ textAlign: 'center' }}>
        Projects
      </Typography>
      <div style={{
        display: 'flex',
        // alignItems: 'center',
        flexDirection: 'column'
      }}>
        <Timeline steps={projects} />
      </div>
    </ThemeProvider>
  )
}