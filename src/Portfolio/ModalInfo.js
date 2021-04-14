import React from 'react';
import { Box, Paragraph } from 'grommet';
import ModalHead from './ModalHead'
import ModalButtons from './ModalButtons'

const ModalInfo = ({data, setShowModal, size}) => {

  const props = {
    main: {
      align: 'start',
      pad: 'medium',
    },
    description: {
      fill: true,
      margin: 'none',
      size: 'small'
    },
    line: {
      background: {
        color: 'light-6'
      },
      fill: 'horizontal',
      height: '1px',
      margin: {
        top: 'xsmall',
        bottom: 'small',
      }
    },
    head : {
      data,
      setShowModal,
      size
    },
    buttons : {
      data,
      setShowModal,
      size
    }
  }

  return (
    <Box {...props.main} >
      <ModalHead {...props.head}/> 
      <Box {...props.line}></Box>
      <Paragraph {...props.description}>{data.description}</Paragraph>
      {size==='small' && <ModalButtons {...props.buttons} />}
    </Box>
  )
}

export default ModalInfo;