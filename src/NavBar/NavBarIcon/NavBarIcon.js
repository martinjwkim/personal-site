import React, { useState } from 'react';
import { Box } from 'grommet';
import OpenIcon from './OpenIcon'
import OpenToClose from './OpenToClose'
import CloseToOpen from './CloseToOpen';
import './OpenIcon.css'
import './OpenToClose.css'
import './CloseIcon.css'
import './CloseToOpen.css'

function NavBarIcon({ openNav, setOpenNav }) {

  const [icon, setIcon] = useState(<OpenIcon />)

  const handleClick = () => {
    setOpenNav(open => !open)
    openNav ? setIcon(<CloseToOpen />) : setIcon(<OpenToClose />);
  }

  const props = {
    main: {
      margin: { top: 'medium', right: openNav ? 'none' : 'medium' },
      width: '52px',
      height: '52px',
      background: '#2b00d4',
      justify: 'center',
      align: 'center',
      className: 'icon',
      onClick: () => handleClick(),
    },
  }

  return (
    <Box {...props.main}>
      {icon}
    </Box>
  );
}

export default NavBarIcon;

