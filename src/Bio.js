import React from 'react';
import { Box, Heading} from 'grommet';

const Bio = () => {

  const props = {
    main: {
      border: { color: 'red', size: 'medium' },
    },
    
  }

  return (
    <Box {...props.main}>
      <Heading>A little about me...</Heading>
    </Box>
  )
}

export default Bio;