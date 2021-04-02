import React from 'react';
import { Box, Layer, Heading } from 'grommet';
import Navs from './Navs'

const Header = ({ darkMode, setDarkMode, size }) => {

  const props = {
    main: {
      direction: 'row',
      align: 'center',
      justify: size === 'xsmall' ? 'center' : 'between',
      pad: { left: 'xlarge', right: 'large', vertical: 'large' },
      style: { zIndex: '1' },
      flex: false,
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
      full: 'horizontal',
      modal: false,
      plain: true,
      position: 'top',
    }
  }

  return (
    <Layer {...props.layer}>
      <Box {...props.main}>
        {size !== 'xsmall' && (
          <Heading {...props.heading}>Martin Kim</Heading>
        )}
        <Navs {...props.navs} />
      </Box>
    </Layer>
  )
}

export default Header;