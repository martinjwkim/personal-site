import React from 'react';
import { Button, Box, Heading } from 'grommet';

const CardInfo = ({ setShowModal, data, size }) => {

  const props = {
    main: {
      basis: '1/2',
      justify: 'evenly',
      pad: {vertical: 'large'},
      background: {light: 'white', dark: '#383838'},
    },
    button: {
      label: 'LEARN MORE',
      size,
      primary: true,
      alignSelf: 'center',
      margin: 'small',
      onClick: () => setShowModal(true)
    },
    title: {
      level: 1,
      alignSelf: 'center',
      margin: 'small',
    },
    stack: {
      level: 5,
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