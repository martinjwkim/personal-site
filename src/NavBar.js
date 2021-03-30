import React from 'react';
import { Box, Heading } from 'grommet';
import Navs from './Navs'

const NavBar = ({ darkMode, setDarkMode }) => {

  const props = {
    main: {
      direction: 'row',
      align: 'center',
      justify: 'between',
      pad: { left: 'large', right: 'medium', vertical: 'medium' },
      style: { zIndex: '1' },
    },
    navs: {
      darkMode, 
      setDarkMode,
    }
  }

  return (
    <Box {...props.main}>
      <Heading level='3' margin='none'>Martin Kim</Heading>
      <Navs {...props.navs}/>
    </Box>
  )
}

export default NavBar;