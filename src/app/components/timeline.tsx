"use client"

import { Box, Button, Step, StepContent, StepLabel, Stepper, Typography } from '@mui/material';
import { useState } from 'react';
import { SkillsDisplay } from './skillsDisplay';
import DescriptionsDisplay from './DescriptionsDisplay';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { motion } from 'framer-motion';
import { colors } from '../colors';

type StepObject = {
  title: string,
  description: string[],
  skills: string[],
  caption?: string,
  githubLink?: string
}

type TimelineProps = {
  steps: StepObject[]
}

const arrowStyles = {
  margin: '0.5rem',
  color: colors.periwinkle,
  padding: 0,
  border: 'none',
  background: 'none',
  cursor: 'pointer'
}

export const Timeline = ({ steps }: TimelineProps) => {
  const [activeStep, setActiveStep] = useState(-1);

  return (
    <Box sx={{
      paddingTop: '32px'
    }}>
      <Stepper activeStep={activeStep} orientation="vertical" nonLinear={true} connector={null} sx={{ width: "100%", gap: '20px'}}>
        {steps.map((step, index) => (
          <Step key={step.title}>
            <div style={{
              display: "flex",
              alignItems: "center",
            }}>
              <motion.button
                animate={ { rotate: activeStep === index ? 90 : 0 } }
                onClick={() => activeStep === index ?setActiveStep(-1) : setActiveStep(index)}
                whileHover={{ scale: 1.2 }}
                style={arrowStyles}
              >
                <KeyboardArrowRight />
              </motion.button>
              <div style={{
                display: 'flex',
                flexDirection: 'column'
              }}>
                <Typography variant='body1'>
                  {step.title}
                </Typography>
                <Typography variant='caption'>
                  {step.caption}
                </Typography>
              </div>
            </div>
            <StepContent>
              <SkillsDisplay skills={step.skills} />
              <DescriptionsDisplay descriptions={step.description} />
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};