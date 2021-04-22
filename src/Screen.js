import React from 'react';
import { Box, Heading } from 'grommet';
import TypedComponent from './Home/TypedComponent'
import Socials from './Home/Socials'

const Screen = ({size, animationType}) => {

  const props = {
    heading: {
      alignSelf: 'center',
      textAlign: 'center',
      level: 1,
      size,
      margin: {horizontal: 'none', vertical: 'small'}
    },
  }

  return (
    <div className='Screen'>
      <Box direction='row' gap='small'>
        <Heading {...props.heading}>MARTIN</Heading>
        <Heading {...props.heading}>KIM</Heading>
      </Box>
      <TypedComponent />
      <Socials />
    </div>
  )
}

export default Screen;