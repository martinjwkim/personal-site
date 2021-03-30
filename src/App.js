import React, { useState } from 'react';
import { grommet, Grommet, Box, ResponsiveContext } from 'grommet';
import { deepMerge } from "grommet/utils"
import NavBar from './NavBar'
import Main from './Main'
import './App.css';

function App() {

  const [darkMode, setDarkMode] = useState(false)

  const theme = deepMerge(grommet, {
    colors:{
      brand: ""
    },
    global: {
      font: {
        family: 'Roboto',
        size: '18px',
        height: '20px',
      },
    },
  });

  return (
    <Grommet theme={theme} themeMode={darkMode ? 'dark' : 'light'} full>
      <ResponsiveContext.Consumer>
        {size => (
          <Box fill={true}>
            <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
            {`${darkMode}`}
            <Main />
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;
