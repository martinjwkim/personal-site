import React from 'react';
import { Box } from 'grommet';

const Main = () => {
  return (
    <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
      <Box flex align='center' justify='center'>
        app body
     </Box>
    </Box>
  )
}

export default Main;