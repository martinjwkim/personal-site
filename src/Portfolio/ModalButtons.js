import React from 'react';
import { Box, Button } from 'grommet';
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
      id: 'StyledButton'
    },
    close: {
      icon: <Close />,
      onClick: () => setShowModal(false)
    }
  }

  const showButtons = () => {
    let buttons = [
      {
        label: 'GITHUB',
        href: data.github_url,
      },
    ];

    if (data.demo_url){
      buttons.unshift(
        {
          label: 'VIEW SITE',
          href: data.demo_url,
        },
      )
    }

    return buttons.map(button=><Button key={button.label} {...button} {...props.button}/>)
  }

  return (
    <Box {...props.main}>
      {showButtons()}
      <Button {...props.close}/>
    </Box>

  )
}

export default ModalButtons;