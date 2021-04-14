import React from 'react';
import { Box, Paragraph } from 'grommet';
import ModalHead from './ModalHead'

const ModalInfo = (data) => {

  const props = {
    main: {
      fill: 'horizontal',
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
    }
  }

  return (
    <Box {...props.main}>
      <ModalHead {...data}/>
      <Box {...props.line}></Box>
      <Paragraph {...props.description}>{data.description}</Paragraph>
    </Box>
  )
}

export default ModalInfo;