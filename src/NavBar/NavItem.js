import React from 'react';
import { Box, Heading } from 'grommet';

function NavItem({ icon, label }) {

  const props = {
    main: {
      width: 'small',
      height: 'small',
      background: 'white',
      align: 'center',
      justify: 'center',
      gap: 'small',
    },
    heading: {
      level: 3,
      margin: 'none',
    }
  }

  return (
    <Box {...props.main}>
      {icon}
      <Heading {...props.heading}>{label}</Heading>
    </Box>
  );
}

export default NavItem;