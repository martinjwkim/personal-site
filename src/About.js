import React from 'react';
import { Box } from 'grommet';

const About = () => {

  const props = {
    main: {
      border: { color: 'black', size: 'medium' },
      direction: 'column',
      height: '100vh',
      align: 'center',
      justify: 'center',
    },
    
  }

  return (
    <Box {...props.main}>
      <p>about body</p>
    </Box>
  )
}

export default About;