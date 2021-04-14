import React, { useState } from 'react';
import { Box, Image } from 'grommet';
import CardInfo from './CardInfo'
import Modal from './Modal'
import { useInView } from 'react-hook-inview'

const Card = ({ data, size }) => {


  const [showModal, setShowModal] = useState(false);

  const [ref, inView] = useInView({
    threshold: 0.5,
    unobserveOnEnter: true,
  });

  const props = {
    main: {
      ref,
      animation: {
        type: inView ? 'fadeIn' : 'fadeOut',
        delay: 0,
        duration: 2000,
        size: 'medium'
      },
      direction: size==='small'? 'column' : 'row',
      round: true,
      overflow: 'hidden',
    },
    image_container: {
      width: {max: 'medium', min: 'medium'},
      height: {max: 'medium', min: 'medium'},
    },
    image: {
      fill: true,
      fit: 'cover',
      src: data.cover,
    },
    card: {
      setShowModal,
      data,
      size,
    }
  }

  return (
    <Box {...props.main}>
      {(!data.flipped&& size!=='small') && <CardInfo {...props.card} />}
      <Box {...props.image_container}>
        <Image {...props.image} />
      </Box>
      {(data.flipped||size==='small') && <CardInfo {...props.card} />}
      {showModal && <Modal {...props.card} />}
    </Box >
  )
}

export default Card;