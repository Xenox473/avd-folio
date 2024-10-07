// import { Timeline } from './components/timeline';
// import LinkDisplay from './components/LinkDisplay';
import BlurbDisplay from "./components/BlurbDisplay";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import TitleDisplay from "./components/TitleDisplay";

export default function Home() {
  return (
    <>
      <ResponsiveAppBar />
      <div style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        height: 'calc(100vh - 76.5px)'
      }}>
          <TitleDisplay />
      </div>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
        <BlurbDisplay />
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
