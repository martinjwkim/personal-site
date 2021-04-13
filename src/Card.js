import React, { useState } from 'react';
import { Box, Image } from 'grommet';
import CardOverlay from './CardOverlay'
import Modal from './Modal'
import { useInView } from 'react-hook-inview'


const Card = ({data, size}) => {

  const [showModal, setShowModal] = useState(false);

  const [ref, inView] = useInView({
    threshold: 0,
    unobserveOnEnter: true,
  });

  const props = {
    main: {
      ref,
      animation: {
        type: inView ? 'fadeIn' : 'fadeOut',
        delay: data.animation_delay,
        duration: 2000,
        size: 'medium'
      },
      direction: 'row',
      width: '75vw',
      height: 'calc(75vw/2)',
      round: true,
      overflow: 'hidden',
    },
    image_container: {
      basis: '1/2'
    },
    image: {
      fill: true,
      fit: 'cover',
      src: data.cover,
    },
    card: {
      setShowModal,
      data
    }
  }

  return (
    <Box {...props.main}>
      {!data.flipped && <CardOverlay {...props.card} />}
      <Box {...props.image_container}>
        <Image {...props.image} />
      </Box>
      {data.flipped && <CardOverlay {...props.card} />}
      {showModal && <Modal {...props.card} />}
    </Box >
  )
}

export default Card;