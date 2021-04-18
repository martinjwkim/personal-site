import React from 'react';
import { Box, Collapsible } from 'grommet';

function NavContent({ openNav }) {

  const props = {
    collapsible: {
      direction: 'horizontal',
      open: openNav,
    },
    main: {
      height: { min: '100vh' },
      width: 'small',
      background: '#2b00d4',
    }
  }

  return (
    <Collapsible {...props.collapsible}>
      <Box {...props.main}>
      </Box>
    </Collapsible>
  );
}

export default NavContent;