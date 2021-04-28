import React from 'react';
import { Box, Heading } from 'grommet';
import Card from './Card'
import cardData from './cardData'
import { useInView } from 'react-hook-inview'


const Portfolio = ({ size }) => {

  const [ref, inView] = useInView({
    threshold: 0,
    unobserveOnEnter: true,
  });

  const props = {
    main: {
      fill: 'horizontal',
      align: 'center',
      justify: 'center',
      width: { max: '1200px' },
      alignSelf: 'center',
      gap: 'large',
      pad: { vertical: 'medium' }
    },
    heading: {
      level: 2,
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
        <Heading {...props.heading}>WHAT I'VE BEEN UP TO...</Heading>
      </Box>
      <Box gap='xlarge'>
        {cardData.map(data => (<Card data={data} size={size} key={data.title} />))}
      </Box>
    </Box >

  )
}

export default Portfolio;