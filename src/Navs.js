import React from 'react';
import { Button, Box, CheckBox } from 'grommet';

const Navs = ({ darkMode, setDarkMode, size }) => {

  const props = {
    main: {
      border: { color: 'brand', size: 'medium' },
      align: "center",
      gap: 'medium',
      direction: 'row',
      flex: true,
      style: { zIndex: '1' },
    },
    checkBox: {
      checked: darkMode,
      toggle: true,
      onChange: ()=>setDarkMode(!darkMode),
      size,
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
      <CheckBox {...props.checkBox}/>
    </Box>
  )
}

export default Navs;