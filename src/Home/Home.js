import React from 'react';
import { Box, Button } from 'grommet';
import Socials from './Socials'
import keyboard from './keyboard.png'
import coffee from './coffee.png'

const Home = ({ darkMode, setDarkMode, setAnimationType }) => {

  const props = {
    main: {
      fill: true,
      alignSelf: 'center',
      height: { min: 'large' },
      width: { max: '1200px' },
      className: 'Home'
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
  }

  return (
    <Box {...props.main}>
      <img src={keyboard} alt='keyboard' className='keyboard'/>
      <img src={coffee} alt='coffee' className='coffee'/>
      <Box>
        <Button {...props.button} />
      </Box>
      <Box direction='row' justify='between' align='center'>
        <Box>
        </Box>
        <Socials direction='column' color='#005BEA'/>
      </Box>
    </Box>
  )
}

export default Home;