import React, { useState, useRef, useEffect } from 'react';
import { Box, Grommet, ResponsiveContext } from 'grommet';
import About from './About/About';
import Home from './Home/Home';
import Screen from './Screen'
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';
import NavBar from './NavBar/NavBar';
import Background from './Background';
import theme from './theme';
import useWindowDimensions from './useWindowDimensions';
import './CustomStyles.css';

function App() {

  const [darkMode, setDarkMode] = useState(false);
  const { h } = useWindowDimensions();
  const grommetRef = useRef();
  const backgroundRef = useRef();
  const [animationType, setAnimationType] = useState('')

  const scrollToTop = () => {
    grommetRef.current.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  useEffect(() => {

    // const scroll = {
    //   multiplier: 1.5,
    //   current: 0,
    //   previous: 0,
    //   change: 0,
    // };

    // const scrollHandler = () => {
    //   scroll.current = grommetRef.current.scrollTop;
    //   scroll.previous += (scroll.current - scroll.previous);
    //   scroll.change = scroll.multiplier * scroll.previous/h;

    //   backgroundRef.current.style.transform = `scale(${1+scroll.change}, ${1+scroll.change})`;

    //   requestAnimationFrame(()=> scrollHandler());
    // }

    grommetRef.current.addEventListener('scroll', () => {
      // requestAnimationFrame(()=> scrollHandler());
      const scroll = grommetRef.current.scrollTop;
      setAnimationType(scroll > 0 ? 'zoom-in' : 'zoom-out')
    })

  }, [h])

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
      pad: { top: 'xlarge' },
    },
    home: {
      darkMode,
      setDarkMode,
    },
    contact: {
      scrollToTop,
    },
  }

  return (
    <Grommet {...props.grommet}>
      <ResponsiveContext.Consumer>
        {size => (
          <Box>
            <Background backgroundRef={backgroundRef} animationType={animationType} />
            <Screen size={size} animationType={animationType} />
            <Box width='100vw' height='100vh'></Box>
            <Home {...props.home} size={size} />
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
