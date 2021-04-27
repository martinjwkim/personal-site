import React from 'react';
import { Box } from 'grommet';
import Portrait from './Portrait'
import Bio from './Bio'


const About = ({ size }) => {

  const props = {
    main: {
      direction: size === 'small' ? 'column' : 'row',
      align: 'center',
      justify: size === 'small' ? 'center' : 'evenly',
      fill: true,
      pad: 'medium',
      height: { min: 'large' },
      width: { max: '1200px' },
      alignSelf: 'center',
      gap: 'medium',
    },
  }

  return (
    <Box {...props.main}>
      <Portrait size={size} />
      <Bio size={size} />
    </Box >
  )
}

export default About;