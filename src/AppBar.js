import React from 'react';
import { Box } from 'grommet';

const AppBar = () => (
  <Box
    direction='row'
    align='center'
    justify='between'
    pad={{ left: 'large', right: 'medium', vertical: 'medium' }}
    style={{ zIndex: '1' }}
  />
)

export default AppBar;