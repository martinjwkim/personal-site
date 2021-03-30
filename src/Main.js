import React from 'react';
import { Box } from 'grommet';

const Main = (props) => {
  return (
    <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
      <Box flex align='center' justify='center'>
        app body
     </Box>
    </Box>
  )
}

export default Main;