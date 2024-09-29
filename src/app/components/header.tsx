import { Container, Stack, Typography } from "@mui/material"

const containerStyle = {
  position: 'absolute',
  bottom: '5vh',
  left: '5vh',
  width: 'inherit',
}

export const Header = () => {
  const elapsedYears = new Date().getFullYear() - 2019;

  return (
    <Container sx={containerStyle}>
      <Stack spacing={2}>
        <Typography variant="h1" fontSize={64} fontFamily={'monospace'}>
          Abhishek V Dhar
        </Typography>
        
        <Typography variant="h4" fontSize={32}> Sr. Software Engineer </Typography>
        
        <Typography variant="body1" fontSize={15}>
          I am a Full-stack Software Engineer with more than {elapsedYears} years of experience. I am motivated by building products that help people help people - by providing a service to a community that helps them give back to society. I have worked on small to medium sized teams across various industries like healthcare and election forecasting. I’ve built Generative AI products and tools for professional, academic and personal projects.
          I enjoy working on teams that foster a culture of open and honest communication, provide opportunities to wear many hats, and encourage collaboration and mentorship.
        </Typography>
      </Stack>
    </Container>
  );
}