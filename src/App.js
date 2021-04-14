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
      background: {
        color: {
          light: 'light-1',
          dark: '#181818',
        },
        opacity: 'medium'
      }
    },
    outer: {
    },
    inner: {
      width: { max: '1200px' },
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
    },
    div: {
      style: {
        position: 'absolute',
        background: 'url(/generic-background.png)',
        top: 0,
        height: '100vh',
        width: '100vw',
        zIndex: -1,
      }
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
            <div {...props.div}></div>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;

// squigly hint for light/dark mode
// on hover animations for cards (zoom in or responsive to mouse)
// change global font and color
// modal restructure
// about restructure
// contact restructure
// button redesign
// proper links, pictures, card information
// responsive navbar on scroll
// background photo
