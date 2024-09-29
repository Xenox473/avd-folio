import { motion } from 'framer-motion';
import { Chip } from '@mui/material';
import { colors } from '../colors';

export const SkillsDisplay = ({ skills }: { skills: string[] }) => {
  return (
    <motion.div
      variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
      transition={{ duration: 0.8 }}
      style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row' }}      
    >
      {skills.map((skill, index) => (
        <Chip key={index} label={skill} style={{ margin: '0.5rem', backgroundColor: colors.keppel}} />
      ))}
    </motion.div>
  )
}