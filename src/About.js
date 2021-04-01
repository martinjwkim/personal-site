import React from 'react';
import { Box } from 'grommet';

const About = () => {

  const props = {
    main: {
      border: { color: 'brand', size: 'medium' },
      direction: 'row',
      flex: true,
      overflow: { horizontal: 'hidden' },
      height: "100vh"
    },
  }

  return (
    <Box {...props.main}>
      <Box border={{ color: 'red', size: 'medium' }} flex align='center' justify='center'>
        about body
     </Box>
    </Box>
  )
}

export default About;