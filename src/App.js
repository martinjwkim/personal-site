import React, { useState } from 'react';
import { Grommet, Stack, ResponsiveContext } from 'grommet';
import Body from './Body'
import NavBar from './NavBar'
import theme from './theme'

function App() {

  const [darkMode, setDarkMode] = useState(false)

  const props = {
    grommet: {
      theme,
      themeMode: darkMode ? 'dark' : 'light',
    },
    navBar: {
      darkMode,
      setDarkMode
    },
    stack: {
      anchor: 'top',
    }
  }

  return (
    <Grommet {...props.grommet}>
      <ResponsiveContext.Consumer>
        {size => (
          <Stack {...props.stack}>
            <NavBar {...props.navBar} size={size} />
            <Body />
          </Stack>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;