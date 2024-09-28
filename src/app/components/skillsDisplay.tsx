import { skills } from "@/data/skills";
import { Box } from "@mui/material";
import { SkillBall } from "./skillBall";

export const SkillsDisplay = () => {
  function renderSkills(skills: { backend: string[]; frontend: string[]; machineLearning: string[]; devops: string[]; softSkills: string[]; }) {
    return (
      <>
        {
          Object.entries(skills).map(([category, skills]) => (
            skills.map((skill, index) => (
              <SkillBall key={index} category={category} skill={skill} />
            ))
          ))
        }
        {/* <SkillBall category="backend" skill="Node.js" /> */}
      </>
    )
  };

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      flexDirection: 'row-reverse',
      gap: 2,
    }}>
      {renderSkills(skills)}  
    </Box>
  )
}