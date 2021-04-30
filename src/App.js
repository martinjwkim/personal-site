import React, { useState, useRef, useEffect } from 'react';
import { Box, Grommet, ResponsiveContext } from 'grommet';
import About from './About/About';
import Home from './Home/Home';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';
import NavBar from './NavBar/NavBar';
import Footer from './Footer'
import theme from './theme';
import $ from 'jquery'
import './CustomStyles.css';
import useWindowDimensions from './useWindowDimensions'

function App() {

  const [darkMode, setDarkMode] = useState(false);
  const [animationType, setAnimationType] = useState('');
  const grommetRef = useRef();
  const { h } = useWindowDimensions();

  const scrollToTop = () => {
    grommetRef.current.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    setTimeout(() => {
      setAnimationType('zoom-out')
    }, 500)
  }

  useEffect(()=>{
    
    grommetRef.current.addEventListener('scroll', () => {

      const scroll = grommetRef.current.scrollTop;

      $('.coffee').css("transform", `translate(50%, ${50+30*scroll/h}%) scale(0.5, 0.5) rotate(${-90*scroll/800}deg)`);
        // $('.paper').css('transform', `scale(0.35, 0.3) translate(0, ${2*(4800-h-scroll.previous)}px) rotate(${45*(4800-h-scroll.previous)/h}deg)`);
        // $('.frame').css("transform", `translate(-${Math.max(0,(1152-h/2-scroll.previous)/20)}%, ${Math.max(0,(1152-h/2-scroll.previous)/20)}%)`);
  
    })
  },[h])

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
      },
    },
    main: {
      background: {
        color: {
          light: 'light-1',
          dark: '#181818',
        },
        image: "url(/desk.jpeg)",
        repeat: 'repeat',
        size: '100% 5%'
      },
    },
    home: {
      darkMode,
      setDarkMode,
      setAnimationType,
    },
    contact: {
      scrollToTop,
    },
  }

  return (
    <Grommet {...props.grommet}>
      <ResponsiveContext.Consumer>
        {size => (
          <Box overflow='hidden'>
            {/* <Screen animationType={animationType} setAnimationType={setAnimationType}/> */}
            {/* <Background animationType={animationType} /> */}
            <Box {...props.main}>
              <Home {...props.home} size={size} animationType={animationType}/>
              <About size={size} />
              <Portfolio size={size} />
              <Contact {...props.contact} size={size} />
              <Footer scrollToTop={scrollToTop}/>
            </Box>
            <NavBar size={size}/>
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
