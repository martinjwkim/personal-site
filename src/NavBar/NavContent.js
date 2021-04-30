import React from 'react';
import { Box, Button } from 'grommet';


function NavContent({ openNav, size, handleNav }) {

  const props = {
    collapsible: {
      direction: 'horizontal',
      open: openNav,
    },
    main: {
      align: 'center',
      justify: 'center',
      pad: 'small',
      gap: 'small',
      direction: size === 'small' ? 'column' : 'row',
    },
    button: {
      plain: true,
      focusIndicator: false,
    }
  }

  const showNavItems = () => (
    ['Home', 'About', 'Portfolio', 'Contact'].map(label =>
      <Button {...props.button} label={label} key={label} onClick={() => handleNav(label)} />
    )
  )

  return (
    <Box {...props.main}>
      {showNavItems()}
    </Box>
  );
}

export default NavContent;