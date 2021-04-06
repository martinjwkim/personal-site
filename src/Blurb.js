import React from 'react';
import { Box, Paragraph } from 'grommet';

const Blurb = ({ icon, paragraph }) => {

  const props = {
    main: {
      direction: 'row',
      align: 'center',
      gap: 'small'
    },
    paragraph: {
      fill: true,
      size: 'small',
      margin: 'none',
      alignSelf: 'start'
    }
  }

  return (
    <Box {...props.main}>
      {icon}
      <Paragraph {...props.paragraph}>{paragraph}</Paragraph>
    </Box>
  )
}

export default Blurb;