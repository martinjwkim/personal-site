import React from 'react';
import { Box, Paragraph } from 'grommet';
import ModalHead from './ModalHead'
import ModalButtons from './ModalButtons'
import { v4 as uuidv4 } from 'uuid';


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
      {data.description.map(p=><Paragraph key={uuidv4()} {...props.description}>{p}</Paragraph>)}
      <Paragraph fill size='small'><i>Built with: {data.full_stack}</i></Paragraph>
      {size==='small' && <ModalButtons {...props.buttons} />}
    </Box>
  )
}

export default ModalInfo;