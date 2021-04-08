import React from 'react';
import { Box, Paragraph, Stack } from 'grommet';
import { Ascending } from 'grommet-icons'


const Footer = () => {

  const props = {
    main: {
      height: '120px',
    },
  }

  return (
    <Stack anchor='top' interactiveChild='last'>
      <Box {...props.main}>
        <Box basis='1/4'></Box>
        <Box basis='3/4' background={{color: 'brand'}} justify='end' align='center'>
          <Paragraph size='small'>created by Martin Kim</Paragraph>
        </Box>
      </Box>
      <Box border background={{color: 'red'}} align='center'>
        <Ascending size='large' color='white' onClick={()=>console.log('clicked')}/>
      </Box>
    </Stack>
  )
}

export default Footer;