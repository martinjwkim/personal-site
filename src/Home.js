import React from 'react';
import { Box } from 'grommet';

const Home = () => {

  const props = {
    main: {
      background: {
        image: "url(/generic-background.png)",
        opacity: "medium",
        position: 'top',
        size: "cover",
        repeat: "no-repeat",
      },
      border: { color: 'brand', size: 'medium' },
      direction: 'row',
      flex: true,
      overflow: 'auto',
      height: "100vh"
    },
  }


  return (
    <Box {...props.main}>
      <Box border={{ color: 'red', size: 'medium' }} flex align='center' justify='center'>
        app body
     </Box>
    </Box>
  )
}

export default Home;