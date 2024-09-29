import Grid from '@mui/material/Grid2';
import { Header } from "./components/header";
import { Timeline } from './components/timeline';
import { Stack } from '@mui/material';
import { SkillsDisplay } from './components/skillsDisplay';

export default function Home() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid size={6}>
          <Header />
        </Grid>
        <Grid size={6}>
          <Timeline />
        </Grid>
      </Grid>
    </div>
  );
}
