import { motion } from 'framer-motion';
import { colors } from '../colors';
import { Typography } from '@mui/material';

export const SkillsDisplay = ({ skills }: { skills: string[] }) => {
  return (
    <div
      style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row'}}      
    >
      {skills.map((skill, index) => (
        <div
          key={index}
          style={{
            backgroundColor: colors.englishViolet,
            color: colors.periwinkle,
            padding: '0.5rem',
            margin: '0.5rem',
            borderRadius: '5px',
            fontFamily: 'monospace',
          }}
        >
          <Typography variant="subtitle1" fontFamily="inherit" fontSize='0.8rem'>{skill}</Typography>
        </div>
      ))}
    </div>
  )
}