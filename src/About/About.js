import React from 'react';
import { Box } from 'grommet';
import Portrait from './Portrait'
import Bio from './Bio'


const About = ({size}) => {

  const props = {
    main: {
      direction: size==='medium' ? 'row' : 'column',
      align: 'center',
      justify: 'evenly',
      fill: true,
      border: true,
      pad: size==='medium' ? 'xlarge' : 'medium',
      height: {min: 'large'},
      width: {max: '1200px'},
      alignSelf: 'center',
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