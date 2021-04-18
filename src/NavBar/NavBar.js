import React, { useState } from 'react';
import { Box, Layer } from 'grommet';
import NavBarIcon from './NavBarIcon/NavBarIcon'
import NavContent from './NavContent'

function NavBar() {

  const [openNav, setOpenNav] = useState(false)
  const [iconType, setIconType] = useState('open')

  const handleClose = () => {
    setOpenNav(false);
    setIconType('close-to-open');
  }

  const props = {
    layer: {
      modal: false,
      responsive: false,
      position: 'top-right',
      animate: false,
      animation: false,
      plain: true,
      onClickOutside: () => handleClose(),
      onEsc: () => handleClose(),
    },
    icon: {
      iconType,
      setIconType,
      openNav,
      setOpenNav
    },
    content: {
      openNav
    }
  }

  return (
    <Layer {...props.layer}>
      <Box direction='row'>
        <NavBarIcon {...props.icon} />
        <NavContent {...props.content} />
      </Box>
    </Layer>
  );
}

export default NavBar;