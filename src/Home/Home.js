import React from 'react';
import { Box } from 'grommet';
// import Body from './Body'
// import Header from './Header'

const Home = ({ darkMode, setDarkMode, size }) => {

  const props = {
    main: {
      direction: 'column',
      justify: "between",
      height: {min: '100vh'},
      width: {min: '100vw'},
      alignContent: 'center',
      fill: true,
      alignSelf: 'center',
    },
    header: {
      darkMode,
      setDarkMode,
    },
    footer: {
      height: 'xsmall',
    }
  }

  return (
    <Box {...props.main}>
      {/* <Header {...props.header}/> */}
      {/*<Body size={size} />
      <Box {...props.footer}></Box> */}
    </Box>
  )
}

export default Home;