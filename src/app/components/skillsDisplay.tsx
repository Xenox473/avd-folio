import { skills } from "@/data/skills";
import { Box } from "@mui/material";

export const SkillsDisplay = () => {
  function renderSkills(skills: { backend: string[]; frontend: string[]; machineLearning: string[]; devops: string[]; softSkills: string[]; }) {
    return (
      <>
        {
          Object.entries(skills).map(([category, skills]) => (
            <li key={category}>
              <p> {category} </p>
              <ul>
                {skills.map((skill, index) => (
                  <li key={index}> {skill} </li>
                ))}
              </ul>
            </li>
          ))
        }
      </>
    )
  };

  return (
    <Box sx={{
      borderLeft: '3px solid black',
      borderRight: '3px solid black',
      borderBottom: '3px solid black',
      maxHeight: '100%',
      overflow: 'auto',
      padding: '1rem'
    }}>
      <p> Skills </p>
      <ul>
        {renderSkills(skills)}
      </ul>
    </Box>
  )
}