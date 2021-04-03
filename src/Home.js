import React from 'react';
import { Box, Button, Heading } from 'grommet';

const Home = ({size}) => {

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
    heading: {
      alignSelf: 'center',
      textAlign: 'center',
      level: 1,
      size,

    },
    button: {
      label: "Download Resume"
    }
  }


  return (
    <Box {...props.main}>
      <Heading {...props.heading}>Martin Kim</Heading>
      <Button {...props.button} />
    </Box>
  )
}

export default Home;