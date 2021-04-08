import React from 'react';
import { Carousel, Image, Layer, Box } from 'grommet';
import ModalInfo from './ModalInfo'
import { v4 as uuidv4 } from 'uuid';

const Modal = ({ setShowModal, data }) => {

  const props = {
    layer: {
      onClickOutside: () => setShowModal(false),
      onEsc: () => setShowModal(false),
      background: {
        color: {
          dark: 'black',
          light: 'white'
        }
      },
      full: false,
      margin: 'large'
    },
    line: {
      background: {
        color: {
          dark: 'white',
          light: 'black'
        }
      },
      fill: 'horizontal',
      height: '5px',
    },
    image: {
      key: uuidv4(),
      fit: 'cover',
    },
    carousel: {
      height: '50vh',
      width: '50vw',
      overflow: 'hidden',
    }
  }

  return (
    <Layer {...props.layer}>
      <Box {...props.main}>
        <Box {...props.carousel}>
          <Carousel fill>
            {[data.img_1, data.img_2, data.img_3].map(img => <Image src={img} {...props.image} />)}
          </Carousel>
        </Box>
        <Box {...props.line}></Box>
        <ModalInfo {...data} />
      </Box>
    </Layer >
  )
}

export default Modal;