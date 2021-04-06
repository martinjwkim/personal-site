import React from 'react';
import { Box, Image } from 'grommet';

const Portrait = ({size}) => {

  const props = {
    main: {
      width: size==='medium' ? size : '50vw',
      height: size==='medium' ? size : '50vw',
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