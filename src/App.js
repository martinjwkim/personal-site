import React, { useState, useRef } from 'react';
import { Box, Grommet, Layer, ResponsiveContext } from 'grommet';
import About from './About/About'
import Home from './Home/Home'
import Portfolio from './Portfolio/Portfolio'
import Contact from './Contact/Contact'
import NavBar from './NavBar/NavBar'
import Background from './Background'
import theme from './theme'

function App() {

  const [darkMode, setDarkMode] = useState(false);
  const grommetRef = useRef();

  const scrollToTop = () => {
    grommetRef.current.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  const props = {
    grommet: {
      theme,
      ref: grommetRef,
      full: true,
      themeMode: darkMode ? 'dark' : 'light',
      background: {
        color: {
          light: 'light-1',
          dark: '#181818',
        },
        opacity: 'medium',
      }
    },
    main: {
      background: {
        color: {
          light: 'light-1',
          dark: '#181818',
        },
      },
      gap: 'xlarge',
      pad: {top: 'xlarge'}
    },
    home: {
      darkMode,
      setDarkMode,
    },
    contact: {
      scrollToTop,
    },
    div: {
      style: {
        position: 'absolute',
        background: 'url(/generic-background.png)',
        backgroundSize: '100% 100%',
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
          <Box>
            <Background />
            <Home {...props.home} size={size}/>
            <Box {...props.main}>
              <About size={size} />
              <Portfolio size={size} />
              <Contact {...props.contact} size={size} />
            </Box>
            <NavBar />
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
// button redesign
// color card info background
// proper links, pictures, card information
// responsive navbar on scroll
