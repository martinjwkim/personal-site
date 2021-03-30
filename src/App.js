import React, { useState } from 'react';
import { Grommet, Box, ResponsiveContext } from 'grommet';
import NavBar from './NavBar'
import Main from './Main'
import './App.css';

function App() {

  const [themeMode, setThemeMode] =  useState('light')

  const theme = {
    colors: {
      brand: '#228BE6'
    },
    global: {
      font: {
        family: 'Roboto',
        size: '18px',
        height: '20px',
      },
    },
  };

  return (
    <Grommet theme={theme} themeMode={themeMode} full>
      <ResponsiveContext.Consumer>
        {size => (
          <Box fill>
            <NavBar setThemeMode={setThemeMode}/>
            <Main />
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;
