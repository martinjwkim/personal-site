import React from 'react';
import { Box } from 'grommet';
import Portrait from './Portrait'
import Bio from './Bio'


const About = ({size}) => {

  const props = {
    main: {
      background: { "dark": "dark-1", "light": "light-4" },
      direction: size==='medium' ? 'row' : 'column',
      height: '100vh',
      align: 'center',
      justify: 'evenly',
      pad: '10vw',
    },

  }

  return (
    <Box {...props.main}>
      <Portrait />
      <Bio />
    </Box >
  )
}

export default About;