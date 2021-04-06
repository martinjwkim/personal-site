import React, { useState } from 'react';
import { Box } from 'grommet';
import ReactCardFlip from 'react-card-flip'
import CardFront from './CardBack'
import CardBack from './CardFront'

const Card = ({ title }) => {

  const [flipped, setFlipped] = useState(true)

  const props = {
    main: {
      fill: true,
      align: 'center',
      justify: 'center',
      onMouseOver:()=>setFlipped(false),
      onMouseLeave:()=>setFlipped(true), 
    },
    card: {
      isFlipped: flipped,
      flipDirection: 'horizontal',
      containerStyle: {
        width: '100%',
        height: '100%',
      }
    },
  }

  return (
    <Box {...props.main}>
      <ReactCardFlip {...props.card}>
        <CardFront />
        <CardBack />
      </ReactCardFlip>
    </Box >
  )
}

export default Card;