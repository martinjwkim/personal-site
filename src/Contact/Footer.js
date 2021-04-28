import React from 'react';
import { Box, Paragraph, Stack } from 'grommet';
import { Ascending } from 'grommet-icons'


const Footer = ({ scrollToTop }) => {

  const props = {
    main: {
      height: 'small'
    },
  }

  return (
    <Stack anchor='top' interactiveChild='last'>
      <Box {...props.main}>
        <Box basis='1/3'></Box>
        <Box basis='2/3' background={{ color: '#145DA0' }} justify='end' align='center'>
          <Paragraph size='small'>created by Martin Kim</Paragraph>
        </Box>
      </Box>
      <Box {...props.main}>
        <Box basis='2/3' justify='center'>
          <Box background={{ color: 'red' }}>
            <Ascending size='large' color='white' onClick={() => scrollToTop()} />
          </Box>
        </Box>
      </Box>
    </Stack>
  )
}

export default Footer;