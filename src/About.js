import React from 'react';
import { Box } from 'grommet';
import Portrait from './Portrait'
import Bio from './Bio'


const About = () => {

  const props = {
    main: {
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