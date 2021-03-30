import React, { useState } from 'react';
import { Grommet, Box, ResponsiveContext } from 'grommet';
import theme from './theme'
import About from './About'
import NavBar from './NavBar'
import Main from './Main'
import './App.css';

function App() {

  const [darkMode, setDarkMode] = useState(false)
  
  return (
    <Grommet theme={theme} themeMode={darkMode ? 'dark' : 'light'} full>
      <ResponsiveContext.Consumer>
        {size => (
          <Box fill={true}>
            <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
            <Main />
            <About />
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;