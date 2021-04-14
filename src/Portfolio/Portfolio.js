import React from 'react';
import { Box, Heading } from 'grommet';
import Card from './Card'
import cardData from './cardData'
import { useInView } from 'react-hook-inview'


const Portfolio = ({size}) => {

  const [ref, inView] = useInView({
    threshold: 0,
    unobserveOnEnter: true,
  });

  const props = {
    main: {
      fill: 'horizontal',
      align: 'center',
      justify: 'center',
      width: {max: '1200px'},
      alignSelf: 'center',
      gap: 'xlarge',
      pad: {vertical: 'medium'}
    },
    heading: {
      level: 3,
    },
    hcontainer: {
      ref,
      animation: inView ? [
        {
          type: 'slideRight',
          delay: 100,
          duration: 2000,
          size: 'large'
        },
        {
          type: 'fadeIn',
          delay: 0,
          duration: 2000,
        },
      ] : 'fadeOut'
    },
  }

  return (
    <Box {...props.main}>
      <Box {...props.hcontainer}>
        <Heading {...props.heading}>Things I've been working on...</Heading>
      </Box>
      {cardData.map(data => (<Card data={data} size={size} key={data.title} />))}
    </Box >
  )
}

export default Portfolio;