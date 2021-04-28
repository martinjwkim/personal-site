import React from 'react';
import { Box, Paragraph } from 'grommet';
import { Ascending } from 'grommet-icons'
import Socials from './Home/Socials.js'

const Footer = ({ scrollToTop }) => {

  const props = {
    main: {
      background: {
        image: "url(/desk.jpeg)",
        size: 'cover',
      },
      className: 'Footer-iconBox',
      justify: 'center',
      align: 'center',
      onClick: () => scrollToTop(),
      focusIndicator: false,
    }
  }

  return (
    <div className='Footer'>
      <div className='Footer-background'>
        <Box {...props.main}>
          <Ascending size='large' color='#003060' />
        </Box>
        <Box align='center' alignContent='center' className='Footer-content' gap='small'>
          <Paragraph size='medium' color='#003060' margin='none'>designed by Martin Kim.</Paragraph>
          <Socials direction='row' color='#003060'/>
        </Box>
      </div>
    </div>
  )
}

export default Footer;