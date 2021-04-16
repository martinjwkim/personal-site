import React from 'react';
import { Box, Button } from 'grommet';
import Navs from './Navs'
import { Moon, Sun } from 'grommet-icons'

const Header = ({ darkMode, setDarkMode, size }) => {


  const props = {
    main: {
      direction: 'row',
      fill: 'horizontal',
      justify: 'between',
      pad: 'large',
      animation: {
        type: 'fadeIn',
        duration: 2000,
      },
    },
    icon: {
      onClick: () => setDarkMode(mode => !mode),
      alignSelf: 'center',
      icon: darkMode ? <Sun /> : <Moon />,
      plain: true,
      focusIndicator: false,
    },
  }

  return (
    <Box {...props.main}>
      <Button {...props.icon}/>
      <Navs />
    </Box>
  )
}

export default Header;