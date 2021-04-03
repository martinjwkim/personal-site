import React from 'react';
import { Box } from 'grommet';
import Navs from './Navs'

const Header = ({ darkMode, setDarkMode, size }) => {


  const props = {
    main: {
      direction: 'row',
      alignSelf: 'start',
      justify: size === 'xsmall' ? 'center' : 'end',
      pad: 'large',
      flex: false,
      animation: {
        type: 'fadeIn',
        duration: 2000,
      },
      border: { color: 'green', size: 'medium' },
    },
    heading: {
      level: '3',
    },
    navs: {
      darkMode,
      setDarkMode,
      size
    },
  }

  return (
    <Box {...props.main}>
      <Navs {...props.navs} />
    </Box>
  )
}

export default Header;