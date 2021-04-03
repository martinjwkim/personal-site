import React from 'react';
import { Box } from 'grommet';
import Body from './Body'
import Header from './Header'

const Home = ({ darkMode, setDarkMode, size }) => {

  const props = {
    main: {
      background: {
        image: "url(/generic-background.png)",
        opacity: "medium",
        position: 'top',
        size: "cover",
        repeat: "no-repeat",
      },
      border: { color: 'green', size: 'medium' },
      direction: 'column',
      height: '100vh',
    },
    header: {
      darkMode,
      setDarkMode,
      size
    }
  }


  return (
    <Box {...props.main}>
      <Header {...props.header}/>
      <Body size={size} />
    </Box>
  )
}

export default Home;