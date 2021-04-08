import React from 'react';
import { Box, Button, Heading } from 'grommet';

const ModalHead = (data) => {

  const props = {
    main: {
      direction:'row',
      align:'center',
      justify:'between',
      fill:'horizontal',
    },
    title: {
      margin: 'none',
      level: 2,
    },
    subtitle: {
      margin: 'none',
      level: 5,
    },
    buttonGroup: {
      direction:'row',
      gap:'small'
    },
    button: {
      alingSelf: 'center',
      size: 'small'
    }
  }

  return (
    <Box {...props.main}>
      <Box>
        <Heading {...props.title}>{data.title}</Heading>
        <Heading {...props.subtitle}>{data.subtitle}</Heading>
      </Box>
      <Box {...props.buttonGroup}>
        <Button label='VIEW SITE' {...props.button}/>
        <Button label='GITHUB' {...props.button}/>
      </Box>
    </Box>
  )
}

export default ModalHead;