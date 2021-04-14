import React from 'react';
import { Box, Heading } from 'grommet';
import ModalButtons from './ModalButtons'

const ModalHead = ({data, setShowModal, size}) => {

  const props = {
    main: {
      direction: 'row',
      align: 'center',
      justify: 'between',
      fill: 'horizontal',
    },
    title: {
      margin: 'none',
      level: 2,
    },
    subtitle: {
      margin: 'none',
      level: 5,
    },
    textGroup: {
      gap: 'xsmall'
    },
    buttons : {
      data,
      setShowModal
    }
  }

  return (
    <Box {...props.main}>
      <Box {...props.textGroup}>
        <Heading {...props.title}>{data.title}</Heading>
        <Heading {...props.subtitle}>{data.subtitle}</Heading>
      </Box>
      {size !== 'small' && <ModalButtons {...props.buttons}/>}
    </Box>
      )
    }
    
export default ModalHead;