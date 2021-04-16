import React from 'react';
import { Layer, Box } from 'grommet';

function NavBar() {

  const props = {
    layer: {
      modal: false,
      responsive: false,
      position: 'top-right',
      animate: false,
      animation: false,
    },
    box: {
      width: 'xsmall',
      height: 'xsmall',
      background: 'red',
    }
  }

  return (
    <Layer {...props.layer}>
       <Box {...props.box}>
       </Box>
    </Layer>
  );
}

export default NavBar;