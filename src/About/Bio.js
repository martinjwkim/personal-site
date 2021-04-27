import React from 'react';
import { Box, Button, Heading } from 'grommet';
import Blurb from './Blurb'
import { Code, Download, Location, Notes } from 'grommet-icons'
import { useInView } from 'react-hook-inview'

const Bio = ({ size }) => {

  const [href, hInView] = useInView({
    threshold: 0,
    unobserveOnEnter: true,
  });

  const [bref, bInView] = useInView({
    threshold: 0,
    unobserveOnEnter: true,
  });

  const props = {
    main: {
      width: 'large',
    },
    hcontainer: {
      animation: hInView ? [
        {
          type: 'slideRight',
          delay: 300,
          duration: 2000,
          size: 'medium'
        },
        {
          type: 'fadeIn',
          delay: 100,
          duration: 2000,
        },
      ] : 'fadeOut',
      ref: href
    },
    bcontainer: {
      animation: bInView ? [
        {
          type: 'slideRight',
          delay: 300,
          duration: 2000,
          size: 'medium'
        },
        {
          type: 'fadeIn',
          delay: 0,
          duration: 1000,
        },
      ] : 'fadeOut',
      ref: bref,
    },
    heading: {
      level: 2,
      margin: { left: "medium" },
    },
    blurbs: {
      gap: 'medium',
    },
    button: {
      fill: false,
      label: 'Download Resume',
      reverse: true,
      icon: <Download size='small'/>,
      alignSelf: size === 'xsmall' ? 'center' : 'start',
      margin: { left: size === 'xsmall' ? 'none' : "medium" },
      size: size === 'xsmall' ? 'small' : size,
      id: 'StyledButton'
    },
  }

  const blurbs = [
    {
      name: 'one',
      icon: <Location />,
      paragraph: `I am a full-stack web developer proficient with JavaScript and Python originally from Los Angeles.
        In 2019, I received my Bachelor of Science for Mechanical Engineering at the University of Southern California.`
    },
    {
      name: 'two',
      icon: <Code />,
      paragraph: `Shortly after, I altered course to pursue a career in software engineering by attending a full stack immersive bootcamp,
        Rithm School, which better aligned with my passion of building projects from problems that are intrinsically hard yet fun to tackle.
        The endless possibilites of the dynamic world behind programming amazes me with every layer I uncover and I haven't looked back since.`
    },
    {
      name: 'three',
      icon: <Notes />,
      paragraph: `With a little under two years of experience, I have most recently worked with a small team at a local law firm
        to build out a scalable back-end API service with an elaborate web user interface, but have also contributed to several
        open-source applications as well as projects of my own.`
    }
  ];

  return (
    <Box {...props.main}>
      <Box {...props.hcontainer}>
        <Heading {...props.heading}>ABOUT ME...</Heading>
      </Box>
      <Box {...props.blurbs}>
        {blurbs.map(data => <Blurb key={data.name} {...data} />)}
        <Box {...props.bcontainer}>
          <Button {...props.button} />
        </Box>
      </Box>
    </Box>
  )
}

export default Bio;