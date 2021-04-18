import React, { useState } from 'react';
import { Box, Collapsible, Layer } from 'grommet';
import NavBarIcon from './NavBarIcon/NavBarIcon'

function NavBar() {

  const [openNav, setOpenNav] = useState(false)

  const props = {
    layer: {
      modal: false,
      responsive: false,
      position: 'top-right',
      animate: false,
      animation: false,
      plain: true,
    },
    icon: {
      openNav,
      setOpenNav
    },
    collapsible: {
      direction: 'horizontal',
      open: openNav,
    },
    main: {
      border: { color: 'brand' },
      height: {min: '100vh'},
      width: 'small',
    }
  }

  return (
    <Layer {...props.layer}>
      <Box direction='row'>
        <NavBarIcon {...props.icon} />
        <Collapsible {...props.collapsible}>
          <Box {...props.main}>
          </Box>
        </Collapsible>
      </Box>
    </Layer>
  );
}

export default NavBar;