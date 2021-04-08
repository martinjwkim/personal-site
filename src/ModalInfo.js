import React from 'react';
import { Box, Heading, Paragraph } from 'grommet';

const ModalInfo = (data) => {

  const props = {
    main: {
      fill: 'horizontal',
      align: 'start',
      pad: 'medium',
    },
    title: {
      margin: 'none',
      level: 2,
    },
    subtitle: {
      margin: 'none',
      level: 5,
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
        bottom: 'small'
      }
    }
  }

  return (
    <Box {...props.main}>
      <Heading {...props.title}>{data.title}</Heading>
      <Heading {...props.subtitle}>{data.subtitle}</Heading>
      <Box {...props.line}></Box>
      <Paragraph {...props.description}>{data.description}</Paragraph>
    </Box>
  )
}

export default ModalInfo;