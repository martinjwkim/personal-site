import React from 'react';
import { Box } from 'grommet';

const CardModal = ({animation}) => {

  const props = {
    main: {
      fill: true,
      background: {
        color: 'dark-1',
        opacity: 'strong',
      },
      animation: {
        type: animation,
        duration: 1000,
      }
    },
  }

  return (
    <Box {...props.main}>
    </Box >
  )
}

export default CardModal;