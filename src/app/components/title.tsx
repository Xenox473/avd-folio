import { Stack, Typography } from "@mui/material"

export const Title = () => {

  return (
    <Stack spacing={2} sx={{ flex: 1, display: 'flex', alignContent: 'center', justifyContent: 'center' }}>
      <Typography variant="h1" fontSize={64} fontFamily={'monospace'}>
        Abhi V Dhar 
        <Typography 
          variant="caption"
          fontSize={16}
          fontFamily={'monospace'}> 
          (uh-bee)
        </Typography>
      </Typography>
      
      <Typography variant="h4" fontSize={32}>Sr. Software Engineer</Typography>
    </Stack>
  );
}