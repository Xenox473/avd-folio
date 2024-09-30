import { Card, CardContent, Typography } from "@mui/material";

export const Blurb = () => {
  const elapsedYears = new Date().getFullYear() - 2019;

  return (
    <Typography variant="body1" fontSize={26} fontFamily={'monospace'}>
      <ul>
        <li>I am a full-stack Software Engineer with more than {elapsedYears} years of experience.</li>
        <li>I am motivated by building products that help people help people.</li>
        <li>I have worked on small to medium sized teams across various industries like healthcare and election forecasting.</li>
        <li>I’ve built Generative AI products and tools for professional, academic and personal projects.</li>
        <li>I enjoy working on teams that foster a culture of open and honest communication, provide opportunities to wear many hats, and encourage collaboration and mentorship.</li>
      </ul>
    </Typography>    
  );
}