import React, { useState } from 'react';
import { Box, Image } from 'grommet';
import CardInfo from './CardInfo'
import Modal from './Modal'
import { useInView } from 'react-hook-inview'
import useWindowDimensions from './useWindowDimensions'



const Card = ({data, size}) => {

  
  const [showModal, setShowModal] = useState(false);
  const { w, h } = useWindowDimensions();
  
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
      direction: 'row',
      width: w > 900 ? '900px' : 'full',
      height: w > 900 ? '450px' :  'full',
      round: true,
      overflow: 'hidden',
    },
    image_container: {
      basis: '1/2',
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
      {!data.flipped && <CardInfo {...props.card} />}
      <Box {...props.image_container}>
        <Image {...props.image} />
      </Box>
      {data.flipped && <CardInfo {...props.card} />}
      {showModal && <Modal {...props.card} />}
    </Box >
  )
}

export default Card;