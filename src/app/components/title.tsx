import { Stack, Typography } from "@mui/material"

const spanStyles = {
  margin: '0.5rem',
}

export const Title = () => {

  return (
    <Stack spacing={2} sx={{ alignItems: 'center' }}>
      <Typography variant="h1" fontSize={'4rem'} fontFamily={'monospace'}>
        <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        alignItems: 'center',
        }}>
          <span style={spanStyles}>Abhi</span>
          <span style={spanStyles}>V</span>
          <span style={spanStyles}>Dhar</span>
        </div>
      </Typography>
      <Typography variant="h4" fontSize={'2rem'}>
        Sr. Software Engineer
      </Typography>
    </Stack>
  );
}