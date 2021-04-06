import React from 'react';
import { Box, Heading, Paragraph } from 'grommet';

const Bio = () => {

  const props = {
    main: {
      border: { color: 'red', size: 'medium' },
      width: '30vw'
    },
    heading: {
      level: 2,
    },
    paragraph: {

    }
  }

  return (
    <Box {...props.main}>
      <Heading {...props.heading}>A little about me...</Heading>
      <Paragraph {...props.paragraph}>sdfasdfksf sakf askdf af...</Paragraph>
    </Box>
  )
}

export default Bio;