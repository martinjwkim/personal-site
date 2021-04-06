import React from 'react';
import { Box } from 'grommet';
import Navs from './Navs'

const Header = ({ darkMode, setDarkMode, size }) => {


  const props = {
    main: {
      direction: 'row',
      fill: 'horizontal',
      justify: 'end',
      pad: {right: 'large'},
      height: size==='small' ? 'small' : 'xsmall',
      flex: false,
      animation: {
        type: 'fadeIn',
        duration: 2000,
      },
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