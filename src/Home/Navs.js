import React from 'react';
import { Button, Box } from 'grommet';


const Navs = ({ size }) => {

  const props = {
    main: {
      align: "center",
      gap: 'medium',
      direction: 'row',
      style: { zIndex: '1' },
    },
    button: {
      size: size==='xsmall' ? 'small' : size,
      plain: true,
      focusIndicator: false,
    }
  }

  const showNavs = () => (
    ["Home","About","Portfolio","Contact"].map(nav=>(
      <Button {...props.button} label={nav} key={nav} onClick={() =>{}} />
    ))
  )

  return (
    <Box {...props.main}>
      {showNavs()}
    </Box>
  )
}

export default Navs;