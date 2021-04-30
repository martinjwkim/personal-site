import React, { useEffect, useRef } from 'react';
import { Box, Text } from 'grommet';
import Typed from 'typed.js';

function TypedComponent() {

  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['full stack web developer.',],
      typeSpeed: 100,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  const props = {
    main: {
      direction: 'row',
      margin: {bottom: 'small'}
    },
  }

  return (
    <Box {...props.main}>
      <Text ref={typedRef} size='xlarge'></Text>
    </Box>
  );
}

export default TypedComponent;