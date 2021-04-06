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
      pad: size==='medium' ? '10vw' : '1vw',
      gap: size==='medium' ? 'medium' : 'none'
    },

  }

  return (
    <Box {...props.main}>
      <Portrait size={size}/>
      <Bio size={size}/>
    </Box >
  )
}

export default About;