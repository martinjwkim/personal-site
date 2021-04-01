import React from 'react';
import { Box, Heading, Layer } from 'grommet';
import Navs from './Navs'

const Header = ({ darkMode, setDarkMode, size }) => {

  const props = {
    main: {
      border: { color: 'brand', size: 'medium' },
    },
    heading: {
      level: '3',
    },
    navs: {
      darkMode,
      setDarkMode,
      size
    },
    layer: {
      modal: false,
      plain: true,
    }
  }

  return (
    <Box {...props.main}>
      {size !== 'xsmall' && (
        <Layer {...props.layer} position='top-left'>
          <Heading {...props.heading}>Martin Kim</Heading>
        </Layer>
      )}
      <Layer {...props.layer} position='top-right'>
        <Navs {...props.navs} />
      </Layer>
    </Box>
  )
}

export default Header;