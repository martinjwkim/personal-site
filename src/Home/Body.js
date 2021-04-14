import React from 'react';
import { Box, Heading } from 'grommet';
import TypedComponent from './TypedComponent'
import Socials from './Socials'

function Body({ size }) {

  const props = {
    main: {
      direction: 'column',
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
      <Socials />
    </Box>
  );
}

export default Body;