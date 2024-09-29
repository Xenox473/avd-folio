"use client"

import { 
  Box,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
  Typography
} from '@mui/material';

import { useState } from 'react';
import { colors } from '../colors';
import { Accordion } from './accordion';

export const Timeline = () => {
  const [expanded, setExpanded] = useState<number | false>(false);

  const steps = [
    {
      company: 'INTech4Progress',
      role: 'Data Scientist, Full Stack Engineer',
      year: 'June 2024 - Present',
      skills: [
        "AWS S3", "AWS Lambda", "Docker", "DynamoDB", "Git", "GraphQL", "Python", "React", "Typescript"
      ]
    }, 
    {
      company: 'Decision Desk HQ',
      role: 'Backend Engineer | Machine Learning and App Development',
      year: 'May 2023 - December 2023',
      skills: [
        "AWS S3", "DataDog", "Git", "Minitest", "NLTK", "OpenAI API", "PostgreSQL", "Python", "Redis", "Ruby (on Rails)"
      ],
    },
    {
      company: 'Master\'s in Data Science at Indiana University',
      role: '',
      year: 'August 2022 - May 2024',
      skills: [
        "Computer Vision", "Advanced Natural Language Processing", "Network Science", "Social Media Mining", "Data Mining", "Advanced Database Concepts", "Applied Machine Learning"
      ],
    },
    {
      company: 'Springbuk',
      role: 'Senior Software Engineer | Platform Engineering',
      year: 'August 2021 - June 2022',
      skills: [
        "AWS EC2", "AWS S3", "Git", "PostgreSQL", "Python", "Ruby (on Rails)", "Snowflake"
      ],
    },
    {
      company: 'Springbuk',
      role: 'Software Engineer | Platform Engineering',
      year: 'August 2019 - August 2021',
      skills: [
        "Airbrake.io", "AWS EC2", "AWS S3", "AWS VPC", "Git", "PostgreSQL", "Python", "React", "Rspec", "Ruby (on Rails)", "Snowflake"
      ],
    }
    ,
    {
      company: 'Bachelor\'s in Computer Engineering at Purdue University',
      role: 'Minor in Economcs',
      year: 'August 2015 - May 2019',
      skills: [],
    }
  ]

  return (
    <>
      {steps.map((step, index) => (
        <Accordion
          key={index}
          role={step}
          index={index}
          expanded={expanded}
          setExpanded={setExpanded}
        />
      ))}
    </>
  )
};