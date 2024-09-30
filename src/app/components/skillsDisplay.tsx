import { motion } from 'framer-motion';
import { colors } from '../colors';
import { Typography } from '@mui/material';

export const SkillsDisplay = ({ skills }: { skills: string[] }) => {
  return (
    <motion.div
      variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
      transition={{ duration: 0.8 }}
      style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center' }}      
    >
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          style={{
            backgroundColor: colors.magenta,
            color: colors.periwinkle,
            padding: '0.5rem',
            margin: '0.5rem',
            borderRadius: '5px',
            fontFamily: 'monospace',
          }}
        >
          <Typography variant="subtitle1" fontFamily="inherit">{skill}</Typography>
        </motion.div>
      ))}
    </motion.div>
  )
}