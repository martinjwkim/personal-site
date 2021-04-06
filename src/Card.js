import React, { useState } from 'react';
import { Box, Stack } from 'grommet';
import CardOverlay from './CardOverlay'

const Card = ( data ) => {

  const [showMore, setShowMore] = useState(false)

  const props = {
    main: {
      fill: true,
      align: 'center',
      justify: 'center',
      background: data.image,
      onMouseOver: () => setShowMore(true),
      onMouseLeave: () => setShowMore(false)
    },
    stack: {
      fill: true,
      interactiveChild: 'first',
    },
  }

  return (
    <Stack {...props.stack}>
      <Box {...props.main}>
        {showMore && <CardOverlay {...data} animation='fadeIn'/>}
      </Box >
      <Box fill>
        {!showMore && <CardOverlay {...data} animation='fadeOut'/>}
      </Box>
    </Stack>
  )
}

export default Card;