import React, { useState } from 'react';
import { Box, Collapsible } from 'grommet';
import CardOverlay from './CardOverlay'
import Modal from './Modal'


const Card = (data) => {

  const [showMore, setShowMore] = useState(false)
  const [showModal, setShowModal] = useState(false);


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
    },
    card: {
      setShowModal,
      data
    }
  }

  return (
    <Box {...props.main}>
      <Collapsible {...props.collapsible}>
        <CardOverlay {...props.card} />
      </Collapsible>
      {showModal && <Modal {...props.card} />}
    </Box >
  )
}

export default Card;