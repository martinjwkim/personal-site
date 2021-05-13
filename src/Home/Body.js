import React from 'react';
import { Box, Heading } from 'grommet';
import TypedComponent from './TypedComponent'

function Body({ size, setAnimationType, animationType }) {

  const handleClick = () => {
    animationType !== 'zoom-in' ? setAnimationType('zoom-in') : setAnimationType('zoom-out');
  }

  const props = {
    main: {
      animation: "fadeIn",
      pad: 'small',
      justify: 'between',
    },
    heading: {
      textAlign: 'center',
      level: 1,
      size: 'large',
      margin: 'small'
    },
    button: {
      label: animationType !== 'zoom-in' ? 'Learn More' : 'Back',
      id: 'ScreenButton',
      focusIndicator: false,
      margin: 'small',
      onClick: () => handleClick(),
    }
  }

  return (
    <Box {...props.main}>
      <Box align='center'>
        <Heading {...props.heading}>MARTIN KIM</Heading>
        <TypedComponent />
      </Box>
      {/* <Button {...props.button} /> */}
    </Box>
  );
}

export default Body;