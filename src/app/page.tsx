import Grid from '@mui/material/Grid2';
import { Header } from "./components/header";
import { Timeline } from './components/timeline';
import { Stack } from '@mui/material';
import { SkillsDisplay } from './components/skillsDisplay';

export default function Home() {
  return (
    <div>
      {/* <Stack spacing={2}>
        <Header />
        <Grid container spacing={2}>
          <Grid size={4}>
            <Timeline />
          </Grid>
          <Grid size={4}>
            <SkillsDisplay />
          </Grid>
          <Grid size={4}>
            <h2>Project 2</h2>
            <p>Details about project 2</p>
          </Grid>
        </Grid>
      </Stack> */}
      <Header />
    </div>
  );
}
