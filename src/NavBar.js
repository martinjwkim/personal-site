import React from 'react';
import AppBar from './AppBar'
import { Button, CheckBox, Heading } from 'grommet';
import { Notification } from 'grommet-icons';

const NavBar = (props) => {
  return (
    <AppBar>
      <Heading level='3' margin='none'>Martin Kim</Heading>
      <Button icon={<Notification />} onClick={() => { }} />
    </AppBar>
  )
}

export default NavBar;