import React from 'react';
import { Box } from 'grommet';

const CardBack = () => {

  const props = {
    main: {
      fill: true,
      align: 'center',
      justify: 'center',
      background: 'brand'
    },
  }

  return (
    <Box {...props.main}>
      back
    </Box>
  )
}

export default CardBack;