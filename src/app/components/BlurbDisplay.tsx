import { Typography } from "@mui/material";

const styles = {
  maxWidth: 'md',
};

const BlurbDisplay = () => {
  return (
    <>
      <Typography sx={styles} variant="body1" fontFamily="monospace" fontSize={24}>
        Hello there! Welcome to my website. I'm a full-stack software engineer with a passion for building products that help people. I'm particulary motivated by building tools and services that provide value to communities that in turn, provide value to society. I enjoy working on teams that foster a culture of open and honest communication, provide opportunities to wear many hats, and encourage collaboration and mentorship. I've worked on small to medium sized teams across various industries like healthcare and election forecasting on projects across the entire tech stack. I've built Generative AI products and tools for professional, academic and personal projects. You can check out my experience here and some of my projects here.
      </Typography>
      <Typography sx={styles} variant="body1" fontFamily="monospace" fontSize={24}>
        Outside of work, I enjoy working out, rock climbing, and going on hikes. I'm always down to play a sport, especially basketball or tennis. I also love listening to music, so feel free to check out what albums I'm listening to at the moment and share a song you think I should listen to next!
      </Typography>
    </>
  );
}

export default BlurbDisplay;