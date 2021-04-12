import React from 'react';
import { Box, Grid, Heading } from 'grommet';
import Card from './Card'
import cardData from './cardData'
import { useInView } from 'react-hook-inview'


const Portfolio = ({ size, h, w }) => {

  const [ref, inView] = useInView({
    threshold: 0
  });

  const props = {
    main: {
      background: { "dark": "#202020", "light": "white" },
      height: '100vh',
      align: 'center',
      justify: 'center',
    },
    heading: {
      level: 3,
    },
    grid: {
      fill: true,
      gap: 'none',
      justifyContent: 'center',
      columns: Array(h <= w ? 3 : 2).fill('flex'),
      rows: Array(h <= w ? 2 : 3).fill('flex'),
    },
    hcontainer: {
      ref,
      animation: inView ? [
        {
          type: 'slideRight',
          delay: 300,
          duration: 2000,
          size: 'large'
        },
        {
          type: 'fadeIn',
          delay: 300,
          duration: 2000,
        },
      ] : 'fadeOut'
    },
    gcontainer: {
      fill: true,
      width: { min: size, max: '1000px' },
      height: { min: size, max: '600px' },
      pad: {
        bottom: 'large',
      }
    }
  }

  return (
    <Box {...props.main}>
      <Box {...props.hcontainer}>
        <Heading {...props.heading}>Things I've been working on...</Heading>
      </Box>
      <Box {...props.gcontainer}>
        <Grid {...props.grid}>
          {cardData.map(data => (<Card {...data} key={data.title} />))}
        </Grid>
      </Box>
    </Box >
  )
}

export default Portfolio;