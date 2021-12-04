import React from 'react';
import { Button, Box, Heading } from 'grommet';

const CardInfo = ({ setShowModal, data, size }) => {

  const props = {
    main: {
      width: {max: 'medium', min: 'medium'},
      height: {max: 'medium', min: 'medium'},
      justify: 'evenly',
      pad: {vertical: 'large'},
      color: 'white',
      background: {color: 'white', image: 'linear-gradient(145deg, #ffffff 0%, #d7e1ec 200%)'},
    },
    button: {
      label: 'LEARN MORE',
      size,
      alignSelf: 'center',
      onClick: () => setShowModal(true),
      id: 'StyledButton'
    },
    title: {
      level: 2,
      alignSelf: 'center',
      margin: 'small',
    },
    stack: {
      level: 6,
      alignSelf: 'center',
      margin: 'small',
    },
  }

  return (
    <Box {...props.main}>
      <Box>
        <Heading {...props.title}>{data.title}</Heading>
        <Heading {...props.stack}>{data.stack}</Heading>
      </Box>
      <Box>
        <Button {...props.button} />
      </Box>
    </Box >
  )
}

export default CardInfo;