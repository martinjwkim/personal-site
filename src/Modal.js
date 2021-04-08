import React from 'react';
import { Carousel, Heading, Image, Paragraph, Layer, Box } from 'grommet';
import { v4 as uuidv4 } from 'uuid';

const Modal = ({ setShowModal, data }) => {

  const props = {
    layer: {
      onClickOutside: () => setShowModal(),
      background: {
        opacity: 'strong',
        color: 'black'
      },
      full: true,
      margin: 'large',
    },
    main: {
      align: 'center'
    },
    carousel: {
    },
    image: {
      key: uuidv4(),
      fit: 'cover',
    },
  }

  return (
    <Layer {...props.layer}>
      <Box {...props.main}>
        <Heading>{data.title}</Heading>
        <Paragraph>{data.description}</Paragraph>
        <Box {...props.carousel}>
          <Carousel fill>
            {[data.img_1, data.img_2, data.img_3].map(img => <Image src={img} {...props.image} />)}
          </Carousel>
        </Box>
        <Paragraph>{data.stack}</Paragraph>
      </Box>
    </Layer >
  )
}

export default Modal;