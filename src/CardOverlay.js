import React, { useState } from 'react';
import { Button, Box, Heading } from 'grommet';
import Modal from './Modal'

const CardOverlay = (data) => {

  const [showModal, setShowModal] = useState(false);

  const props = {
    main: {
      gap: 'small',
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
    modal: {
      setShowModal,
      data
    }
  }

  return (
    <Box {...props.main}>
      <Heading {...props.title}>{data.title}</Heading>
      <Heading {...props.stack}>{data.main_stack}</Heading>
      <Button {...props.button} />
      {showModal && <Modal {...props.modal} />}
    </Box >
  )
}

export default CardOverlay;