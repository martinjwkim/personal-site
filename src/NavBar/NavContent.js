import React from 'react';
import { Box, Collapsible } from 'grommet';
import NavItem from './NavItem'
import { v4 as uuidv4 } from 'uuid';
import { Github, Twitter, Instagram, Facebook } from 'grommet-icons'


function NavContent({ openNav }) {

  const props = {
    collapsible: {
      direction: 'horizontal',
      open: openNav,
    },
    main: {
      height: { min: '100vh' },
      background: '#2b00d4',
      align: 'center',
      justify: 'center',
      pad: 'small',
      gap: 'small',
    },
    navItem: {
    }
  }

  const showNavItems = () => (
    [
      { label: 'Home', icon: <Github /> },
      { label: 'About', icon: <Twitter /> },
      { label: 'Portfolio', icon: <Instagram /> },
      { label: 'Contact', icon: <Facebook /> }
    ].map(data => <NavItem key={uuidv4()} {...data}/>)
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