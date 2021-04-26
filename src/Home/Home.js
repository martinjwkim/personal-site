import React from 'react';
import { Box, Button } from 'grommet';
import Socials from './Socials'

const Home = ({ darkMode, setDarkMode, setAnimationType, size }) => {

  const props = {
    main: {
      direction: 'row',
      justify: "between",
      alignContent: 'center',
      fill: true,
      alignSelf: 'center',
      height: {min: 'large'},
      width: {max: '1200px'},
      border: true,
    },
    header: {
      darkMode,
      setDarkMode,
    },
    button: {
      label: 'BACK',
      id: 'StyledButton',
      alignSelf: 'center',
      onClick: () => setAnimationType('zoom-out')
    }
  }

  return (
    <Box {...props.main}>
      <Button {...props.button}/>
      <Socials />
    </Box>
  )
}

export default Home;