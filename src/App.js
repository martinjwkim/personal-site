import React, { useState } from 'react';
import { Box, Grommet, ResponsiveContext } from 'grommet';
import About from './About'
import Home from './Home'
import Portfolio from './Portfolio'
import Contact from './Contact'
import theme from './theme'
import useWindowDimensions from './useWindowDimensions'



function App() {

  const [darkMode, setDarkMode] = useState(false);
  const { w, h } = useWindowDimensions();

  const props = {
    grommet: {
      theme,
      full: true,
      themeMode: darkMode ? 'dark' : 'light',
    },
    outer: {
      fill: 'horizontal',
      background: {light: 'light-1', dark: '#181818'}
    },
    inner: {
      width: {max: '1200px'},
      alignSelf: 'center'
    },
    header: {
      darkMode,
      setDarkMode,
    },
    home: {
      darkMode,
      setDarkMode,
      h,
    },
    portfolio: {
      h,
      w,
    }
  }

  return (
    <Grommet {...props.grommet}>
      <ResponsiveContext.Consumer>
        {size => (
          <Box {...props.outer}>
            <Box {...props.inner}>
              <Home {...props.home} size={size} />
              <About size={size} />
              <Portfolio {...props.portfolio} size={size} />
              <Contact size={size} />
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;