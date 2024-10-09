import { Stack, Typography } from "@mui/material"
import BlurbDisplay from "./BlurbDisplay";

const TitleDisplay = () => (
  <Stack
    spacing={2}
    flex={1}
    sx={{
      justifyContent: 'center'
    }}
  >
    <Typography variant="h1" align="center">Abhi V Dhar</Typography>
    <Typography variant="h4" align="center">Sr. Software Engineer</Typography>
  </Stack>
);

export default TitleDisplay;