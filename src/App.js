import React, { useState } from 'react';
import { Box, Grommet, ResponsiveContext } from 'grommet';
import About from './About'
import Home from './Home'
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
      
    },
    home: {
      darkMode,
      setDarkMode,
    },
    about: {
      
    }
  }

  return (
    <Grommet {...props.grommet}>
      <ResponsiveContext.Consumer>
        {size => (
          <Box {...props.main}>
            <Home {...props.home} size={size} />
            <About {...props.about} size={size} />
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;