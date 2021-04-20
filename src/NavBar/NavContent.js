import React from 'react';
import { Box, Collapsible, Heading } from 'grommet';
import { v4 as uuidv4 } from 'uuid';


function NavContent({ openNav }) {

  const props = {
    collapsible: {
      direction: 'horizontal',
      open: openNav,
    },
    main: {
      height: '52px',
      align: 'center',
      justify: 'center',
      pad: 'small',
      gap: 'small',
      direction: 'row',
    },
    heading: {
      level: 3,
      margin: 'none',
    },
    navItem: {
    }
  }

  const showNavItems = () => (
    ['Home', 'About', 'Portfolio', 'Contact'].map(label =>
      <Heading {...props.heading} key={uuidv4()}>{label}</Heading>
    )
  )

  return (
    <Collapsible {...props.collapsible}>
      <Box {...props.main}>
        {showNavItems()}
      </Box>
    </Collapsible>
  );
}

export default NavContent;