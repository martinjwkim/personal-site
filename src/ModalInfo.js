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
      margin: 'none',
    },
  }

  return (
    <Box {...props.main}>
      <Heading {...props.title}>{data.title}</Heading>
      <Heading {...props.subtitle}>{data.subtitle}</Heading>
      <Paragraph {...props.info}>{data.description}</Paragraph>
    </Box>
  )
}

export default ModalInfo;