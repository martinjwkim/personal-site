import React, { useEffect, useRef } from 'react';
import { Box, Button, Heading, Text } from 'grommet';
import Typed from 'typed.js';

function Body({ size }) {

  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['coder, engineer, professional'],
      typeSpeed: 100,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

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
    },
  }

  return (
    <Box {...props.main}>
      <Heading {...props.heading}>Martin Kim</Heading>
      <Text ref={typedRef}></Text>
      <Button label='button' />
    </Box>
  );
}

export default Body;