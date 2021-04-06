import React from 'react';
import { Box, Heading, Paragraph } from 'grommet';

const Bio = () => {

  const props = {
    main: {
      border: { color: 'red', size: 'medium' },
      width: '50vw',
    },
    heading: {
      level: 2,
    },
    paragraph: {
      fill: true
    }
  }

  return (
    <Box {...props.main}>
      <Heading {...props.heading}>A little about me...</Heading>
      <Paragraph {...props.paragraph}>
        I am a full-stack web developer proficient with JavaScript and Python originally from Los Angeles.
      </Paragraph>
      <Paragraph {...props.paragraph}>
        I received my Bachelor of Science for Mechanical Engineering at the University of Southern California,
        then slightly altered my trajectory to pursue a career in software engineering by attending a full stack immersive bootcamp,
        Rithm School, which better aligned with my passion of building projects from problems that are intrinsically hard yet fun to tackle.
        The endless possibilites of the dynamic world behind programming amazes me with every layer I uncover and I haven't looked back since.
      </Paragraph>
      <Paragraph {...props.paragraph}>
        With a little under two years of experience, I have most recently worked with a small team at a local law firm
        to build out a scalable back-end API service with an elaborate web user interface, but have also contributed to several
        open-source applications as well as projects of my own.
      </Paragraph>
    </Box>
  )
}

export default Bio;