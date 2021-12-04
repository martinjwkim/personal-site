import React from 'react';
import { Carousel, Image, Layer, Box } from 'grommet';
import ModalInfo from './ModalInfo'
import { v4 as uuidv4 } from 'uuid';

const Modal = ({ setShowModal, data, size }) => {

  const props = {
    layer: {
      onClickOutside: () => setShowModal(false),
      onEsc: () => setShowModal(false),
      background: {
        color: {
          dark: 'dark-1',
          light: 'white'
        }
      },
      full: false,
      responsive: false,
    },
    main: {
      elevation: 'small',
      width: size === 'small' ? 'medium' : 'large',
    },
    line: {
      background: {
        color: {
          dark: 'light-1',
          light: 'black'
        }
      },
      fill: 'horizontal',
      height: '2px',
    },
    image: {
      key: uuidv4(),
      fit: 'cover',
      fill: true,
    },
    carousel: {
      overflow: 'visible',
      animation: {
        type: 'fadeIn',
        duration: 1000,
        delay: 300,
      }
    },
    info: {
      data,
      setShowModal,
      size
    }
  }

  return (
    <Layer {...props.layer}>
      <Box {...props.main} >
        <Box {...props.carousel} >
          <Carousel fill>
            {[...data.imgs].map(img => <Image src={img} {...props.image} />)}
          </Carousel>
        </Box>
        <Box {...props.line}></Box>
        <ModalInfo {...props.info} />
      </Box>
    </Layer >
  )
}

export default Modal;