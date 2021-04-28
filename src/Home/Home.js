import React from 'react';
import { Box } from 'grommet';
import Socials from './Socials'
import Body from './Body'
import keyboard from '../images/keyboard.png'
import coffee from '../images/coffee.png'
import plant from '../images/plant.png'

const Home = ({ darkMode, setDarkMode, setAnimationType, animationType }) => {

  const props = {
    main: {
      fill: true,
      alignSelf: 'center',
      height: { min: 'large' },
      width: { max: '1200px' },
      justify: 'center',
      pad: 'large',
      className: 'Home'
    },
    header: {
      darkMode,
      setDarkMode,
    },
  }

  return (
    <Box {...props.main}>
      <img src={keyboard} alt='keyboard' className='keyboard' />
      <img src={plant} alt='plant' className='plant' />
      <img src={coffee} alt='coffee' className='coffee' />
      <Box direction='row' justify='between' align='center'>
        <Box width='xxsmall'></Box>
        <Body animationType={animationType} setAnimationType={setAnimationType} />
        <Socials direction='column' color='#005BEA' />
      </Box>
    </Box>
  )
}

export default Home;