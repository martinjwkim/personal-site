import React from 'react';
import { Box } from 'grommet';


const Card = ({title}) => {

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
      {title}
    </Box >
  )
}

export default Card;