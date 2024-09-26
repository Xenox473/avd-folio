import Grid from '@mui/material/Grid2';
import { Header } from "./components/header";
export default function Home() {
  return (
    <div>
      <main>
        <Header />
        <Grid container spacing={2}>
          <Grid size={4}>
            <h1>My Projects</h1>
          </Grid>
          <Grid size={4}>
            <p>
              
            </p>
          </Grid>
          <Grid size={4}>
            <h2>Project 2</h2>
            <p>Details about project 2</p>
          </Grid>
        </Grid>
      </main>
    </div>
  );
}
