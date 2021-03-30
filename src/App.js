import React, { useState } from 'react';
import { Grommet, Box, ResponsiveContext } from 'grommet';
import About from './About'
import NavBar from './NavBar'
import Main from './Main'
import theme from './theme'
import './App.css';

function App() {

  const [darkMode, setDarkMode] = useState(false)

  const props = {
    grommet: {
      full: true,
      theme,
      themeMode: darkMode ? 'dark' : 'light',
    },
    navBar : {
      darkMode,
      setDarkMode
    }
  }

  return (
    <Grommet {...props.grommet}>
      <ResponsiveContext.Consumer>
        {size => (
          <Box fill={true}>
            <NavBar {...props.navBar} />
            <Main />
            <About />
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;