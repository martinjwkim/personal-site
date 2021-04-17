import React from 'react';
import { Box } from 'grommet';
import OpenIcon from './OpenIcon'
import CloseIcon from './CloseIcon'
import OpenToClose from './OpenToClose'
import CloseToOpen from './CloseToOpen';
import './OpenIcon.css'
import './OpenToClose.css'
import './CloseIcon.css'
import './CloseToOpen.css'

function NavBarIcon() {

  const props = {
    main: {
      margin: 'none',
      width: '52px',
      height: '52px',
      background: '#2b00d4',
      justify: 'center',
      align: 'center',
      className: 'icon',
      onClick: () => { },
    },
  }

  return (
    <Box {...props.main}>
        <OpenIcon />
    </Box>
  );
}

export default NavBarIcon;

