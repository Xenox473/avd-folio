import { Container, Stack, Tooltip, Typography } from "@mui/material"

const style = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
};

export const Header = () => {
  const elapsedYears = new Date().getFullYear() - 2019;

  return (
    <header>
      <Container sx={{marginTop: '30px'}}>
        <Stack spacing={2} sx={style}>
          <Tooltip title="Pronounced: Uh - bee - shake">
            <Typography variant="h1">
              Abhishek V Dhar
            </Typography>
          </Tooltip>
          
          <Typography variant="h4"> Sr. Software Engineer (Frontend, Backend, Databases, AI and ML) </Typography>
          
          <Typography variant="body1">
            I am a software engineer with more than {elapsedYears} years of experience. I have worked on small to medium sized teams across various industries like healthcare and election forecasting. From 2022 to 2024, I earned a Master's in Data Science from Indiana University where I got to learn about AI and Machine Learning and working with large datasets. I am motivated by building products that help people help people - by providing a service to a community that helps them give back to society.
          </Typography>
        </Stack>
      </Container>
    </header>
  );
}