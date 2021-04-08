import React from 'react';
import { Carousel, Heading, Image, Paragraph, Layer, Box } from 'grommet';
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
      margin: 'large',
    },
    main: {
      gap: 'small'
    },
    title: {
      margin: 'none',
    },
    description: {
      margin: 'none',

    },
    stack: {
      margin: 'none',

    },
    info: {
      align: 'center',
      margin: 'small',

    },
    image: {
      key: uuidv4(),
      fit: 'cover',
    },
  }

  return (
    <Layer {...props.layer}>
      <Box {...props.main}>
        <Carousel fill>
          {[data.img_1, data.img_2, data.img_3].map(img => <Image src={img} {...props.image} />)}
        </Carousel>
        <Box {...props.info}>
          <Heading {...props.title}>{data.title}</Heading>
          <Paragraph {...props.description}>{data.description}</Paragraph>
          <Paragraph {...props.stack}>{data.extended_stack}</Paragraph>
        </Box>
      </Box>
    </Layer >
  )
}

export default Modal;