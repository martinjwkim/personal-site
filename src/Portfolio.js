import React from 'react';
import { Box, Grid, Heading } from 'grommet';
import Card from './Card'


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
      border: true,
      gap: 'small',
      justifyContent: 'center',
      margin: 'small',
      columns: ['medium', 'medium', 'medium'],
      rows: ['small', 'small']
    }
  }


  const cardData = [
    {
      title: 'Clever Counsel',
      image: '',
    },
    {
      title: 'Numbers API',
      image: '',
    },
    {
      title: 'Jobly',
      image: '',
    },
    {
      title: 'Warbler',
      image: '',
    },
    {
      title: 'Crypto Ticker',
      image: '',
    },
    {
      title: 'More',
      image: '',
    }
  ];

  return (
    <Box {...props.main}>
      <Heading {...props.heading}>Selected Works...</Heading>
      <Grid {...props.grid}>
        {cardData.map(data => (<Card {...data} />))}
      </Grid>
    </Box >
  )
}

export default Portfolio;