import React from 'react';
import { Box } from 'grommet';
import Navs from './Navs'
import { Moon, Sun } from 'grommet-icons'

const Header = ({ darkMode, setDarkMode, size }) => {


  const props = {
    main: {
      direction: 'row',
      fill: 'horizontal',
      justify: 'between',
      pad: { horizontal: 'large' },
      height: size === 'small' ? 'small' : 'xsmall',
      flex: false,
      animation: {
        type: 'fadeIn',
        duration: 2000,
      },
    },
    icon: {
      onClick: ()=>setDarkMode(mode=>!mode),
    },
    navs: {
      darkMode,
      setDarkMode,
      size
    },
  }

  return (
    <Box {...props.main}>
      <Box direction='row' gap='small' align='center'>
        {darkMode ? <Sun {...props.icon}/> : <Moon {...props.icon}/>}
      </Box>
      <Navs {...props.navs} />
    </Box>
  )
}

export default Header;