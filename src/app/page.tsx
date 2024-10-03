import { Title } from "./components/title";
// import { Timeline } from './components/timeline';
// import { Blurb } from './components/blurb';
// import LinkDisplay from './components/LinkDisplay';
import ResponsiveAppBar from "./components/ResponsiveAppBar";

export default function Home() {
  return (
    <>
      <ResponsiveAppBar />
      <div style={{ 
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100vh',
      }}>
        <Title />
      </div>
      {/* <div style={{display: 'flex', flexWrap: 'wrap', flex: 9}}>
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
      </div> */}
    </>
  );
}
