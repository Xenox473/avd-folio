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
      institution: 'INTech4Progress',
      title: 'Data Scientist, Full Stack Engineer',
      year: 'June 2024 - Present',
      skills: [
        "AWS S3", "AWS Lambda", "Docker", "DynamoDB", "Git", "GraphQL", "Python", "React", "Typescript"
      ]
    }, 
    {
      institution: 'Decision Desk HQ',
      title: 'Backend Engineer (Machine Learning and App Development)',
      year: 'May 2023 - December 2023',
      skills: [
        "AWS S3", "DataDog", "Git", "Minitest", "NLTK", "OpenAI API", "PostgreSQL", "Python", "Redis", "Ruby (on Rails)"
      ],
    },
    {
      institution: "Indiana University",
      title: "Master's in Data Science",
      year: 'August 2022 - May 2024',
      skills: [
        "Computer Vision", "Advanced Natural Language Processing", "Network Science", "Social Media Mining", "Data Mining", "Advanced Database Concepts", "Applied Machine Learning"
      ],
    },
    {
      institution: 'Springbuk',
      title: 'Sr. Software Engineer (Platform Engineering)',
      year: 'August 2021 - June 2022',
      skills: [
        "AWS EC2", "AWS S3", "Git", "PostgreSQL", "Python", "Ruby (on Rails)", "Snowflake"
      ],
    },
    {
      institution: 'Springbuk',
      title: 'Software Engineer (Platform Engineering)',
      year: 'August 2019 - August 2021',
      skills: [
        "Airbrake.io", "AWS EC2", "AWS S3", "AWS VPC", "Git", "PostgreSQL", "Python", "React", "Rspec", "Ruby (on Rails)", "Snowflake"
      ],
    }
    ,
    {
      institution: "Purdue University",
      title: 'Bachelor of Science in Computer Engineering',
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