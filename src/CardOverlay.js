import React from 'react';
import { Button, Box, Heading } from 'grommet';

const CardOverlay = ({setShowModal, data}) => {

  const props = {
    main: {
      gap: 'small',
      basis: '1/2',
      justify: 'center',
      background: 'white',
    },
    button: {
      label: 'LEARN MORE',
      size: 'small',
      primary: true,
      alignSelf: 'center',
      onClick: () => setShowModal(true)
    },
    title: {
      level: 2,
      alignSelf: 'center',
      margin: 'none',
    },
    stack: {
      level: 5,
      alignSelf: 'center',
      margin: 'none',
    },
  }

  return (
    <Box {...props.main}>
      <Heading {...props.title}>{data.title}</Heading>
      <Heading {...props.stack}>{data.stack}</Heading>
      <Button {...props.button} />
    </Box >
  )
}

export default CardOverlay;