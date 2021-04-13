import React, { useState } from 'react';
import { Box, Collapsible } from 'grommet';
import CardOverlay from './CardOverlay'
import Modal from './Modal'
import { useInView } from 'react-hook-inview'


const Card = (data) => {

  const [showMore, setShowMore] = useState(false)
  const [showModal, setShowModal] = useState(false);

  const [ref, inView] = useInView({
    threshold: 0,
    unobserveOnEnter: true,
  });

  const props = {
    main: {
      fill: true,
      align: 'center',
      justify: 'center',
      background: data.cover,
      onMouseOver: () => setShowMore(true),
      onMouseLeave: () => setShowMore(false),
      ref,
      animation: {
        type: inView ? 'fadeIn' : 'fadeOut',
        delay: data.animation_delay,
        duration: 2000,
        size: 'medium'
      },
    },
    collapsible: {
      direction: 'vertical',
      open: showMore,
    },
    card: {
      setShowModal,
      setShowMore,
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