import React from 'react';
import { Box, Button, Heading } from 'grommet';
import $ from 'jquery'
import TypedComponent from './Home/TypedComponent'

const Screen = ({ size, setAnimationType }) => {

  const handleClick = () => {
    setAnimationType('zoom-in');
    $('.Screen').css({
      'pointer-events': 'none',
    })
  }

  const props = {
    heading: {
      alignSelf: 'center',
      textAlign: 'center',
      level: 1,
      size,
      margin: { horizontal: 'none', vertical: 'small' }
    },
    button: {
      label: 'Learn More',
      id: 'ScreenButton',
      focusIndicator: false,
      margin: 'small',
      onClick: ()=>handleClick(),
    }
  }

  return (
    <div className='Screen'>
      <Box direction='row' gap='small'>
        <Heading {...props.heading}>MARTIN</Heading>
        <Heading {...props.heading}>KIM</Heading>
      </Box>
      <TypedComponent />
      <Button {...props.button}/>
    </div>
  )
}

export default Screen;