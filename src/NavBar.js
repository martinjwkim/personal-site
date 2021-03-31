import React from 'react';
import { Box, Heading } from 'grommet';
import Navs from './Navs'

const NavBar = ({ darkMode, setDarkMode, size }) => {

  const props = {
    main: {
      direction: 'row',
      align: 'center',
      justify: 'between',
      pad: { left: 'large', right: 'medium', vertical: 'medium' },
      style: { zIndex: '1' },
      flex: true,
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