import React, { useState } from 'react';
import { Box, Stack } from 'grommet';
import CardModal from './CardModal'

const Card = ({ title, image, modal, github, demo }) => {

  const [showMore, setShowMore] = useState(modal)

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
    modal: {
      github,
      demo,
    }
  }

  return (
    <Stack {...props.stack}>
      <Box {...props.main}>
        {showMore && <CardModal {...props.modal} animation='fadeIn'/>}
      </Box >
      <Box fill>
        {!showMore && <CardModal {...props.modal} animation='fadeOut'/>}
      </Box>
    </Stack>
  )
}

export default Card;