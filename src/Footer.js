import React from 'react';
import { Box } from 'grommet';

const Footer = () => {

  const props = {
    main: {
      direction: 'row',
      fill: 'horizontal',
      justify: 'end',
      pad: {right: 'large'},
      flex: false,
      animation: {
        type: 'fadeIn',
        duration: 2000,
      },
      background: {color: 'brand'}
    },
  }

  return (
    <Box {...props.main}>
    </Box>
  )
}

export default Footer;