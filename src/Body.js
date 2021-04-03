import React from 'react';
import { Box } from 'grommet';
import About from './About'
import Home from './Home'

function Body({size}) {

  const props = {
    main: {
      direction: 'column',
      border: { color: 'red', size: 'medium' },
      animation: "fadeIn",
    },
    home: {
      size,
    },
    about: {
      size,
    }
  }

  return (
    <Box {...props.main}>
      <Home {...props.home}/>
      <About {...props.about} />
    </Box>
  );
}

export default Body;