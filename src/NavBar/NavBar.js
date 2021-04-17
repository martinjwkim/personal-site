import React, { useState } from 'react';
import { Layer } from 'grommet';
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
      margin: 'medium',
      plain: true,
    },
  }

  return (
    <Layer {...props.layer}>
      <NavBarIcon />
    </Layer>
  );
}

export default NavBar;