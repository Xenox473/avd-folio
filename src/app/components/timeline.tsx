"use client"

import { Box, Button, Step, StepContent, StepLabel, Stepper, Typography } from '@mui/material';
import { useState } from 'react';
import { SkillsDisplay } from './skillsDisplay';
import DescriptionsDisplay from './DescriptionsDisplay';

type StepObject = {
  title: string,
  description: string[],
  caption: string,
  skills: string[] 
}

type TimelineProps = {
  steps: StepObject[]
}

export const Timeline = ({ steps }: TimelineProps) => {
  const [activeStep, setActiveStep] = useState(-1);

  return (
    <Box sx={{
      paddingTop: '32px'
    }}>
      <Stepper activeStep={activeStep} orientation="vertical" nonLinear={true} sx={{ width: "100%" }}>
        {steps.map((step, index) => (
          <Step key={step.title}>
            <Button 
              sx={{
                textTransform: 'none',
                textAlign: 'left'
              }}
              onClick={() => activeStep === index ? setActiveStep(-1) : setActiveStep(index)}
            >
              <StepLabel
                optional={
                  <Typography variant="caption">{step.caption}</Typography>
                }
              >
                <Typography variant='body1'>
                  {step.title}
                </Typography>
              </StepLabel>
            </Button>
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