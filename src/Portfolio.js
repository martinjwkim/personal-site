import React from 'react';
import { Box, Grid, Heading } from 'grommet';
import Card from './Card'
import cardData from './cardData'

const Portfolio = ({ size, h, w }) => {


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
    container: {
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
      <Heading {...props.heading}>Things I've been working on...</Heading>
      <Box {...props.container}>
        <Grid {...props.grid}>
          {cardData.map(data => (<Card {...data} key={data.title} />))}
        </Grid>
      </Box>
    </Box >
  )
}

export default Portfolio;