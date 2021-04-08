import React, { useState } from 'react';
import { Box, Collapsible } from 'grommet';
import CardOverlay from './CardOverlay'

const Card = ( data ) => {

  const [showMore, setShowMore] = useState(false)

  const props = {
    main: {
      fill: true,
      align: 'center',
      justify: 'center',
      background: data.cover,
      onMouseOver: () => setShowMore(true),
      onMouseLeave: () => setShowMore(false)
    },
    collapsible: {
      direction: 'vertical',
      open: showMore,
    }
  }

  return (
    <Box {...props.main}>
      <Collapsible {...props.collapsible}>
        <CardOverlay {...data} />
      </Collapsible>
    </Box >
  )
}

export default Card;