import { Stack, Typography } from "@mui/material"

const TitleDisplay = () => (
  <Stack
    alignItems="center"
    height="calc(100vh - 76.5px)"
    justifyContent="center"
    spacing={2}
  >
    <Typography variant="h1" align="center">Abhi V Dhar</Typography>
    <Typography variant="h4" align="center">Sr. Software Engineer</Typography>
  </Stack>
);

export default TitleDisplay;