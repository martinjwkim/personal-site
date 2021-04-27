import React from 'react';
import { Box, Button } from 'grommet';
import Socials from './Socials'

const Home = ({ darkMode, setDarkMode, setAnimationType }) => {

  const props = {
    main: {
      fill: true,
      alignSelf: 'center',
      height: { min: 'large' },
      width: { max: '1200px' },
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
    },
    outer: {
      background: {
        image: 'url(/keyboard.jpg)',
        position: 'bottom',
        repeat: 'no-repeat',
        size: '100% 100%',
      },
    }
  }

  return (
    <Box {...props.outer}>
      <Box background='linear-gradient(transparent, 85%, #F8F8F8)'>
        <Box {...props.main}>
          <Box>
            <Button {...props.button} />
          </Box>
          <Box direction='row' justify='between' align='center'>
            <Box>

            </Box>
            <Socials />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Home;