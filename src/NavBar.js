import React from 'react';
import AppBar from './AppBar'
import { Anchor, Box, Button, CheckBox, Heading } from 'grommet';
import { Notification, Home, ChatOption } from 'grommet-icons';

const NavBar = ({ darkMode, setDarkMode }) => {
  return (
    <AppBar>
      <Heading level='3' margin='none'>Martin Kim</Heading>
      <Box as='nav' flex='false' gap='medium' direction='row' background='brand'>
        <Button icon={<Notification />} onClick={() => { }} />
        <Anchor icon={<Home />} hoverIndicator />
        <Anchor icon={<Notification />} hoverIndicator />
        <Anchor icon={<ChatOption />} hoverIndicator />
        <CheckBox checked={darkMode} toggle={true} onChange={() => setDarkMode(!darkMode)} />
      </Box>
    </AppBar>
  )
}

export default NavBar;