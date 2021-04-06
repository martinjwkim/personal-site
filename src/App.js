import React, { useState } from 'react';
import { Box, Grommet, ResponsiveContext } from 'grommet';
import About from './About'
import Home from './Home'
import Portfolio from './Portfolio'
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
    home: {
      darkMode,
      setDarkMode,
    },
  }

  return (
    <Grommet {...props.grommet}>
      <ResponsiveContext.Consumer>
        {size => (
          <Box>
            <Home {...props.home} size={size} />
            <About size={size} />
            <Portfolio size={size} />
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;