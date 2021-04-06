import React, { useState } from 'react';
import { Anchor, Button, Box } from 'grommet';
import Modal from './Modal'

const CardOverlay = ( {animation, github_url, demo_url, modal_props} ) => {

  const [showModal, setShowModal] = useState(false);

  const props = {
    main: {
      fill: true,
      background: {
        color: 'dark-1',
        opacity: 'strong',
      },
      animation: {
        type: animation,
        duration: 500,
      }
    },
    more: {
      fill: true,
      align: 'center',
      justify: 'end',
    },
    links: {
      fill: true,
      direction: 'row',
      gap: 'medium',
      justify: 'center',
      align: 'center',
    },
    button: {
      label: 'LEARN MORE',
      primary: true,
      onClick: ()=>setShowModal(true)
    },
    modal: {
      setShowModal,
      modal_props
    }
  }

  return (
    <Box {...props.main}>
      <Box {...props.more}>
        <Button {...props.button} />
      </Box>
      <Box {...props.links}>
        {demo_url && <Anchor label='DEMO' href={demo_url}/> }
        {github_url && <Anchor label='GITHUB' href={github_url}/> }
      </Box>
      {showModal && <Modal {...props.modal}/>}
    </Box >
  )
}

export default CardOverlay;