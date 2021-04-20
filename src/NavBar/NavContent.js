import React from 'react';
import { Box, Button } from 'grommet';


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
    button: {
      plain: true,
      focusIndicator: false,
    }
  }

  const showNavItems = () => (
    ['Home', 'About', 'Portfolio', 'Contact'].map(label =>
      <Button {...props.button} label={label} key={label} onClick={() =>{}} />
    )
  )

  return (
      <Box {...props.main}>
        {showNavItems()}
      </Box>
  );
}

export default NavContent;