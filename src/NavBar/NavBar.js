import React, { useState } from 'react';
import { Box, Collapsible, Layer } from 'grommet';
import NavBarIcon from './NavBarIcon/NavBarIcon'
import NavContent from './NavContent'

function NavBar() {

  const [iconType, setIconType] = useState('open')
  const [openNav, setOpenNav] = useState(false)

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
    collapsible: {
      direction: 'horizontal',
      open: openNav,
    },
    main: {
      background: '#003060',
      direction: 'row',
      margin: 'medium'
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
      <Box {...props.main}>
        <NavBarIcon {...props.icon} />
        <Collapsible {...props.collapsible}>
          <NavContent {...props.content} />
        </Collapsible>
      </Box>
    </Layer>
  );
}

export default NavBar;