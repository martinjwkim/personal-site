import React from 'react';
import { Box, Heading } from 'grommet';
import Navs from './Navs'

const NavBar = ({ darkMode, setDarkMode, size }) => {

  const props = {
    main: {
      border: { color: 'brand', size: 'medium' },
      tag : 'header',
      direction: 'row',
      align: 'center',
      justify: size==='xsmall' ? 'center' : 'between',
      pad: { left: 'large', right: 'medium', vertical: 'small' },
      style: { zIndex: '-1' },
      flex: false,
    },
    heading: {
      level: '3',
    },
    navs: {
      darkMode,
      setDarkMode,
      size
    }
  }

  return (
    <Box {...props.main}>
      {size !== 'xsmall' && (
        <Heading {...props.heading}>Martin Kim</Heading>
      )}
      <Navs {...props.navs} />
    </Box>
  )
}

export default NavBar;