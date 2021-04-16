import React from 'react';
import { Box, Layer } from 'grommet';
import OpenIcon from './OpenIcon'
import CloseIcon from './CloseIcon'
import OpenToCloseIcon from './OpenToCloseIcon'
import './OpenIcon.css'
import './OpenToCloseIcon.css'

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
        <CloseIcon />
      </Box>
      <Box {...props.box}>
        <OpenToCloseIcon />
      </Box>
    </Layer>
  );
}

export default NavBar;