import React, { useState } from 'react';
import { Grommet, Stack, ResponsiveContext } from 'grommet';
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
    header: {
      darkMode,
      setDarkMode,
    },
    main: {
      guidingChild: 'last',
    }
  }

  return (
    <Grommet {...props.grommet}>
      <ResponsiveContext.Consumer>
        {size => (
          <Stack {...props.main}>
            <Header {...props.header} size={size} />
            <Body />
          </Stack>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;