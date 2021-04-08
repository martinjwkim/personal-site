import React, { useState } from 'react';
import { Button, Box } from 'grommet';
import Modal from './Modal'

const CardOverlay = ({ data }) => {

  const [showModal, setShowModal] = useState(false);

  const props = {
    main: {
      gap: 'medium',
    },
    button: {
      label: 'LEARN MORE',
      primary: true,
      onClick: () => setShowModal(true)
    },
    modal: {
      setShowModal,
      data
    }
  }

  return (
    <Box {...props.main}>
      <Button {...props.button} />
      {showModal && <Modal {...props.modal} />}
    </Box >
  )
}

export default CardOverlay;