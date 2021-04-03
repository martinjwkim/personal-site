import React from 'react';
import { Box } from 'grommet';
import Navs from './Navs'

const Header = ({ darkMode, setDarkMode, size }) => {


  const props = {
    main: {
      direction: 'row',
      fill: 'horizontal',
      justify: size === 'xsmall' ? 'center' : 'end',
      height: 'xsmall',
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