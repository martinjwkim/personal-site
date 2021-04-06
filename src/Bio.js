import React from 'react';
import { Box, Heading } from 'grommet';
import { v4 as uuidv4 } from 'uuid';
import Blurb from './Blurb'
import { Github } from 'grommet-icons'

const Bio = () => {

  const props = {
    main: {
      border: { color: 'red', size: 'medium' },
      width: '50vw',
      directon: 'column',
    },
    heading: {
      level: 2,
    },
  }

  const showBlurbs = () => {
    const blurbs = [
      {
        icon: <Github />,
        paragraph: "I am a full-stack web developer proficient with JavaScript and Python originally from Los Angeles."
      },
      {
        icon: <Github />,
        paragraph: `I received my Bachelor of Science for Mechanical Engineering at the University of Southern California,
        then slightly altered my trajectory to pursue a career in software engineering by attending a full stack immersive bootcamp,
        Rithm School, which better aligned with my passion of building projects from problems that are intrinsically hard yet fun to tackle.
        The endless possibilites of the dynamic world behind programming amazes me with every layer I uncover and I haven't looked back since.`
      },
      {
        icon: <Github />,
        paragraph: `With a little under two years of experience, I have most recently worked with a small team at a local law firm
        to build out a scalable back-end API service with an elaborate web user interface, but have also contributed to several
        open-source applications as well as projects of my own.`
      }
    ];

    return blurbs.map(blurb=><Blurb key={uuidv4()} icon={blurb.icon} paragraph={blurb.paragraph}/>)
  }

  return (
    <Box {...props.main}>
      <Heading {...props.heading}>A little about me...</Heading>
      {showBlurbs()}
    </Box>
  )
}

export default Bio;