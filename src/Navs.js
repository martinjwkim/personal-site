import React from 'react';
import { Anchor, Box, CheckBox } from 'grommet';

const Navs = ({ darkMode, setDarkMode, size }) => {

  const props = {
    main: {
      align: "center",
      gap: 'large',
      direction: 'row',
      flex: true,
      justify: size==='xsmall' ? 'evenly' : 'end',
    },
    checkBox: {
      checked: darkMode,
      toggle: true,
      onChange: ()=>setDarkMode(!darkMode),
      size,
    },
  }

  const showNavs = () => (
    ["Home","About","Portfolio","Contact"].map(nav=>(
      <Anchor size={size} label={nav} key={nav} onClick={() =>{}} />
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