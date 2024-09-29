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

export const Timeline = () => {
  const [activeStep, setActiveStep] = useState(-1);

  const steps = [
    {
      company: 'INTech4Progress',
      role: 'Data Scientist, Full Stack Engineer',
      year: 'June 2024 - Present',
      description: [
        "Building a pipeline to train and run Survival Analysis models for predicting wait times at voting centers.",
        "Deployed the pipeline using Serverless and Docker containerization to run on AWS Lambda.",
        "Wrote end to end tests using Python’s unittest and moto to mock AWS services in a testing environment and ensure successful CI/CD changes.",
        "Implemented user validation and built out data visualization features on the front end using React components and GraphQL."
      ]
    }, 
    {
      company: 'Decision Desk HQ',
      role: 'Backend Engineer | Machine Learning and App Development',
      year: 'May 2023 - December 2023',
      description: [
        "Prototyped an internal custom machine learning model using natural language processing and clustering algorithms that automatically generates mappings to election candidates and significantly reduces manual effort by a factor of hours.",
        "Used GPT 3.5 to generate descriptive articles of county level races leveraging internal election data.",
        "Introduced backend end-to-end testing to the deployment pipeline through automated tests and rigorous unit testing of crucial models and services for our Ruby on Rails web app, improving test coverage of the codebase from nearly 0% to more than 70%.",
        "Improved the database architecture by redesigning and eliminating redundant tables to optimize the execution of database queries.",
        "Used DataDog to monitor the application’s reliability and investigate performance issues."
      ],
    },
    {
      company: 'Master\'s in Data Science at Indiana University',
      role: 'Natural Language Processing, Computer Vision, Network Science',
      year: 'August 2022 - May 2024',
      description: [
        "Used various large language transformer models, alongside clustering and graph based algorithms for Retrieval Augmented Generation (RAG) to generate holistic summaries of album reviews.",
        "Trained Faster R-CNN and YoloV5 models using Pytorch to detect comic book panels and speech bubbles in order to further academic research efforts in digitizing comic books."
      ],
    },
    {
      company: 'Springbuk',
      role: 'Senior Software Engineer | Platform Engineering',
      year: 'August 2021 - June 2022',
      description: [
        "Helped cut nearly 50% in costs in infrastructure and processing time by migrating databases from PostgreSQL to Snowflake and eliminating redundant services.",
        "Designed and built custom ETL pipelines (using Python, Ruby, SQL) to ingest new data sources in order to support the onboarding of new clients.",
        "Regularly collaborated with the Data Science team to resolve discrepancies in data and improve forecasting models.",
        "Mentored other engineers through code reviews and pairing sessions.",
        "Awarded Snowflake Data Engineering Certification."
      ],
    },
    {
      company: 'Springbuk',
      role: 'Software Engineer | Platform Engineering',
      year: 'August 2019 - August 2021',
      description: [
        "Led the technical effort to support single tenancy for the onboarding of Springbuk’s largest client within a quarter. Worked with members across several teams to ensure that the deliverables were met in a timely manner according to the contract and HIPAA requirements.",
        "Vastly improved manual syncing processes between the warehouse and application databases by building an automated algorithm that reduced the runtime by over 80%.",
        "Worked on redesigning the data aggregation infrastructure by introducing graph architecture and batch processing, improving efficiency from a weekly to a daily cadence.",
        "Improved the user interface and fixed bugs for the internal data management web application using Ruby on Rails and React."
      ],
    }
    ,
    {
      company: 'Bachelor\'s in Computer Engineering at Purdue University',
      role: 'Minor in Economcs',
      year: 'August 2015 - May 2019',
      description: [],
    }
  ]

  return (
    <Box sx={{ maxWidth: '90%'}}>
      <Stepper activeStep={activeStep} orientation="vertical" nonLinear>
        {steps.map((step, index) => (
          <Step key={`${step.company}-${step.role}`}>
            <Button onClick={() => activeStep === index ? setActiveStep(-1) : setActiveStep(index)}> 
              <StepLabel
                optional={
                  <Typography color={colors.periwinkle} variant="caption"> {step.role} | {step.year} </Typography>
                }
              >
                <Typography color={colors.periwinkle} variant="h6">
                  {step.company}
                </Typography>
              </StepLabel>
            </Button>
            <StepContent>
              <Typography>
                <ul>
                  {step.description.map((desc, index) => (
                    <li key={index}> {desc} </li>
                  ))}
                </ul>
              </Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  )
};