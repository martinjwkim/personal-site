import React from 'react';
import { Box, Paragraph } from 'grommet';

const Blurb = ({ icon, paragraph }) => {

  const props = {
    main: {
      border: { color: 'green', size: 'small' },
      directon: 'row',
      align: 'center',
      justify: 'evenly',
    },
    paragraph: {
      fill: true
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