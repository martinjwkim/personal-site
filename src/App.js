import React, { useState } from 'react';
import { Grommet, Box, ResponsiveContext } from 'grommet';
import About from './About'
import NavBar from './NavBar'
import Home from './Home'
import theme from './theme'
import './App.css';

function App() {

  const [darkMode, setDarkMode] = useState(false)

  const props = {
    grommet: {
      theme,
      themeMode: darkMode ? 'dark' : 'light',
    },
    navBar : {
      darkMode,
      setDarkMode
    },
    box: {
      width: {min: 280}
    }
  }

  return (
    <Grommet {...props.grommet}>
      <ResponsiveContext.Consumer>
        {size => (
          <Box {...props.box}>
            <NavBar {...props.navBar} size={size}/>
            <Home />
            <About />
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;