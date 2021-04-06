import React, { useState } from 'react';
import { Box, Stack } from 'grommet';
import CardModal from './CardModal'

const Card = ({ title, image }) => {

  const [showMore, setShowMore] = useState(false)

  const props = {
    main: {
      fill: true,
      align: 'center',
      justify: 'center',
      background: image,
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
        {showMore && <CardModal animation='fadeIn'/>}
      </Box >
      <Box fill>
        {!showMore && <CardModal animation='fadeOut'/>}
      </Box>
    </Stack>
  )
}

export default Card;