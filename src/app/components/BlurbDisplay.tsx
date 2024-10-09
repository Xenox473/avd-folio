/* eslint-disable react/no-unescaped-entities */
import { Typography } from "@mui/material";

const styles = {
  maxWidth: 'lg',
  padding: '8px',
  flex: 1
};

const BlurbDisplay = () => {
  return (
    <>
      <Typography sx={styles} variant="body1" fontFamily="monospace" fontSize={'1.5rem'}>
        Hello there! I'm a full-stack software engineer with a passion for building products that help people and communities. I enjoy working on teams that foster a culture of open and honest communication, provide opportunities to wear many hats, and encourage collaboration and mentorship. I've worked on small to medium sized teams across various industries like healthcare and election forecasting on projects across the entire tech stack. I've built Generative AI products and tools for professional, academic and personal projects.
      </Typography>
    </>
  );
}

export default BlurbDisplay;