import React from 'react';
import { Box } from 'grommet';


const Portfolio = ({size}) => {

  const props = {
    main: {
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
    </Box >
  )
}

export default Portfolio;