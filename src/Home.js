import React from 'react';
import { Box } from 'grommet';
import Body from './Body'
import Header from './Header'

const Home = ({ darkMode, setDarkMode, size, }) => {

  const props = {
    main: {
      direction: 'column',
      justify: "between",
      height: '100vh',
      alignContent: 'center'
    },
    header: {
      darkMode,
      setDarkMode,
      size
    },
    footer: {
      height: size==='small' ? 'small' : 'xsmall',
    }
  }


  return (
    <Box {...props.main}>
      <Header {...props.header}/>
      <Body size={size} />
      <Box {...props.footer}></Box>
    </Box>
  )
}

export default Home;