import React from 'react';
import { Box, Image } from 'grommet';

const Portrait = () => {

  const props = {
    main: {
      width: '300px',
      height: '300px',
      round: 'full',
      overflow: 'hidden'
    },
    image: {
      fit: "cover",
      src: "/portrait.png",
    }
  }

  return (
    <Box {...props.main}>
      <Image {...props.image} />
    </Box>
  )
}

export default Portrait;