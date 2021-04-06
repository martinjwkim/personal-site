import React from 'react';
import { Box } from 'grommet';

const CardFront = () => {

  const props = {
    main: {
      fill: true,
      align: 'center',
      justify: 'center',
      background: 'green'
    },
  }

  return (
    <Box {...props.main}>
      front
    </Box>
  )
}

export default CardFront;