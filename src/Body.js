import React from 'react';
import { Box, Button, Heading, Text } from 'grommet';
import TypedComponent from './TypedComponent'

function Body({ size }) {

  const props = {
    main: {
      direction: 'column',
      border: { color: 'red', size: 'medium' },
      animation: "fadeIn",
      align: 'center',
    },
    heading: {
      alignSelf: 'center',
      textAlign: 'center',
      level: 1,
      size,
      margin: 'small'
    },
  }

  return (
    <Box {...props.main}>
      <Heading {...props.heading}>Martin Kim</Heading>
      <TypedComponent />
      <Button label='button' />
    </Box>
  );
}

export default Body;