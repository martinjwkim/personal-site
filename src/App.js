import React, { useState } from 'react';
import { Grommet, Box, ResponsiveContext } from 'grommet';
import Body from './Body'
import Header from './Header'
import theme from './theme'

function App() {

  const [darkMode, setDarkMode] = useState(false)

  const props = {
    grommet: {
      theme,
      full: true,
      themeMode: darkMode ? 'dark' : 'light',
    },
    navBar: {
      darkMode,
      setDarkMode,
    },
  }

  return (
    <Grommet {...props.grommet}>
      <ResponsiveContext.Consumer>
        {size => (
          <Box>
            <Header {...props.navBar} size={size} />
            <Body />
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;