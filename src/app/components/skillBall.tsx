"use client";

import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import { colors } from "../colors";

export const SkillBall = ({ category, skill }: { category: string, skill: string } ) => {
  return (
    <motion.span style={
        {
          display: 'inline-block',
          padding: '0.5em',
          backgroundColor: colors.magenta,
          borderRadius: '1em',
        }
      }
      whileHover={{ scale: 1.1 }}
    >
      <Typography variant="h6">
        {skill}
      </Typography>
    </motion.span>
  );
}