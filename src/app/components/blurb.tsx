import { Typography } from "@mui/material";

export const Blurb = () => {
  const elapsedYears = new Date().getFullYear() - 2019;

  const notes = [
    `I am a full-stack Software Engineer with more than ${elapsedYears} years of experience.`,
    "I am motivated by building products that help people help people.",
    "I have worked on small to medium sized teams across various industries like healthcare and election forecasting.",
    "I’ve built Generative AI products and tools for professional, academic and personal projects.",
    "I enjoy working on teams that foster a culture of open and honest communication, provide opportunities to wear many hats, and encourage collaboration and mentorship."
  ]

  return (
    <ul>
      {notes.map((note, index) => (
        <li key={index}>
          <Typography variant="body1" fontFamily="monospace" fontSize={24}>
            {note}
          </Typography>
        </li>  
      ))}
    </ul>
  );
}