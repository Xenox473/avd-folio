/* eslint-disable react/no-unescaped-entities */
import { Stack, Typography } from "@mui/material";

const styles = {
  maxWidth: 'sm',
  flex: 2,
  display: 'flex',
  padding: '16px'
};

const BlurbDisplay = () => {
  return (
    <Stack spacing={2} sx={styles}>
      <Typography variant="body1" component="p">
        Hello there! I'm a full-stack software engineer with a passion for building products that help people and communities. I've recently graduated with a Master's in Data Science and have a strong interest in AI and NLP applications.
      </Typography>
      <Typography variant="body1" component="p">
        I enjoy working on teams that foster a culture of open and honest communication, provide opportunities to wear many hats, and encourage collaboration and mentorship.
      </Typography>
      <Typography variant="body1" component="p">
        I've worked on small to medium sized teams across various industries like healthcare and election forecasting and on projects across the entire tech stack.
      </Typography>
      <Typography variant="body1" component="p">
        I've built Generative AI products and tools for professional, academic, and personal projects, ETL and data aggregation pipelines for processing large datasets, frontends, APIs and database relations for web applications, and integrated end-to-end testing and CI/CD to existing codebases. You can check out some of my experiences and projects here.
      </Typography>
    </Stack>
  );
}

export default BlurbDisplay;