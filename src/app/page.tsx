import Grid from '@mui/material/Grid2';
import { Header } from "./components/header";
import { Timeline } from './components/timeline';
import { Stack } from '@mui/material';
import { SkillsDisplay } from './components/skillsDisplay';

export default function Home() {
  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>spotify stuff here!!!</div>
        <Header />
      </div>
      <div style={{ flex: 1 }}>
        <Timeline />
      </div>
    </div>
  );
}
