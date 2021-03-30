import React from 'react';
import AppBar from './AppBar'
import { Anchor, Box, CheckBox, Heading } from 'grommet';

const NavBar = ({ darkMode, setDarkMode }) => {
  return (
    <AppBar>
      <Heading level='3' margin='none'>Martin Kim</Heading>
      <Box align="center" gap='large' direction='row'>
        <Anchor label="Home" onClick={() => {}}/>
        <Anchor label="About" onClick={() => {}}/>
        <Anchor label="Portfolio" onClick={() => {}}/>
        <Anchor label="Contact" onClick={() => {}}/>
        <CheckBox checked={darkMode} toggle={true} onChange={() => setDarkMode(!darkMode)} />
      </Box>
    </AppBar>
  )
}

export default NavBar;