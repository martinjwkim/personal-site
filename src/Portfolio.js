import React from 'react';
import { Box, Grid, Heading } from 'grommet';


const Portfolio = ({size}) => {

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
      columns: ['medium','medium','medium'],
      rows: ['small','small']
    }
  }

  return (
    <Box {...props.main}>
      <Heading {...props.heading}>Selected Works...</Heading>
      <Grid {...props.grid}>
        <Box background='brand' />
        <Box background='brand' />
        <Box background='brand' />
        <Box background='brand' />
        <Box background='brand' />
        <Box background='brand' />
      </Grid>
    </Box >
  )
}

export default Portfolio;