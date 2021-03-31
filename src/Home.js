import React from 'react';
import { Box } from 'grommet';

const Home = () => {
  return (
    <Box border={{ color: 'brand', size: 'large' }} direction='row' flex overflow={{ horizontal: 'hidden' }}>
      <Box border={{ color: 'brand', size: 'large' }} flex align='center' justify='center'>
        app body
     </Box>
    </Box>
  )
}

export default Home;