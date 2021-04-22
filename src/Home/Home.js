import React from 'react';
import { Box, Button } from 'grommet';
// import Body from './Body'
// import Header from './Header'

const Home = ({ darkMode, setDarkMode, setAnimationType }) => {

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
    },
    button: {
      label: 'BACK',
      id: 'StyledButton',
      alignSelf: 'center',
      margin: 'large',
      onClick: () => setAnimationType('zoom-out')
    }
  }

  return (
    <Box {...props.main}>
      <Button {...props.button}/>
      {/* <Header {...props.header}/> */}
      {/*<Body size={size} />
      <Box {...props.footer}></Box> */}
    </Box>
  )
}

export default Home;