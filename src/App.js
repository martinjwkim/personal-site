import React, { useState, useEffect, useRef } from 'react';
import { Box, Grommet, ResponsiveContext } from 'grommet';
import About from './About'
import Home from './Home'
import Portfolio from './Portfolio'
import Contact from './Contact'
import theme from './theme'
import useWindowDimensions from './useWindowDimensions'



function App() {

  const [darkMode, setDarkMode] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  const { w, h } = useWindowDimensions();

  const grommetRef = useRef(null);

  useEffect(() => {

    const handleScroll = (e) => {
      setScrollPos(grommetRef.current.scrollTop);
      // console.log(grommetRef.current.getBoundingClientRect().top);
    }

    grommetRef.current.addEventListener('scroll', handleScroll);
  }, [])


  const props = {
    grommet: {
      theme,
      full: true,
      themeMode: darkMode ? 'dark' : 'light',
      ref: grommetRef,
    },
    header: {
      darkMode,
      setDarkMode,
    },
    home: {
      darkMode,
      setDarkMode,
      scrollPos,
    },
    portfolio:{
      h,
      w,
    }
  }

  return (
    <Grommet {...props.grommet}>
      <ResponsiveContext.Consumer>
        {size => (
          <Box>
            <Home {...props.home} size={size} />
            <About size={size} />
            <Portfolio {...props.portfolio} size={size} />
            <Contact size={size} />
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;