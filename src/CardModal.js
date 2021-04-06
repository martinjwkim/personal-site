import React from 'react';
import { Anchor, Button, Box } from 'grommet';

const CardModal = ({animation, github, demo}) => {

  const props = {
    main: {
      fill: true,
      background: {
        color: 'dark-1',
        opacity: 'strong',
      },
      animation: {
        type: animation,
        duration: 500,
      }
    },
    more: {
      fill: true,
      align: 'center',
      justify: 'end',
    },
    links: {
      fill: true,
      direction: 'row',
      gap: 'medium',
      justify: 'center',
      align: 'center',
    },
    button: {
      alignSelf: 'center',
    }
  }

  return (
    <Box {...props.main}>
      <Box {...props.more}>
        <Button label='Learn More'/>
      </Box>
      <Box {...props.links}>
        {demo && <Anchor label='DEMO' href={demo}/> }
        {github && <Anchor label='GITHUB' href={github}/> }
      </Box>
    </Box >
  )
}

export default CardModal;