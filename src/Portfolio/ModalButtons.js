import React from 'react';
import { Box, Button } from 'grommet';
import { v4 as uuidv4 } from 'uuid';
import { Close } from 'grommet-icons'

const ModalButtons = ({ data, setShowModal, size }) => {

  const props = {
    main: {
      direction: 'row',
      gap: 'small',
      alignSelf: size==='small' ? 'end' : 'center',
      pad: size==='small' ? {top: 'medium'} : 'none'
    },
    button: {
      alignSelf: 'center',
      size: 'small',
      margin: 'none',
    },
  }

  const showButtons = () => {
    let buttons = [
      {
        label: 'GITHUB',
        href: data.github_url,
      },
      {
        icon: <Close />,
        onClick: () => setShowModal(false)
      }
    ];

    if (data.demo_url){
      buttons.unshift(
        {
          label: 'VIEW SITE',
          href: data.demo_url,
        },
      )
    }

    return buttons.map(button=><Button key={uuidv4()} {...button} {...props.button}/>)
  }

  return (
    <Box {...props.main}>
      {showButtons()}
    </Box>

  )
}

export default ModalButtons;