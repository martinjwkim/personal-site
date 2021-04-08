import React from 'react';
import { Box, Heading, Paragraph } from 'grommet';

const ModalInfo = ( data ) => {

  const props = {
    main: {
      align: 'center',
      margin: 'small',

    },
    heading: {
      margin: 'none',
      level: 2,
    },
    info: {
      margin: 'none',
    },
  }

  return (
    <Box {...props.main}>
      <Heading {...props.heading}>{data.title}</Heading>
      <Paragraph {...props.info}>{data.description}</Paragraph>
      <Paragraph {...props.info}>{data.extended_stack}</Paragraph>
    </Box>
  )
}

export default ModalInfo;