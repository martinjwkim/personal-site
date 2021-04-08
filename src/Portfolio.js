import React from 'react';
import { Box, Grid, Heading } from 'grommet';
import Card from './Card'
import cardData from './cardData'


const Portfolio = ({ size }) => {

  const props = {
    main: {
      height: '100vh',
      align: 'center',
      justify: 'center',
    },
    heading: {
      level: 3,
      margin: { left: "medium" }
    },
    grid: {
      gap: 'small',
      justifyContent: 'center',
      margin: 'small',
      columns: ['medium', 'medium', 'medium'],
      rows: ['small', 'small']
    }
  }

  return (
    <Box {...props.main}>
      <Heading {...props.heading}>Things I've been working on...</Heading>
      <Grid {...props.grid}>
        {cardData.map(data => (<Card {...data} key={data.title}/>))}
      </Grid>
    </Box >
  )
}

export default Portfolio;