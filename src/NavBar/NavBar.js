import React from 'react';
import { Box, Layer, Stack } from 'grommet';
import './NavBar.css'

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
      className: 'icon'
    },
  }

  return (
    <Layer {...props.layer}>
      <Box {...props.box}>
        <Stack>
          <div className='a'></div>
          <div className='b'></div>
        </Stack>
      </Box>
    </Layer>
  );
}

export default NavBar;