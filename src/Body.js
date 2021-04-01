import React from 'react';
import { Box } from 'grommet';
import About from './About'
import Home from './Home'

function Body() {

  const props = {
    main: {
      direction: 'column',
      border: { color: 'red', size: 'medium' },
    }
  }

  return (
    <Box {...props.main}>
      <Home />
      <About />
    </Box>
  );
}

export default Body;