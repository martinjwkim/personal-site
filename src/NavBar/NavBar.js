import React from 'react';
import { Box, Layer } from 'grommet';
import OpenIcon from './OpenIcon'
import CloseIcon from './CloseIcon'
import OpenToClose from './OpenToClose'
import CloseToOpen from './CloseToOpen';
import './OpenIcon.css'
import './OpenToClose.css'
import './CloseIcon.css'
import './CloseToOpen.css'

function NavBar() {

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
    box: {
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
    <Layer {...props.layer}>
      <Box {...props.box}>
        <OpenIcon />
      </Box>
      <Box {...props.box}>
        <OpenToClose />
      </Box>
      <Box {...props.box}>
        <CloseIcon />
      </Box>
      <Box {...props.box}>
        <CloseToOpen />
      </Box>
    </Layer>
  );
}

export default NavBar;