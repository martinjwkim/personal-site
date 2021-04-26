import React from 'react';
import { Box, Button, Heading } from 'grommet';
import TypedComponent from './Home/TypedComponent'

const Screen = ({ size, setAnimationType, animationType }) => {

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
      onClick: () => setAnimationType('zoom-in'),
    }
  }

  return (
    <div className={`Screen ${animationType}`} style={{ pointerEvents: animationType === 'zoom-in' ? 'none' : 'auto' }}>
      <Box background='white' height='50vh' width='48vw' justify='center' align='center'>
        <Box direction='row' gap='small' margin={{ top: '5vh', right: '1vw' }} >
          <Heading {...props.heading}>MARTIN</Heading>
          <Heading {...props.heading}>KIM</Heading>
        </Box>
        <TypedComponent />
        <Button {...props.button} />
      </Box>
    </div>
  )
}

export default Screen;