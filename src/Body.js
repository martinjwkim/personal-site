import React, { useEffect, useRef } from 'react';
import { Box, Button, Heading } from 'grommet';
import Typed from 'typed.js';

function Body({ size }) {

  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['coder, engineer, professional'],
      typeSpeed: 40
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
      alignSelf: 'center',
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
      <span ref={typedRef} />
      <Button label='button' />
    </Box>
  );
}

export default Body;