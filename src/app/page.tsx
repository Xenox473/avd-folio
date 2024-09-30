import Grid from '@mui/material/Grid2';
import { Title } from "./components/title";
import { Timeline } from './components/timeline';
import { Stack } from '@mui/material';
import { SkillsDisplay } from './components/skillsDisplay';
import { Blurb } from './components/blurb';
import LinkDisplay from './components/LinkDisplay';

export default function Home() {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-around', flex: 1, margin: "1rem" }}>
        <Title />
        <LinkDisplay />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', flex: 9}}>
        <div style={{ 
          flex: 1, 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'space-around',
          alignContent: 'center',
          flexWrap: 'wrap'
        }}>
          <div style={{ display: 'flex', maxWidth: '75%' }}>
            <Blurb />
          </div>
          <div>spotify stuff here!!!</div>
        </div>
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignContent: 'center',
          flexWrap: 'wrap'
        }}>
          <Timeline />
        </div>
      </div>
    </>
  );
}
