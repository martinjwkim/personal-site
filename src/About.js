import React from 'react';
import { Box } from 'grommet';
import Portrait from './Portrait'
import Bio from './Bio'


const About = () => {

  const props = {
    main: {
      background: {"dark": "dark-1", "light": "light-4"},
      direction: 'row',
      height: '100vh',
      align: 'center',
      justify: 'center',
    },
    
  }

  return (
    <Box {...props.main}>
      <Portrait />
      <Bio />
    </Box>
  )
}

export default About;