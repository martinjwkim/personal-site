import React from 'react';
import { Box, Button } from 'grommet';

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
      border: { color: 'green', size: 'medium' },
      direction: 'column',
      align: 'center',
      justify: 'center',
      height: '100vh'
    },
  }


  return (
    <Box {...props.main}>
      <p>home body</p>
      <Button />
    </Box>
  )
}

export default Home;