import React from 'react';
import { Box, Button, Heading, ThemeContext } from 'grommet';
import { v4 as uuidv4 } from 'uuid';
import Blurb from './Blurb'
import { Code, Download, Location, Notes } from 'grommet-icons'

const Bio = ({ size }) => {

  const props = {
    main: {
      width: size === 'medium' ? '50vw' : '100vw',
      directon: 'column',
    },
    heading: {
      level: 2,
      margin: { left: "medium" }
    },
    blurbs: {
      gap: 'medium',
    },
    button: {
      fill: false,
      primary: true,
      label: 'Download Resume',
      reverse: true,
      icon: <Download size='small' />,
      alignSelf: size === 'xsmall' ? 'center' : 'start',
      margin: { left: size === 'xsmall' ? 'none' : "medium" },
      size,
    },
    styledButton: {
      value: {
        text: {
          medium: {
            size: '14px'
          }
        }
      }
    }
  }

  const blurbs = [
    {
      icon: <Location />,
      paragraph: `I am a full-stack web developer proficient with JavaScript and Python originally from Los Angeles.
        I received my Bachelor of Science for Mechanical Engineering at the University of Southern California.`
    },
    {
      icon: <Code />,
      paragraph: `I altered course to pursue a career in software engineering by attending a full stack immersive bootcamp,
        Rithm School, which better aligned with my passion of building projects from problems that are intrinsically hard yet fun to tackle.
        The endless possibilites of the dynamic world behind programming amazes me with every layer I uncover and I haven't looked back since.`
    },
    {
      icon: <Notes />,
      paragraph: `With a little under two years of experience, I have most recently worked with a small team at a local law firm
        to build out a scalable back-end API service with an elaborate web user interface, but have also contributed to several
        open-source applications as well as projects of my own.`
    }
  ];

  return (
    <Box {...props.main}>
      <Heading {...props.heading}>A little about me...</Heading>
      <Box {...props.blurbs}>
        {blurbs.map(data => <Blurb key={uuidv4()} {...data} />)}
        <ThemeContext.Extend {...props.styledButton}>
          <Button {...props.button} />
        </ThemeContext.Extend>
      </Box>
    </Box>
  )
}

export default Bio;