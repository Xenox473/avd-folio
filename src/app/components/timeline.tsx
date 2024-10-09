"use client"

import { Box, Button, Paper, Step, StepContent, StepLabel, Stepper, Typography } from '@mui/material';
import { useState } from 'react';
import { SkillsDisplay } from './skillsDisplay';
import { color } from 'framer-motion';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DescriptionsDisplay from './DescriptionsDisplay';
import { colors } from '../colors';

export const Timeline = () => {
  const [activeStep, setActiveStep] = useState(-1);

  const steps = [
    {
      institution: 'INTech4Progress',
      title: 'Data Scientist, Full Stack Engineer',
      year: 'June 2024 - Present',
      skills: [
        "AWS S3", "AWS Lambda", "Docker", "DynamoDB", "Git", "GraphQL", "Python", "React", "Typescript"
      ],
      description: [
        "Building a pipeline to train and run Survival Analysis models for predicting wait times at voting centers.",
        "Deployed the pipeline using Serverless and Docker containerization to run on AWS Lambda.",
        "Wrote end to end tests using Python’s unittest and moto to mock AWS services in a testing environment and ensure successful CI/CD changes.",
        "Implemented user validation and built out data visualization features on the front end using React components and GraphQL."
      ]
    }, 
    {
      institution: 'Decision Desk HQ',
      title: 'Backend Engineer (Machine Learning and App Development)',
      year: 'May 2023 - December 2023',
      skills: [
        "AWS S3", "DataDog", "Git", "Minitest", "NLTK", "OpenAI API", "PostgreSQL", "Python", "Redis", "Ruby (on Rails)"
      ],
      description: [
        "Prototyped an internal custom machine learning model using natural language processing and clustering algorithms that automatically generates mappings to election candidates and significantly reduces manual effort by a factor of hours.",
        "Used GPT 3.5 to generate descriptive articles of county level races leveraging internal election data.",
        "Introduced backend end-to-end testing to the deployment pipeline through automated tests and rigorous unit testing of crucial models and services for our Ruby on Rails web app, improving test coverage of the codebase from nearly 0% to more than 70%.",
        "Improved the database architecture by redesigning and eliminating redundant tables to optimize the execution of database queries.",
        "Used DataDog to monitor the application’s reliability and investigate performance issues."
      ]
    },
    {
      institution: "Indiana University",
      title: "Master's in Data Science",
      year: 'August 2022 - May 2024',
      skills: [
        "Computer Vision", "Advanced Natural Language Processing", "Network Science", "Social Media Mining", "Data Mining", "Advanced Database Concepts", "Applied Machine Learning"
      ],
      description: []
    },
    {
      institution: 'Springbuk',
      title: 'Sr. Software Engineer (Platform Engineering)',
      year: 'August 2021 - June 2022',
      skills: [
        "AWS EC2", "AWS S3", "Git", "PostgreSQL", "Python", "Ruby (on Rails)", "Snowflake"
      ],
      description: [
        "Helped cut nearly 50% in costs in infrastructure and processing time by migrating databases from PostgreSQL to Snowflake and eliminating redundant services.",
        "Designed and built custom ETL pipelines (using Python, Ruby, SQL) to ingest new data sources in order to support the onboarding of new clients.",
        "Regularly collaborated with the Data Science team to resolve discrepancies in data and improve forecasting models.",
        "Mentored other engineers through code reviews and pairing sessions.",
        "Awarded Snowflake Data Engineering Certification."
      ]
    },
    {
      institution: 'Springbuk',
      title: 'Software Engineer (Platform Engineering)',
      year: 'August 2019 - August 2021',
      skills: [
        "Airbrake.io", "AWS EC2", "AWS S3", "AWS VPC", "Git", "PostgreSQL", "Python", "React", "Rspec", "Ruby (on Rails)", "Snowflake"
      ],
      description: [
        "Led the technical effort to support single tenancy for the onboarding of Springbuk’s largest client within a quarter. Worked with members across several teams to ensure that the deliverables were met in a timely manner according to the contract and HIPAA requirements.",
        "Vastly improved manual syncing processes between the warehouse and application databases by building an automated algorithm that reduced the runtime by over 80%.",
        "Worked on redesigning the data aggregation infrastructure by introducing graph architecture and batch processing, improving efficiency from a weekly to a daily cadence.",
        "Improved the user interface and fixed bugs for the internal data management web application using Ruby on Rails and React."
      ]
    }
    ,
    {
      institution: "Purdue University",
      title: 'Bachelor of Science in Computer Engineering',
      year: 'August 2015 - May 2019',
      skills: [],
      description: []
    }
  ];

  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      paddingTop: '32px'
    }}>
      <Stepper activeStep={activeStep} orientation="vertical" nonLinear={true} sx={{ width: "80%" }}>
        {steps.map((step, index) => (
          <Step key={step.institution}>
            <StepLabel
              optional={
                <Typography variant="caption" fontFamily='monospace' color={colors.periwinkle}>{step.year}</Typography>
              }
            >
              <Button 
                sx={{
                  textTransform: 'none',
                  textAlign: 'left'
                }}
                onClick={() => activeStep === index ? setActiveStep(-1) : setActiveStep(index)}
              >
                <Typography variant='body1' fontFamily={'monospace'} color={colors.periwinkle} fontSize={'1.5rem'}>
                  {step.institution} | {step.title}
                </Typography>
              </Button>
            </StepLabel>
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