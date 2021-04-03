import React from 'react';
import { Box } from 'grommet';

const Portrait = () => {

  const props = {
    main: {
      border: { color: 'green', size: 'medium' },
    },
  }

  return (
    <Box {...props.main}>
    </Box>
  )
}

export default Portrait;